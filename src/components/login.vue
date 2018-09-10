<template>
    <div class="logining">
        <header class="header">
        <a href="javascript:history.back(-1)" class="fa fa-angle-left"></a>
        <span class="names">登录</span>
    </header>
    <div class="login_contnet">
    	<div class="commons user">
        	<i class="fa fa-user"></i>
            <input type="number"  value="13716446688" name="tel" class="tel" placeholder="请输入您的手机号" />
        </div>
        <div class="commons pasd">
        	<i class="fa fa-unlock-alt"></i>
            <input type="password"  value="" name="pasd" class="pasd" placeholder="请输入6~16位密码" />
        </div>
        <div class="login">登录</div>
        <a href="javascript:void(0)" class="common_use register">还没有用户,请注册!</a>
        <a href="javascript:void(0)" class="common_use change">忘记密码?</a>
    </div>
    </div>
</template>
<style scoped>
header{
	overflow:hidden;
	width:100%;
	height:100px;
	background-color:#fff;
	border-bottom:1px solid #e2e2e2;
}
header a.fa{
	list-style:none;
	float:left;
	width:15%;
	font-size:40px;
	line-height:100px;
	text-align:left;
	text-indent: 36px;
	color:#4ad3fe;
}
header span{
	float:left;
	width:70%;
	text-align:center;
	line-height:100px;
	font-size:30px;
}

.login_contnet{
	width:90%;
	height:auto;
	overflow:hidden;
	margin:0 5%;
}
.commons{
	float:left;
	width:100%;
	height:96px;
	border-bottom:1px solid #e5e1e1;
}
.user .fa{
	line-height:96px;
	font-size:30px;
	color:#f18a27;
}
.commons input{
	display:inline-block;
	width:450px;
	line-height:92px;
	border:none;
	outline:none;
	font-size:24px;
	margin-top:2px;
	padding-left:16px;
	color:#331f20;
}
.commons input::-webkit-input-placeholder{
	color:#837575;
}
.pasd .fa{
	line-height:96px;
	font-size:30px;
	color:#5dd4e2;
}

.login{
	float:left;
	width:100%;
	height:auto;
	overflow:hidden;
	background-color:#db3d3c;
	line-height:88px;
	font-size:28px;
	text-align:center;
	color:#fff;
	margin-top:75px;
}

.common_use{
	font-size:24px;
	line-height:60px;
	color:#331f20;
}
.register{
	float:left;
}
.change{
	float:right;
}





/****layer*****/
.layui-m-layercont{
	font-size:32px;
	padding:34px !important;
}
</style>

<script type="text/javascript">
 export default{		
	mounted(){
	$(function(){
	function phone(){
		var reg = /^1[34578]\d{9}$/;
		var phoneVal = $('.tel').val();
		if(reg.test(phoneVal)){
			
		}else{
			mesLay('手机号码有误！')
			return false;
		}
	}
	
	function pasd(){
		var psdVal = $('.pasd').val();
		if(psdVal<6){
			mesLay('您的密码少于6位数！');
			return false;
		}else{
			
		}
	}
	
	$('.tel').blur(function(){
		phone();
	});
	
	$('.pasd').blur(function(){
		pasd();
	});
	
	function mesLay(content){
		layer.open({
			content: content
			,skin: 'msg'
			,time: 3
		});	
	}
	
	$('.login').on('click',function(){
		
	});
})
        }
 }
</script>