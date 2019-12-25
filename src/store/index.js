/*
 * @Author: WangYu
 * @Date: 2019-12-25 10:44:27
 * @LastEditors  : WangYu
 * @LastEditTime : 2019-12-25 11:01:13
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themecolor: '3110B4' // 默认为20a0ff
  },
  mutations: {
    // 更新主题颜色
    setThemeColor (state, curcolor) {
      this.state.themecolor = curcolor
    }
  }
})
export default store
