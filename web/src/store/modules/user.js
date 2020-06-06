import storage from '@/plugins/storage';

const state = {
  userInfo: storage.get('userInfo', null),
};

const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    storage.set('userInfo', userInfo);
  },
  clearUserInfo(state) {
    state.userInfo = null;
    storage.set('userInfo', null);
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
