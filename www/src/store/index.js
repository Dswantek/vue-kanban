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
    lists: [],
    tasks: {}
  },
  mutations: {
    setBoards(state, data) {
      state.boards = data
    },
    setLists(state, data) {
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
    },
    setTasks(state, data) {
      vue.set(state.tasks, data.listId, data.data)
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
      if (payload.image === '') {
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
    setActiveBoard({ commit, dispatch }, board) {
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
    // getList({ commit, dispatch }, id) {
    //   api('lists/' + id)
    //     .then(res => {
    //       commit('setActiveList', res.data.data)
    //     })
    //     .catch(err => {
    //       commit('handleError', err)
    //     })
    // },
    createList({ commit, dispatch }, list) {
      api.post('lists/', list)
        .then(res => {
          dispatch('getListsByBoard', list.boardId)
          console.log("succesfully created list")
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeList({ commit, dispatch }, list) {
      api.delete('lists/' + list._id)
        .then(res => {
          dispatch('getListsByBoard', list.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    // Tasks

    getTasksByList({ commit, dispatch }, payload) {
      api('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks')
        .then(res => { 
          var data = {
            data: res.data.data,
            listId: payload.listId
          }
          commit('setTasks', data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    // getTask({ commit, dispatch }, id) {
    //   api('tasks/' + id)
    //     .then(res => {
    //       commit('setActiveTask', res.data.data)
    //     })
    //     .catch(err => {
    //       commit('handleError', err)
    //     })
    // },
    createTask({ commit, dispatch }, payload) {
      api.post('/tasks', payload)
        .then(res => {
          dispatch('getTasksByList', payload)
          console.log("succesfully created task")
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeTask({ commit, dispatch }, task) {
      api.delete('tasks/' + task._id)
        .then(res => {
          dispatch('getTasks')
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
