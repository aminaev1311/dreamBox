import http from '@api/http'

export const sentForm = async from => {
  const { data } = await http.post('registration', from)
}
export const activate = async getparams => {
  const { data } = await http.post('activate', getparams)
}
