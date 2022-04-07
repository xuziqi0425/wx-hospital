// pages/web33/web33.js
let isfold3=0;
Page({
  formSubmit1c: function (res) {
    wx.reLaunch({
      url: '/pages/menu/menu?xiongTong=' + res.detail.value.xiongTong + '&xinYuanXingXiongTong=' + res.detail.value.xinYuanXingXiongTong + '&xiongTongBiaoXian=' + res.detail.value.xiongTongBiaoXian + '&qiTaXinYuanXingXiongTong=' + res.detail.value.qiTaXinYuanXingXiongTong + '&qiTaBiaoXian=' + res.detail.value.qiTaBiaoXian + '&diagnosisTime=' + res.detail.value.diagnosisTime + '&inHospitalDay=' + res.detail.value.inHospitalDay + '&allCost=' + res.detail.value.allCost,
    })
    // console.log(res.detail.value)
    method: "POST",
      wx.request({
        url: 'http://192.168.43.126:8080/user/addUserBaseInfo',
        data: {

        },
        success(res) {
          console.log("上传数据成功", res)
        },
        fail(res) {
          console.log("上传数据失败", res)
        }
      })
  },
  formReset1c: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  formSubmit2c: function (res) {
    wx.reLaunch({
      url: '/pages/menu/menu?zhuanGuiLeiXing=' + res.detail.value.zhuanGuiLeiXing + '&leftHospitalTime=' + res.detail.value.leftHospitalTime + '&zhiLiaoJieGuo=' + res.detail.value.zhiLiaoJieGuo + '&zhuanGuiLeiXing2=' + res.detail.value.zhuanGuiLeiXing2 + '&leftHospitalGateTime=' + res.detail.value.leftHospitalGateTime + '&hospitalName=' + res.detail.value.hospitalName + '&shiFouZhuanYunPCI=' + res.detail.value.shiFouZhuanYunPCI + '&shiFouYuanChengXinDianTu=' + res.detail.value.shiFouYuanChengXinDianTu + '&zhuanGuiLeiXing3=' + res.detail.value.zhuanGuiLeiXing3 + '&turnDeapartmentTime=' + res.detail.value.turnDeapartmentTime + '&cureInDepartment=' + res.detail.value.cureInDepartment + '&turnDeapartmentReason=' + res.detail.value.turnDeapartmentReason + '&zhuanGuiLeiXing4=' + res.detail.value.zhuanGuiLeiXing4 + '&dieTime=' + res.detail.value.dieTime + '&dieReason=' + res.detail.value.dieReason + '&liYuanXuanJiao=' + res.detail.value.liYuanXuanJiao + '&cocid19=' + res.detail.value.cocid19,
    })
    // console.log(res.detail.value)
    method: "GET",
      wx.request({
        url: 'http://192.168.157.126:8080/jijiuxinxi/insert',
        data: {
          fabingshijian: res.detail.value.fabingshijian,
          fabingdizhi: res.detail.value.fabingdizhi,
          phone: res.detail.value.phone,
          idcard: '99999'
        },
        success(res) {

          console.log("上传数据成功", res)
        },


        fail(res) {
          console.log("上传数据失败", res)
        }
      })
  },
  formReset2c: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  formSubmit3c: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?jiangTangYao=' + e.detail.value.jiangTangYao + '&kouFuKangNingYao=' + e.detail.value.kouFuKangNingYao + '&pcsk9=' + e.detail.value.pcsk9 + '&dose=' + e.detail.value.dose,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          chuchedanwei: e.detail.value.chuchedanwei,
          callTime: e.detail.value.callTime,
          FirstyiliaoTime: e.detail.value.FirstyiliaoTime,
          Zhijiezhuansongshangji: e.detail.value.Zhijiezhuansongshangji,
          Zhidadaoguanshi: e.detail.value.Zhidadaoguanshi,
          DaodayiyuandamenTime: e.detail.value.DaodayiyuandamenTime,
          YuanneishouzhenTime: e.detail.value.YuanneishouzhenTime,
          Yihu: e.detail.value.Yihu,
          idcard: e.detail.value.idcard
        },
        success(e) {

          console.log("上传数据成功", e)
        },


        fail(e) {
          console.log("上传数据失败", e)
        }

      })
  },
  formReset3c: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  formSubmit4c: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?xinFaXinShuai=' + e.detail.value.xinFaXinShuai + '&arni=' + e.detail.value.arni + '&zhuYuanQiJianBingFaZheng=' + e.detail.value.zhuYuanQiJianBingFaZheng + '&weiXianYinSu=' + e.detail.value.weiXianYinSu + '&heBingJiBing=' + e.detail.value.heBingJiBing + '&jianChaJieGuo=' + e.detail.value.jianChaJieGuo + '&jiGaiDanbai=' + e.detail.value.jiGaiDanbai + '&jianChaJieGuo2=' + e.detail.value.jianChaJieGuo2 + '&bnpZuiGaoZhi2=' + e.detail.value.bnpZuiGaoZhi2 + '&jianChaJieGuo3=' + e.detail.value.jianChaJieGuo3 + '&ntproBNP=' + e.detail.value.ntproBNP + '&jianChaJieGuo4=' + e.detail.value.jianChaJieGuo4 + '&tcZuiGaoZhi=' + e.detail.value.tcZuiGaoZhi + '&jianChaJieGuo5=' + e.detail.value.jianChaJieGuo5 + '&tgZuiGaoZhi=' + e.detail.value.tgZuiGaoZhi + '&jianChaJieGuo6=' + e.detail.value.jianChaJieGuo6 + '&hdlcZuiGaoZhi=' + e.detail.value.hdlcZuiGaoZhi + '&jianChaJieGuo7=' + e.detail.value.jianChaJieGuo7 + '&ldlcZuiGaoZhi=' + e.detail.value.ldlcZuiGaoZhi + '&jianChaJieGuo8=' + e.detail.value.jianChaJieGuo8 + '&lvefZuiDiZHi=' + e.detail.value.lvefZuiDiZHi + '&jianChaJieGuo9=' + e.detail.value.jianChaJieGuo9 + '&jianChaJieGuo10=' + e.detail.value.jianChaJieGuo10 + '&yaoWu1=' + e.detail.value.yaoWu1 + '&yaoWu2=' + e.detail.value.yaoWu2 + '&yaoWu3=' + e.detail.value.yaoWu3 + '&yaoWu4=' + e.detail.value.yaoWu4,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          ZhuanyuanType: e.detail.value.ZhuanyuanType,
          idcard: e.detail.value.idcard,
          Hname: e.detail.value.Hname,
          FirstyiliaoTime: e.detail.value.FirstyiliaoTime,
          Zhijiezhuansongshangji: e.detail.value.Zhijiezhuansongshangji,
          JuedingzhuanyuanTime: e.detail.value.JuedingzhuanyuanTime,
          DaodayiyuandamenTime: e.detail.value.DaodayiyuandamenTime,
          YuanneijiezhenTime: e.detail.value.YuanneijiezhenTime,
          Yihu: e.detail.value.Yihu
        },
        success(e) {

          console.log("上传数据成功", e)
        },


        fail(e) {
          console.log("上传数据失败", e)
        }

      })
  },
  formReset4c: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  fold:function(res){
    console.log(res.currentTarget.dataset.id)
    if( isfold3%2 == 0){
      this.setData({
        isfold3:true
      });
     isfold3 ++;
    } else{
      this.setData({
        isfold3:false
      });
      isfold3++;
    }
  },
  
  myTap111: function (res) {
    // console.log(res.detail.value)
    if (res.detail.value == '120') {

      this.setData({
        isShowa: true
      })
    } else {
      this.setData({
        isShowa: false
      })
    }
    if (res.detail.value == 'zhuanyuan' ) {

      this.setData({
        isShowb: true
      })

    } else {
      this.setData({
        isShowb: false
      })
    }
    if (res.detail.value == 'zixing') {

      this.setData({
        isShowc: true
      })

    } else {
      this.setData({
        isShowc: false
      })
    }
    if (res.detail.value == 'yuannei') {

      this.setData({
        isShowd: true
      })

    } else {
      this.setData({
        isShowd: false
      })
    }

  },
  myTap222:function(res){
    // console.log(res.currentTarget.dataset.id)
    if(res.currentTarget.dataset.id == 'jijiuxinxi' && num%2 == 0){
      this.setData({
        isShowg:true
      });
      num ++;
    } else{
      this.setData({
        isShowg:false
      });
      num ++;
    }
  },
  myTap333:function(res){
    console.log(res.currentTarget.dataset.id)
    if(res.currentTarget.dataset.id == 'bingQingGuJi' && num%2 == 0){
      this.setData({
        isShowe:true
      });
      num ++;
    } else{
      this.setData({
        isShowe:false
      });
      num ++;
    }
  },
  myTap444:function(res){
    console.log(res.currentTarget.dataset.id)
    if(res.currentTarget.dataset.id == 'shengMingTiZheng' && num%2 == 0){
      this.setData({
        isShowf:true
      });
      num ++;
    } else{
      this.setData({
        isShowf:false
      });
      num ++;
    }
  },
  /**
   * 页面的初始数据
   */
  data: {


  },


  bindTextAreaBlur: function (res) {
    console.log(res.detail.value)
  },
  checkboxChange: function (e) {
    console.log(e.detail.value)
  },
  radioChange: function (res) {
    console.log(res.detail.value)
  },

  //提交用户输入的信息

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})