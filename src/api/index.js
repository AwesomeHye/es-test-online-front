import axios from 'axios'
import store from '@/store'

export default class api {
  http = null

  constructor() {
    this.http = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      timeout: 60000,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/x-www-form-urlencoded charset=UTF-8'
      }
    })

    this.http.interceptors.request.use(
      config => {
        if (store.getters['session/getAuthToken']) {
          config.headers.Authorization = `Bearer ${store.getters['session/getAuthToken']}`
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  // 데이터 호출 API
  getAPI(url, params = {}) {
    return this.http
      .get(url, params)
      .then(res => {
        return res.data
      })
      .catch(err => {
        this.showError(err, url)
      })
  }

  // 데이터 전송 API
  postAPI(url, form, headers = {}) {

    const data = form

    if (headers['Content-type'] === 'multipart/form-data') {
      // eslint-disable-next-line no-const-assign
      data = this.getFormData(form)
    }


    return this.http
      .post(url, data, { headers })
      .then(res => {
        return res.data
      })
      .catch(err => {
        this.showError(err, url)
      })
  }

  // 오류 확인
  showError(error, url) {

    console.error('error url: ', url)

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('response data: ', error.response.data)
      console.error('response status: ', error.response.status)
      console.error('response header: ', error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error('request error: ', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('etc error:', error.message)
    }

    console.error('axios config:', error.config)
  }

  //=================================================================================

  //=================================================================================


  getOrganization() {
    // 세부 API
    return this.getAPI('/common/getOrgList?type=')
  }

}
