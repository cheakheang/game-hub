import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c13cd9091bc14cfd83fa658bce65d55b",
  },
});
