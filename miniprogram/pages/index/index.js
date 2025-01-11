// pages/index/index.js
var db=wx.cloud.database();
Page({
  data:{
    
  },
onLoad(e){
  db.collection("demolist").get().then(res=>{this.setData({
    list:res
  }
  );console.log(res)})

}
})