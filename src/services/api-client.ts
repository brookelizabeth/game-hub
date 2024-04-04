import axios from "axios";

export default axios.create({
    baseURL: 'http://api.rawg.io/api/',
    params: {
        key: 'b634cf56f1f0436195d6f791d185a051'
    }
})