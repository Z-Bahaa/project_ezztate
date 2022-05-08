import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'a3d2ce6cbfmsh5804e5b77e6d5a5p1c05d6jsne9102e663cde'
    }
  });
    
  return data;
}