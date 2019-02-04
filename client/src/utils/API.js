import axios from 'axios';

export default {
  
  getChuck: function() {
    return axios.get("/api/chuck");
  },
  
  getDesigner: function() {
    return axios.get("/api/designer");
  },
  
  getBudda: function(id) {
    return axios.delete("/api/budda");
  },

};