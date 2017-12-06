import axios from 'axios';

const URL = 'https://enigmaapp.herokuapp.com/api/js';

exports.getFull = () => {
  return axios
    .get(`${URL}/full`, {
      timeout: 8000
    })
    .then(response => response.data.data);
};
