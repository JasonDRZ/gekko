/*

  MACD - DJM 31/12/2013

  (updated a couple of times since, check git history)

 */

// helpers
var _ = require('lodash');
var log = require('../core/log.js');

// let's create our own method
var method = {};

// prepare everything our method needs
method.init = function() {
  // keep state about the current trend
  // here, on every new candle we use this
  // state object to check if we need to
  // report it.
  this.trend = {
    direction: 'none',
    duration: 0,
    persisted: false,
    adviced: false
  };

  // how many candles do we need as a base
  // before we can start giving advice?
  this.requiredHistory = this.tradingAdvisor.historySize;

  // define the indicators we need
  this.addIndicator('macd', 'MACD', this.settings);
}

// what happens on every new candle?
method.update = function(candle) {
  // nothing!
  console.info({...candle, start: candle.start.format('YYYY-MM-DD hh:mm:ss')})
}

// for debugging purposes: log the last calculated
// EMAs and diff.
method.log = function() {
  var digits = 8;
  var macd = this.indicators.macd;

  var diff = macd.diff.toFixed(digits);
  var signal = macd.signal.result;


  /**
   * 策略
   */
  /**** 常量部分 ****/
  // 增量幅度，百分比
  var MD_MAX = 0.1;

  /**** 变量部分 ****/
  // 上一次的差距
  var diffA = this.diffA || 0;
  // 当前的差距
  var diffB = diff;
  // 上一次计算的差距之间的增量
  var matchDiffA = this.matchDiffA || 0;
  // 当前差距之间的增量
  var matchDiffB = (diffB - diffA).toFixed(digits);
  // 上一次的增量方向 ["down" , "up", "hold"]，默认为「"hold"」
  var dirMatchDiffA = this.dirMatchDiffA || "hold";
  // 当前增量方向 ["down" , "up", "hold"]
  var dirMatchDiffB = matchDiffB < 0 ? "down" : "up";



  log.debug('calculated MACD properties for candle:', this.candle.start.format("YYYY-MM-DD hh:mm:ss"));
  log.debug('\t', 'short:', macd.short.result.toFixed(digits));
  log.debug('\t', 'long:', macd.long.result.toFixed(digits));
  log.debug('\t', 'macd:', diff);
  log.debug('\t', 'desc:', this.desc);
  log.debug('\t', 'signal:', signal.toFixed(digits));
  log.debug('\t', 'macdiff:', macd.result.toFixed(digits));
}

method.check = function() {
  var macddiff = this.indicators.macd.result;
  // console.log("check", {
  //   ...this,
  //   candle: {
  //     ...this.candle,
  //     start: this.candle.start.format("YYYY-MM-DD hh:mm:ss")
  //   }
  // })
  if(macddiff > this.settings.thresholds.up) {

    // new trend detected
    if(this.trend.direction !== 'up')
      // reset the state for the new trend
      this.trend = {
        duration: 0,
        persisted: false,
        direction: 'up',
        adviced: false
      };

    this.trend.duration++;

    log.debug('In uptrend since', this.trend.duration, 'candle(s)');

    if(this.trend.duration >= this.settings.thresholds.persistence)
      this.trend.persisted = true;

    if(this.trend.persisted && !this.trend.adviced) {
      this.trend.adviced = true;
      this.advice('long');
    } else
      this.advice();

  } else if(macddiff < this.settings.thresholds.down) {

    // new trend detected
    if(this.trend.direction !== 'down')
      // reset the state for the new trend
      this.trend = {
        duration: 0,
        persisted: false,
        direction: 'down',
        adviced: false
      };

    this.trend.duration++;

    log.debug('In downtrend since', this.trend.duration, 'candle(s)');

    if(this.trend.duration >= this.settings.thresholds.persistence)
      this.trend.persisted = true;

    if(this.trend.persisted && !this.trend.adviced) {
      this.trend.adviced = true;
      this.advice('short');
    } else
      this.advice();

  } else {

    log.debug('In no trend');

    // we're not in an up nor in a downtrend
    // but for now we ignore sideways trends
    //
    // read more @link:
    //
    // https://github.com/askmike/gekko/issues/171

    // this.trend = {
    //   direction: 'none',
    //   duration: 0,
    //   persisted: false,
    //   adviced: false
    // };

    this.advice();
  }
}

module.exports = method;
