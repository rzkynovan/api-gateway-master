const axios = require("axios");

const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: parseInt(TIMEOUT),
  });
  return instance;
};
