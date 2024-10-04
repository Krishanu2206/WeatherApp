import React, {useContext} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Weathercontext } from './weathercontext';

function Infobox() {

    const [weatherinfo, setWeatherinfo] = useContext(Weathercontext);

    const WEATHER_ICON = import.meta.env.VITE_WEATHER_ICON;
    const WEATHER_ICON_PATH = `${WEATHER_ICON}/${weatherinfo.weathericon}@2x.png`;

  return (
    <div className='infobox' style={{display:'flex', flexDirection:"row", justifyContent:'center'}}>
      <Card sx={{ maxWidth: 300}}>
        <CardMedia
            sx={{ height: 150}}
            image={WEATHER_ICON_PATH}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {weatherinfo.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary', fontSize:"1rem"}} component={"span"}>
                <ul>
                <li>Temperature = {weatherinfo.temp}&deg;C</li>
                <li>Humidity = {weatherinfo.humidity}</li>
                <li><strong>The weather can be described as '{weatherinfo.weather}' and feels like = {weatherinfo.feelslike}&deg;C</strong></li>
                <li>Max Temperature = {weatherinfo.tempmax}&deg;C</li>
                <li>Min Temperature = {weatherinfo.tempmin}&deg;C</li>
                </ul>
            </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Infobox
