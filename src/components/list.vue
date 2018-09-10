<template>
    <div class="movie">
      <ul>
		<router-link
		tag="li"
		v-for="item of list"
		:key="item.id"
		to="/detail"
		>
			<a href="javascript:;">
                <span class="tag">{{item.score}}</span>
                <div class="posters">
                    <img :src="item.img">
                </div>
                <div class="post-content">
                    <div class="left-con">
                        <p class="tit">
                            <small>{{item.title}}</small>
                            <span>
                                <i>{{item.dim}}</i>
                                 <i>{{item.imax}}</i>
                            </span>
                        </p>
                         <p class="eng">{{item.eng}}</p>
                        <p class="act">{{item.act}}</p>
                        <p class="tim">上映时间<span>{{item.tim}}</span></p>
                    </div>
                    <div class="right-btn">
                        <div class="ticket-btn">{{item.btn}}</div>
                     </div>
                </div>
            </a>
		</router-link>
<!-- 
			  <router-link
			  tag="li"
			  to="/detail"
			  >
				<a href="javascript:;">
                    <span class="tag">8.8</span>
                    <div class="posters">
                        <img src="../assets/image/quanshijie.jpg" />
                    </div>
                    <div class="post-content">
                        <div class="left-con">
                            <p class="tit">
                            	<small>从你的全世界路过</small>
                            </p>
                            <p class="eng">Operation Mekong</p>
                            <p class="act">喜剧 爱情 剧情</p>
                            <p class="tim">上映时间<span>2016-09-30</span></p>
                        </div>
                        <div class="right-btn">
                            <div class="ticket-btn">购票</div>
                        </div>
                    </div>
                 </a>
			 </router-link>
			  <router-link
			  tag="li"
			  to="/detail"
			  >
				<a href="javascript:;">
                    <span class="tag">9.0</span>
                    <div class="posters">
                        <img src="../assets/image/xiyou2.jpg" />
                    </div>
                    <div class="post-content">
                        <div class="left-con">
                            <p class="tit">
                            	<small>西游2伏妖篇</small>
                                <span>
                                	<i>3D</i>
                                </span>
                            </p>
                          <p class="eng">Operation Mekong</p>
                          <p class="act">魔幻 动作 喜剧</p>
                          <p class="tim">上映时间<span>2017-01-28</span></p>
                        </div>
                        <div class="right-btn">
                            <div class="ticket-btn presell">预售</div>
                        </div>
                  </div>
               </a>
			 </router-link>
			  <router-link
			  tag="li"
			  to="/detail"
			  >
				<a href="javascript:;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         l">
                    <span class="tag">9.3</span>
                    <div class="posters">
                        <img src="../assets/image/jixiantegong.jpg" />
                    </div>
                    <div class="post-content">
                        <div class="left-con">
                            <p class="tit">
                            	<small>极限特工3</small>
                                <span>
                                	<i>3D</i>
                                    <i>IMAX</i>
                                </span>
                            </p>
                            <p class="eng">Operation Mekong</p>
                          <p class="act">动作 冒险 惊悚</p>
                            <p class="tim">上映时间<span>2017-01-20</span></p>
                        </div>
                        <div class="right-btn">
                            <div class="ticket-btn presell">预售</div>
                        </div>
                    </div>
                 </a>
			 </router-link> -->

            <!-- <li>
            	<a href="details.html">
                    <span class="tag">9.1</span>
                    <div class="posters">
                        <img src="../assets/image/meigonghe.jpg" />
                    </div>
                    <div class="post-content">
                        <div class="left-con">
                            <p class="tit">
                            	<small>湄公河行动</small>
                                <span>
                                	<i>3D</i>
                                    <i>IMAX</i>
                                </span>
                            </p>
                            <p class="eng">Operation Mekong</p>
                            <p class="act">动作 警匪 犯罪</p>
                            <p class="tim">上映时间<span>2016-09-30</span></p>
                        </div>
                        <div class="right-btn">
                            <div class="ticket-btn">购票</div>
                        </div>
                    </div>
                 </a>
            </li>
            <li>
            	<a href="details.html">
                    <span class="tag">8.8</span>
                    <div class="posters">
                        <img src="../assets/image/quanshijie.jpg" />
                    </div>
                    <div class="post-content">
                        <div class="left-con">
                            <p class="tit">
                            	<small>从你的全世界路过</small>
                            </p>
                            <p class="eng">Operation Mekong</p>
                            <p class="act">喜剧 爱情 剧情</p>
                            <p class="tim">上映时间<span>2016-09-30</span></p>
                        </div>
                        <div class="right-btn">
                            <div class="ticket-btn">购票</div>
                        </div>
                    </div>
                 </a>
            </li>
            <li>
            	<a href="details.html">
                    <span class="tag">9.0</span>
                    <div class="posters">
                        <img src="../assets/image/xiyou2.jpg" />
                    </div>
                    <div class="post-content">
                        <div class="left-con">
                            <p class="tit">
                            	<small>西游2伏妖篇</small>
                                <span>
                                	<i>3D</i>
                                </span>
                            </p>
                          <p class="eng">Operation Mekong</p>
                          <p class="act">魔幻 动作 喜剧</p>
                          <p class="tim">上映时间<span>2017-01-28</span></p>
                        </div>
                        <div class="right-btn">
                            <div class="ticket-btn presell">预售</div>
                        </div>
                  </div>
               </a>
          	</li>
        	<li>
            	<a href="details.html">
                    <span class="tag">9.3</span>
                    <div class="posters">
                        <img src="../assets/image/jixiantegong.jpg" />
                    </div>
                    <div class="post-content">
                        <div class="left-con">
                            <p class="tit">
                            	<small>极限特工3</small>
                                <span>
                                	<i>3D</i>
                                    <i>IMAX</i>
                                </span>
                            </p>
                            <p class="eng">Operation Mekong</p>
                          <p class="act">动作 冒险 惊悚</p>
                            <p class="tim">上映时间<span>2017-01-20</span></p>
                        </div>
                        <div class="right-btn">
                            <div class="ticket-btn presell">预售</div>
                        </div>
                    </div>
                 </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
	export default {
		props:["list"]
	}
