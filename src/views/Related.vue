<template>
  <div>
    <div class="largeContainer">
      <!-- 头部 -->
      <div class="head">
        <img class="left" src="@/images/fl.png" alt="" />
        <van-search
          class="middle"
          autofocus="true"
          shape="round"
          v-model="value"
          placeholder="请输入搜索关键词"
        />
        <img class="right" src="@/images/dl.png" alt="" />
      </div>
      <!-- 轮播图 -->
      <div class="carousel">
        <van-swipe id="lbtBox" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" id="lbt" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 11.11主会场 -->
      <div class="mainVene">
        <img src="@/images/phone.gif" alt="" />
        <img src="@/images/dq.gif" alt="" />
        <img src="@/images/bx.gif" alt="" />
      </div>
      <!-- 活动分类 -->
      <div class="listBox">
        <ul>
          <li>
            <img src="../images/1.png" alt="" />
            <div>苏宁秒杀</div>
          </li>
          <li>
            <img src="../images/2.png" alt="" />
            <div>苏宁超市</div>
          </li>
          <li>
            <img src="../images/3.png" alt="" />
            <div>苏宁拼购</div>
          </li>
          <li>
            <img src="../images/4.png" alt="" />
            <div>手机数码</div>
          </li>
          <li>
            <img src="../images/5.png" alt="" />
            <div>苏宁家电</div>
          </li>
          <li>
            <img src="../images/6.png" alt="" />
            <div>免费水果</div>
          </li>
          <li>
            <img src="../images/7.png" alt="" />
            <div>super会员</div>
          </li>
          <li>
            <img src="../images/8.png" alt="" />
            <div>签到有礼</div>
          </li>
          <li>
            <img src="../images/9.png" alt="" />
            <div>领券中心</div>
          </li>
          <li>
            <img src="../images/10.png" alt="" />
            <div>更多频道</div>
          </li>
        </ul>
      </div>
      <!-- 省钱卡 -->
      <div class="cutCorners flex_c_c">
        <img src="../images/xr.jpg" alt="" />
        <img src="../images/ls.png" alt="" />
        <img src="../images/jh.png" alt="" />
      </div>
      <!-- 秒杀 -->
      <div class="SaleBox flex_c_c">
        <div class="sale">
          <div class="limit">
            <span class=""><b>限时秒杀</b></span>
            <span class="time">04</span>: <span class="time">28</span>:
            <span class="time">47</span>
          </div>
          <div class="moods">人气好货限时抢</div>
          <div class="picContainer">
            <div>
              <img src="../images/kettle.jpg" alt="" />
              <div>¥145.9</div>
            </div>
            <div>
              <img src="../images/vacuumcup.jpg" alt="" />
              <div>¥899</div>
            </div>
          </div>
        </div>
        <div class="bigpolyHui">
          <h1>大聚惠</h1>
          <div class="poly">聚优品•惠生活</div>
          <div class="earphoneBox">
            <div>
              <img src="../images/headset.webp" alt="" />
              <div>Apple</div>
            </div>
            <div>
              <img src="../images/ouidah.webp" alt="" />
              <div>维达(Vinda)</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="newProduct">
        <div class="product">
          <h1>新品首发</h1>
          <div class="big">大牌新机0元试</div>
          <div class="phoneBox">
            <img src="../images/K40.webp" alt="" />
            <img src="../images/iphone12.webp" alt="" />
          </div>
        </div>
        <div class="groupBuying">
          <h1>苏宁拼购</h1>
          <div class="bigs">2人拼更实惠 全场包邮</div>
          <div class="bigBox">
            <div class="cupBox">
              <img src="../images/girlCup.webp" alt="" />
              <div>2人拼19.9</div>
            </div>
            <div class="riceBox">
              <img src="../images/rice.webp" alt="" />
              <div>2人拼139</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 为你推荐 -->
      <div class="recommended flex_c_c">
        <div class="recommend">
          <h1>为你推荐</h1>
          <div>精选频道</div>
        </div>
        <div class="iso">
          <img src="../images/maple.webp" alt="" />
          <div>苏宁国际</div>
        </div>
        <div class="outlets">
          <img src="../images/belt.webp" alt="" />
          <div>苏宁Outlets</div>
        </div>
        <div class="runOn">
          <img src="../images/moutai.png" alt="" />
          <div>会员抢购</div>
        </div>
        <div class="super">
          <img src="../images/super.png" alt="" />
          <div>Super会员</div>
        </div>
      </div>
      <!-- 推荐榜单 -->
      <div class="monthlyFocus">
        <img src="../images/monthlyFocus.png" alt="" />
      </div>

      <!-- 推荐榜单列表 -->
      <div class="buyOff">
        <div class="biscuits">
          <img src="../images/biscuits.webp" alt="" />
          <p>
            <span>趋势榜</span>
          </p>
          <div>
            <p>休闲饼干零食榜</p>
            <p>本周趋势上升60%</p>
          </div>
        </div>
        <div class="pansonic">
          <img src="../images/pansonic.webp" alt="" />
          <p>
            <span>人气榜</span>
          </p>
          <div>
            <p>速热微波炉榜</p>
            <p>卖爆7911件</p>
          </div>
        </div>
        <div class="faceMask">
          <img src="../images/faceMask.webp" alt="" />
          <p>
            <span>人气榜</span>
          </p>
          <div>
            <p>日常通用口罩榜</p>
            <p>卖爆11.9万件</p>
          </div>
        </div>
      </div>

      <!-- 各种人气榜 -->
      <div class="hotItems">
        <div class="wasList">
          <h1>
            清新口气牙粉榜
            <span>人气榜</span>
          </h1>
          <p class="jin">今日热销爆款</p>
          <div>
            <img src="../images/xiu.webp" alt="" />
            <img src="../images/yun.webp" alt="" />
          </div>
        </div>
        <div class="ceilingLight">
          <h1>
            客厅卧室吸顶灯榜
            <span>人气榜</span>
          </h1>
          <p>卖爆5358件</p>
          <div>
            <img src="../images/guai.webp" alt="" />
            <img src="../images/ceilingLight.webp" alt="" />
          </div>
        </div>
        <div class="smokeOven">
          <h1>
            爆炒无忧烟灶榜
            <span>人气榜</span>
          </h1>
          <p>卖爆8174件</p>
          <div>
            <img src="../images/fotile.webp" alt="" />
            <img src="../images/hood.webp" alt="" />
          </div>
        </div>
        <div class="scala">
          <h1>
            衣物除菌液榜
            <span>人气榜</span>
          </h1>
          <p>卖爆5543件</p>
          <div>
            <img src="../images/dettol.webp" alt="" />
            <img src="../images/dettols.webp" alt="" />
          </div>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="related">
        <img src="../images/related.webp" alt="" />
      </div>
      <!-- 猜你喜欢商品 -->
      <div class="hotSale flex_c_c">
        <div class="cow">
          <img class="same" src="../images/cow.webp" alt="" />
          <p>
            <b class="text-ellipsisl2">德运(Devondale)全脂高钙成人奶粉 1kg/袋 进口全脂成人奶粉 学生奶粉
              澳大利亚进口</b
            >
          </p>
          <img src="../images/direct.png" alt="" />
          <div>
            ¥69
            <span>10万+评价</span>
          </div>
        </div>
        <div class="cry">
          <img class="same" src="../images/cry.webp" alt="" />
          <p >
            <b class="text-ellipsisl2">100只贻贝一次性医用面罩防护隔离成人儿童防飞沫口沫面罩三层防护含熔喷布防护隔离面罩</b
            >
          </p>
          <img src="../images/direct.png" alt="" />
          <div>
            ¥12.9
            <span>16万+评价</span>
          </div>
        </div>
      </div>
      <div class="snlogo">
      <img src="../images/snlogo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      value: "",
      images: [
        "https://oss.suning.com/adpp/creative_kit/material/picture/20210220-fc339b6d49b740dc9b819a1dee396eecff02485056d04343.jpg?format=_is_1242w_610h",
        "https://image1.suning.cn/uimg/cms/img/162859424774012893.jpg?format=_is_1242w_610h",
        "https://oss.suning.com/adpp/creative_kit/material/picture/20200928-779825a31af245dbb50c38ff0057f77e5cb8a61f4baa4853.jpg?format=_is_1242w_610h",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
button,
input {
  border: 0;
  outline: 0;
}
li {
  list-style: none;
}

.flex_c_c {
  display: flex;
  justify-content: center;
  align-items: center;
}
// 两行省略号
.text-ellipsisl2 {
  overflow: hidden;
  text-overflow: ellipsis;
  /*弹性伸缩盒子模型显示*/
  display: -webkit-box;

  /*限制在一个块元素显示的文本的行数*/
  -webkit-line-clamp: 2;

  /*设置或检索伸缩盒对象的子元素的排列方式*/
  -webkit-box-orient: vertical;
}

$ui-width: 750;
$num: 15;

// 封装一个函数，把px转成rem
@function px2rem($px) {
  @return $px / 50 + rem;
}

html {
  // pc端
  font-size: $ui-width / $num + px;
}

.largeContainer {
  width: px2rem(750);
  margin: 0 auto;
  background-color: #f7f7f7;
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d88fd;
  height: px2rem(76);
  .left {
    width: px2rem(36);
    height: px2rem(60);
    margin-left: px2rem(28);
  }
  .middle {
    flex: 1;
    background-color: #2d88fd;
  }
  .right {
    width: px2rem(36);
    height: px2rem(60);
    margin-right: px2rem(22);
  }
}
.carousel {
  // border: 1px solid red;
  background: url("../images/bk.png") no-repeat;
  background-size: 100%;
  width: px2rem(750);
  height: px2rem(320);
  position: relative;
  #lbtBox {
    position: absolute;
    top: px2rem(0);
    left: px2rem(25);
    width: 100%;
    #lbt {
      border: 1px solid red;
      width: px2rem(700);
      height: px2rem(306);
      border-radius: 20px;
    }
  }
}
.mainVene {
  display: flex;
  justify-content: center;
  img {
    width: px2rem(250);
  }
}
.listBox {
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: px2rem(280);
    li {
      margin: px2rem(18) px2rem(20);
      width: px2rem(96);
      height: px2rem(90.88);
      img {
        width: px2rem(84);
        height: px2rem(84);
      }
      div {
        font-size: px2rem(8);
        text-align: center;
      }
    }
  }
}

