<template>
  <div class="container">
    <div class="content">
      <div class="img-box">
        <img :src="submitsucUrl" mode="aspectFit">
      </div>
      <div class="text">
        <span>亲爱的销售员</span>
        <span>请耐心等待审核员审核，谢谢！</span>
      </div>
    </div>
  </div>
</template>

<script>
import submitsuc from '@/pages/images/tijiaochenggong.png'
export default {
  data () {
    return {
      submitsucUrl: submitsuc
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-box {
    margin-top: 150rpx;
    width: 150rpx;
    height: 150rpx;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .text {
    margin-top: 97rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28rpx;
    span {
      color: #333;
    }
  }
}
</style>
<style>
</style>

