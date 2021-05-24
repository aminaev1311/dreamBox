import http from '@api/http'

export const sentFormForReg = async from => {
  const { data } = await http.post('registration', from)
  return data
}
export const activate = async getparams => {
  const { data } = await http.post('activate', getparams)
  return data
}
export const checkLogin = async login => {
  const { data } = await http.get(`checkLogin/${login}`)
  return data
}
export const checkEmail = async email => {
  const { data } = await http.get(`checkEmail/${email}`)
  return data
}
