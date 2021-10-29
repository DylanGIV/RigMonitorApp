import axios from './axiosConfig';

export const postLogin = async (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post('api/Authenticate/login', {
            email: email,
            password: password
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
}

export const getRigs = async () => {
    return new Promise((resolve, reject) => {
        axios.get('rig', {
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
}