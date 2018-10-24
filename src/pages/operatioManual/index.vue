<template>
  <div class="container">
    <div class="content">
      <div class="title-banner">
        <div class="img-box">
          <img :src="bannerUrl" mode='aspectFit'>
        </div>
      </div>
      <div class="text-center">
        <span class="text">
          NLP是人工智能领域最难攀登的高峰，在首席科学家（NLP领域国内首位“杰青”获得者）的带领下，我们致力于挑战复杂的语义理解问题。
        </span>
        <span class="text">
          我们了全球首个中文百科知识图谱。拥有1.6亿+条通用知识图谱，1000万+领域知识图谱，在此基础上构建出强大的认知体系。
        </span>
        <span class="text">
          结合大数据和深度学习，不断优化机器人的核心模块，利用深层神经网络实现更强大的认知引擎，和更智能的聊天交互体验。
        </span>
        <span class="title">
          联想推理
        </span>
        <span class="text">
          通过在知识图谱之上的推理和联想，让机器人的知识体系无限扩展，并进一步实现自我学习。
        </span>
        <span class="title">
          主动推荐
        </span>
        <span class="text">
          个性化用户画像的构建，让机器人更加懂你，主动为你推荐所想所需的
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/pages/images/6.png'
export default {
  data () {
    return {
      bannerUrl: banner
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-banner {
    width: 100%;
    margin-top: 70rpx;
    display: flex;
    justify-content: center;
    .img-box {
      border-radius: 20rpx;
      overflow: hidden;
      width: 710rpx;
      height: 350rpx;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .text-center {
    margin: 30rpx 0;
    border-radius: 20rpx;
    box-shadow: 0 0 27rpx RGBA(47, 202, 244, 0.2);
    width: 710rpx;
    padding: 30rpx;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-size: 28rpx;
    align-items: flex-start;
    .text {
      margin-bottom: 30rpx;
      color: #666666;
    }
    .title {
      margin: 30rpx 0;
      font-weight: bold;
      font-size: 28rpx;
      color: #333;
    }
  }
  &::after {
    content: "";
    height: 240rpx;
    width: 100%;
    position: absolute;
    top: 0;
    display: block;
    left: 0;
    z-index: -1;
    background: #31CAF4;
  }
}
</style>

<style>

</style>

