import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: "1",
                title: "First Post",
                previewText: "This is our first post!",
                thumbnail:
                  "https://media.istockphoto.com/photos/abstract-blue-digital-background-picture-id1146532466?k=20&m=1146532466&s=612x612&w=0&h=NjZrRzJH4nvxVmTGTvMrMrPGQ03fDNYTmRNoEiNSeCQ="
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is our second post!",
                thumbnail:
                  "https://media.istockphoto.com/photos/abstract-blue-digital-background-picture-id1146532466?k=20&m=1146532466&s=612x612&w=0&h=NjZrRzJH4nvxVmTGTvMrMrPGQ03fDNYTmRNoEiNSeCQ="
              }
            ]);
            resolve();
          }, 1000)
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  }
)}

export default createStore
