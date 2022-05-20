// const fetch = require("node-fetch");
import fetch from "node-fetch";
// Using Promise
const getPeoplePromise = (fetch) => {
  return fetch("http://swapi.py4e.com/api/people/")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    })
    .catch((err) => {
      console.error("first");
    });
};

getPeoplePromise(fetch);

// Using asyn and await
