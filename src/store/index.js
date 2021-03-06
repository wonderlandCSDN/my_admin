import Vue from 'vue';
import Vuex from 'vuex';
import tags from './modules/tags/tags'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {tags}
});

export default store;