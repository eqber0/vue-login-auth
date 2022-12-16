import axios from "axios"
import SignupValidations from "../services/SignupValidations"

import { createStore } from "vuex"

export default createStore({
  state: {
    token: "",
    email: "",
    userId: "",
    refreshToken: "",
    expiresIn: "",
  },
  mutations: {
    SET_USER_TOKEN_DATA(state, payload) {
      ;(state.email = payload.email),
        (state.token = payload.token),
        (state.userId = payload.userId),
        (state.refreshToken = payload.refreshToken),
        (state.expiresIn = payload.expiresIn)
    },
  },
  actions: {
    async login(context, payload) {
      let postData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
      let response = ""
      try {
        response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCusTzq6ZExMlryrLOQc_RI_g59Y93TIsk`,
          postData
        )
      } catch (err) {
        let errorMessage = SignupValidations.getErrorMessage(
          err.response.data.error.errors[0].message
        )
        throw errorMessage
      }

      if (response.status == 200) {
        context.commit("SET_USER_TOKEN_DATA", {
          email: response.data.email,
          token: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
          userId: response.data.localId,
        })
      }
    },

    // Register
    async signup(context, payload) {
      let postData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
      let response = ""
      try {
        response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCusTzq6ZExMlryrLOQc_RI_g59Y93TIsk`,
          postData
        )
      } catch (err) {
        let errorMessage = SignupValidations.getErrorMessage(
          err.response.data.error.errors[0].message
        )
        throw errorMessage
      }

      if (response.status == 200) {
        context.commit("SET_USER_TOKEN_DATA", {
          email: response.data.email,
          token: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
          userId: response.data.localId,
        })
      }
    },
  },
})
