import axios from 'axios'

const baseUrl = 'https://spotify-api-yx2r.onrender.com'

export default {
  fetchLastPlayedSong: () => 
    axios.get(`${baseUrl}/currently-playing`),
}