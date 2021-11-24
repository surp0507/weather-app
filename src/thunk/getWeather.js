import axios from "axios";

  const getWeather = (data)=> async (dispatch) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1637758064765&appid=dd52c7c22569a6cf7a6a6caf51b7a52c`);
    console.log(response.data);

   }
 export default getWeather ;