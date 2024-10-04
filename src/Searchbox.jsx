import React, {useState, useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import { Weathercontext } from './weathercontext';

function Searchbox() {

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let [city, setcity] = useState("");
    const [error, seterror] = useState(false);
    const [weatherinfo, setWeatherinfo] = useContext(Weathercontext);

    const getweatherinfo = async()=>{
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            console.log(data);
            let result = {
                city : city,
                temp : data.main.temp,
                tempmin : data.main.temp_min,
                tempmax : data.main.temp_max,
                humidity : data.main.humidity,
                feelslike : data.main.feels_like,
                weather : data.weather[0].description,
                weathericon : data.weather[0].icon
            }
            console.log(result);
            setWeatherinfo(result);
            localStorage.setItem("weatherinfo", JSON.stringify(result));
        } catch (err) {
            seterror(true);
        }
    }

    const handlesubmit = (e)=>{
        try {
            e.preventDefault();
            console.log("Search for:", city);
            getweatherinfo();
            setcity("");
            seterror(false);
        } catch (err) {
            seterror(true);
        }
    }

  return (
    <div style={{textAlign:'center'}}>
        <h3>Search Weather!</h3>
        <form onSubmit={handlesubmit}> 
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={(e)=>{setcity(e.target.value)}}/>
            <br/>
            <Button color='primary' size='medium' type='submit' variant='outlined' sx={{m:"1rem"}} startIcon={<SearchIcon />}>
                Search
            </Button>
            {error && <Alert severity="warning" sx={{textAlign:"center"}}><strong>OOPS! </strong>No Weather Information found!</Alert>}
        </form>
    </div>
  ) 
}

export default Searchbox
