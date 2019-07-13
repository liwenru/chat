//app.js
var dataObj = require("data/data.js")

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.setStorage({
      key:'postList',
      data:dataObj.postList,
      success:function(res){
        console.log(res)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})