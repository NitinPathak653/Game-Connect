import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "def4ac426dbe4e0c962fc583cf972548",
  },
});
