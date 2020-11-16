import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

/* state 값을 사용할 떄는 부모 컴포넌트, 공통 컴포넌트 에서 관리해야한다.*/

Vue.use(Vuex)

const state = {
  seats : [],
  activeSeats : 0, //선택가능 좌석
  selectedSeats : 0 //선택한 좌석
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: process.env.NODE_ENV !== 'production'
  ? [createLogger()]
  : []
})