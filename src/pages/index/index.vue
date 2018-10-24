<template>
  <div class="container">
    <div class="logo">
      <div class="logo-content">
        <div class="img-box">
          <img :src="logoUrl">
        </div>
      </div>
    </div>
    <div class="user-center">
      <div class="username">
        <div class="img-box">
          <img :src="userNameUrl">
        </div>
        <div class="input-box">
          <input type="text" :placeholder="userNamePrompt" placeholder-class="userNamePlaceholder" v-model.lazy="userName">
        </div>
      </div>
      <div class="password">
        <div class="img-box">
          <img :src="passwordUrl">
        </div>
        <div class="input-box">
          <input type="text" :placeholder="passwordPrompt" placeholder-class="userNamePlaceholder" v-model.lazy="password" v-if="text">
          <input type="password" :placeholder="passwordPrompt" placeholder-class="userNamePlaceholder" v-model.lazy="password" v-else class="password-content">
          <div class="fonticon" @click="text = !text">
            <div class="img-box" :class="text?'visible':'invisible'">
              <img :src="text?visibleUrl:invisibleUrl">
            </div>
          </div>
        </div>
      </div>
      <div class="log-in">
        <div class="log-btn">
          <input type="button" value="登录" @click="logInBtn">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/pages/images/logo.png'
import userName from '@/pages/images/userName.png'
import password from '@/pages/images/password.png'
import visible from '@/pages/images/kejian.png'
import invisible from '@/pages/images/bukejian.png'
export default {
  data () {
    return {
      logoUrl: logo,
      userNameUrl: userName,
      passwordUrl: password,
      visibleUrl: visible,
      invisibleUrl: invisible,
      userNamePrompt: '请输入账号',
      passwordPrompt: '请输入密码',
      userName: '',
      password: '',
      text: true
    }
  },
  computed: {
    // one () {
    //   console.log('1')
    //   this.$fly.request({
    //     method: 'GET',
    //     url: '/api/book/getBookScreen',
    //     body: {}
    //   }).then(res => {
    //     console.log(res)
    //   })
    // }
  },
  methods: {
    logInBtn () {
      // 跳转到内页
      wx.navigateTo({
        url: '/pages/homepage/main'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  .logo-content {
    width: 100%;
    display: flex;
    justify-content: center;
    .img-box {
      margin: 150rpx 0;
      width: 200rpx;
      height: 200rpx;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
.user-center {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .username,
  .password {
    width: 600rpx;
    height: 80rpx;
    display: flex;
    align-items: center;
    border-radius: 6rpx;
    box-shadow: 0 0 4rpx rgba(47, 202, 244, 0.5);
    border: 1rpx solid #fff;
    .img-box {
      width: 29rpx;
      margin: 0 19rpx 0 16rpx;
      height: 24rpx;
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
      }
    }
    .input-box {
      flex: 1;
      input {
        width: 100%;
        font-size: 28rpx;
        color: #666;
      }
      .password-content {
        color: #2fcaf4;
      }
    }
  }
  .password {
    margin-top: 30rpx;
    .img-box {
      width: 20rpx;
      height: 25rpx;
      margin: 0 25rpx 0 20rpx;
    }
    .input-box {
      display: flex;
      align-items: center;
      .fonticon {
        width: 70rpx;
        height: 80rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        .visible,
        .invisible {
          width: 24rpx;
          height: 15rpx;
          img {
            display: block;
            max-width: 100%;
            max-height: 100%;
          }
        }
        .invisible {
          width: 24rpx;
          height: 22rpx;
        }
      }
    }
  }
  .log-in {
    margin-top: 50rpx;
    .log-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      input {
        width: 600rpx;
        outline: none;
        border: none;
        height: 75rpx;
        background: #2fcaf4;
        border-radius: 6rpx;
        font-size: 32rpx;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

<style>
.userNamePlaceholder {
  font-size: 28rpx;
  color: #2fcaf4;
}
.log-btn input::after {
  border: none;
}
</style>

