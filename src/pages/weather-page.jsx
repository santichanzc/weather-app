import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'
import Grid from '@mui/material/Grid';
import './style.css'
import SearchBar from '../components/seach-bar/search-bar.jsx';
import InteractiveSection from '../components/Interactive-section/interactive-section.jsx';
import React from 'react';
import WeeklyWeatherSection from '../components/weekly-weather-section/weekly-weather-section.jsx';
import HourlyWeatherSection from '../components/hourly-weather-section/hourly-weather-section.jsx';
import PodcastSection from '../components/pocast-section/podcast-section.jsx';
import { useContext, useEffect, useState } from 'react';
import { tempContext } from '../components/context/context.js'
import { api } from '../my-config.js'



export default function WeatherPage() {

    const temp = useContext(tempContext)
    const [newTempUnit, updateTemp] = useState(temp);
    let [currentPositionWeather, setCurrentPositionWeather] = useState({})
    let [currentCity, setCurrentCity] = useState('')
    let [searchedCity, setSearchedCity] = useState({})

    const key = api;

    useEffect(() => {
        if (navigator.geolocation && searchedCity.name === undefined) { //Si la localización está activada y no hay ciudad buscada entonces busca por geolocalización
            getUserCurrentPosition()
        }
        else if (searchedCity !== undefined) {    //Si hay una ciudad buscada entonces trae los datos de esa ciudad
            getWeatherInfoByCity(searchedCity.name)
        }
        else {
            console.log('error')
        }
    }, [newTempUnit, searchedCity.name])


    function getUserCurrentPosition() { //Trae la locacalización actual del usuario
        navigator.geolocation.getCurrentPosition(function (position) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${newTempUnit}&appid=${key}`)
                .then(response => response.json())
                .then(currentCity => { setCurrentCity(currentCity.name);{console.log(currentCity)} })/* tras traer los datos del usuario resetea la ciudad buscada a vacío */;
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${newTempUnit}&appid=${key}`)
                .then(response => response.json())
                .then(data => { setCurrentPositionWeather({ ...data }); setSearchedCity({})/* tras traer los datos del usuario resetea la ciudad buscada a vacío */; })
        })
    }


    function getWeatherInfoByCity(city) {//Trae el tiempo actual de la ciudad buscada
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&lang=sp'+ '&appid=' + key)
            .then(resp => resp.json())
            .then(data => { 
                if (data.cod !== 200) {
                    console.log(data.status)
                }
                else {
                    setSearchedCity(data);
                    setCurrentCity(data.name)
                    console.log(searchedCity)
                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=${newTempUnit}&lang=sp&appid=${key}`)
                        .then(responseWeather => responseWeather.json())
                        .then(r => { setCurrentPositionWeather({ ...r }); console.log(r) })
    }
})

}


const search = input => {
    getWeatherInfoByCity(input)
}

const getPosition = () => {
    getUserCurrentPosition()
}

const onTempChange = () => {
    if (newTempUnit === 'metric') {
        console.log(newTempUnit)
        updateTemp('imperial')
    }
    else {
        console.log(newTempUnit)
        updateTemp('metric')
    }
}




return (
    <tempContext.Provider value={newTempUnit}>
        <Grid container columnSpacing={2}>
            <Grid item xs={12}>
                <Header></Header>
            </Grid>
            <Grid item xs={12}>
                <SearchBar onSearch={search} onGeolocation={getPosition}></SearchBar>

            </Grid>
            <Grid item xs={12}>
                <InteractiveSection info={currentPositionWeather} city={searchedCity} currentCity={currentCity} onTempChange={onTempChange}></InteractiveSection>
            </Grid>
            <Grid item xs={12}>
                <WeeklyWeatherSection info={currentPositionWeather} />
            </Grid>
            <Grid item xs={12}>
                <HourlyWeatherSection info={currentPositionWeather} />
            </Grid>
            <Grid item xs={12}>
                <PodcastSection info={currentPositionWeather} city={currentCity} />
            </Grid>
            <Grid item xs={12}>
                <Footer></Footer>
            </Grid>
        </Grid >
    </tempContext.Provider>
)
}