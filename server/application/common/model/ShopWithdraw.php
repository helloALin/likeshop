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
namespace app\common\model;
use think\Model;

class ShopWithdraw extends Model{

    const WAIT_AUDIT = 1;
    const WAIT_REMITTANCE = 2;
    const SUCCEED_REMITTANCE =3;
    const AUDIT_REFUSE = 4;


    public static function getStatus($from){
        $desc = [
            self::WAIT_AUDIT            => '待审核',
            self::WAIT_REMITTANCE       => '待转账',
            self::SUCCEED_REMITTANCE    => '已转账',
            self::AUDIT_REFUSE          => '审核拒绝',
        ];
        if($from === true){
            return $desc;
        }
        return $desc[$from] ??  '';
    }
    public function getCreateTimeAttr($value,$data){
        return date('Y-m-d H:i:s',$value);
    }

    public function getMoneyAttr($value,$data){
        return '￥'.$value;
    }

    public function getStatusDescAttr($value,$data){
        return self::getStatus($data['status']);
    }
    //todo 提现方式
    public function getWithdrawWayAttr($value,$data){
        $name = '银行卡';
        if($value == 2){
            $name = '支付宝';
        }
        return $name;
    }
    public function getRemittanceTimeAttr($value,$data){
        if($value){
            return date('Y-m-d H:i:s',$value);
        }
        return $value;
    }


}