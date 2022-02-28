import axios from 'axios'

const fetchUserProfile = () => {
  return axios.get('users/1').then((response: any) => response.data)
}

export { fetchUserProfile }
