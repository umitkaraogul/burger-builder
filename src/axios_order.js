import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-6af70.firebaseio.com/'
})

export default instance;