// 存放不同的浏览器和引擎参数
let client = function () {
  let engine = {
    // 浏览器引擎
    ie: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,
    opera: 0,
    // 引擎的版本
    version: 0
  };

  let browser = {
    // 具体的浏览器
    ie: 0,
    firefox: 0,
    safari: 0,
    konq: 0,
    opera: 0,
    chrome: 0,
    // 浏览器的版本
    version: 0
  };

  let system = {
    // 运营的操作系统
    win: false,
    mac: false,
    unix: false,
    // 移动设备
    iphone: false,
    ipod: false,
    ipad: false,
    ios: false,
    android: false,
    nokiaN: false,
    winMobile: false,
    // 游戏系统
    wii: false,
    ps: false
  }

  return {
    engine: engine,
    browser: browser,
    system: system
  }
};

// 检查当前浏览的引擎和类型，这个方法应当在加载完毕后就执行，将对应的值赋到client中
const check = function () {
  let ua = navigator.userAgent;

  // 获取操作系统
  let platform = navigator.platform;
  // Windows系统一般有 Win32， Windows这2种关键字，现在Win64也会出现，所以，直接检查Win即可
  client.system.win = platform.indexOf("Win") == 0;
  // MacOS 一般会有MacPPC，MacIntel，Macintosh三种关键字，所以直接检查Mac即可
  client.system.mac = platform.indexOf("Mac") == 0;
  // 各类Linux系统一般包含X11和Linux这2种关键字
  client.system.unix = (platform.indexOf("X11") == 0) || (platform.indexOf("Linux") == 0);

  // 移动设配处理
  client.system.iphone = ua.indexOf("iPhone") > -1;
  client.system.ipod = ua.indexOf("iPod") > -1;
  client.system.ipad = ua.indexOf("iPad") > -1;
  if (client.system.mac && ua.indexOf("Mobile") > -1) {
    // ios
    if (/CPU(?:iPhone)?OS(\d+_\d+)/.test(ua)) {
      client.system.ios = parseFloat(RegExp.$1.replace("_", "."))
    } else {
      // 检测不出来，用2代表位置
      client.system.ios = 2;
    }
  }
  if (/Android(\d+\.\d+)/.test(ua)) {
    // Android
    client.system.android = parseFloat(RegExp.$1);
  }
  client.system.nokiaN = ua.indexOf("NokiaN") > -1;
  client.system.winMobile = client.system.win == "CE"

  if (window.opera) {
    // opera要第一个去判断，因为opera的ua总是会包含其他引擎或者浏览器信息，所以后判断出错
    let version = window.opera.version();
    client.engine.version = client.browser.version = version;
    client.engine.opera = client.browser.opera = parseFloat(version);
  } else if (/AppleWebKit\/(\S+)/.test(ua)) {
    client.engine.version = RegExp["$1"];
    client.engine.webkit = parseFloat(client.engine.version);
    if (/Chrome\/(\S+)/.test(ua)) {
      // Google Chrome浏览器
      client.browser.version = RegExp["$1"];
      client.browser.chrome = parseFloat(client.browser.version);
    } else if (/Version\/(|S+)/.test(ua)) {
      // Safari浏览器
      client.browser.version = RegExp["$1"];
      client.browser.safari = parseFloat(client.browser.version);
    } else {
      // 近似的确定一下版本号
      let safariVersion = 1;
      if (client.engine.webkit < 100) {
        safariVersion = 1;
      } else if (client.engine.webkit < 312) {
        safariVersion = 1.2;
      } else if (client.engine.webkit < 412) {
        safariVersion = 1.3;
      } else {
        safariVersion = 2;
      }
      client.browser.safari = client.browser.version = safariVersion;
    }
  } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
    client.engine.version = client.browser.version = RegExp["$1"];
    client.engine.khtml = client.browser.konq = parseFloat(client.engine.version);
  } else if (/rv:([^\)]+)\)Gecko\/\d{8}/.test(ua)) {
    client.engine.version = RegExp["$1"];
    client.engine.gecko = parseFloat(client.engine.version);
    if (/Firefox\/(\S+)/.test(ua)) {
      // Firefox浏览器
      client.browser.version = RegExp["$1"];
      client.browser.firefox = parseFloat(client.browser.version);
    }
  } else if (/MSIE([^;]+)/.test(ua)) {
    client.engine.version = client.browser.version = RegExp["$1"];
    client.engine.ie = client.browser.ie = parseFloat(client.engine.version);
  }
};