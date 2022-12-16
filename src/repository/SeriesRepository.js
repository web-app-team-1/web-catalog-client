import axios from 'axios';
import config from '../../config.json';

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = config.apiKey

const getPopular = async () => {
  const searchParams = new URLSearchParams({
    'api_key': apiKey,
    include_adult: false,
  })
  const data = await axios.get(`${baseUrl}/tv/popular?${searchParams.toString()}`)
  return data.data.results
}

const search = async (searchText) => {
  const searchParams = new URLSearchParams({
    'api_key': apiKey,
    include_adult: false,
    query: searchText
  })
  const data = await axios.get(`${baseUrl}/search/tv?${searchParams.toString()}`)
  return data.data.results
}

const getDetailById = async (id) => {
  const searchParams = new URLSearchParams({
    'api_key': apiKey,
    include_adult: false,
  })
  const data = await axios.get(`${baseUrl}/tv/${id}?${searchParams.toString()}`)
  return data.data
}

const seriesRepository = {
  getPopular,
  search,
  getDetailById,
}

export default seriesRepository