export interface ISuccessfullyResponse<T=unknown> {
  statusCode: number
  message?: string
  result?: T
}

export const successResponseMessage = (message: string): ISuccessfullyResponse => {
  return {
    statusCode: 201,
    message
  }
}

export const successResponseBody = <T>( body: T): ISuccessfullyResponse<T> => {
  return {
    statusCode: 200,
    result:body
  }
}
