// 获取指定时间的时间戳
var TimeStamp = {

  // 
  getTimeNowUnix: function(){
    var date = new Date();
    return date.getTime();
  },

  // 获取今天0点0分0秒的时间戳
  getTodayStartTimeUnix: function(){
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  },

  // 获取今年1月1日0点0分0秒的时间戳
  getBeginningOfThisYearUnix: function(){
    var date = new Date();
    date.setMonth(0);
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.getTime();
  },

  // 获取标准年月日
  getStandardDate: function(time){
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate() < 10 ? '0' + (date.getDate()) : (date.getDate());
    return date.getFullYear() + '-' + month + '-' + day;
  },

  // 转换时间
  getFormatTime: function(timeStamp){
    var now = this.getTimeNowUnix();
    var todayStartTime = this.getTodayStartTimeUnix();
    var surplus = (now - timeStamp) / 1000;
    var tip = '';
    
    if (surplus < 0) {
      tip = '刚刚';
    } else if (Math.floor(surplus/60) <= 0) {
      tip = '刚刚';
    }else if (surplus < 3600) {
      tip = Math.floor(surplus/60) + '分钟前';
    }else if (surplus >= 3600 && (timeStamp - todayStartTime >= 0)) {
      tip = Math.floor(surplus/3600) + '小时前';
    }else if (surplus/86400 <= 31 ) {
      tip = Math.floor(surplus/86400) + '天前';
    }else {
      tip = this.getStandardDate(timeStamp);
    }

    return tip;
  }

};

export default {
  bind: function (el, binding) {
    el.innerHTML = TimeStamp.getFormatTime(binding.value * 1000);
    el._timeout_ = setInterval(function () {
      el.innerHTML = TimeStamp.getFormatTime(binding.value * 1000);
    }, 6000);
  },
  unbind: function (el) {
    clearInterval(el._timeout_);
    delete el._timeout_;
  }
}