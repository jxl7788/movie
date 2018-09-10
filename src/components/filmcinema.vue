<template>
    <div class="filmcinema">
        <header class="header">
        <a href="javascript:history.back(-1)" class="fa fa-angle-left"></a>
        <span class="names">变成金刚5：最后的骑士</span>
        <!--<span class="collect">
        	<i class="fa fa-search"></i>
        </span>-->
        </header>
    
        <div class="film_content">
            <div class="tab">
                <ul>
                    <li class="active">附近<i class="fa fa-caret-down"></i></li>
                    <li>区域<i class="fa fa-caret-down"></i></li>
                    <li>服务<i class="fa fa-caret-down"></i></li>
                    <li>其他<i class="fa fa-caret-down"></i></li>
                </ul>
            </div>
            <div class="address">
                <ul>
                    <router-link tag="li" to="/tickets">
                    <a href="javascript:;">
                            <div class="film_addr">
                                <span>北京沃美影城常营店</span>
                                <p>40<span>元起</span></p>
                                <span class="resort">常去影院</span>
                            </div>
                            <div class="det_addr">
                                <span>朝阳区朝阳北路17号北京华联常营购物中心西4F6686</span>
                                <p>13.77km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>  
                    </router-link>
                    <!-- <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>北京沃美影城常营店</span>
                                <p>40<span>元起</span></p>
                                <span class="resort">常去影院</span>
                            </div>
                            <div class="det_addr">
                                <span>朝阳区朝阳北路17号北京华联常营购物中心西4F6686</span>
                                <p>13.77km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>
                    -->
                    <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>北京耀莱成龙国际影城(临河里店)</span>
                                <p>40<span>元起</span></p>
                            </div>
                            <div class="det_addr">
                                <span>通州区梨园南街北京华联常营购物中心西4F6686</span>
                                <p>16.77km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>金逸影城朝阳大悦城店</span>
                                <p>40<span>元起</span></p>
                            </div>
                            <div class="det_addr">
                                <span>北京朝阳区朝阳北路101号朝北大悦城8层</span>
                                <p>22.77km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>北京万达影城通州万达广场店</span>
                                <p>40<span>元起</span></p>
                            </div>
                            <div class="det_addr">
                                <span>通州区新华西街58号万达广场一号楼5层6686</span>
                                <p>32.12km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>中影国际影城北京丰台千禧街店</span>
                                <p>40<span>元起</span></p>
                            </div>
                            <div class="det_addr">
                                <span>北京市丰台区靛厂路千禧商业街4号楼F6686</span>
                                <p>45.66km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>金逸影城朝阳大悦城店</span>
                                <p>40<span>元起</span></p>
                            </div>
                            <div class="det_addr">
                                <span>北京朝阳区朝阳北路101号朝北大悦城8层</span>
                                <p>22.77km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>北京万达影城通州万达广场店</span>
                                <p>40<span>元起</span></p>
                            </div>
                            <div class="det_addr">
                                <span>通州区新华西街58号万达广场一号楼5层6686</span>
                                <p>32.12km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>  
                    <li>
                        <a href="tickets.html">
                            <div class="film_addr">
                                <span>中影国际影城北京丰台千禧街店</span>
                                <p>40<span>元起</span></p>
                            </div>
                            <div class="det_addr">
                                <span>北京市丰台区靛厂路千禧商业街4号楼F6686</span>
                                <p>45.66km</p>
                            </div>
                            <div class="session">近期场次：14:20|15:20|16:20|17:20|18:20|19:20|20:20|21:20|22:20</div>
                        </a>
                    </li>  
                </ul>
            </div>
        </div>
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
.collect{
	float:right;
	width:15%;
	font-size:36px;
	line-height:100px;
	color:#108ee9;
}
/****film_content css*****/
.film_content{
	overflow:hidden;
	margin:0 auto;
}
.tab ul{
	overflow:hidden;
	border-bottom:1px solid #e2e2e2;
	padding:15px 0;
}
.tab ul li{
	float:left;
	width:25%;
	text-align:center;
	padding:5px 0;
	border-left: 1px solid #e2e2e2;
	box-sizing:border-box;
	color:#50505a;
}
.active{
	color:#108ee9 !important;
}
.film_content ul li .fa{
	padding:0 3px;
}

.address{
	overflow:hidden;
	margin:0 auto;
}
.address ul{
	overflow:hidden;
	padding:0 20px;
}
.address ul li{
	float:left;
	width:100%;
	overflow:hidden;
	padding:15px 0;
	border-bottom:1px solid #e2e2e2;
}
.film_addr,.det_addr{
	float:left;
	width:100%;
	text-align: left;
	padding:5px 0;
}
.film_addr >span{
	float:left;
	max-width:60%;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	font-size:30px;
}
span.resort{
	padding:8px 12px;
	background-color:#6dc772;
	color:#fff;
	font-size:22px;
	border-radius:4px;
	margin-left:12px;
}
.film_addr >p{
	float:left;
	padding-left:10px;
	color:#ff4d64;
	padding-top:9px;
}
.film_addr >p >span{
	color:#8a869e;
}
.det_addr >span{
	float:left;
	font-size:26px;
	color:#8a869e;
	max-width:80%;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.det_addr >p{
	color: #4ad3fe;
	float:left;
	padding-left:20px;
	padding-top:2px;
}
.session{
	float:left;
	max-width:95%;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	font-size:24px;
	color:#8a869e;
	padding:5px 0;
}
</style>

