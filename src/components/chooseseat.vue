<template>
    <div class="chooseseat">
		<header class="header">
			<a href="javascript:history.back(-1)" class="fa fa-angle-left"></a>
			<span class="names">变形金刚5：最后的骑士</span>
		</header>  
		<div class="seat_head">
			<h3>北京沃美影城常营店</h3>
			<span>
				<a>今天07-06</a>
				<a>19:00</a>
				<a>(国语 3D)</a>
			</span>
		</div>
		<div class="seat_show">
			<ul>
				<li>
					<i></i>
					<span>可选</span>
				</li>
				<li>
					<i></i>
					<span>已售</span>
				</li>
				<li>
					<i></i>
					<span>已选</span>
				</li>
				<li>
					<i></i>
					<span>最佳区域</span>
				</li>
			</ul>
		</div>
     	<div class="seat_choose">
			<div class="number" id="num"></div>
			<div class="seats" id="seats"></div>    
		</div>
		<router-link
		to="/login"
		>
		<div class="buttons">确认选择</div>
		</router-link>
		<!-- <a href="login.html"><div class="buttons">确认选择</div></a> -->
    </div>
</template>

<style>
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
.seat_head{
	overflow:hidden;
	margin:0 auto;
	width:100%;
	border-bottom:1px solid #ededed;
	padding:10px 29px;
	background-color:#fff;
}
.seat_head h3{
	font-weight:100;
	font-size:36px;
	padding:5px 0;
}
.seat_head span{
	display:inline-block;
	padding: 10px 0;
}
.seat_head span a{
	float:left;
	color:#bcbcbc;
}
.seat_show{
	overflow:hidden;
	margin:0 auto;
	width:100%;
	border-bottom:1px solid #f2f2f1;
	background-color:#fff;
}
.seat_show ul{
	overflow:hidden;
	padding:15px 25px;
}
.seat_show ul li{
	float:left;
	width:25%;
	text-align:center;
}
.seat_show ul li span{
	float:left;
    padding-left: 20px;
    line-height: 45px;
}
.seat_show ul li i{
	float:left;
	width:45px;
	height:45px;
	overflow:hidden;
	background-image:url(../assets/image/seats.png);
	background-size:100% auto;
}
.seat_show ul li + li i{
	background-position:0 -90px;
}
.seat_show ul li + li + li i{
	background-position:0 -45px;
}
.seat_show ul li + li + li + li i{
	background-image:none;
	border:1px dashed #ee7a7d;
}
.screen{
	position: absolute;
    top: -83px;
    left: 350px;
    width: 500px;
    height: 50px;
    border: 1px solid #c1c1c1;
    border-top: none;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
}
.seat_choose{
	position:relative;
	overflow:hidden;
}
.number{
	/*position:absolute;
	left:0;
	top:0;
	width:40px;*/
	float:left;
	width:4%;
	background-color:#0CF;
	border-radius:4px;
	margin: 80px auto 30px auto;
}
.number ul{
	overflow:hidden;
}
.number ul li{
	float:left;
	width:100%;
	text-align:center;
	line-height: 60px;
    padding: 8px 0;
	color:#fff;
}
.crossnum{
	float:left;
	width:100%;
	background-color:#0CF;
	border-radius:4px;
	margin:3px auto;
}
.crossnum ul{
	overflow:hidden;
}
.crossnum ul li{
	float:left;
	width:60px;
	padding: 3px 5px;
	text-align:center;
	color:#fff;
}
.seats{
	padding:80px 0;
    float: left;
    width: 96%;
    height: 900px;
    position: relative;
	overflow:hidden;
}
.seats >ul{
	width:1200px;
	position: absolute;
	top:80px;
	left:0;
	border: 2px dashed #32abc5;
}
.seats >ul >li{
	float: left;
    width: 60px;
    height: 60px;
    overflow: hidden;
    padding: 8px 5px;
}
.seats ul li label{
	display:inline-block;
	width:60px;
	height:60px;
	background-image:url(../assets/image/seats.png);
	background-size:100% auto;
}
.seats ul li input:checked ~ label{
	background-position:0 -60px;
}
.seats ul li input{
	display: none;
}
.seats ul li.selected input ~ label{
	background-position:0 -120px;
}
.the_best{
	position:absolute;
	top: 377px;
    left: 418px;
    width: 420px;
    height: 380px;
	border:2px dashed #ee7a7d;
	border-radius:4px;
	z-index: -1;
}
.buttons{
	width:94%;
	margin-left:3%;
	overflow:hidden;
	height:70px;
	background-color:#0CF;
	border-radius:4px;
	text-align:center;
	line-height:70px;
	color: #fff;
    font-size: 26px;
    letter-spacing: 2px;
	margin-top: 40px;
}
/****layer*****/
.layui-m-layercont{
	font-size:32px;
	padding:34px !important;
}
</style>

<script>
 export default{		
mounted(){
$(function(){
	var html='';
		html+='<ul class="touchs" id="touchs"><div class="screen">大厅屏幕</div>';
		for(var i=1; i<=204; i++){
			var selected = (i>91&&i<98 ? 'selected' : '');
			html+='<li class="'+selected+'">';
			html+='<input type="checkbox" name="seat-'+i+'" id="seat-'+i+'" />';
			html+='<label for="seat-'+i+'"></label>';
			html+='</li>';
		}
		html+='<div class="the_best"></div><div class="crossnum" id="crossnum"></div></ul>';
		$('#seats').html(html);
		
	
	$('.selected').children('input').attr({'disabled':'disabled','checked':'checked'});
	
		
	$('.seats li input').on('click',function(){
		var checklen = $('.seats li').not('.selected').children('input:checked').length;
		console.log(checklen);
		if(checklen>2){
			popu('最多只能选择两个座位');
			return false;
		}
	});
	
	
	//公用弹出层
	function popu(content){
		layer.open({
			content: content
			,skin: 'msg'
			,time: 3
		});	
	}
	
	
	var num='';
		num+='<ul>';
		for(var i=1; i<=12; i++){
			num+='<li>'+i+'</li>';
		}
		html+='</ul>';
		$('#num').html(num);
		
	var crossnum='';
		crossnum+='<ul>';
		for(var j=1; j<=17; j++){
			crossnum+='<li>'+j+'</li>';
		}
		html+='</ul>';
		$('#crossnum').html(crossnum);
	
	
	
})
// 拖拽js

$(function(){
    var flag = false;
    var cur = {
        x:0,
        y:0
    }
    var nx,ny,dx,dy,x,y ;
    function down(){
        flag = true;
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        cur.x = touch.clientX;
        cur.y = touch.clientY;
        dx = div2.offsetLeft;
        dy = div2.offsetTop;
    }
    function move(){
        if(flag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            nx = touch.clientX - cur.x;
            ny = touch.clientY - cur.y;
            x = dx+nx;
            y = dy+ny;
            div2.style.left = x+"px";
            //div2.style.top = y +"px";

			
            //阻止页面的滑动默认事件
            document.addEventListener("touchmove",function(){
                //event.preventDefault();
            },false);
        }
    }
    //鼠标释放时候的函数
    function end(){
        flag = false;
    }
    var div2 = document.getElementById("touchs");
    div2.addEventListener("mousedown",function(){
        down();
    },false);
    div2.addEventListener("touchstart",function(){
        down();
    },false)
    div2.addEventListener("mousemove",function(){
        move();
    },false);
    div2.addEventListener("touchmove",function(){
        move();
    },false)
    document.body.addEventListener("mouseup",function(){
        end();
    },false);
    div2.addEventListener("touchend",function(){
        end();
    },false);
	
});

        }
 }
</script>

