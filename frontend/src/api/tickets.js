import { HTTP } from './common'

export const Ticket = {
  list () {
    return HTTP.get('/tickets/').then(response => {
      return response.data
    })
  }
}
