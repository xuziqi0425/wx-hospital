// pages/web11/web11.js
let num = 0;
let isfold=0;
let isfold2=0;
let isfold3=0;
var util = require('../../utils/util.js');
const date = new Date()
const months = []
const days = []
const hours = []
const minutes = []
var app = getApp()
Page({
  formSubmit1: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?name=' + e.detail.value.name + '&gender=' + e.detail.value.gender + '&age=' + e.detail.value.age + '&zhuyuanhao=' + e.detail.value.zhuyuanhao + '&id=' + e.detail.value.id,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
    // console.log(e.detail.value)
    method: "GET",
      wx.request({
        url: 'http://47.56.103.207:8181/patient/insert',
        data: {
          name: e.detail.value.name,
          gender: e.detail.value.gender,
          age: e.detail.value.age,
          zhuyuanhao: e.detail.value.zhuyuanhao,
          idCard: e.detail.value.id

        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 500
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }

      })
  },
  formReset1: function (e) {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })

  },
  formSubmit2: function (res) {
    wx.reLaunch({
      url: '/pages/menu/menu?fabingdizhi=' + res.detail.value.fabingdizhi + '&fabingshijian=' + res.detail.value.fabingshijian + '&phone=' + res.detail.value.phone,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {}
    })
    // console.log(res.detail.value)
    method: "GET",
      wx.request({
        url: 'http://47.56.103.207:8181/jijiuxinxi/insert',
        data: {
          fabingshijian: res.detail.value.fabingshijian,
          fabingdizhi: res.detail.value.fabingdizhi,
          phone: res.detail.value.phone,
          idcard: res.detail.value.id
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }
      })
  },
  formReset2: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  formSubmit3: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?Chuchedanwei=' + e.detail.value.Chuchedanwei + '&CallTime=' + e.detail.value.CallTime + '&FirstyiliaoTime=' + e.detail.value.FirstyiliaoTime + '&Zhijiezhuansongshangji=' + e.detail.value.Zhijiezhuansongshangji + '&Zhidadaoguanshi=' + e.detail.value.Zhidadaoguanshi + '&DaodayiyuandamenTime=' + e.detail.value.DaodayiyuandamenTime + '&YuanneishouzhenTime=' + e.detail.value.YuanneishouzhenTime + '&Yihu=' + e.detail.value.Yihu,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: 'http://47.56.103.207:8181/call/insert',
        data: {
          chuchedanwei: e.detail.value.chuchedanwei,
          callTime: e.detail.value.callTime,
          FirstyiliaoTime: e.detail.value.FirstyiliaoTime,
          Zhijiezhuansongshangji: e.detail.value.Zhijiezhuansongshangji,
          Zhidadaoguanshi: e.detail.value.Zhidadaoguanshi,
          DaodayiyuandamenTime: e.detail.value.DaodayiyuandamenTime,
          YuanneishouzhenTime: e.detail.value.YuanneishouzhenTime,
          Yihu: e.detail.value.Yihu,
          idcard: e.detail.value.id
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }

      })
  },
  formReset3: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 405
  formSubmit4: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?ZhuanyuanType=' + e.detail.value.ZhuanyuanType + '&Hname=' + e.detail.value.Hname + '&FirstyiliaoTime=' + e.detail.value.FirstyiliaoTime + '&Zhijiezhuansongshangji=' + e.detail.value.Zhijiezhuansongshangji + '&Zhidadaoguanshi=' + e.detail.value.Zhidadaoguanshi + '&RumenTime=' + e.detail.value.RumenTime + '&JuedingzhuanyuanTime=' + e.detail.value.JuedingzhuanyuanTime + '&ChumenTime=' + e.detail.value.ChumenTime + '&DaodayiyuandamenTime=' + e.detail.value.DaodayiyuandamenTime + '&YuanneishouzhenTime=' + e.detail.value.YuanneishouzhenTime + '&Yihu=' + e.detail.value.Yihu,
    })
    // console.log(e.detail.value)
    method: "GET",
      wx.request({
        url: 'http://47.56.103.207:8181/zhuanyuan/insert',
        data: {
          zhuanyuantype: e.detail.value.ZhuanyuanType,
          idcard: 123,
          hname: e.detail.value.Hname,
          
          firstyiliaotime: e.detail.value.FirstyiliaoTime,
          zhijiezhuansongshangji: e.detail.value.Zhijiezhuansongshangji,
          juedingzhuanyuantime: e.detail.value.JuedingzhuanyuanTime,
          daodayiyuandamentime: e.detail.value.DaodayiyuandamenTime,
          yuanneijiezhentime: e.detail.value.YuanneijiezhenTime,
          yihu: e.detail.value.Yihu
          
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }

      })
  },
  formReset4: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 405
  formSubmit5: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?DaodayiyuandamenTime=' + e.detail.value.DaodayiyuandamenTime + '&FirstyiliaoTime=' + e.detail.value.FirstyiliaoTime + '&YuanneishouzhenTime=' + e.detail.value.YuanneishouzhenTime + '&Yihu=' + e.detail.value.Yihu,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: 'http://47.56.103.207:8181/ziXingLaiYuanController/insert',
        data: {

          daodayiyuandamenTime: e.detail.value.DaodayiyuandamenTime,
          firstyiliaoTime: e.detail.value.FirstyiliaoTime,
          yuanneishouzhenTime: e.detail.value.YuanneijiezhenTime,
          yihu: e.detail.value.Yihu,
          idcard: 123,
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }
      })
  },
  formReset5: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },

  formSubmit6: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?Fabingdizhi=' + e.detail.value.Fabingdizhi + '&BenciFirstyiliaoTime=' + e.detail.value.BenciFirstyiliaoTime + '&LikaixinchangTime=' + e.detail.value.LikaixinchangTime + '&BenciFirstyiliaorenyuan=' + e.detail.value.BenciFirstyiliaorenyuan,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: 'http://47.56.103.207:8181/yuanneifabing/insert',
        data: {
          fabingdizhi: e.detail.value.Fabingdizhi,
          bencifirstyiliaotime: e.detail.value.BenciFirstyiliaoTime,
          likaixinchangtime: e.detail.value.LikaixinchangTime,
          bencifirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
          idcard: 123
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }
      })
  },
  formReset6: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  
  formSubmit7: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?Zhidadaoguanshi2=' + e.detail.value.Zhidadaoguanshi2 + '&checkbox=' + e.detail.value.checkbox + '&other=' + e.detail.value.other,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: 'http://47.56.103.207:8181/bingqingpinggu/insert',
        data: {
          recorder: e.detail.value.Recorder,
          idcard: 123,
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }
      })
  },
  formReset7: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },

  formSubmit8: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?fillIn2=' + e.detail.value.fillIn2 + '&huXi=' + e.detail.value.huXi + '&maiBo=' + e.detail.value.maiBo + '&xinLv=' + e.detail.value.xinLv + '&diYa=' + e.detail.value.diYa + '&gaoYa=' + e.detail.value.gaoYa + '&tiWen=' + e.detail.value.tiWen,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: 'http://47.56.103.207:8181/shengmingtizheng/insert',
        data: {
          recorder: e.detail.value.fillIn2,
          huxi: e.detail.value.huXi,
          maibo: e.detail.value.maiBo,
          xinlv: e.detail.value.xinLv,
          xueya: e.detail.value.diYa,
          xueya: e.detail.value.gaoYa,
          tiwen: e.detail.value.tiWen,
          idcard: e.detail.value.idcard
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }

      })
  },
  formReset8: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },

  formSubmit9: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?fillIn3=' + e.detail.value.fillIn3 + '&shaicha=' + e.detail.value.shaicha + '&RongShuan=' + e.detail.value.RongShuan + '&jinJiZheng=' + e.detail.value.jinJiZheng + '&shiFouZhiDaRongShuanChangSuo=' + e.detail.value.shiFouZhiDaRongShuanChangSuo + '&rongShuanChangSuo=' + e.detail.value.rongShuanChangSuo + '&signLearnTime=' + e.detail.value.signLearnTime + '&beginCureTime=' + e.detail.value.beginCureTime + '&overCureTime=' + e.detail.value.overCureTime + '&yaoWu=' + e.detail.value.yaoWu + '&jiLiang=' + e.detail.value.jiLiang + '&rongShuanZaiTong=' + e.detail.value.rongShuanZaiTong + '&beginZaoYingTime=' + e.detail.value.beginZaoYingTime + '&rongShuanZaiTong2=' + e.detail.value.rongShuanZaiTong2 + '&buJiuPCI=' + e.detail.value.buJiuPCI + '&decideOperateTime=' + e.detail.value.decideOperateTime + '&OperateTime=' + e.detail.value.OperateTime + '&buBuJiuPCI=' + e.detail.value.buBuJiuPCI + '&beginLearnTime=' + e.detail.value.beginLearnTime,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: 'http://47.56.103.207:8181/rongshuanzhiliao/insert',
        data: {
          recorder: e.detail.value.fillIn3,
          weishaicha: e.detail.value.shaicha,
          shiheqie: e.detail.value.RongShuan,

          jinji: e.detail.value.jinJiZheng,
          idcard: e.detail.value.idcard
        },
        success(e) {
          console.log("上传数据成功", e)
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        },

        fail(e) {
          console.log("上传数据失败", e)
          wx.showToast({
            title: '提交失败',
            icon: "error",
            duration: 2000
          })
        }

      })
  },
  formReset9: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  
