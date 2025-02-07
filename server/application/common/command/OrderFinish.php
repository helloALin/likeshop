<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------

// | author: likeshop.cn.team
// +----------------------------------------------------------------------

namespace app\common\command;

use app\common\logic\OrderLogLogic;
use app\common\model\Order;
use app\common\model\OrderLog;
use app\common\model\Pay;
use app\common\server\ConfigServer;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\facade\Log;

/**
 * 确认收货
 * Class OrderFinish
 * @package app\common\command
 */
class OrderFinish extends Command
{
    protected function configure()
    {
        $this->setName('order_finish')
            ->setDescription('自动确认收货(待收货订单)');
    }

    protected function execute(Input $input, Output $output)
    {
        $now = time();
        $config = ConfigServer::get('trading', 'order_finish', 0);
        if($config == 0){
            return true;
        }

        $finish_limit = $config * 24 * 60 * 60;

        $orders = Db::name('order')
            ->where(['order_status' => Order::STATUS_WAIT_RECEIVE, 'pay_status' => Pay::ISPAID, 'del' => 0])
            ->where(Db::raw("shipping_time+$finish_limit < $now"))
            ->select();
        if (empty($orders)){
            return true;
        }

        Db::startTrans();
        try{
            foreach ($orders as $order){
                Db::name('order')
                    ->where(['id' => $order['id']])
                    ->update([
                        'order_status' => Order::STATUS_FINISH,
                        'update_time' => $now,
                        'confirm_take_time' => $now,
                    ]);

                //订单日志
                OrderLogLogic::record(
                    OrderLog::TYPE_SYSTEM,
                    OrderLog::SYSTEM_CONFIRM_ORDER,
                    $order['id'],
                    0,
                    OrderLog::SYSTEM_CONFIRM_ORDER
                );
            }
            Db::commit();
        } catch (\Exception $e){
            Log::write('订单自动确认失败,失败原因:'.$e->getMessage());
            Db::rollback();
        }
    }
}