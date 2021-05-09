import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const state = () => ({
  selectedSection: 0
})

export const mutations = {
  setSection(state, section) {
    state.selectedSection = section;
  }
}