// pages/web22/web22.js
Page({
  // 心电图
  formSubmit1: function (e) {
    // console.log(e.detail.value)
    wx.reLaunch({
      url: '/pages/menu/menu?fillIn=' + e.detail.value.fillIn + '&xinDianTu=' + e.detail.value.xinDianTu + '&noReason=' + e.detail.value.noReason + '&youXinDianTu=' + e.detail.value.youXinDianTu + '&firstMapTime=' + e.detail.value.firstMapTime + '&mapDiagnosisTime=' + e.detail.value.mapDiagnosisTime + '&yuanChengXinDianTu=' + e.detail.value.yuanChengXinDianTu + '&acceptTime=' + e.detail.value.acceptTime + '&chuanShuFangShi=' + e.detail.value.chuanShuFangShi + '&yuanChengXinDianTu2=' + e.detail.value.yuanChengXinDianTu2,
    })
    method: "POST",
      wx.request({
        url: 'http://localhost:3306:8080/patient/insert',
        data: {
          name: e.detail.value.name,
          age: e.detail.value.age,
          idCard: e.detail.value.idCard,
          zhuyuanhao: e.detail.value.zhuyuanhao,
          gender: e.detail.value.gender
        },
        success(e) {
          console.log("上传数据成功", e)
        },
        fail(e) {
          console.log("上传数据失败", e)
        }
      })
  },
  formReset1: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 实验室检查
  formSubmit2: function (res) {
    wx.reLaunch({
      url: '/pages/menu/menu?fillIn2=' + res.detail.value.fillIn2 + '&jiGaiDanBai=' + res.detail.value.jiGaiDanBai + '&number=' + res.detail.value.number + '&jiGaiDanBaiYinYangXing=' + res.detail.value.jiGaiDanBaiYinYangXing + '&drawBloodOkTime=' + res.detail.value.drawBloodOkTime + '&getReporterTime=' + res.detail.value.getReporterTime + '&jiGaiDanBai2=' + res.detail.value.jiGaiDanBai2 + '&jiGan=' + res.detail.value.jiGan + '&jigan=' + res.detail.value.jigan + '&erJuTi=' + res.detail.value.erJuTi + '&erjuti=' + res.detail.value.erjuti + '&bNP=' + res.detail.value.bNP + '&bnp=' + res.detail.value.bnp + '&ntprobnp=' + res.detail.value.ntprobnp + '&nt_probnp=' + res.detail.value.nt_probnp + '&mYO=' + res.detail.value.mYO + '&myo=' + res.detail.value.myo + '&ckNB=' + res.detail.value.ckNB + '&cknb=' + res.detail.value.cknb,
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
  formReset2: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 心内会诊
  formSubmit3: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?fillIn3=' + e.detail.value.fillIn3 + '&shiFouXinNeiHuiZhen=' + e.detail.value.shiFouXinNeiHuiZhen + '&huiZhenFangShi=' + e.detail.value.huiZhenFangShi + '&informConsultationTime=' + e.detail.value.informConsultationTime + '&consultationTime=' + e.detail.value.consultationTime + '&shiFouXinNeiHuiZhen2=' + e.detail.value.shiFouXinNeiHuiZhen2,
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
  formReset3: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 诊断
  formSubmit4: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?fillIn4=' + e.detail.value.fillIn4 + '&chuBuZhenDuan=' + e.detail.value.chuBuZhenDuan + '&huanZheZiYuanFangQiHouXuZhiLiao=' + e.detail.value.huanZheZiYuanFangQiHouXuZhiLiao + '&firstDiagnosisTime=' + e.detail.value.firstDiagnosisTime + '&doctor=' + e.detail.value.doctor + '&killipFenJi=' + e.detail.value.killipFenJi + '&nyhaFenJi=' + e.detail.value.nyhaFenJi + '&raoXingJiZhen=' + e.detail.value.raoXingJiZhen + '&raoXingICU=' + e.detail.value.raoXingICU,
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
  formReset4: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // ACS诊疗
  // 初始药物治疗
  formSubmit5: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?orginMedician=' + e.detail.value.orginMedician + '&kangXueXiaoBanZhiLiao=' + e.detail.value.kangXueXiaoBanZhiLiao + '&kangNingZhiLiao=' + e.detail.value.kangNingZhiLiao + '&taTingZhiLiao=' + e.detail.value.taTingZhiLiao + '&beiTaZuJi=' + e.detail.value.beiTaZuJi + '&aSiPiLin=' + e.detail.value.aSiPiLin + '&aSiPiLinTime=' + e.detail.value.aSiPiLinTime + '&luCiGeLei=' + e.detail.value.luCiGeLei + '&luCiGeLeiTime=' + e.detail.value.luCiGeLeiTime + '&tiGeRuiLuo=' + e.detail.value.tiGeRuiLuo + '&tiGeRuiLuoTime=' + e.detail.value.tiGeRuiLuoTime + '&Anticoagulants=' + e.detail.value.Anticoagulants + '&dose=' + e.detail.value.dose + '&AnticoagulantsTime=' + e.detail.value.AnticoagulantsTime + '&fillIn5=' + e.detail.value.fillIn5,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          idcard: e.detail.value.idcard,
          DaodayiyuandamenTime: e.detail.value.DaodayiyuandamenTime,
          FirstyiliaoTime: e.detail.value.FirstyiliaoTime,
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
  formReset5: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },

  // Grace评估
  formSubmit6: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?gracePingGu=' + e.detail.value.gracePingGu + '&graceJiGaoWei=' + e.detail.value.graceJiGaoWei + '&fillIn6=' + e.detail.value.fillIn6 + '&ageScore=' + e.detail.value.ageScore + '&heartScore=' + e.detail.value.heartScore + '&bloodScore=' + e.detail.value.bloodScore + '&jiGanScore=' + e.detail.value.jiGanScore + '&killipScore=' + e.detail.value.killipScore + '&dangerScore=' + e.detail.value.dangerScore + '&allScore=' + e.detail.value.allScore + '&nsteacsWeiXianFenCeng=' + e.detail.value.nsteacsWeiXianFenCeng + '&againTime=' + e.detail.value.againTime + '&fillIn7=' + e.detail.value.fillIn7 + '&allScore2=' + e.detail.value.allScore2 + '&nsteacsWeiXianFenCeng2=' + e.detail.value.nsteacsWeiXianFenCeng2,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset6: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // Crusade评分
  formSubmit7: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?jiXianScore=' + e.detail.value.jiXianScore + '&bloodScore2=' + e.detail.value.bloodScore2 + '&jiGanScore2=' + e.detail.value.jiGanScore2 + '&heartScore2=' + e.detail.value.heartScore2 + '&otherDangerScore=' + e.detail.value.otherDangerScore + '&allScore3=' + e.detail.value.allScore3 + '&weiXianFenCeng=' + e.detail.value.weiXianFenCeng + '&fillIn8=' + e.detail.value.fillIn8,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset7: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // NSTE-ACS处理策略
  formSubmit8: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?nsteacsChuLiCeLue=' + e.detail.value.nsteacsChuLiCeLue + '&erSiHourNeiJieRuZhiLiao=' + e.detail.value.erSiHourNeiJieRuZhiLiao + '&actualCureTime=' + e.detail.value.actualCureTime + '&erHourNeiJieRuZhiLiao=' + e.detail.value.erHourNeiJieRuZhiLiao + '&decideDoctor=' + e.detail.value.decideDoctor + '&decideOptionTime=' + e.detail.value.decideOptionTime + '&startPipeTime=' + e.detail.value.startPipeTime + '&beginInformedTime2=' + e.detail.value.beginInformedTime2 + '&signInformedTime2=' + e.detail.value.signInformedTime2 + '&fillIn9=' + e.detail.value.fillIn9,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset8: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // STEMI再灌注措施
  formSubmit9: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?qiTaBiaoXian=' + e.detail.value.qiTaBiaoXian + '&fillIn10=' + e.detail.value.fillIn10 + '&stemiZaiGuanZhiCuoShi=' + e.detail.value.stemiZaiGuanZhiCuoShi + '&stemiCuoShi=' + e.detail.value.stemiCuoShi + '&decideDoctor2=' + e.detail.value.decideDoctor2 + '&decideOptionTime2=' + e.detail.value.decideOptionTime2 + '&startPipeTime2=' + e.detail.value.startPipeTime2 + '&beginInformedTime3=' + e.detail.value.beginInformedTime3 + '&signInformedTime3=' + e.detail.value.signInformedTime3 + '&cuoShi=' + e.detail.value.cuoShi + '&decideOptionTime3=' + e.detail.value.decideOptionTime3 + '&startTime3=' + e.detail.value.startTime3,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset9: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 导管室
  formSubmit10: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?pipeActivationTime=' + e.detail.value.pipeActivationTime + '&getPipeTime=' + e.detail.value.getPipeTime + '&startPunctureTime=' + e.detail.value.startPunctureTime + '&radiographyTime=' + e.detail.value.radiographyTime + '&timi=' + e.detail.value.timi + '&anticoagulationTime=' + e.detail.value.anticoagulationTime + '&anticoagulation=' + e.detail.value.anticoagulation + '&anticoagulationDose=' + e.detail.value.anticoagulationDose + '&wireTime=' + e.detail.value.wireTime + '&overOptionTime=' + e.detail.value.overOptionTime + '&interventionDoctor=' + e.detail.value.interventionDoctor + '&d2wShiJianShiFouYanWu=' + e.detail.value.d2wShiJianShiFouYanWu + '&d2wYanWuYuanYin=' + e.detail.value.d2wYanWuYuanYin + '&ruLu=' + e.detail.value.ruLu + '&criminalBlood=' + e.detail.value.criminalBlood + '&narrow=' + e.detail.value.narrow + '&radiographyTimi=' + e.detail.value.radiographyTimi + '&zhiJiaNeiXueShuan=' + e.detail.value.zhiJiaNeiXueShuan + '&fenChaBingBian=' + e.detail.value.fenChaBingBian + '&cto=' + e.detail.value.cto + '&gaiHuaBingBian=' + e.detail.value.gaiHuaBingBian + '&pci=' + e.detail.value.pci + '&shuZhongChuLi=' + e.detail.value.shuZhongChuLi + '&optionedTimi=' + e.detail.value.optionedTimi + '&shelf=' + e.detail.value.shelf + '&zhiJiaZhongLei=' + e.detail.value.zhiJiaZhongLei + '&nocriminalBlood1=' + e.detail.value.nocriminalBlood1 + '&narrow1=' + e.detail.value.narrow1 + '&radiographyTimi1=' + e.detail.value.radiographyTimi1 + '&zhiJiaNeiXueShuan2=' + e.detail.value.zhiJiaNeiXueShuan2 + '&fenChaBingBian2=' + e.detail.value.fenChaBingBian2 + '&cto2=' + e.detail.value.cto2 + '&gaiHuaBingBian2=' + e.detail.value.gaiHuaBingBian2 + '&pci2=' + e.detail.value.pci2 + '&shuZhongChuLi1=' + e.detail.value.shuZhongChuLi1 + '&optionedTimi1=' + e.detail.value.optionedTimi1 + '&shelf1=' + e.detail.value.shelf1 + '&zhiJiaZhongLei2=' + e.detail.value.zhiJiaZhongLei2 + '&nocriminalBlood2=' + e.detail.value.nocriminalBlood2 + '&narrow2=' + e.detail.value.narrow2 + '&radiographyTimi2=' + e.detail.value.radiographyTimi2 + '&zhiJiaNeiXueShuan3=' + e.detail.value.zhiJiaNeiXueShuan3 + '&fenChaBingBian3=' + e.detail.value.fenChaBingBian3 + '&cto3=' + e.detail.value.cto3 + '&gaiHuaBingBian3=' + e.detail.value.gaiHuaBingBian3 + '&pci3=' + e.detail.value.pci3 + '&shuZhongChuLi2=' + e.detail.value.shuZhongChuLi2 + '&optionedTimi2=' + e.detail.value.optionedTimi2 + '&shelf2=' + e.detail.value.shelf2 + '&zhiJiaZhongLei3=' + e.detail.value.zhiJiaZhongLei3 + '&nocriminalBlood3=' + e.detail.value.nocriminalBlood3 + '&narrow3=' + e.detail.value.narrow3 + '&radiographyTimi3=' + e.detail.value.radiographyTimi3 + '&zhiJiaNeiXueShuan4=' + e.detail.value.zhiJiaNeiXueShuan4 + '&fenChaBingBian4=' + e.detail.value.fenChaBingBian4 + '&cto4=' + e.detail.value.cto4 + '&gaiHuaBingBian4=' + e.detail.value.gaiHuaBingBian4 + '&pci4=' + e.detail.value.pci4 + '&shuZhongChuLi3=' + e.detail.value.shuZhongChuLi3 + '&optionedTimi3=' + e.detail.value.optionedTimi3 + '&shelf3=' + e.detail.value.shelf3 + '&zhiJiaZhongLei4=' + e.detail.value.zhiJiaZhongLei4,
    })
    console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset10: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 主动脉夹层诊疗
  formSubmit11: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?firstDiagnosisTime2=' + e.detail.value.firstDiagnosisTime2 + '&doctor2=' + e.detail.value.doctor2 + '&yingXiangXueJianCha=' + e.detail.value.yingXiangXueJianCha + '&informedCTTime=' + e.detail.value.informedCTTime + '&okPrepareTime=' + e.detail.value.okPrepareTime + '&beginScanTime=' + e.detail.value.beginScanTime + '&ctReporterTime=' + e.detail.value.ctReporterTime + '&inform=' + e.detail.value.inform + '&diagnosisTime=' + e.detail.value.diagnosisTime + '&diagnosisTime2=' + e.detail.value.diagnosisTime2 + '&jiaCengLeiXing=' + e.detail.value.jiaCengLeiXing + '&zhiLiaoCeLue=' + e.detail.value.zhiLiaoCeLue,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset11: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 肺栓塞诊疗
  formSubmit12: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?firstDiagnosisTime3=' + e.detail.value.firstDiagnosisTime3 + '&doctor3=' + e.detail.value.doctor3 + '&yingXiangXueJianCha2=' + e.detail.value.yingXiangXueJianCha2 + '&informedCTTime2=' + e.detail.value.informedCTTime2 + '&okPrepareTime2=' + e.detail.value.okPrepareTime2 + '&beginScanTime2=' + e.detail.value.beginScanTime2 + '&ctReporterTime2=' + e.detail.value.ctReporterTime2 + '&weiXianFenCeng=' + e.detail.value.weiXianFenCeng + '&AnticoagulantsTime2=' + e.detail.value.AnticoagulantsTime2,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset12: function () {
    console.log()
    wx.showToast({
      title: '重置成功',
      icon: "success",
      duration: 2000
    })
  },
  // 其他胸痛
  formSubmit13: function (e) {
    wx.reLaunch({
      url: '/pages/menu/menu?qiTaXiongTong=' + e.detail.value.qiTaXiongTong + '&xiongTongBiaoXian=' + e.detail.value.xiongTongBiaoXian + '&qiTaXiongTong2=' + e.detail.value.qiTaXiongTong2 + '&qiTaXiongTongBiaoXian=' + e.detail.value.qiTaXiongTongBiaoXian + '&qiTaXiongTong3=' + e.detail.value.qiTaXiongTong3 + '&firstDiagnosisTime4=' + e.detail.value.firstDiagnosisTime4 + '&doctor4=' + e.detail.value.doctor4 + '&chuLiCuoShi=' + e.detail.value.chuLiCuoShi,
    })
    // console.log(e.detail.value)
    method: "POST",
      wx.request({
        url: '',
        data: {
          Fabingdizhi: e.detail.value.Fabingdizhi,
          BenciFirstyiliaoTime: e.detail.value.BenciFirstyiliaoTime,
          LikaixinchangTime: e.detail.value.LikaixinchangTime,
          BenciFirstyiliaorenyuan: e.detail.value.BenciFirstyiliaorenyuan,
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
  formReset13: function () {
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
  data: {},

  bindTextAreaBlur: function (res) {
    console.log(res.detail.value)
  },
  checkboxChange: function (e) {
    console.log(e.detail.value)
  },
  radioChange: function (res) {
    console.log(res.detail.value)
  },
  //获取用户输入信息
  iptName(res) {
    console.log(res.detail.value)
    this.setData({
      name: res.detail.value
    })
  },
  //提交用户输入的信息
  bind() {
    let name2 = this.data.name
    if (name2.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none'
      })
    } else {
      wx.request({
        url: 'url',
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          name: name2
        },
        success(res) {
          console.log("post请求提交数据成功", res)
        },
        fail(res) {
          console.log("post请求提交数据失败", res)
        }
      })
    }

  },
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