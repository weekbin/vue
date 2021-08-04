import { inBrowser } from './env'

export let mark
export let measure

if (process.env.NODE_ENV !== 'production') {
  const perf = inBrowser && window.performance // window 是否支持 performance 对象 （IE9 之后的浏览器基本都支持）
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = tag => perf.mark(tag)
    measure = (name, startTag, endTag) => {
      perf.measure(name, startTag, endTag)
      perf.clearMarks(startTag)
      perf.clearMarks(endTag)
      // perf.clearMeasures(name) // 因为兼容性问题，以及这个 API 并不常用，占用的内存也不是很让人担心，直接就不管他了。https://github.com/vuejs/vue/pull/7570
    }
  }
}
