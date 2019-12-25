/*
 * @Author: WangYu
 * @Date: 2019-12-25 10:44:27
 * @LastEditors  : WangYu
 * @LastEditTime : 2019-12-25 14:14:07
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themecolor: '3110B4' // 默认为3110B4
  },
  mutations: {
    // 更新主题颜色
    setThemeColor (state, curcolor) {
      this.state.themecolor = curcolor
    }
  }
})
export default store
