<template>
    <div class="details">
		<div class="movie">
			<div class="back"><img src="../assets/image/back.png" /></div>
			<img src="../assets/image/lunbo.jpg" />
			<span>
				<img src="../assets/image/start.png" />
			</span>
		</div>
		<div class="detail">
			<div class="bol"><img src="../assets/image/bg-bg.png" /></div>
			<div class="det-con">
				<div class="common det-c">
					<div class="jz-pic">
						<img src="../assets/image/shenqinvxia.jpg" />
					</div>
					<div class="det-inf">
						<p class="det-titles">
							<span>湄公河行动</span>
							<span class="eng">Operation Mekong</span>
						</p>
						<ul class="stars">
							<li><img src="../assets/image/stars.png" /></li>
							<li><img src="../assets/image/stars.png" /></li>
							<li><img src="../assets/image/stars.png" /></li>
							<li><img src="../assets/image/stars.png" /></li>
							<li><img src="../assets/image/stars.png" /></li>
						</ul>
						<p class="det-tag">动作 警匪 犯罪</p>
					</div>
				</div>	
				<div class="common parti">
					<span>2011年10月15日，两艘中国商船在湄公河金三角水域遭遇袭击，13名中国船员全部遇难，泰国警方从船上搜出90万颗冰毒。消息传回之后，警察派出高级警官协助在湄公河金三角水域的卧底啊贤实施抓捕行动</span>
				</div>
				<div class="common stage-photo">
					<h3>剧照和视频</h3>
					<ul>
						<li><img src="../assets/image/story-1.jpg" /></li>
						<li><img src="../assets/image/story-2.jpg" /></li>
						<li><img src="../assets/image/story-1.jpg" /></li>
						<li><img src="../assets/image/story-2.jpg" /></li>
						<li><img src="../assets/image/story-1.jpg" /></li>
						<li><img src="../assets/image/story-2.jpg" /></li>
					</ul>
				</div>
			</div>
		</div>
		<router-link tag="a" to="/filmcinema" class="footer">立即订票</router-link>
	</div>
</template>

<style scoped>
.details{
	overflow:hidden;
}
.movie{
	position:relative;
	width:100%;
	height:auto;
	overflow:hidden;
}
.movie >img{
	width:100%;
	height:auto;
}
.movie span{
	display:inline-block;
	position:absolute;
	left:50%;
	top:50%;
	margin:-42px;
	width:84px;
	height:84px;
	overflow:hidden;
}
.movie span img{
	width:100%;
}
/****details CSS****/
.detail{
	width:100%;
	height:auto;
	overflow:hidden;
	margin:0 auto;
	z-index:88;
	position: relative;
    top: -80px;
}
.bol{
	width:100%;
	height:74px;
	overflow:hidden;
	margin-bottom: -1px;
}
.bol img{
	width:100%;
	height:auto;
}
.det-con{
	height:auto;
	width:100%;
	margin:0 auto;
	background-color:#ffffff;
	margin-top:-1px;
	display: inline-block;
	padding-bottom: 45px;
}

.common{
	float:left;
	width:90%;
	height:auto;
	border-bottom:1px solid #C7C7C7;
	margin:0 5%;
	padding-bottom: 60px;
}
.jz-pic{
	position: relative;
	float:left;
	width:232px;
	height:314px;
	overflow:hidden;
	margin-top:-50px;
	z-index:66;
	border-radius:10px;
}
.jz-pic img{
	width:100%;
}

.det-inf{
	float:right;
	width:348px;
	height:auto;
	overflow:hidden;
}
.det-inf .stars{
	overflow:hidden;
	padding:5px 0;
}
.det-inf .stars li{
	float:left;
}
.det-titles{
	font-size:42px;
	color:#141818;
}
.det-titles .eng{
	display:block;
	font-size:28px;
	line-height:56px;
	color:#838585;
}
.det-tag{
	font-size:24px;
	color:#fff;
	line-height:36px;
}
.parti{
	padding:30px 10px;
}
.parti span{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	text-overflow:ellipsis;
	color: #838585;
	line-height: 46px;
    font-size: 28px;
}
.stage-photo h3{
	padding: 20px 0;
	font-size:32px;
	color:#141818;
	font-weight:100;
}
.stage-photo li {
    width: 48%;
    float: left;
    margin: 0 1%;
    padding-bottom: 6px;
}
.stage-photo li img {
    width: 100%;
}
.back{
	position:absolute;
	left: 20px;
    top: 28px;
	width:60px;
	height:60px;
	overflow:hidden;
}
.back img{
	width:100%;
	height:auto;
}
/*******footer******/
.footer{
	position:fixed;
	width:100%;
	height:110px;
	bottom:0;
	left:0;
	background-color:#ffe63c;
	color:#0071fe;
	text-align:center;
	font-size:32px;
	line-height:110px;
	letter-spacing:2px;
	z-index:88;
}
</style>

<script type="text/javascript">
 export default{
	mounted(){
	$('.back').on('click',function(){
		window.history.go(-1);
			})
		}
 }
</script>
