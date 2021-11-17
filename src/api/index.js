import http from './http'

var newsProxy = ""
var weatherProxy = ""
if (process.env.NODE_ENV === 'production') {
  newsProxy = "http://v.juhe.cn"
  weatherProxy = "https://devapi.qweather.com/v7/weather"
} else {
  newsProxy = "/news"
  weatherProxy = "/weather" 
}

// 新闻列表
export function newsList(type = "top", page = 1, page_size = 10) {
  return http.get(
    newsProxy + '/toutiao/index', 
    {
      params: {
        key: "e1e6148a19ad74d8f633e204991ee074",
        type,
        page,
        page_size
      }
    }
  )
}

// 3天的天气预报
export function get3d(location) {
  return http.get(
    weatherProxy + '/3d', 
    {
      params: {
        key: "6958f98a7e604a2b7dc47a8b01182c0d",
        location
      }
    }
  )
}