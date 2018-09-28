//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: 1,
    tipShow: 1,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgs: {
      urls: ['http://simplast.top/temp/1.jpg']
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  dd: function() {
    this.setData({
      tipShow: 0
    })
  },
  call: function() {
    wx.makePhoneCall({
      phoneNumber: '13349841239'
    })
  }, 
  map: function() {
    wx.openLocation({
      longitude: 113.523298, 
      latitude: 22.248251,
      name: '乐士文化区3栋',
      address:'乐士文化区3栋403后谱音乐'
    })
  },
  showBig: function(event) {
    wx.previewImage({
      current: 'http://simplast.top/temp/' + event.target.dataset.index + '.jpg',
      urls: [
        'http://simplast.top/temp/1.jpg',
        'http://simplast.top/temp/2.jpg',
        'http://simplast.top/temp/3.jpg',
        'http://simplast.top/temp/4.jpg',
        'http://simplast.top/temp/5.jpg',
        'http://simplast.top/temp/6.jpg',
        'http://simplast.top/temp/7.jpg',
        'http://simplast.top/temp/8.jpg',
      ]
    })
  },
  addme:function(){
    wx.previewImage({
      urls: ['../../images/addme.jpg'],
    })
  },
  onLoad: function (options) {
    var that = this;
    /**生成背景星星-开始 */
    var stars = 400;
    var r = 0;
    var stararray = [];
    for (var i = 0; i < stars; i++) {
      var s = 0.2 + Math.random() * 1;
      var curR = r + Math.random() * 300;
      var rotateY = Math.random() * 360;
      var rotateX = Math.random() * -50;
      stararray[i] = { curR: curR, rotateY: rotateY, rotateX: rotateX, s: s };
    }
    // console.log(stararray) 
    this.setData({
      stararray: stararray,
    })
    /**生成背景星星-结束 */
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})