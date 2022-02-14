  export const state = () => ({
    alertes: {},
  })

  export const mutations = {
    SET_ALERTES (state, payload) {
      state.alertes = payload
    },
  }

  export const actions = {

    async getAlertes({commit}) {
        console.log("ress")
      let res = await this.$axios.get('/tasks')

      console.log(res)
      commit('SET_ALERTES', res)
      return res;
    },

    async addAlertes({commit}, { title, desc }) {

    const body = JSON.stringify({
        title: title,
        descirption: desc
    })

      let res = await this.$axios.post('/tasks/add', body, {
        headers: {
            'content-type': 'application/json;charset=utf-8'
          }
      })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
  }