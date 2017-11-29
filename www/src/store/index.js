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
    boards: [{name: 'This is total rubbish'}],
    activeBoard: {},
    error: {},
    user: {}
  },
  mutations: {
    setBoards(state, data){
      state.boards = data
    },
    handleError(state, err){
      state.error = err
    },
    setUser(state, user){
      state.user = user
    },
    handelError(state, err){
      state.error = err
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts


    login({commit, dispatch}, payload){
      debugger
      auth.post('login', payload)
      .then(res => {
        commit('setUser', res.data.data)
        
      })
      .catch(err => {
        commit('handleError', err.response.data)
      })
    },

    register({commit, dispatch}, payload){
      debugger
      auth.post('register', payload)
      .then(res => {
        commit('setUser', res.data.data)
      })
    },

    authenticate({commit, dispatch}){
      auth('authenticate')
      .then(res => {
        commit('setUser', res.data.data)
      })
      .catch(err=>{
        commit('handleError', err)
      })
      // Possibly .catch(()=>[
      // router.push({ name: 'Login'})
      // ])
    },

    logout({ commit, dispatch }){
      auth.delete('logout')
      .then(res=>{
        commit()
        console.log(res)
      })

    },


    getBoards({commit, dispatch}) {
      api('boards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    getBoard({commit, dispatch},id) {
      api('boards/' + id)
        .then(res => {
          commit('setActiveBoard', res.data.data)
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    createBoard({commit, dispatch}, board) {
      debugger
      api.post('boards/',board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    removeBoard({commit, dispatch}, board) {
      api.delete('boards/'+board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    handleError({commit, dispatch}, err){
      commit('handleError', err)
    }
  }

})


export default store
