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
      return alert("Application Crash");
    }
  },
  getTodo : async () => {
    try {
      const result = await api.get('/todos');
      return result.data.Todos;
    } catch (error) {
      console.log(error);
      return []
    }
  },
  getTodoById : async (todoId) => {
    try {
      const result = await api.get(`/todos/${todoId}`);
      return result.data.todo;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTodoById : async (todoId) => {
    try {
      await api.delete(`/todos/${todoId}`);
    } catch (error) {
      console.log(error);
    }
  },
  postTaskByTodoId : async (task, todoId) => {
    try {
      await api.post(`/task/todoId/${todoId}`, task);
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      }
      console.log(error);
      return alert("Application Crash");
    };
  },
  getTaskInTodo : async (todoId) => {
    try {
      const result = await api.get(`/task/todoId/${todoId}`);
      return result.data.tasks;
    } catch (error) {
      console.log(error);
      return [];
    };
  },
  toogleStatusTaskById : async (taskId) => {
    try {
      await api.put(`/task/${taskId}`);
    } catch (error) {
      console.log(error);
    };
  },
  deleteTaskById : async (taskId) => {
    try {
      await api.delete(`/task/${taskId}`);
    } catch (error) {
      console.log(error);
    };
  },
  patchTaskById : async (task, id) => {
    try {
      await api.patch(`/task/${id}`, task);
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      }
      console.log(error);
      return alert("Application Crash");
    };
  },
  patchTodo : async (payload, id) =>{
    try {
      await api.patch(`/todos/${id}`, payload);
    } catch (error) {
      if(error.response){
        return error.response.data.message;
      }
      console.log(error);
      return alert("Application Crash");
    }
  },
}

export default ApiServices;