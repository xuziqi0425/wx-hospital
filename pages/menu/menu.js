
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    // 患者基本信息
    var name = e.name;
    var gender = e.gender;
    var age = e.age;
    var zhuyuanhao = e.zhuyuanhao;
    var id = e.id;
    // 急救基本信息
    var fabingshijian = e.fabingshijian;
    var fabingdizhi = e.fabingdizhi;
    var phone = e.phone;
    // 呼叫120
    var Chuchedanwei = e.Chuchedanwei
    var CallTime = e.CallTime;
    var FirstyiliaoTime = e.FirstyiliaoTime;
    var Zhijiezhuansongshangji = e.Zhijiezhuansongshangji;
    var Zhidadaoguanshi = e.Zhidadaoguanshi;
    var DaodayiyuandamenTime = e.DaodayiyuandamenTime;
    var YuanneishouzhenTime = e.YuanneishouzhenTime;
    var Yihu = e.Yihu;
    // 转院&自行来院
    var ZhuanyuanType = e.ZhuanyuanType;
    var Hname = e.Hname;
    var FirstyiliaoTime = e.FirstyiliaoTime;
    var Zhijiezhuansongshangji = e.Zhijiezhuansongshangji
    var Zhidadaoguanshi = e.Zhidadaoguanshi;
    var RumenTime = e.RumenTime;
    var JuedingzhuanyuanTime = e.JuedingzhuanyuanTime;
    var ChumenTime = e.ChumenTime;
    var DaodayiyuandamenTime = e.DaodayiyuandamenTime;
    var YuanneishouzhenTime = e.YuanneishouzhenTime;
    var Yihu = e.Yihu;
    // 院内发病
    var Fabingdizhi = e.Fabingdizhi;
    var BenciFirstyiliaoTime = e.BenciFirstyiliaoTime;
    var LikaixinchangTime = e.LikaixinchangTime;
    var BenciFirstyiliaorenyuan = e.BenciFirstyiliaorenyuan;
    // 病情估计
    var bingQing = e.bingQing
    var checkbox = e.checkbox;
    var other = e.other;
    var Recorder = e.Recorder;
    // 生命体征
    var fillIn2 = e.fillIn2
    var huXi = e.huXi;
    var maiBo = e.maiBo;
    var xinLv = e.xinLv;
    var diYa = e.diYa;
    var gaoYa = e.gaoYa;
    var tiWen = e.tiWen;
    // 溶栓治疗
    var fillIn3 = e.fillIn3;
    var shaicha = e.shaicha;
    var RongShuan = e.RongShuan;
    var jinJiZheng = e.jinJiZheng;
    var shiFouZhiDaRongShuanChangSuo = e.shiFouZhiDaRongShuanChangSuo;
    var rongShuanChangSuo = e.rongShuanChangSuo;
    var signLearnTime = e.signLearnTime;
    var beginCureTime = e.beginCureTime;
    var overCureTime = e.overCureTime;
    var yaoWu = e.yaoWu;
    var jiLiang = e.jiLiang;
    var rongShuanZaiTong = e.rongShuanZaiTong;
    var beginZaoYingTime = e.beginZaoYingTime;
    var rongShuanZaiTong2 = e.rongShuanZaiTong2;
    var buJiuPCI = e.buJiuPCI;
    var decideOperateTime = e.decideOperateTime;
    var OperateTime = e.OperateTime;
    var buBuJiuPCI = e.buBuJiuPCI;
    var beginLearnTime = e.beginLearnTime;
    // 心电图
    var fillIn = e.fillIn;
    var xinDianTu = e.xinDianTu;
    var noReason = e.noReason;
    var youXinDianTu = e.youXinDianTu;
    var firstMapTime = e.firstMapTime;
    var mapDiagnosisTime = e.mapDiagnosisTime;
    var yuanChengXinDianTu = e.yuanChengXinDianTu;
    var acceptTime = e.acceptTime;
    var chuanShuFangShi = e.chuanShuFangShi;
    var yuanChengXinDianTu2 = e.yuanChengXinDianTu2;
    // 实验室检查
    var fillIn2 = e.fillIn2;
    var jiGaiDanBai = e.jiGaiDanBai;
    var jiGaiDanBaiLeiXing = e.jiGaiDanBaiLeiXing;
    var number = e.number;
    var jiGaiDanBaiYinYangXing = e.jiGaiDanBaiYinYangXing;
    var drawBloodOkTime = e.drawBloodOkTime;
    var getReporterTime = e.getReporterTime;
    var jiGaiDanBai2 = e.jiGaiDanBai2;
    var jiGan = e.jiGan;
    var jigan = e.jigan;
    var erJuTi = e.erJuTi;
    var erjuti = e.erjuti;
    var bNP = e.bNP;
    var bnp = e.bnp;
    var ntprobnp = e.ntprobnp;
    var nt_probnp = e.nt_probnp;
    var mYO = e.mYO;
    var myo = e.myo;
    var ckNB = e.ckNB;
    var cknb = e.cknb;
    // 心内会诊
    var fillIn3 = e.fillIn3;
    var shiFouXinNeiHuiZhen = e.shiFouXinNeiHuiZhen;
    var huiZhenFangShi = e.huiZhenFangShi;
    var informConsultationTime = e.informConsultationTime;
    var consultationTime = e.consultationTime;
    var shiFouXinNeiHuiZhen2 = e.shiFouXinNeiHuiZhen2;
    // 诊断
    var fillIn4 = e.fillIn4;
    var chuBuZhenDuan = e.chuBuZhenDuan;
    var huanZheZiYuanFangQiHouXuZhiLiao = e.huanZheZiYuanFangQiHouXuZhiLiao;
    var firstDiagnosisTime = e.firstDiagnosisTime;
    var doctor = e.doctor;
    var killipFenJi = e.killipFenJi;
    var nyhaFenJi = e.nyhaFenJi;
    var raoXingJiZhen = e.raoXingJiZhen;
    var raoXingICU = e.raoXingICU;
    // ACS诊疗
    // 初始药物治疗
    var orginMedician = e.orginMedician;
    var kangXueXiaoBanZhiLiao = e.kangXueXiaoBanZhiLiao;
    var kangNingZhiLiao = e.kangNingZhiLiao;
    var taTingZhiLiao = e.taTingZhiLiao;
    var beiTaZuJi = e.beiTaZuJi;
    var aSiPiLin = e.aSiPiLin;
    var aSiPiLinTime = e.aSiPiLinTime;
    var luCiGeLei = e.luCiGeLei;
    var luCiGeLeiTime = e.luCiGeLeiTime;
    var tiGeRuiLuo = e.tiGeRuiLuo;
    var tiGeRuiLuoTime = e.tiGeRuiLuoTime;
    var Anticoagulants = e.Anticoagulants;
    var dose = e.dose;
    var AnticoagulantsTime = e.AnticoagulantsTime;
    var fillIn5 = e.fillIn5;
    //Grace评估
    var gracePingGu = e.gracePingGu;
    var graceJiGaoWei = e.graceJiGaoWei;
    var fillIn6 = e.fillIn6;
    var ageScore = e.ageScore;
    var heartScore = e.heartScore;
    var bloodScore = e.bloodScore;
    var jiGanScore = e.jiGanScore;
    var killipScore = e.killipScore;
    var dangerScore = e.dangerScore;
    var allScore = e.allScore;
    var nsteacsWeiXianFenCeng = e.nsteacsWeiXianFenCeng;
    var againTime = e.againTime;
    var fillIn7 = e.fillIn7;
    var allScore2 = e.allScore2;
    var nsteacsWeiXianFenCeng2 = e.nsteacsWeiXianFenCeng2;
    // Crusade评分
    var jiXianScore = e.jiXianScore;
    var bloodScore2 = e.bloodScore2;
    var jiGanScore2 = e.jiGanScore2;
    var heartScore2 = e.heartScore2;
    var otherDangerScore = e.otherDangerScore;
    var allScore3 = e.allScore3;
    var weiXianFenCeng = e.weiXianFenCeng;
    var fillIn8 = e.fillIn8;
    // NSTE-ACS处理策略
    var nsteacsChuLiCeLue = e.nsteacsChuLiCeLue;
    var erSiHourNeiJieRuZhiLiao = e.erSiHourNeiJieRuZhiLiao;
    var actualCureTime = e.actualCureTime;
    var erHourNeiJieRuZhiLiao = e.erHourNeiJieRuZhiLiao;
    var decideDoctor = e.decideDoctor;
    var decideOptionTime = e.decideOptionTime;
    var startPipeTime = e.startPipeTime;
    var beginInformedTime2 = e.beginInformedTime2;
    var signInformedTime2 = e.signInformedTime2;
    var fillIn9 = fillIn9;
    // STEMI再灌注措施
    var qiTaBiaoXian = e.qiTaBiaoXian;
    var fillIn10 = e.fillIn10;
    var stemiZaiGuanZhiCuoShi = e.stemiZaiGuanZhiCuoShi;
    var stemiCuoShi = e.stemiCuoShi;
    var zhiJiePCI = e.zhiJiePCI;
    var decideDoctor2 = e.decideDoctor2;
    var decideOptionTime2 = e.decideOptionTime2;
    var startPipeTime2 = e.startPipeTime2;
    var beginInformedTime3 = e.beginInformedTime3;
    var signInformedTime3 = signInformedTime3;
    var cuoShi = e.cuoShi;
    var decideOptionTime3 = e.decideOptionTime3;
    var startTime3 = startTime3;
     //导管室
    var pipeActivationTime = e.pipeActivationTime
    var getPipeTime = e.getPipeTime
    var startPunctureTime= e.startPunctureTime
    var radiographyTime = e.radiographyTime
    var timi = e.timi
    var anticoagulationTime = e.anticoagulationTime
     var anticoagulation = e.anticoagulation
     var anticoagulationDose = e.anticoagulationDose
     var wireTime = e.wireTime
     var overOptionTime = e.overOptionTime
     var interventionDoctor = e.interventionDoctor
     var d2wShiJianShiFouYanWu = e.d2wShiJianShiFouYanWu
     var d2wYanWuYuanYin = e.d2wYanWuYuanYin
     var ruLu = e.ruLu
      // 罪犯血管
      var criminalBlood = e.criminalBlood
      var narrow = e.narrow
      var radiographyTimi = e.radiographyTimi
      var zhiJiaNeiXueShuan = e.zhiJiaNeiXueShuan
      var fenChaBingBian = e.fenChaBingBian
      var cto = e.cto
      var gaiHuaBingBian = e.gaiHuaBingBian
      var pci = e.pci
      var shuZhongChuLi = e.shuZhongChuLi
      var optionedTimi = e.optionedTimi
      var shelf = e.shelf
      var zhiJiaZhongLei = e.zhiJiaZhongLei
      // 非罪犯血管1
      var criminalBlood1 = e.criminalBlood1
      var narrow1 = e.narrow1
      var radiographyTimi1 = e.radiographyTimi1
      var zhiJiaNeiXueShuan2 = e.zhiJiaNeiXueShuan2
      var fenChaBingBian2 = e.fenChaBingBian2
      var cto2 = e.cto2
      var gaiHuaBingBian2 = e.gaiHuaBingBian2
      var pci2 = e.pci2
      var shuZhongChuLi1 = e.shuZhongChuLi1
      var optionedTimi1 = e.optionedTimi1
      var shelf1 = e.shelf1
      var zhiJiaZhongLei2 = e.zhiJiaZhongLei2
      // 非罪犯血管2
      var criminalBlood2 = e.criminalBlood2
      var narrow2 = e.narrow2
      var radiographyTimi2 = e.radiographyTimi2
      var zhiJiaNeiXueShuan3 = e.zhiJiaNeiXueShuan3
      var fenChaBingBian3 = e.fenChaBingBian3
      var cto3 = e.cto3
      var gaiHuaBingBian3 = e.gaiHuaBingBian3
      var pci3 = e.pci3
      var shuZhongChuLi2 = e.shuZhongChuLi2
      var optionedTimi2 = e.optionedTimi2
      var shelf2 = e.shelf2
      var zhiJiaZhongLei3 = e.zhiJiaZhongLei3
      // 非罪犯血管3
      var criminalBlood3 = e.criminalBlood3
      var narrow3 = e.narrow3
      var radiographyTimi3 = e.radiographyTimi3
      var zhiJiaNeiXueShuan4 = e.zhiJiaNeiXueShuan4
      var fenChaBingBian4 = e.fenChaBingBian4
      var cto4 = e.cto4
      var gaiHuaBingBian4 = e.gaiHuaBingBian4
      var pci4 = e.pci4
      var shuZhongChuLi3 = e.shuZhongChuLi3
      var optionedTimi3 = e.optionedTimi3
      var shelf3 = e.shelf3
      var zhiJiaZhongLei4 = e.zhiJiaZhongLei4
    // 主动脉夹层诊疗
    var firstDiagnosisTime2 = e.firstDiagnosisTime2;
    var doctor2 = e.doctor2;
    var yingXiangXueJianCha = e.yingXiangXueJianCha;
    var informedCTTime = e.informedCTTime;
    var okPrepareTime = e.okPrepareTime;
    var beginScanTime = e.beginScanTime;
    var ctReporterTime = e.ctReporterTime;
    var inform = e.inform;
    var diagnosisTime = e.diagnosisTime;
    var diagnosisTime2 = e.diagnosisTime2;
    var jiaCengLeiXing = e.jiaCengLeiXing;
    var zhiLiaoCeLue = e.zhiLiaoCeLue;
    // 肺栓塞诊疗
    var firstDiagnosisTime3 = e.firstDiagnosisTime3;
    var doctor3 = e.doctor3;
    var yingXiangXueJianCha2 = e.yingXiangXueJianCha2;
    var informedCTTime2 = e.informedCTTime2;
    var okPrepareTime2 = e.okPrepareTime2;
    var beginScanTime2 = e.beginScanTime2;
    var ctReporterTime2 = e.ctReporterTime2;
    var weiXianFenCeng = e.weiXianFenCeng;
    var AnticoagulantsTime2 = e.AnticoagulantsTime2;
    // 其他胸痛
    var qiTaXiongTong = e.qiTaXiongTong;
    var xiongTongBiaoXian = e.xiongTongBiaoXian;
    var qiTaXiongTong2 = e.qiTaXiongTong2;
    var qiTaXiongTongBiaoXian = e.qiTaXiongTongBiaoXian;
    var qiTaXiongTong3 = e.qiTaXiongTong3;
    var firstDiagnosisTime4 = e.firstDiagnosisTime4;
    var doctor4 = e.doctor4;
    var chuLiCuoShi = e.chuLiCuoShi;
    // 患者转归
    // 出院诊断
    var xiongTong = e.xiongTong;
    var xinYuanXingXiongTong = e.xinYuanXingXiongTong;
    var xiongTongBiaoXian = e.xiongTongBiaoXian;
    var qiTaXinYuanXingXiongTong = e.qiTaXinYuanXingXiongTong;
    var qiTaBiaoXian = e.qiTaBiaoXian;
    var diagnosisTime = e.diagnosisTime;
    var inHospitalDay = e.inHospitalDay;
    var allCost = e.allCost;
    // 患者转归
    var zhuanGuiLeiXing = e.zhuanGuiLeiXing;
    var leftHospitalTime = e.leftHospitalTime;
    var zhiLiaoJieGuo = e.zhiLiaoJieGuo;
    var zhuanGuiLeiXing2 = e.zhuanGuiLeiXing2;
    var leftHospitalGateTime = e.leftHospitalGateTime;
    var hospitalName = e.hospitalName;
    var shiFouZhuanYunPCI = e.shiFouZhuanYunPCI;
    var shiFouYuanChengXinDianTu = e.shiFouYuanChengXinDianTu;
    var zhuanGuiLeiXing3 = e.zhuanGuiLeiXing3;
    var turnDeapartmentTime = e.turnDeapartmentTime;
    var cureInDepartment = e.cureInDepartment;
    var turnDeapartmentReason = e.turnDeapartmentReason;
    var zhuanGuiLeiXing4 = e.zhuanGuiLeiXing4;
    var dieTime = e.dieTime;
    var dieReason = e.dieReason;
    var liYuanXuanJiao = e.liYuanXuanJiao;
    var cocid19 = e.cocid19;
    // 住院期间用药
    var jiangTangYao = e.jiangTangYao;
    var kouFuKangNingYao = e.kouFuKangNingYao;
    var pcsk9 = e.pcsk9;
    var dose = e.dose;
    // ACS患者
    var xinFaXinShuai = e.xinFaXinShuai;
    var arni = e.arni;
    var zhuYuanQiJianBingFaZheng = e.zhuYuanQiJianBingFaZheng;
    var weiXianYinSu = e.weiXianYinSu;
    var heBingJiBing = e.heBingJiBing;
    var jianChaJieGuo = e.jianChaJieGuo;
    var jiGaiDanbai = e.jiGaiDanbai;
    var jianChaJieGuo2 = e.jianChaJieGuo2;
    var bnpZuiGaoZhi2 = e.bnpZuiGaoZhi2;
    var jianChaJieGuo3 = e.jianChaJieGuo3;
    var ntproBNP = e.ntproBNP;
    var jianChaJieGuo4 = e.jianChaJieGuo4;
    var tcZuiGaoZhi = e.tcZuiGaoZhi;
    var jianChaJieGuo5 = e.jianChaJieGuo5;
    var tgZuiGaoZhi = e.tgZuiGaoZhi;
    var jianChaJieGuo6 = e.jianChaJieGuo6;
    var hdlcZuiGaoZhi = e.hdlcZuiGaoZhi;
    var jianChaJieGuo7 = e.jianChaJieGuo7;
    var ldlcZuiGaoZhi = e.ldlcZuiGaoZhi;
    var jianChaJieGuo8 = e.jianChaJieGuo8;
    var lvefZuiDiZHi = e.lvefZuiDiZHi;
    var jianChaJieGuo9 = e.jianChaJieGuo9;
    var jianChaJieGuo10 = e.jianChaJieGuo10;
    var yaoWu1 = e.yaoWu1;
    var yaoWu2 = e.yaoWu2;
    var yaoWu3 = e.yaoWu3;
    var yaoWu4 = e.yaoWu4;
    this.setData({
      // 患者基本信息
      name:name,
      gender:gender,
      age:age,
      zhuyuanhao:zhuyuanhao,
      id:id,
      // 急救基本信息
      fabingshijian:fabingshijian,
      fabingdizhi:fabingdizhi,
      phone:phone,
      // 呼叫120
      Chuchedanwei:Chuchedanwei,
      CallTime:CallTime,
      FirstyiliaoTime:FirstyiliaoTime,
      Zhijiezhuansongshangji:Zhijiezhuansongshangji,
      Zhidadaoguanshi:Zhidadaoguanshi,
      DaodayiyuandamenTime:DaodayiyuandamenTime,
      YuanneishouzhenTime:YuanneishouzhenTime,
      Yihu:Yihu,
      // 转院&自行来院
      ZhuanyuanType:ZhuanyuanType,
      Hname:Hname,
      FirstyiliaoTime:FirstyiliaoTime,
      Zhijiezhuansongshangji:Zhijiezhuansongshangji,
      Zhidadaoguanshi:Zhidadaoguanshi,
      RumenTime:RumenTime,
      JuedingzhuanyuanTime:JuedingzhuanyuanTime,
      ChumenTime:ChumenTime,
      DaodayiyuandamenTime:DaodayiyuandamenTime,
      YuanneishouzhenTime:YuanneishouzhenTime,
      Yihu:Yihu,
      // 院内发病
      Fabingdizhi:Fabingdizhi,
      BenciFirstyiliaoTime:BenciFirstyiliaoTime,
      LikaixinchangTime:LikaixinchangTime,
      BenciFirstyiliaorenyuan:BenciFirstyiliaorenyuan,
      // 病情估计
      bingQing:bingQing,
      checkbox:checkbox,
      other:other,
      Recorder:Recorder,
      // 生命体征
      fillIn2:fillIn2,
      huXi:huXi,
      maiBo:maiBo,
      xinLv:xinLv,
      diYa:diYa,
      gaoYa:gaoYa,
      tiWen:tiWen,
      // 溶栓治疗
      fillIn3:fillIn3,
      shaicha:shaicha,
      RongShuan:RongShuan,
      jinJiZheng:jinJiZheng,
      shiFouZhiDaRongShuanChangSuo:shiFouZhiDaRongShuanChangSuo,
      rongShuanChangSuo:rongShuanChangSuo,
      signLearnTime:signLearnTime,
      beginCureTime:beginCureTime,
      overCureTime:overCureTime,
      yaoWu:yaoWu,
      jiLiang:jiLiang,
      rongShuanZaiTong:rongShuanZaiTong,
      beginZaoYingTime:beginZaoYingTime,
      rongShuanZaiTong2:rongShuanZaiTong2,
      buJiuPCI:buJiuPCI,
      decideOperateTime:decideOperateTime,
      OperateTime:OperateTime,
      buBuJiuPCI:buBuJiuPCI,
      beginLearnTime:beginLearnTime,
      // 心电图
      fillIn:fillIn,
      xinDianTu:xinDianTu,
      noReason:noReason,
      youXinDianTu:youXinDianTu,
      firstMapTime:firstMapTime,
      mapDiagnosisTime:mapDiagnosisTime,
      yuanChengXinDianTu:yuanChengXinDianTu,
      acceptTime:acceptTime,
      chuanShuFangShi:chuanShuFangShi,
      yuanChengXinDianTu2:yuanChengXinDianTu2,
      // 实验室检查
      fillIn2:fillIn2,
      jiGaiDanBai:jiGaiDanBai,
      jiGaiDanBaiLeiXing:jiGaiDanBaiLeiXing,
      number:number,
      jiGaiDanBaiYinYangXing:jiGaiDanBaiYinYangXing,
      drawBloodOkTime:drawBloodOkTime,
      getReporterTime:getReporterTime,
      jiGaiDanBai2:jiGaiDanBai2,
      jiGan:jiGan,
      jigan:jigan,
      erJuTi:erJuTi,
      erjuti:erjuti,
      bNP:bNP,
      bnp:bnp,
      ntprobnp:ntprobnp,
      nt_probnp:nt_probnp,
      mYO:mYO,
      myo:myo,
      ckNB:ckNB,
      cknb:cknb,
      // 心内会诊
      fillIn3:fillIn3,
      shiFouXinNeiHuiZhen:shiFouXinNeiHuiZhen,
      huiZhenFangShi:huiZhenFangShi,
      informConsultationTime:informConsultationTime,
      consultationTime:consultationTime,
      shiFouXinNeiHuiZhen2:shiFouXinNeiHuiZhen2,
      // 诊断
      fillIn4:fillIn4,
      chuBuZhenDuan:chuBuZhenDuan,
      huanZheZiYuanFangQiHouXuZhiLiao:huanZheZiYuanFangQiHouXuZhiLiao,
      firstDiagnosisTime:firstDiagnosisTime,
      doctor:doctor,
      killipFenJi:killipFenJi,
      nyhaFenJi:nyhaFenJi,
      raoXingJiZhen:raoXingJiZhen,
      raoXingICU:raoXingICU,
      // ACS诊疗
      // 初始药物治疗
      orginMedician:orginMedician,
      kangXueXiaoBanZhiLiao:kangXueXiaoBanZhiLiao,
      kangNingZhiLiao:kangNingZhiLiao,
      taTingZhiLiao:taTingZhiLiao,
      beiTaZuJi:beiTaZuJi,
      aSiPiLin:aSiPiLin,
      aSiPiLinTime:aSiPiLinTime,
      luCiGeLei:luCiGeLei,
      luCiGeLeiTime:luCiGeLeiTime,
      tiGeRuiLuo:tiGeRuiLuo,
      tiGeRuiLuoTime:tiGeRuiLuoTime,
      Anticoagulants:Anticoagulants,
      dose:dose,
      AnticoagulantsTime:AnticoagulantsTime,
      fillIn5:fillIn5,
      // Grace评估
      gracePingGu:gracePingGu,
      graceJiGaoWei:graceJiGaoWei,
      fillIn6:fillIn6,
      ageScore:ageScore,
      heartScore:heartScore,
      bloodScore:bloodScore,
      jiGanScore:jiGanScore,
      killipScore:killipScore,
      dangerScore:dangerScore,
      allScore:allScore,
      nsteacsWeiXianFenCeng:nsteacsWeiXianFenCeng,
      againTime:againTime,
      fillIn7:fillIn7,
      allScore2:allScore2,
      nsteacsWeiXianFenCeng2:nsteacsWeiXianFenCeng2,
      // Crusade评分
      jiXianScore:jiXianScore,
      bloodScore2:bloodScore2,
      jiGanScore2:jiGanScore2,
      heartScore2:heartScore2,
      otherDangerScore:otherDangerScore,
      allScore3:allScore3,
      weiXianFenCeng:weiXianFenCeng,
      fillIn8:fillIn8,
      // NSTE-ACS处理策略
      nsteacsChuLiCeLue:nsteacsChuLiCeLue,
      erSiHourNeiJieRuZhiLiao:erSiHourNeiJieRuZhiLiao,
      actualCureTime:actualCureTime,
      erHourNeiJieRuZhiLiao:erHourNeiJieRuZhiLiao,
      decideDoctor:decideDoctor,
      decideOptionTime:decideOptionTime,
      startPipeTime:startPipeTime,
      beginInformedTime2:beginInformedTime2,
      signInformedTime2:signInformedTime2,
      fillIn9:fillIn9,
      // STEMI再灌注措施
      qiTaBiaoXian:qiTaBiaoXian,
      fillIn10:fillIn10,
      stemiZaiGuanZhiCuoShi:stemiZaiGuanZhiCuoShi,
      stemiCuoShi:stemiCuoShi,
      zhiJiePCI:zhiJiePCI,
      decideDoctor2:decideDoctor2,
      decideOptionTime2:decideOptionTime2,
      startPipeTime2:startPipeTime2,
      beginInformedTime3:beginInformedTime3,
      signInformedTime3:signInformedTime3,
      cuoShi:cuoShi,
      decideOptionTime3:decideOptionTime3,
      startTime3:startTime3,
      //导管室
      pipeActivationTime:pipeActivationTime,
      getPipeTime:getPipeTime,
      startPunctureTime:startPunctureTime,
      radiographyTime:radiographyTime,
      timi:timi,
      anticoagulationTime:anticoagulationTime,
      anticoagulation:anticoagulation,
      anticoagulationDose:anticoagulationDose,
      wireTime:wireTime,
      overOptionTime:overOptionTime,
      interventionDoctor:interventionDoctor,
      d2wShiJianShiFouYanWu:d2wShiJianShiFouYanWu,
      d2wYanWuYuanYin:d2wYanWuYuanYin,
      ruLu:ruLu,
      // 罪犯血管
      criminalBlood:criminalBlood,
      narrow:narrow,
      radiographyTimi:radiographyTimi,
      zhiJiaNeiXueShuan:zhiJiaNeiXueShuan,
      fenChaBingBian:fenChaBingBian,
      cto:cto,
      gaiHuaBingBian:gaiHuaBingBian,
      pci:pci,
      shuZhongChuLi:shuZhongChuLi,
      optionedTimi:optionedTimi,
      shelf:shelf,
      zhiJiaZhongLei:zhiJiaZhongLei,
      // 非罪犯血管1
      criminalBlood1:criminalBlood1,
      narrow1:narrow1,
      radiographyTimi1:radiographyTimi1,
      zhiJiaNeiXueShuan2:zhiJiaNeiXueShuan2,
      fenChaBingBian2:fenChaBingBian2,
      cto2:cto2,
      gaiHuaBingBian2:gaiHuaBingBian2,
      pci2:pci2,
      shuZhongChuLi1:shuZhongChuLi1,
      optionedTimi1:optionedTimi1,
      shelf1:shelf1,
      zhiJiaZhongLei2:zhiJiaZhongLei2,
      // 非罪犯血管2
      criminalBlood2:criminalBlood2,
      narrow2:narrow2,
      radiographyTimi2:radiographyTimi2,
      zhiJiaNeiXueShuan3:zhiJiaNeiXueShuan3,
      fenChaBingBian3:fenChaBingBian3,
      cto3:cto3,
      gaiHuaBingBian3:gaiHuaBingBian3,
      pci3:pci3,
      shuZhongChuLi2:shuZhongChuLi2,
      optionedTimi2:optionedTimi2,
      shelf2:shelf2,
      zhiJiaZhongLei3:zhiJiaZhongLei3,
      // 非罪犯血管3
      criminalBlood3:criminalBlood3,
      narrow3:narrow3,
      radiographyTimi3:radiographyTimi3,
      zhiJiaNeiXueShuan4:zhiJiaNeiXueShuan4,
      fenChaBingBian4:fenChaBingBian4,
      cto4:cto4,
      gaiHuaBingBian4:gaiHuaBingBian4,
      pci4:pci4,
      shuZhongChuLi3:shuZhongChuLi3,
      optionedTimi3:optionedTimi3,
      shelf3:shelf3,
      zhiJiaZhongLei4:zhiJiaZhongLei4,
      // 主动脉夹层诊疗
      firstDiagnosisTime2:firstDiagnosisTime2,
      doctor2:doctor2,
      yingXiangXueJianCha:yingXiangXueJianCha,
      informedCTTime:informedCTTime,
      okPrepareTime:okPrepareTime,
      beginScanTime:beginScanTime,
      ctReporterTime:ctReporterTime,
      inform:inform,
      diagnosisTime:diagnosisTime,
      diagnosisTime2:diagnosisTime2,
      jiaCengLeiXing:jiaCengLeiXing,
      zhiLiaoCeLue:zhiLiaoCeLue,
      // 肺栓塞诊疗
      firstDiagnosisTime3:firstDiagnosisTime3,
      doctor3:doctor3,
      yingXiangXueJianCha2:yingXiangXueJianCha2,
      informedCTTime2:informedCTTime2,
      okPrepareTime2:okPrepareTime2,
      beginScanTime2:beginScanTime2,
      ctReporterTime2:ctReporterTime2,
      weiXianFenCeng:weiXianFenCeng,
      AnticoagulantsTime2:AnticoagulantsTime2,
      // 其他胸痛
      qiTaXiongTong:qiTaXiongTong,
      xiongTongBiaoXian:xiongTongBiaoXian,
      qiTaXiongTong2:qiTaXiongTong2,
      qiTaXiongTongBiaoXian:qiTaXiongTongBiaoXian,
      qiTaXiongTong3:qiTaXiongTong3,
      firstDiagnosisTime4:firstDiagnosisTime4,
      doctor4:doctor4,
      chuLiCuoShi:chuLiCuoShi,
      // 患者转归
      // 出院诊断
      xiongTong:xiongTong,
      xinYuanXingXiongTong:xinYuanXingXiongTong,
      xiongTongBiaoXian:xiongTongBiaoXian,
      qiTaXinYuanXingXiongTong:qiTaXinYuanXingXiongTong,
      qiTaBiaoXian:qiTaBiaoXian,
      diagnosisTime:diagnosisTime,
      inHospitalDay:inHospitalDay,
      allCost:allCost,
      // 患者转归
      zhuanGuiLeiXing:zhuanGuiLeiXing,
      leftHospitalTime:leftHospitalTime,
      zhiLiaoJieGuo:zhiLiaoJieGuo,
      zhuanGuiLeiXing2:zhuanGuiLeiXing2,
      leftHospitalGateTime:leftHospitalGateTime,
      hospitalName:hospitalName,
      shiFouZhuanYunPCI:shiFouZhuanYunPCI,
      shiFouYuanChengXinDianTu:shiFouYuanChengXinDianTu,
      zhuanGuiLeiXing3:zhuanGuiLeiXing3,
      turnDeapartmentTime:turnDeapartmentTime,
      cureInDepartment:cureInDepartment,
      turnDeapartmentReason:turnDeapartmentReason,
      zhuanGuiLeiXing4:zhuanGuiLeiXing4,
      dieTime:dieTime,
      dieReason:dieReason,
      liYuanXuanJiao:liYuanXuanJiao,
      cocid19:cocid19,
      // 住院期间用药哦
      jiangTangYao:e.jiangTangYao,
      kouFuKangNingYao:e.kouFuKangNingYao,
      pcsk9:e.pcsk9,
      dose:e.dose,
      // ACS患者
      xinFaXinShuai:e.xinFaXinShuai,
      arni:e.arni,
      zhuYuanQiJianBingFaZheng:e.zhuYuanQiJianBingFaZheng,
      weiXianYinSu:e.weiXianYinSu,
      heBingJiBing:e.heBingJiBing,
      jianChaJieGuo:e.jianChaJieGuo,
      jiGaiDanbai:e.jiGaiDanbai,
      jianChaJieGuo2:e.jianChaJieGuo2,
      bnpZuiGaoZhi2:e.bnpZuiGaoZhi2,
      jianChaJieGuo3:e.jianChaJieGuo3,
      ntproBNP:e.ntproBNP,
      jianChaJieGuo4:e.jianChaJieGuo4,
      tcZuiGaoZhi:e.tcZuiGaoZhi,
      jianChaJieGuo5:e.jianChaJieGuo5,
      tgZuiGaoZhi:e.tgZuiGaoZhi,
      jianChaJieGuo6:e.jianChaJieGuo6,
      hdlcZuiGaoZhi:e.hdlcZuiGaoZhi,
      jianChaJieGuo7:e.jianChaJieGuo7,
      ldlcZuiGaoZhi:e.ldlcZuiGaoZhi,
      jianChaJieGuo8:e.jianChaJieGuo8,
      lvefZuiDiZHi:e.lvefZuiDiZHi,
      jianChaJieGuo9:e.jianChaJieGuo9,
      pcjianChaJieGuo10sk9:e.jianChaJieGuo10,
      yaoWu1:e.yaoWu1,
      yaoWu2:e.yaoWu2,
      yaoWu3:e.yaoWu3,
      yaoWu4:e.yaoWu4,
    })
    // console.log(e.name);
    
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