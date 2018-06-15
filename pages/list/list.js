//list.js
//获取应用实例
const app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addMore: function() {
    let that = this;
    wx.showToast({ "title": "加载中" });
    setTimeout(function () { wx.stopPullDownRefresh(); }, 1000);
  },
  onPullDownRefresh: function() {
     let that = this;
     wx.showToast({"title":"加载中"});
     setTimeout(function () { wx.stopPullDownRefresh(); },1000);
  },
  onReachBottom: function () {
    let that = this;
    wx.showToast({ "title": "加载中" });
    setTimeout(function () { wx.stopPullDownRefresh(); }, 1000);
  },
  onLoad: function () {
    
  }
})