</script>


<style>
.movie{
	width:100%;
	height:auto;
	overflow:hidden;
}
.movie ul{
	display:inline-block;
	width:94%;
	overflow:hidden;
	margin:0 3%;
	padding-bottom:50px;
}
.movie ul li{
	position:relative;
	float:left;
	width:100%;
	height:228px;
	background-color:#f6faff;
	border-radius:5px;
	margin-top:46px;
	box-shadow: 0px 3px 10px rgba(0,0,0,0.3);
}
.movie ul li span.tag{
	position:absolute;
	top:0;
	right:34px;
	width:60px;
	height:60px;
	background-image:url(../assets/image/tag-bg.png);
	background-repeat:no-repeat;
	background-size:100% auto;
	font-size:26px;
	text-align:center;
	line-height:45px;
	color:#fff;
}
.movie ul li .posters{
	float:left;
	position:relative;
	width:158px;
	height:212px;
	overflow:hidden;
	margin:-26px auto 0 32px;
	box-shadow: 0px 0px 12px rgba(0,0,0,0.3);
}
.movie ul li .posters img{
	width:100%;
}
.post-content{
	float:right;
	width:432px;
	height:auto;
}

.left-con{
	float:left;
	width:286px;
	margin-top:38px;
}
.left-con p{
	float:left;
	width:100%;
}
.left-con p.tit{
	font-size:32px;
}
.left-con p.eng,.left-con p.act{
	font-size:24px;
	color:#757575;
	padding:5px 0;
}
.left-con p.tim{
	font-size:24px;
}
.left-con p.tim span{
	margin-left:20px;
	color:#757575;
}
.left-con p.tit span{
	display:inline-block;
	border: solid #4ad3fe;
	border-radius:4px;
	font-size:24px;
	overflow:hidden;
	margin-left: 12px;
}
.left-con p.tit span i{
	/* padding:3px 8px; */
	font-style: normal;
}
.left-con p.tit small{
	float:left;
}
.left-con p.tit span i:first-child{
	background-color:#4ad3fe;
	color:#fff;
}
.left-con p.tit span i:first-child ~ i{
	color:#4ad3fe;
}
.right-btn{
	float:right;
	margin-right: 34px;
    margin-top: 128px;
}
.right-btn .ticket-btn{
	float:left;
	width:110px;
	height:54px;
	border:1px solid #4ad3fe;
	border-radius:5px;
	overflow:hidden;
	color:#4ad3fe;
	text-align:center;
	line-height:54px;
	font-size:26px;
}
.presell{
	border:1px solid #ffd133 !important;
	color:#ffd133 !important;
}

.search{
	position:absolute;
	right:20px;
	top:-100px;
	width:80px;
	height:80px;
	background-color:rgba(0,0,0,.5);
	border-radius:50%;
	transition:top 1.5s ease-in-out .5s;
}
.sear-show{
	top:20px;
}
.search img{
	width:100%;
	height:auto;
}

.search-new{
	position:absolute;
	width:500px;
	height:80px;
	left:200%;
	margin-left:-250px;
	transition:left 1.5s ease-in-out;
	top:20px;
	background-color:rgba(0,0,0,.5);
}

.search-show{
	left:50%;
}
.search-new input{
	float:left;
	width:400px;
	height:60px;
	margin-top:10px;
	margin-left:10px;
	outline:none;
	border:none;
	font-size:26px;
	background-color:transparent;
	color:#fff;
}
.sear{
	float:right;
	width:80px;
	height:80px;
	overflow:hidden;
}
.sear img{
	width:100%;
	height:auto;
}
.close{
	position:absolute;
	right:-30px;;
	top:0;
	width:30px;
	height:80px;
	/*background-color:rgba(0,0,0,.5);
	border-radius:50%;*/
	color:#fff;
	line-height:80px;
	text-align:center;
}
.close img{
	width:100%;
	height:auto;
}

</style>

