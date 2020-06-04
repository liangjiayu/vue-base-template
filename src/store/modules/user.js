const state = {
  userInfo: null,
};

const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
