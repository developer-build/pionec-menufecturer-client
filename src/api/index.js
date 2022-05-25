import axios from "axios";
const fetcher = axios.create({
  baseURL: "https://tranquil-earth-82270.herokuapp.com/",
});

export default fetcher;
