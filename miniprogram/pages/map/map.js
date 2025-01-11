const QQMapWX=require('/libs/qqmap-wx-jssdk.js')

const qqmapsdk=new QQMapWX({
  key:'UEZBZ-3LZW4-SHGU5-FWVXO-6JMMJ-7CF4A'
})
const mapCtx=wx.createMapContext('myMap')
Page({
  data:{
    markers:[{
      id:1,
      iconPath:'/images/test.jpg',
      longitude:116.2852777,
      latitude:40.1580556
    }
    ]

  },
  onShow(){

  }
})