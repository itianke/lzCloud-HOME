import axios from 'axios'
import homeApi from './modules/home'
import commonApi from './modules/main/common'
import userApi from './modules/main'

export default {
    axios: axios,
    homeApi,
    commonApi,
    userApi
}