.cutCorners {
  width: px2rem(750);
  height: px2rem(234);
  margin-top: px2rem(30);
  img {
    height: px2rem(234);
    width: px2rem(250);
  }
}

.SaleBox {
  width: px2rem(750);
  margin-top: px2rem(40);
  .sale {
    width: px2rem(350);
    height: px2rem(258);
    background-color: #fff;
    border-right: px2rem(2) solid #ccc;
    border-top-left-radius: px2rem(20);
  }
  .bigpolyHui {
    width: px2rem(350);
    height: px2rem(258);
    background-color: #fff;
    border-top-right-radius: px2rem(20);
  }
}

.sale {
  padding: px2rem(12) px2rem(20);
  box-sizing: border-box;
  .limit {
    span:first-child {
      font-size: px2rem(26);
      padding-right: px2rem(10);
    }
    .time {
      font-size: px2rem(22);
      background-color: #ffcc00;
    }
  }
  .moods {
    margin-top: px2rem(6);
    color: #9faec1;
    font-size: px2rem(30);
  }
  .picContainer {
    display: flex;
    width: px2rem(350);
    margin-top: px2rem(20);
    div {
      width: px2rem(130);
      text-align: center;
      img {
        width: px2rem(100);
        height: px2rem(100);
      }
      div {
        font-size: px2rem(28);
      }
    }
  }
}

