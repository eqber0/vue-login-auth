export const state = () => ({
  username: "admin",
  password: "admin",
  isLoggedIn: false,
  loginMessage: false,
});

export const getters = {
  getIsLogin: (state) => {
    return state.isLoggedIn;
  },
  getLoginMessage: (state) => {
    return state.loginMessage;
  },
};

export const mutations = {
  setIsLogin: (state, [username, password]) => {
    if (state.username == username && state.password == password) {
      state.isLoggedIn = true;
      state.loginMessage = false;
    } else {
      state.isLoggedIn = false;
      state.loginMessage = true;
    }
  },
  logout: (state) => {
    state.isLoggedIn = false;
  },
};

export const actions = {
  updateIsLogin: ({ commit }, [username, password]) => {
    commit("setIsLogin", [username, password]);
  },
  logout: ({ commit }) => {
    commit("logout");
  },
};
