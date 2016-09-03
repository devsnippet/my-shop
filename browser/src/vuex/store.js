import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  name:1,
  count:9
};

const mutations={
  FETCH_NAME(state) {
    state.name++;
  },
  INCREMENT (state, amount) {
    state.count = state.count + amount
  }
};

export default new Vuex.Store({
  state,
  mutations
})
