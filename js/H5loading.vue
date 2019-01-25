<style scoped>
  .loading{
    height: 100%;
    width: 100%;
    background-color: #000;
    position: relative;
    /* background: url('../../static/images/loading/bg.jpg') no-repeat center/100% 100%; */
  }
  .loading img{
    position: absolute;
  }
  .one{
    width: 177px;
    left:50%;
    top:570px;
    /* transform: translateX(-50%); */
    margin-left: -80px;
    animation: naicha 2s infinite;
  }
  .two{
    width: 137px;
  }
  @keyframes naicha {
    0% { transform: rotateZ(0deg);}
    50% { transform: rotate(30deg);}
    100% { transform: rotate(0deg);}
  }
  .fade_in{
    animation: fade_in 1s;
  }
  @keyframes fade_in {
    0% { opacity: 0;}
    100% { opacity: 1}
  }
  .bar{
    width: 541px;
    height: 32px;
    left: 174px;
    top: 944px;
    padding: 4px;
    box-sizing: border-box;
    position: absolute;
    background: url('../../static/images/loading/bar.png') no-repeat center/100% 100%;;
  }
  .num{
    position: absolute;
    right: 160px;
    top: 944px;
  }
  .bar_hig{
    position: static;
    height: 100%;
    width: 100px;
    background: #fef206;
    border-radius: 10px;
    box-sizing: border-box;
  }
</style>

