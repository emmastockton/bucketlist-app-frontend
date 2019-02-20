import axios from 'axios';

const TasksService = {
    async getTasks() {
        let res = await axios.get("https://u9uoyeerq6.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        let dataReceived = await res.data;
        return dataReceived;
    },
    async getDoneTasks() {
        let res = await axios.get("https://u9uoyeerq6.execute-api.eu-west-2.amazonaws.com/dev/tasks/doneTasks");
        let dataReceived = await res.data;
        return dataReceived;
    },
    async saveTask(task) {
        let res = await axios.post("https://u9uoyeerq6.execute-api.eu-west-2.amazonaws.com/dev/tasks", task);
        return res.data;
    },
    async deleteTask(taskId) {
        let res = await axios.delete("https://u9uoyeerq6.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + taskId);
        let dataReceived = await res.data;
        return dataReceived;
    },
    async completeTask(taskId) {
        let res = await axios.put("https://u9uoyeerq6.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + taskId);
        let dataReceived = await res.data;
        return dataReceived;
    }
 };
 
 export default TasksService;