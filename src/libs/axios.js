import axios from 'axios'

const axiosIns = axios.create({
	// You can add your headers here
	// ================================
	baseURL: 'http://localhost:3332/',
	// timeout: 1000,
	// headers: {'X-Custom-Header': 'foobar'}
})

// axiosIns.interceptors.request.use(
//     config => {
//         // ** Get token from localStorage
//         const accessToken = this.getToken()

//         // ** If token is present add it to request's Authorization Header
//         if (accessToken) {
//             // ** eslint-disable-next-line no-param-reassign
//             config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
//         }
//         return config
//     },
//     error => Promise.reject(error)
// )

// // ** Add request/response interceptor
// axiosIns.interceptors.response.use(
//     response => response,
//     error => {
//         // ** const { config, response: { status } } = error
//         const { config, response } = error
//         const originalRequest = config

//         // ** if (status === 401) {
//         if (response && response.status === 401) {
//             if (!this.isAlreadyFetchingAccessToken) {
//                 this.isAlreadyFetchingAccessToken = true
//                 this.refreshToken().then(r => {
//                     this.isAlreadyFetchingAccessToken = false

//                     // ** Update accessToken in localStorage
//                     this.setToken(r.data.accessToken)
//                     this.setRefreshToken(r.data.refreshToken)

//                     this.onAccessTokenFetched(r.data.accessToken)
//                 })
//             }
//             const retryOriginalRequest = new Promise(resolve => {
//                 this.addSubscriber(accessToken => {
//                     // ** Make sure to assign accessToken according to your response.
//                     // ** Check: https://pixinvent.ticksy.com/ticket/2413870
//                     // ** Change Authorization header
//                     originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
//                     resolve(this.axios(originalRequest))
//                 })
//             })
//             return retryOriginalRequest
//         }
//         return Promise.reject(error)
//     }
// )

export default axiosIns