import axios from 'axios'

const baseUrl = ''

export default {
  fetchLastPlayedSong: () =>
    axios.get(`${baseUrl}/{endpoint}`, {
      params: {
      
      },
    }),
  fetchAccessToken: () =>
    axios.get(`${baseUrl}/{endpoint}`, {
      params: {
       
      },
    }),
  
}