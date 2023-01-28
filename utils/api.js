import axios from 'axios'

const baseUrl = 'https://spotify-api-v1.herokuapp.com'

export default {
  fetchCurrentlyPlaying: () => 
    axios.get(`${baseUrl}/currently-playing`),
}