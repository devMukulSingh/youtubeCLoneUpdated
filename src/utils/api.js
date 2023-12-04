import axios from 'axios';


export const fetchDataFromApi = async(URL, API_KEY) => {
  const BASE_URL = 'https://yt-api.p.rapidapi.com';

try {
    const{ data } = await axios.get(`${BASE_URL}/${URL}`,
    {
      params:{

      },
      headers:{
        'X-RapidAPI-Key': API_KEY ,
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }
    });

    return data;
} 
catch (error) {
  console.log(`Error in fetchDataFromApi ${error}`);
}

}
