/* eslint-disable */
import axios from 'axios'

const state = {
    students: []
}

const getters = {
    allStudents: state => state.students
}

const actions = {
    async fetchStudents({ commit }) {
        const response = await axios.get('http://localhost:1234/')
        console.log(response)
        commit('setStudents', response.data)
    }
}

const mutations = {
    setStudents: function (state, students) {
        state.students = students
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
