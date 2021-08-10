import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * Vue 构造函数，构造 Vue 实例
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 在 Vue 原型上挂载 _init 方法，使得实例化时可调用 this._init(options)
stateMixin(Vue) // 在 Vue 原型上挂载 data, props, set, del, watch 方法
eventsMixin(Vue) // 在 Vue 原型上挂载 on, once, off, emit 方法
lifecycleMixin(Vue) // 在 Vue 原型上挂载 _update, forceUpdate, destroy 方法
renderMixin(Vue) // 在 Vue 原型上挂载 runtime helpers, nextTick, _render 方法

export default Vue
