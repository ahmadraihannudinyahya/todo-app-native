import axios from "axios";

const api = axios.create({
  baseURL : 'https://blue-bat-5.a276.dcdg.xyz',
});

const ApiServices = {
  postTodo : async (payload) =>{
    try {
      await api.post('/todos', payload);
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      }
      console.log(error);
      return alert("Application Crash")
    }
  },
  getTodo : async () => {
    try {
      const result = await api.get('/todos');
      return result.data.Todos;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ApiServices;