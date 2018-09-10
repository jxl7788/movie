<template>
    <div class="tickets">
        <header class="header">
            <a href="javascript:history.back(-1)" class="fa fa-angle-left"></a>
            <span class="names">北京沃美影城常营店</span>
            <span class="collect">
                <i class="fa fa-star-o"></i>
            </span>
        </header>
    
        <div class="film-length">
            <span>片长：150分钟</span>
            <span class="imax">原版3D</span>
        </div>
        
        <div class="tips">温馨提示：电影开场前30分钟关闭在线售票</div>
    
        <div class="tab date">
            <!-- -tab日期标签滑动- -->
            <div id="J_MenuX">
                <div class="xs-container">
                    <ul class="xs-content nav nav-pills nav-justified" id="menus_xx" _xx="0">
                        <li>7-05(今天)</li>
                        <li>7-06</li>
                        <li>7-07</li>
                        <li>7-08</li>
                        <li>7-09</li>
                        <li>7-10</li>
                        <li>7-11</li>
                    </ul>
                </div>
            </div>
            <!-- -tab标签滑动END- -->
        </div>
        <div class="tickets-list">
            <ul>
                <router-link
                tag="li"
               to="/chooseseat"
                >
                 <div class="ticket-info">
                        <span class="start">14:20</span>
                        <span class="styles">原版3D</span>
                        <span>16:50(结束)</span>
                        <span>4号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="javascipt:;">选座购票</a>
                    </div>
                </router-link>
                <!-- <li>
                    <div class="ticket-info">
                        <span class="start">14:20</span>
                        <span class="styles">原版3D</span>
                        <span>16:50(结束)</span>
                        <span>4号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                 -->
                <li>
                    <div class="ticket-info">
                        <span class="start">15:20</span>
                        <span class="styles">原版3D</span>
                        <span>17:50(结束)</span>
                        <span>5号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                
                <li>
                    <div class="ticket-info">
                        <span class="start">16:20</span>
                        <span class="styles">原版3D</span>
                        <span>18:50(结束)</span>
                        <span>6号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                
                <li>
                    <div class="ticket-info">
                        <span class="start">17:20</span>
                        <span class="styles">原版3D</span>
                        <span>19:50(结束)</span>
                        <span>7号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                
                <li>
                    <div class="ticket-info">
                        <span class="start">18:20</span>
                        <span class="styles">原版3D</span>
                        <span>20:50(结束)</span>
                        <span>8号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                
                <li>
                    <div class="ticket-info">
                        <span class="start">19:20</span>
                        <span class="styles">原版3D</span>
                        <span>21:50(结束)</span>
                        <span>9号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                
                <li>
                    <div class="ticket-info">
                        <span class="start">20:20</span>
                        <span class="styles">原版3D</span>
                        <span>22:50(结束)</span>
                        <span>1号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                <li>
                    <div class="ticket-info">
                        <span class="start">21:20</span>
                        <span class="styles">原版3D</span>
                        <span>23:50(结束)</span>
                        <span>2号厅</span>
                    </div>
                    <div class="buy-btn">
                        <span>40<b>元</b></span>
                        <a href="choose_seat.html">选座购票</a>
                    </div>
                </li>
                
            </ul>
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
.collect{
	float:right;
	width:15%;
	font-size:36px;
	line-height:100px;
	color:#108ee9;
}
.film-length{
	float:left;
	overflow:hidden;
	width:100%;
	height:50px;
	font-size:24px;
	color:#ccc;
	line-height:50px;
	border-bottom:1px solid #e2e2e2;
	background-color:#fff;
}
.film-length >span{
	padding-left:36px;
}
.film-length span.imax{
	padding: 4px 10px;
	border-radius:3px;
	background-color:#4ad3fe;
	color:#fff;
	font-size:20px;
}
.tips{
	float: left;
	width:100%;
	margin-top:20px;
	line-height:70px;
	background-color:#fff0ad;
	border-top: 1px solid #ffdb38;
	border-bottom: 1px solid #ffdb38;
	color:#d87f12;
	text-indent: 36px;
}
.tab{
	float:left;
	position:relative;
	width:100%;
	height:87px;
	background-color:#fff;
}
#J_MenuX {
	left: 0;
	right: 0;
	top: 0;
	box-sizing: border-box;
	position: absolute;
	height: 86px;
	overflow: hidden;
}

#J_MenuX ul {
	white-space: nowrap;
	position: absolute;
	height: 100%;
}

#J_MenuX ul li {
	display: inline-block;
	width:148px;
	font-size:28px;
	text-align: center;
	line-height: 86px;
	height: 86px;
	color: #837575;
}

#J_MenuX ul li.cur {
	color: #4ad3fe;
    border-bottom: 3px solid #4ad3fe;
    box-sizing: border-box;
}

.xs-container {
	width: 100%;
	height: 100%;
}

/*******tickets-list css*****/
.tickets-list{
	float: left;
    width: 100%;
	overflow:hidden;
}
.tickets-list ul{
	overflow:hidden;
	margin:0 auto;
	border-top:1px solid #e2e2e2;
	border-bottom:1px solid #e2e2e2;
	background-color:#fff;
}
.tickets-list ul li{
	float:left;
	width:100%;
	overflow:hidden;
	padding: 15px 20px;
	box-sizing:border-box;
	border-bottom: 1px solid #e2e2e2;
}
.tickets-list ul li .ticket-info{
	float:left;
	width:306px;
	height:auto;
	overflow:hidden;
}
.ticket-info span{
	float:left;
	width:50%;
	padding: 15px 10px 7.5px 10px;
	color:#8a869e;
	line-height: 30px;
	box-sizing:border-box;
}
.start{
	color: #000 !important;
	font-size:30px;
}
.styles{
	color: #000 !important;
}
.buy-btn{
	float:right;
	overflow:hidden;
	margin-top: 30px;
}
.buy-btn span{
	float:left;
	font-size:40px;
	color:#ff4d64;
	margin-right:30px;
}
.buy-btn span b{
	font-weight:100;
	font-size:24px;
}
.buy-btn a{
	float:right;
	border:1px solid #4ad3fe;
	color:#4ad3fe;
	padding:10px 20px;
	border-radius: 4px;	
}
</style>
