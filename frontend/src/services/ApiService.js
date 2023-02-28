import axios from 'axios';


const API_BASE_URL = "http://localhost:8080/api/items/"

class ApiService {
    static getAll() {
        return axios.get(API_BASE_URL);
    }

    static remove(id) {
        return axios.delete(API_BASE_URL + id);
    }

    static create(created) {
        return axios.post(API_BASE_URL, created);
    }

    static update(updated) {
        return axios.put(API_BASE_URL + updated.id, updated);
    }

    static updateStatus(id, status) {
        return axios.put(API_BASE_URL + `${id}/status/${status}`);
    }
}

export default ApiService;