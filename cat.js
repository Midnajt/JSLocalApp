const axios = require("axios");

const fetchData = async () => {
  console.log("Promise start ");
  try {
    const response = await axios.get("https://cat-fact.herokuapp.com/facts");
    const data = response.data;

    data.forEach((item) => {
      console.log("################################################################################################");
      console.log(item);
      console.log("################################################################################################");
    });
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Promise finished ");
  }
};
fetchData();
