import Vue from 'vue'
import Vuex from 'vuex'
import { Ticket } from '../api/tickets'
import {
  SET_TICKES
} from './mutation-types.js'

Vue.use(Vuex)

const state = {
  tickets: []
}

const getters = {
  tickets: state => state.tickets
}

const mutations = {
  [SET_TICKES] (state, { tickets }) {
    state.tickets = tickets
  }
}

const actions = {
  getNotes ({ commit }) {
    Ticket.list().then(tickets => {
      commit(SET_TICKES, { tickets })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
