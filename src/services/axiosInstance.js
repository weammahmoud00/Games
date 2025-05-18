import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
    timeout: 5000,
    params: { category: 'mmorpg' },
    headers: {
        'x-rapidapi-key': '9cabf327efmshec3de81a9d6e1d3p1d1dc9jsn267c38e77592',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
});