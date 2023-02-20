import axios from 'axios'

export default {
  fetchCurrentlyPlaying: () => 
    axios.get(`${process.env.BASE_URL}/currently-playing`),
}