declare type Ithis = {
  addIndicator: Function,
  addListener: Function,
  addTalibIndicator: Function,
  addTulipIndicator: Function,
  advice: Function,
  calculateSyncIndicators: Function,
  check: Function,
  emit: Function,
  eventNames: Function,
  finish: Function,
  getMaxListeners: Function,
  init: Function,
  isBusy: Function,
  listenerCount: Function,
  listeners: Function,
  notify: Function,
  off: Function,
  on: Function,
  once: Function,
  prependListener: Function,
  prependOnceListener: Function,
  processTrade: Function,
  propogateTick: Function,
  rawListeners: Function,
  removeAllListeners: Function,
  removeListener: Function,
  setMaxListeners: Function,
  tick: Function,
  update: Function,
  age: 90,
  processedTicks: 90,
  setup: true,
  settings: {
    short: 20,
    long: 10,
    signal: 9,
    thresholds: { down: -0.025, up: 0.025, persistence: 1 },
  },
  tradingAdvisor: {
    enabled: true,
    method: 'MyMACD',
    candleSize: 1440,
    historySize: 10,
  },
  priceValue: 'close',
  indicators: {
    macd: {
      Indicator: {
        input: 'price',
        diff: 0.002664258444506906,
        short: {
          Indicator: {
            input: 'price',
            weight: 20,
            result: 2.4858304551483785,
            age: 90,
          },
        },
        long: {
          Indicator: {
            input: 'price',
            weight: 10,
            result: 2.4831661967038716,
            age: 90,
          },
        },
        signal: {
          Indicator: {
            input: 'price',
            weight: 9,
            result: 0.1765519127184871,
            age: 90,
          },
        },
        result: -0.1738876542739802,
      },
    },
    asyncTick: false,
    deferredTicks: [],
    propogatedAdvices: 4,
    completedWarmup: true,
    end: Function,
    onTrade: Function,
    trend: { duration: 11, persisted: true, direction: 'down', adviced: true },
    requiredHistory: 10,
    log: Function,
    _events: {
      [Object]: {
        stratWarmupCompleted: Function,
        advice: Function,
        stratUpdate: Function,
        stratNotification: Function,
        tradeCompleted: Function,
      },
    },
    _eventsCount: 5,
    candle: {
      start: '2018-12-23 01:46:00',
      open: 2.6758,
      high: 2.9775,
      low: 2.6666,
      close: 2.9667,
      vwp: 2.822153654743123,
      volume: 14319957.570000004,
      trades: 94869,
    },
    _currentDirection: 'short',
    _pendingTriggerAdvice: null,
  },
};


// 精通HTML5、CSS3、JavaScript，早期着重研究过CSS3和JS针动画，对动画性能有一定的见解；
// 并对浏览器渲染引擎、事件系统、文档流、资源加载与优化、同/异步线程、JS任务调度等均有深入的理解和认知。
// 我是ES6+和Typescript忠实粉丝，与其已建立深厚的感情，它已成为我前端生涯不可或缺的一部分了。
// 精通Worker系列编程，深度研究并理解线程资源调度、基于AppCache/ServiceWorker的浏览器资源缓存管理等相关知识。
// 理解形形色色的前端框架模式，诸如MVC、MVP、MVVM等(最爱MVVM)。
// 对各种设计模式，面向对象编程的高级理念有着独特的自我的认知和见解。
// 正则表达式9级练级战士[满级12级]，常见的规则匹配、表达式性能优化不是问题。
// 熟悉前端SSR，对Nuxt.js\Next.js等都有涉及。
// 熟悉Hybrid开发模式，了解IOS和安卓原生与前端的通讯、交互和渲染机制等。
// 初步学习过PHP、Python、.NET等后端开发语言。
// 熟悉Linux、Nginx、SSH、Jenkins等服务器配置。
// 熟悉以Docker、Git、Jenkins、PM2为基础的前端持续集成开发、发布环境。
// 早期深度研究过微信小程序，因觉得小程序的API不太好用，自己曾撸了一款轻量级类jQ小程序工具库https://github.com/JasonDRZ/MinQuery，现使用mpVue。


// /**
//  * 各项技能详细输出说明：
//  */
// type 熟练度 = 1|2|3|4|5|6|7|8|9|10 // 满分10分;熟练度将在今后的练级中得到进一步的提升;
// type 待加入的技能 = 现在不会的技能 & 只要您开口 & 立马就能有;
// type 随便什么技能 = 待加入的技能 & 已有的技能;
// type 提升中<熟练度> = 每一项技能的<熟练度> & 都会在后续的应用或学习中进一步的完善和提升;
// type CSS预编译语言<Level = 提升中> = {[Less]: Level<8>} & {[Sass]: Level<8>} & {[Stylus]: Level<7>};
// interface 前端开发工具及平台<Level = 提升中> {
//   Webpack: Level<7>; Yeoman: Level<6>; Gulp: Level<8>; Bower: Level<7>; NPM: Level<6>; NPX: Level<5>;
//   Yarn: Level<7>; Git: Level<7>; ZSH: Level<8>; Node: Level<7>; MacOS: Level<8>; Linux: Level<6>;
//   [...etc];
// };
// interface 使用过的框架或工具库<Level = 提升中> {
//   VueJS: 9; ReactJS: 8; AngularJS_V1x: 6; AngularJS_V4x: 5; ReactNative: 6;
//   LodashJS: 8; JQuery: 8; Redux: 7; Mobx: 9; VueStore: 8; Echart: 7;
//   [...etc];
// }


// 主要使用的开发框架有<{[框架名[-版本号]]: 熟练度}[]>() => [{ AngularJS-V1.x: 6分},{ VueJS-V2.x: 9分},{ ReactJS-16.x: 7分 }]

// 掌握Yeoman、Gulp、Bower、Webpack等主流前端构建工具的开发、使用和配置。、
// 3.
// 4.
// 5.	熟悉Hybrid开发模式，了解IOS和安卓原生与前端的通讯机制、交互机制和渲染原理等。
// 6.
// 7.	熟练掌握正则表达式语法结构，具有能够快速书写一般验证型、简单匹配型正则表达式。
// 8.	精通ES6+语法结构及模块化开发模式，熟悉CMD、AMD、CSS-Module等模块开发模式。
// 9.	精通TypeScript开发，理解其根本的（转ES5）原理及TS配置方案，并能应用到React和Vue等实际项目中进行开发使用。
// 10.	浅析PHP、Python、.NET等后端开发语言，懂得后端语言语法结构及运行流程。
// 11.	熟悉NodeJS开发，熟悉Express、Koa框架及MongoDB数据库的应用开发。
// 12.	熟悉Linux、Nginx、SSH、Jenkins等服务器配置，熟悉Git命令行、Git Hook，PM2、Docker等持续集成和发布环境配置。
// 深度研究和开发微信小程序，早期开源了一款轻量级类jQuery小程序库[https://github.com/JasonDRZ/MinQuery]。现使用mpVue框架进行跨平台移动应用的开发。
