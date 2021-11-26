import axios from "axios";
import { weatherAction } from "../actions";


const getWeather = (cityname)=> async (dispatch) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=dd52c7c22569a6cf7a6a6caf51b7a52c`);
  dispatch(weatherAction([response.data]))
}
 export default getWeather ;