.bigpolyHui {
  padding: px2rem(12) px2rem(20);
  box-sizing: border-box;
  h1 {
    font-size: px2rem(28);
  }
  .poly {
    font-size: px2rem(30);
    color: #999999;
    margin-top: px2rem(10);
  }
  .earphoneBox {
    display: flex;
    align-items: center;
    margin-top: px2rem(10);
    div {
      width: px2rem(140);
      text-align: center;
      img {
        width: px2rem(100);
        height: px2rem(100);
      }
      div {
        font-size: px2rem(26);
      }
    }
  }
}

.newProduct {
  width: px2rem(702);
  height: px2rem(258);
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  .product {
    width: px2rem(350);
    padding: px2rem(10) px2rem(20);
    border-right: solid px2rem(2) #ccc;
    h1 {
      font-size: px2rem(30);
    }
    .big {
      font-size: px2rem(32);
      color: #999999;
    }
    .phoneBox {
      display: flex;
      align-items: center;
      margin-top: px2rem(10);
      img {
        width: px2rem(120);
        height: px2rem(120);
      }
    }
  }
  .groupBuying {
    width: px2rem(350);
    padding: px2rem(10) px2rem(20);
    h1 {
      font-size: px2rem(30);
    }
    .bigs {
      font-size: px2rem(30);
      color: #999999;
    }
    .bigBox {
      display: flex;
      align-items: center;
      text-align: center;
      .cupBox {
        margin-right: px2rem(60);
        img {
          width: px2rem(100);
        }
        div {
          font-size: px2rem(22);
        }
      }
      .riceBox {
        img {
          width: px2rem(100);
        }
        div {
          font-size: px2rem(22);
        }
      }
    }
  }
}

