import axios from '@axios'



export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
      fetchDrawflows(ctx, queryParams) {
        return new Promise((resolve, reject) => {
          axios
            .get("http://localhost:8080/drawflow", { params: queryParams })
            .then(response => resolve(response))
            .catch(error => reject(error))
        })
      },
    },
  }