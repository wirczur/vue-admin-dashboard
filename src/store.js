import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    classesList: {
      carrot: 'background-carrot border-carrot',
      'green-sea': 'background-green-sea border-green-sea',
      'un-flower': 'background-sun-flower border-sun-flower',
      'wet-asphalt': 'background-wet-asphalt border-wet-asphalt',
    },
    activeClass: 'carrot',
    isAuthorization: false,
    user: {
      fullName: null,
      login: null,
      avatar: null,
    },
  },
  getters: {
    getIsAuthorization(state) {
      return state.isAuthorization;
    },
    getClassesList(state) {
      return state.classesList;
    },
    getActiveClass(state) {
      return state.classesList[state.activeClass];
    },
  },
  mutations: {
    CHANGE_ACTIVE_CLASS(state, prop) {
      const storage = state;
      storage.activeClass = prop;
    },
    SIGN_IN_USER(state, prop) {
      const storage = state;
      storage.isAuthorization = true;
      storage.user = prop;
    },
  },
  actions: {
    changeActiveClass(context, prop) {
      context.commit('CHANGE_ACTIVE_CLASS', prop);
    },
    SignInUser(context, prop) {
      return new Promise((resolve, reject) => {
        console.log(prop.username === 'test');
        if (prop.username === 'test') {
          context.commit('SIGN_IN_USER', prop);
          resolve('You have logged in');
        } else {
          console.log('test');
          reject(new Error('Bad login or password'));
        }
      });
    },
  },
});
