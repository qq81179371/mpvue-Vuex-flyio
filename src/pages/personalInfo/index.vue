<template>
  <div class="container">
    <div class="content">
      <div class="form-list">
        <div class="list-center" v-for="(item,index) in personalInfoList" :key="index">
          <div class="title">
            <div class="img-box">
              <img :src="item.picUrl" mode="aspectFit">
            </div>
            <span>{{item.title}}</span>
          </div>
          <div class="input-box">
            <text>{{item.attributes}}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import name from '@/pages/images/1.png'
import phone from '@/pages/images/2.png'
import area from '@/pages/images/3.png'
import location from '@/pages/images/4.png'
import ownStore from '@/pages/images/5.png'
export default {
  data () {
    return {
      personalInfoList: [
        {
          picUrl: name,
          title: '姓名',
          attributes: '张薇'
        },
        {
          picUrl: phone,
          title: '手机',
          attributes: '13800000000'
        },
        {
          picUrl: area,
          title: '区域',
          attributes: '华南区'
        },
        {
          picUrl: location,
          title: '所在地',
          attributes: '广东省深圳市'
        },
        {
          picUrl: ownStore,
          title: '门店地址及名称',
          attributes: '广东省深圳市南山区南山街道2号\n南山2分店'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .form-list {
    margin-top: 20rpx;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 -10rpx 20rpx RGBA(67, 207, 245, 0.2);
    padding: 0 20rpx;
    .list-center {
      box-sizing: border-box;
      width: 100%;
      padding: 30rpx 0;
      border-bottom: 1px solid RGBA(49, 202, 244, .2);
      display: flex;
      justify-content: space-between;
      font-size: 28rpx;
      color: #333;
      .title {
        display: flex;
        align-items: center;
        .img-box {
          width: 28rpx;
          height: 25rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20rpx;
          img {
            max-width: 100%;
            max-height: 100%;
            display: block;
          }
        }
      }
      &:last-child {
        flex-direction: column;
        .input-box {
          margin-top: 10rpx;
          margin-left: 50rpx;
        }
      }
    }
  }
}
</style>

<style>

</style>

