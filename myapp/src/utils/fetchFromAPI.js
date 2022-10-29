import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    // method: 'GET',
    // url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '0670c0028amshbdc8a5032135fd5p18017bjsncaf7a42af629',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
//   '0670c0028amshbdc8a5032135fd5p18017bjsncaf7a42af629',

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}