.recommended {
  width: px2rem(702);
  height: px2rem(124);
  background-color: #fff;
  flex-grow: 1;
  margin: 0 auto;
  box-sizing: border-box;
  padding: px2rem(20) px2rem(22);
  text-align: center;
  border-bottom-left-radius: px2rem(20);
  border-bottom-right-radius: px2rem(20);
  .recommend {
    flex-grow: 2;
    h1 {
      font-size: px2rem(32);
    }
    div {
      font-size: px2rem(28);
      color: #999999;
    }
  }
  .iso {
    flex-grow: 1;
    img {
      width: px2rem(72);
      height: px2rem(72);
    }
    div {
      font-size: px2rem(18);
    }
  }
  .outlets {
    flex-grow: 1;
    img {
      width: px2rem(72);
      height: px2rem(72);
    }
    div {
      font-size: px2rem(18);
    }
  }
  .runOn {
    flex-grow: 1;
    img {
      width: px2rem(72);
      height: px2rem(72);
    }
    div {
      font-size: px2rem(18);
    }
  }
  .super {
    flex-grow: 1;
    img {
      width: px2rem(72);
      height: px2rem(72);
    }
    div {
      font-size: px2rem(18);
    }
  }
}

.monthlyFocus {
  width: px2rem(702);
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.buyOff {
  width: px2rem(702);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .biscuits,
  .pansonic,
  .faceMask {
    width: px2rem(220);
    background-color: #fff;
    text-align: center;
    border-radius: px2rem(20);
    img {
      width: px2rem(96);
      height: px2rem(96);
    }
    p {
      padding-bottom: px2rem(10);
      span {
        display: inline-block;
        width: px2rem(100);
        border: 1px solid #d9a87a;
        border-radius: px2rem(20);
        font-size: px2rem(22);
        color: gold;
      }
    }
    div {
      height: px2rem(70);
      border-bottom-left-radius: px2rem(20);
      border-bottom-right-radius: px2rem(20);
      p {
        background-color: #e0a26d;
        font-size: px2rem(22);
        color: #fff;
      }
    }
  }
}

.hotItems {
  width: px2rem(702);
  margin: px2rem(20) auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: px2rem(20);
  .wasList,
  .ceilingLight,
  .smokeOven,
  .scala {
    width: px2rem(350);
    height: px2rem(240);
    padding: px2rem(20);
    box-sizing: border-box;
    h1 {
      font-size: px2rem(22);
      span {
        display: inline-block;
        width: px2rem(80);
        font-size: px2rem(18);
        background-color: #f9f5ee;
        border-radius: px2rem(20);
        color: #ab813a;
        text-align: center;
      }
    }
    p {
      font-size: px2rem(18);
      color: #999999;
    }
    div {
      display: flex;
      align-items: center;
      padding-top: px2rem(10);
      img {
        width: px2rem(140);
        height: px2rem(140);
      }
    }
  }
}

.related {
  width: px2rem(702);
  margin: px2rem(10) auto;
  img {
    width: 100%;
  }
}

.hotSale {
  width: px2rem(702);
  margin: 0 auto;
  .cow{
      margin-right: px2rem(20);
  }
  .cow,
  .cry {
    width: px2rem(342);
    height: px2rem(542);
    background-color: #fff;
    border-radius: px2rem(20);
    border:1px solid red;
    p {
      width: px2rem(318);
      height: px2rem(67);
      text-align: center;
      font-size: px2rem(22);
    }
    .same {
      width: px2rem(320);
      height: px2rem(320);
      margin-top: px2rem(10);
    }
    img {
      width: px2rem(128);
      height: px2rem(24);
      margin-left: px2rem(10);
    }
    div{
        margin-left: px2rem(10);
        color: red;
        font-size: px2rem(28);
        span{
            color: blue;
            font-size: px2rem(22);
        }
    }
  }
}

.snlogo{
    width: px2rem(705);
    margin: 0 auto;
    img{
        width: 100%;
    }
}
</style>