<template>
  <div class="loading" name="loading">
    <img v-show="parseInt(calcPercent) < 30" class="one" :src="logo" alt="">
    <img v-show="30 <= parseInt(calcPercent) && parseInt(calcPercent) <= 85" class="two one" :src="logo2" alt="">
    <!-- <img v-show="50 < parseInt(calcPercent) && parseInt(calcPercent) <= 75" class="three one" src="../../static/images/loading/3.png" alt=""> -->
    <img v-show="85 < parseInt(calcPercent) && parseInt(calcPercent) <= 100" class="one" :src="logo3" alt="">
    <div class="bar">
      <div class="bar_hig" :style="'width:'+parseInt(calcPercent)+'%'"></div>
    </div>
    <span class="num" style="color:#fff">{{ parseInt(calcPercent) }}%</span>
    
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      increment: 0,
      calcPercent: 0,
      showload: false,
      logo: require('../../static/images/loading/1.png'),
      logo2: require('../../static/images/loading/2.png'),
      logo3: require('../../static/images/loading/3.png'),
    };
  },
  mounted() {
    this.loadImg();
  },
  methods: {
    loadImg() {
      // if (sessionStorage.getItem("hasLoaded")) {
      //   this.showload = false;
      // } else {
      //   this.showload = true;
      // }
      let mulitImg = [
        require('../../static/images/guanxin/1/ba.png'),
        require('../../static/images/guanxin/1/bg.jpg'),
        require('../../static/images/guanxin/1/ma.png'),
        require('../../static/images/guanxin/1/myself.png'),
        require('../../static/images/guanxin/1/phone.png'),
        require('../../static/images/guanxin/1/qinqi1.png'),
        require('../../static/images/guanxin/1/qinqi2.png'),
        require('../../static/images/guanxin/1/right_hand.png'),
        require('../../static/images/guanxin/1/tuomo.png'),
        require('../../static/images/guanxin/2/qipao.png'),
        require('../../static/images/guanxin/3/ba.png'),
        require('../../static/images/guanxin/3/ma.png'),
        require('../../static/images/guanxin/4/qipao.png'),
        require('../../static/images/guanxin/5/qipao.png'),
        require('../../static/images/guanxin/5/ziji.png'),
        require('../../static/images/guanxin/6/bg.jpg'),
        require('../../static/images/guanxin/6/ziji.png'),
        require('../../static/images/guanxin/7/btn1.png'),
        require('../../static/images/guanxin/7/naicha.png'),
        require('../../static/images/guanxin/7/naichafeijian.png'),
        require('../../static/images/guanxin/7/phone.png'),
        require('../../static/images/guanxin/7/shadow.png'),
        require('../../static/images/guanxin/8/bg.jpg'),
        require('../../static/images/guanxin/8/naicha.png'),
        require('../../static/images/guanxin/8/naichafeijian.png'),
        require('../../static/images/guanxin/8/phone.png'),
        require('../../static/images/guanxin/8/qinqi1.png'),
        require('../../static/images/guanxin/8/qinqi2.png'),

        require('../../static/images/msg/1.png'),
        require('../../static/images/msg/2.png'),
        require('../../static/images/msg/3.png'),
        require('../../static/images/msg/4.png'),
        require('../../static/images/msg/5.png'),
        require('../../static/images/msg/6.png'),
        require('../../static/images/msg/7.png'),
        require('../../static/images/msg/8.png'),
        require('../../static/images/msg/9.png'),
        require('../../static/images/msg/bg.jpg'),
        require('../../static/images/msg/btn.png'),

        require('../../static/images/panbi/1.jpg'),
        require('../../static/images/panbi/2.png'),
        require('../../static/images/panbi/3.png'),
        require('../../static/images/panbi/4.png'),
        require('../../static/images/panbi/5.png'),
        require('../../static/images/panbi/6.png'),
        require('../../static/images/panbi/7.png'),
        require('../../static/images/panbi/8.png'),
        require('../../static/images/panbi/9.png'),
        require('../../static/images/panbi/10.png'),
        require('../../static/images/panbi/11.png'),
        require('../../static/images/panbi/12.png'),
        require('../../static/images/panbi/13.png'),
        require('../../static/images/panbi/14.png'),
        require('../../static/images/panbi/15.png'),
        require('../../static/images/panbi/16.png'),
        require('../../static/images/panbi/17.png'),
        require('../../static/images/panbi/18.png'),
        require('../../static/images/panbi/biaoqing-8.png'),
        require('../../static/images/panbi/face-red.png'),
        require('../../static/images/panbi/naichafeijian-8.png'),
        require('../../static/images/panbi/naichafeijian-right-7.png'),
        require('../../static/images/panbi/shenti-8.png'),
        require('../../static/images/panbi/ziji-8.png'),

        require('../../static/images/post/1.png'),
        require('../../static/images/post/1deng.png'),
        require('../../static/images/post/2.png'),
        require('../../static/images/post/2deng.png'),
        require('../../static/images/post/3.png'),
        require('../../static/images/post/3deng.png'),
        require('../../static/images/post/4.png'),
        require('../../static/images/post/4deng.png'),
        require('../../static/images/post/5.png'),
        require('../../static/images/post/5deng.png'),
        require('../../static/images/post/6deng.png'),
        require('../../static/images/post/7.png'),
        require('../../static/images/post/bg.jpg'),
        require('../../static/images/post/close.png'),
        require('../../static/images/post/guanxin.jpg'),
        require('../../static/images/post/panbi.jpg'),
        require('../../static/images/post/panbi2.jpg'),
        require('../../static/images/post/qinqing.jpg'),
        require('../../static/images/post/tuoxie.jpg'),
        require('../../static/images/post/xiqing.jpg'),
        require('../../static/images/post/yinhun.jpg'),
        require('../../static/images/post/change_over.png'),
        require('../../static/images/post/change_over_close.png'),

        require('../../static/images/qinqing/1.png'),
        require('../../static/images/qinqing/2.png'),
        require('../../static/images/qinqing/3.png'),
        require('../../static/images/qinqing/4.png'),
        require('../../static/images/qinqing/5.png'),
        require('../../static/images/qinqing/6.jpg'),
        require('../../static/images/qinqing/7.png'),
        require('../../static/images/qinqing/8.png'),
        require('../../static/images/qinqing/9.png'),
        require('../../static/images/qinqing/10.png'),
        require('../../static/images/qinqing/11.jpg'),
        require('../../static/images/qinqing/12.png'),
        require('../../static/images/qinqing/13.jpg'),
        require('../../static/images/qinqing/14.png'),
        require('../../static/images/qinqing/15.png'),
        require('../../static/images/qinqing/16.jpg'),
        require('../../static/images/qinqing/17.png'),
        require('../../static/images/qinqing/18.jpg'),
        require('../../static/images/qinqing/19.png'),
        require('../../static/images/qinqing/20.jpg'),
        require('../../static/images/qinqing/21.jpg'),

        require('../../static/images/tuoxie/1/bg.jpg'),
        require('../../static/images/tuoxie/1/jiaren.png'),
        require('../../static/images/tuoxie/1/qinqi.png'),
        require('../../static/images/tuoxie/1/xiaohai.png'),
        require('../../static/images/tuoxie/1/ziji.png'),
        require('../../static/images/tuoxie/2/wenzi.png'),
        require('../../static/images/tuoxie/3/huomiao.png'),
        require('../../static/images/tuoxie/4/qinqi.png'),
        require('../../static/images/tuoxie/4/wenzi.png'),
        require('../../static/images/tuoxie/5/wenzi.png'),
        require('../../static/images/tuoxie/5/xiaohai.png'),
        require('../../static/images/tuoxie/6/qinqi.png'),
        require('../../static/images/tuoxie/6/wenzi.png'),
        require('../../static/images/tuoxie/7/ziji.png'),
        require('../../static/images/tuoxie/8/btn1.png'),
        require('../../static/images/tuoxie/8/btn2.png'),
        require('../../static/images/tuoxie/8/shadow.png'),
        require('../../static/images/tuoxie/9/qinqi.png'),
        require('../../static/images/tuoxie/9/xiaohai.png'),
        require('../../static/images/tuoxie/9/ziji.png'),

        require('../../static/images/xiqing/8000.png'),
        require('../../static/images/xiqing/btn1.png'),
        require('../../static/images/xiqing/btn2.png'),
        require('../../static/images/xiqing/er3.png'),
        require('../../static/images/xiqing/leftshou.png'),
        require('../../static/images/xiqing/leftshou1.png'),
        require('../../static/images/xiqing/leftshou2.png'),
        require('../../static/images/xiqing/leftshou3.png'),
        require('../../static/images/xiqing/naicha.png'),
        require('../../static/images/xiqing/pop.png'),
        require('../../static/images/xiqing/rightshou1.png'),
        require('../../static/images/xiqing/rightshou2.png'),
        require('../../static/images/xiqing/shadow.png'),
        require('../../static/images/xiqing/tu1.png'),
        require('../../static/images/xiqing/xiqing2.jpg'),
        require('../../static/images/xiqing/xiqing3.jpg'),
        require('../../static/images/xiqing/yibaiyuan.png'),

        require('../../static/images/yinhun/1/bg.jpg'),
        require('../../static/images/yinhun/1/dengguang.png'),
        require('../../static/images/yinhun/1/guzhang1.png'),
        require('../../static/images/yinhun/1/guzhang2.png'),
        require('../../static/images/yinhun/1/ma.png'),
        require('../../static/images/yinhun/1/pijiu.png'),
        require('../../static/images/yinhun/1/shouji.png'),
        require('../../static/images/yinhun/2/guzhang.png'),
        require('../../static/images/yinhun/2/ma.png'),
        require('../../static/images/yinhun/2/mask.png'),
        require('../../static/images/yinhun/2/shouji.png'),
        require('../../static/images/yinhun/3/shou.png'),
        require('../../static/images/yinhun/3/shouji.png'),
        require('../../static/images/yinhun/4/msg.png'),
        require('../../static/images/yinhun/4/shouji.png'),
        require('../../static/images/yinhun/5/msg.png'),
        require('../../static/images/yinhun/6/msg.png'),
        require('../../static/images/yinhun/6/wenzi.png'),
        require('../../static/images/yinhun/7/wenzi.png'),
        require('../../static/images/yinhun/9/pijiu.png'),
        require('../../static/images/yinhun/9/wenzi.png'),
        require('../../static/images/yinhun/9/youshou.png'),
        require('../../static/images/yinhun/9/zuoshou.png'),
        require('../../static/images/yinhun/10/naicha.png'),
        require('../../static/images/yinhun/10/naichafeijian.png'),
        require('../../static/images/yinhun/10/wenzi.png'),
      ];
      let promiseAll = [],
        img = [],
        imgTotal = mulitImg.length;
      let me = this;
      this.increment = 100 / imgTotal;
      this.calcPercent = 0;
      for (let i = 0; i < imgTotal; i++) {
        promiseAll[i] = new Promise((resolve, reject) => {
          img[i] = new Image();
          img[i].src = mulitImg[i];
          img[i].onload = function() {
            //第i张加载完成
            me.calcPercent += me.increment;
            if (me.calcPercent > 99) me.calcPercent = 100;
            resolve(img[i]);
          };
        });
      }
      Promise.all(promiseAll)
        .then(img => {
          setTimeout(() => {
            this.showload = false;
            // sessionStorage.setItem("hasLoaded", 1);
            // this.cutImg();
            this.$router.push('/homepage')
          }, 200);
        })
        .catch(function(reason) {
          console.log("Failed: " + reason);
        });
    }
  }
};
</script>


