// 请求类型
export type Method = 'get' | 'GET' | 'post' | 'POST' // 简单实现一下，只写个get & post

// axios参数类型
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
