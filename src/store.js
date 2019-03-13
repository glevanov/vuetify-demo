import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search',
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
        const response = await axios.get(`${state.apiUrl}`, {
          params: {
            q: plan,
            app_id: '57d38e50',
            app_key: 'baa9062a088859f376005b074c30dbf8',
            from: 0,
            to: 9,
          },
        });
        commit('setRecipes', response.data.hits);
      } catch (error) {
        commit('setRecipes', []);
      }
    },
  },
});
