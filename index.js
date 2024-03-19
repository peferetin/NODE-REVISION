import "dotenv/config";
import fs from "fs";
import axios from "axios";
import http from "http";

const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer((request, response) => {
  response.end("Hello world");
});

const apiCall = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
apiCall();
