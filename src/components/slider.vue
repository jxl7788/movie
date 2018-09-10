<template>
 	<div id="carousel" class="carousel">
	  	<div class="hd">
			<ul></ul>
      	</div>
      	<div class="bd">
            <ul>
				<router-link
				tag="li"
				to="/detail"
				>
				<a href="javascript:;"><img src="../assets/image/lunbo.jpg"  /></a>
				</router-link>
					<router-link
				tag="li"
				to="/detail"
				>
				<a href="javascript:;"><img src="../assets/image/lunbo1.jpg"  /></a>
				</router-link>
                <!-- <li><a href="details.html"><img src="../assets/image/lunbo.jpg"  /></a></li>
                <li><a href="details.html"><img src="../assets/image/lunbo1.jpg"/></a></li> -->
            </ul>
    	</div>
        <div class="search sear-show">
        	<img src="../assets/image/search.png" />
        </div>
        <div class="search-new">
        	<input type="text" value="" placeholder="请输入您要搜索的内容" />
            <div class="sear"><img src="../assets/image/search.png" /></div>
            <div class="close"><i class="fa fa-forward"></i></div>
        </div>
    </div>   
</template>

<style>
.carousel{
	width:750px;
	height:338px;
	margin:0 auto;
	position:relative;
	overflow:hidden;
}
.carousel .hd{
	width:100%;
	height:10px; 
	position:absolute;
	z-index:1;
	bottom:15px;
	text-align:center;
}
.carousel .hd ul{
	display:inline-block;
	height:10px;
	/*padding:3px 5px;
	background-color:rgba(255,255,255,0.7); */
	-webkit-border-radius:5px;
	-moz-border-radius:5px;
	border-radius:5px;
	font-size:0;
	vertical-align:top;
}
.carousel .hd ul li{
	display:inline-block;
	width:40px;
	height:2px;
	/*-webkit-border-radius:5px;
	-moz-border-radius:5px;
	border-radius:5px;*/
	background-color:#ffffff;
	margin:0 5px;
	vertical-align:top;
	overflow:hidden;
	opacity:0.5;
}
.carousel .hd ul .on{
	opacity:1;
}

.carousel .bd{
	position:relative;
	z-index:0;
}
.carousel .bd li img{
	width:100%;
	height:338px;
	background:url(../assets/image/loading.gif) center center no-repeat;
}
.carousel .bd li a{
	-webkit-tap-highlight-color:rgba(0, 0, 0, 0); /* 取消链接高亮 */
}
</style>
 
<script type="text/javascript">
	import TouchSlide from "../assets/js/TouchSlide.1.1.js";
    export default{
        mounted(){
            TouchSlide({ 
            slideCell:"#carousel",
            titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell:".bd ul", 
            effect:"left", 
            autoPlay:true,//自动播放
            autoPage:true, //自动分页
            // switchLoad:"_src" //切换加载，真实图片路径为"_src" 
	        });
        }
    }	
</script>


