import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from 'router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [],
    activeBoard: {},
    error: {},
    user: {},
    lists: []
  },
  mutations: {
    setBoards(state, data) {
      state.boards = data
    },
    setLists(state, data){
      state.lists = data
    },
    handleError(state, err) {
      state.error = err
    },
    setUser(state, user) {
      state.user = user
    },
    setActiveBoard(state, data) {
      state.activeBoard = data
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts


    login({ commit, dispatch }, payload) {
      auth.post('login', payload)
        .then(res => {
          commit('setUser', res.data.data)

        })
        .catch(err => {
          commit('handleError', err.response.data)
        })
    },

    register({ commit, dispatch }, payload) {
      if(payload.image === ''){
        delete payload.image
      }
      auth.post('register', payload)
        .then(res => {
          commit('setUser', res.data.data)
        })
    },

    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          commit('setUser', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
      // Possibly .catch(()=>[
      // router.push({ name: 'Login'})
      // ])
    },

    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          console.log(res)
        })

    },


    getBoards({ commit, dispatch }) {
      api('boards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getBoard({ commit, dispatch }, id) {
      api('boards/' + id)
        .then(res => {
          commit('setActiveBoard', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createBoard({ commit, dispatch }, board) {
      api.post('boards/', board)
        .then(res => {
          dispatch('getBoards')
          console.log("succesfully created board")
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeBoard({ commit, dispatch }, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    setActiveBoard({ commit, dispatch}, board){
      commit('setActiveBoard', board)
    },

    //Lists
    getListsByBoard({ commit, dispatch }, boardId) {
      api('boards/' + boardId + '/lists')
        .then(res => {
          commit('setLists', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    // getLists({ commit, dispatch }){
    //   api('myLists')
    // },
    getList({ commit, dispatch }, id) {
      api('lists/' + id)
        .then(res => {
          commit('setActiveList', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createList({ commit, dispatch }, list) {
      api.post('boards/:boardId/lists/', list)
        .then(res => {
          dispatch('getLists')
          console.log("succesfully created list")
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeList({ commit, dispatch }, list) {
      api.delete('lists/' + list._id)
        .then(res => {
          dispatch('getLists')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },


    //Error
    handleError({ commit, dispatch }, err) {
      commit('handleError', err)
    }
  }

})


export default store
