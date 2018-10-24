<template>
  <div class="container">
    <canvas canvas-id="test" style="width:300px; height:450px" @click="aaaa">
    </canvas>
    <div class="aa" @click="aaaa">
      点击保存
      {{arrayPic.length}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aaa: 'https://www.vivibookbar.com/assets/imagesY/bg.png',
      bbb: 'https://www.vivibookbar.com/upload/admin/user/userId18.png',
      ccc: '哈士奇',
      ddd: '已阅读20本书',
      num: 55,
      eee: 'https://www.vivibookbar.com/assets/imagesY/p4.png',
      arrayPic: [
        {
          pic: 'https://www.vivibookbar.com/assets/imagesY/bg.png'
        },
        {
          pic: 'https://www.vivibookbar.com/upload/admin/user/userId18.png'
        },
        {
          pic: 'https://www.vivibookbar.com/assets/imagesY/p4.png'
        }
      ],
      arr: []
    }
  },
  onLoad () {
    let that = this
    this.arrayPic.map((i, index) => {
      wx.getImageInfo({
        src: i.pic,
        success (sres) {
          let url = {
            urls: sres.path
          }
          that.arr[index] = url
          const ctx = wx.createCanvasContext('test')
          ctx.drawImage(that.arr[0].urls, 0, 0, 300, 450)
          ctx.drawImage(that.arr[1].urls, 105, 325, 90, 90)
          ctx.setFillStyle('#ffffff')
          ctx.setFontSize(16)
          ctx.fillText(that.ccc, 90, 65)
          ctx.setFontSize(12)
          ctx.fillText(that.ddd, 90, 90)
          ctx.setFontSize(14)
          ctx.fillText('书童', 232, 73)
          ctx.setFontSize(20)
          ctx.setTextAlign('center')
          ctx.fillText('为了阅读状元，加油！', 150, 180)
          ctx.setFillStyle('#333')
          ctx.setFontSize(12)
          ctx.setTextAlign('center')
          ctx.fillText('长按识别太阳码，和我一起来升级', 150, 435)
          ctx.save()
          ctx.beginPath()
          ctx.setShadow(0, 0, 10, 'rgba(0,0,0,.4)')
          ctx.arc(50, 70, 30, 0, Math.PI * 2)
          ctx.fill()
          ctx.clip()
          ctx.drawImage(that.arr[2].urls, 20, 40, 60, 60)
          ctx.restore()
          ctx.save()
          ctx.beginPath()
          ctx.setFillStyle('#E6E6E6')
          ctx.fillRect(20, 130, 240, 1)
          ctx.setFillStyle('#2F5D3F')
          ctx.fillRect(20, 130, `${that.num * 4}`, 1)
          ctx.setFillStyle('#ffffff')
          ctx.setFontSize(12)
          ctx.fillText(that.num, `${that.num * 4 + 20}`, 150)
          ctx.setFontSize(12)
          ctx.fillText('秀才/60本', 260, 120)
          ctx.stroke()
          ctx.draw()
        },
        fail (e) {
          console.log(e)
        }
      })
    })
  },
  methods: {
    aaaa () {
      // let that = this
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 300,
        height: 450,
        canvasId: 'test',
        quality: 1,
        fileType: 'jpg',
        success (res) {
          console.log(res)
          let picArr = []
          picArr.push(res.tempFilePath)
          wx.previewImage({
            urls: picArr,
            success (r) {
              console.log(r)
            },
            fail (ee) {
              console.log(ee)
            }
          })
        },
        fail (e) {
          console.log(e)
        }
      })
    },
    bbbaaa () {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  canvas {
    margin-top: 50px;
    // width: 300px; /*no*/
    // height: 450px; /*no*/
    overflow: hidden;
    border-radius: 7px; /*px*/
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
}
</style>
