import axios from "axios";

//Api thời tiết hà nội
const API = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&units=metric&appid={Your api key}'

export const fetchWeatherData = async () => {
    try {
        const response = await axios.get(API);
        return response.data;
    } catch(e) {
        // console.error(e);
        throw e;
    }
}