//web3
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
  /**
   * 页面的初始数据
   */
  data: {
    months: months,
    month: date.getMonth() + 1,
    days: days,
    day: date.getDate(),
    hours: hours,
    hours: date.getHours(),
    minutes: minutes,
    minutes: date.getMinutes(),
    imgUrls: [
      'https://tse4-mm.cn.bing.net/th/id/OIP.bdUxLlu0j08XNe6W0164igHaEH?w=295&h=180&c=7&o=5&dpr=2&pid=1.7',
      'https://tse2-mm.cn.bing.net/th/id/OIP.vg75pI4NlLRkgMct40mfmQAAAA?w=324&h=70&c=7&o=5&dpr=2&pid=1.7',
      'https://tse4-mm.cn.bing.net/th/id/OIP.A-hb61hlgDai7dYomIOJzAHaFi?w=244&h=183&c=7&o=5&dpr=2&pid=1.7'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: ""

  },
  fold:function(res){
    console.log(res.currentTarget.dataset.id)
    if( isfold%2 == 0){
      this.setData({
        isfold:true
      });
     isfold ++;
    } else{
      this.setData({
        isfold:false
      });
      isfold++;
    }
  },
  fold2:function(res){
    console.log(res.currentTarget.dataset.id)
    if( isfold2%2 == 0){
      this.setData({
        isfold2:true
      });
     isfold2 ++;
    } else{
      this.setData({
        isfold2:false
      });
      isfold2++;
    }
  },
  fold3:function(res){
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
  bindTextAreaBlur: function (res) {
    console.log(res.detail.value)
  },
  checkboxChange: function (e) {
    console.log(e.detail.value)
  },
  radioChange: function (res) {
    console.log(res.detail.value)

  },

  myTap: function (res) {
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
  myTap2:function(res){
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
  myTap3:function(res){
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
  myTap4:function(res){
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
  myTap5:function(res){
    console.log(res.currentTarget.dataset.id)
    if(res.currentTarget.dataset.id == 'rongShuanZhiLiao' && num%2 == 0){
      this.setData({
        isShowh:true
      });
      num ++;
    } else{
      this.setData({
        isShowh:false
      });
      num ++;
    }
  },
  myTap6:function(res){
    console.log(res.currentTarget.dataset.id)
    if(res.currentTarget.dataset.id == 'laiYuanFangShi' && num%2 == 0){
      this.setData({
        isShow10:true
      });
      num ++;
    } else{
      this.setData({
        isShow10:false
      });
      num ++;
    }
  },
  myTap7:function(res){
    console.log(res.currentTarget.dataset.id)
    if(res.currentTarget.dataset.id == 'jiBenXinXi' && num%2 == 0){
      this.setData({
        isShow11:true
      });
      num ++;
    } else{
      this.setData({
        isShow11:false
      });
      num ++;
    }
  },
  myTap1c: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'chuYuanZhenDuan' && num % 2 == 0) {
      this.setData({
        isShow1c: true
      });
      num++;
    } else {
      this.setData({
        isShow1c: false
      });
      num++;
    }
  },
  // 患者转归
  myTap2c: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'huanZheZhuanGui' && num % 2 == 0) {
      this.setData({
        isShow2c: true
      });
      num++;
    } else {
      this.setData({
        isShow2c: false
      });
      num++;
    }
  },
  // 住院期间用药
  myTap3c: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'zhuYuanQiJianYongYao' && num % 2 == 0) {
      this.setData({
        isShow3c: true
      });
      num++;
    } else {
      this.setData({
        isShow3c: false
      });
      num++;
    }
  },
  // ACS患者
  myTap4c: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'acsHuanZhe' && num % 2 == 0) {
      this.setData({
        isShow4c: true
      });
      num++;
    } else {
      this.setData({
        isShow4c: false
      });
      num++;
    }
  },
  //  第二部分---胸痛诊疗
  myTap1b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'xinDianTu' && num % 2 == 0) {
      this.setData({
        isShow1b: true
      });
      num++;
    } else {
      this.setData({
        isShow1b: false
      });
      num++;
    }
  },
  myTap2b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'shiYanShiJianCha' && num % 2 == 0) {
      this.setData({
        isShow2b: true
      });
      num++;
    } else {
      this.setData({
        isShow2b: false
      });
      num++;
    }
  },
  myTap3b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'xinNeiHuiZhen' && num % 2 == 0) {
      this.setData({
        isShow3b: true
      });
      num++;
    } else {
      this.setData({
        isShow3b: false
      });
      num++;
    }
  },
  myTap4b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'zhenDuan' && num % 2 == 0) {
      this.setData({
        isShow4b: true
      });
      num++;
    } else {
      this.setData({
        isShow4b: false
      });
      num++;
    }
  },
  myTap5b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'chuShiYaoWuZhiLiao' && num % 2 == 0) {
      this.setData({
        isShow5b: true
      });
      num++;
    } else {
      this.setData({
        isShow5b: false
      });
      num++;
    }
  },
  myTap6b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'gracePingGu' && num % 2 == 0) {
      this.setData({
        isShow6b: true
      });
      num++;
    } else {
      this.setData({
        isShow6b: false
      });
      num++;
    }
  },
  myTap7b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'crusadePingFen' && num % 2 == 0) {
      this.setData({
        isShow7b: true
      });
      num++;
    } else {
      this.setData({
        isShow7b: false
      });
      num++;
    }
  },
  myTap8b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'nsteChuLiCeLue' && num % 2 == 0) {
      this.setData({
        isShow8b: true
      });
      num++;
    } else {
      this.setData({
        isShow8b: false
      });
      num++;
    }
  },
  myTap9b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'stemiZaiGuanZhiCuoShi' && num % 2 == 0) {
      this.setData({
        isShow9b: true
      });
      num++;
    } else {
      this.setData({
        isShow9b: false
      });
      num++;
    }
  },
  myTap10b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'daoGuanShi' && num % 2 == 0) {
      this.setData({
        isShow10b: true
      });
      num++;
    } else {
      this.setData({
        isShow10b: false
      });
      num++;
    }
  },
  myTap11b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'zhuDongMaiJiaCengZhenLiao' && num % 2 == 0) {
      this.setData({
        isShow11b: true
      });
      num++;
    } else {
      this.setData({
        isShow11b: false
      });
      num++;
    }
  },
  myTap12b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'feiShuanSeZhenLiao' && num % 2 == 0) {
      this.setData({
        isShow12b: true
      });
      num++;
    } else {
      this.setData({
        isShow12b: false
      });
      num++;
    }
  },
  myTap13b: function (res) {
    console.log(res.currentTarget.dataset.id)
    if (res.currentTarget.dataset.id == 'otherXiongTong' && num % 2 == 0) {
      this.setData({
        isShow13b: true
      });
      num++;
    } else {
      this.setData({
        isShow13b: false
      });
      num++;
    }
  },
  gettime: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  },
  gettime2: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time2: time
    });
  },
  gettime3: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time3: time
    });
  },
  // myTap2:function(res){

  //   console.log(res.detail.value)
  //   if (res.detail.value=='shi') {

  //     this.setData({
  //       isShow:true
  //     })

  //   } else {
  //     this.setData({
  //       isShow:false
  //     })
  //   }

  // },


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