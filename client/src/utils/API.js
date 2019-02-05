import axios from 'axios';

export default {
  
  getChuck: function() {
    console.log("api chuck logging");
    return axios.get("/api/chuck");
  },
  
  getDesigner: function() {
    return axios.get("/api/designer");
  },
  
  getBudda: function(id) {
    return axios.get("/api/budda");
  },

};