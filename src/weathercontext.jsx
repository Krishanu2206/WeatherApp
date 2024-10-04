import React, { useState, createContext, useEffect } from 'react';

const Weathercontext = createContext();

const Weatherprovider = ({children})=>{
    const [weatherinfo, setWeatherinfo] = useState({});

    useEffect(()=>{
        const weatherdata = localStorage.getItem('weatherinfo');
        if(weatherdata){
            const parsedData = JSON.parse(weatherdata);
            setWeatherinfo(parsedData); 
        }
    }, []);

    return (
    <Weathercontext.Provider value={[weatherinfo, setWeatherinfo]}>
      {children}
    </Weathercontext.Provider>
  );
}

export {Weathercontext, Weatherprovider};