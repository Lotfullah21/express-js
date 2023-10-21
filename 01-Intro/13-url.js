const { URL } = require("url");
const webAddress =
  "http://localhost:4000/home.html?name=Ahmad&country=Palestine&status=student";
// create a new URL object to represent and work with the URL defined in the webAddress string.
const newUrlToParse = new URL(webAddress);
// we can use searchParams method to have access to the query parameters in a URL, The object will now allow you to access different components of the URL, including query parameters.
const queryData = newUrlToParse.searchParams;
console.log(queryData);
// using get method to have access to each
console.log(queryData.get("name"));
console.log(queryData.get("country"));

// const url = require("url");
// let webAddress =
//   "http://localhost:2000/index.html?lastName=Kent&firstName=Clark";
// let qry = url.parse(webAddress, true);
// let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
// console.log(qrydata.firstName); //outputs Clark
