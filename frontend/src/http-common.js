import axios from 'axios'
import { CONFIG } from './utils/config'

export default axios.create({
    baseURL: CONFIG.url,
    headers:{
        'Content-Type': 'application/json'
    }
})