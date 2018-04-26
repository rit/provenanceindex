var Vue = require('vue/dist/vue')

const state = {
  persons: {
    'id-1': {
      id: 'id-1',
      name: 'Rembrandt van Rijn',
      qualifier: '(Person: Artist)',
      image: 'placeholder',
      birth: 'July 15, 1606 in Leiden, Netherlands',
      death: 'October 4, 1669 in Amsterdam, Netherlands',
      nationality: 'Dutch',
      role: 'Artist',
      active_info: '1631-1669 Amsterdam (North Holland, Netherlands) (inhabited place)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit. Maecenas ac tellus eu leo imperdiet finibus sit amet a risus. Fusce laoreet ante purus, id euismod enim facilisis et. Nulla vulputate est sed tempus auctor. Nulla mollis orci libero, ut tempus diam suscipit quis. Aenean auctor consectetur justo non pharetra. Suspendisse sodales magna eu dolor rutrum, ac pulvinar nunc porttitor. Ut sem massa, rhoncus id tellus vitae, faucibus faucibus elit.',
    },
  },
}

const mutations = {
  person (state, { id, person }) {
    Vue.set(state.persons, id, person)
  },
}

module.exports = {
  state,
  mutations,
}
