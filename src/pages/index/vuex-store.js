import Vue from "vue";
import Vuex from "vuex";
import dateRange from "../../js/vuex/data-range";


Vue.use(Vuex);

const modules = {
  "date-range": dateRange
};
const store = new Vuex.Store({ modules });

export default store;