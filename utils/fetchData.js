import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "f2ae02a8demsh8ef21a88a7afc66p175993jsnfa0b0f775c9b",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  })
  return data
}
