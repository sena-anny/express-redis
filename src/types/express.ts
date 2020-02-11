import Express, { IRouterMatcher } from 'express'

declare module 'express' {
  interface RequestParams {
    query?: any
    params?: any
    body?: any
  }
  interface ExRequest<T extends RequestParams> extends Express.Request {
    params: T['params']
    query: T['query']
    body: T['body']
  }
  // interface ExResponse<T> extends Express.Response {
  //   send: (body?: T) => ExResponse<T>
  // }
  interface Application {
    get: (<P>(
      path: P,
      ...requestHandler: RequestParams[]
    )=> any ) & IRouterMatcher<this>
  }
}
