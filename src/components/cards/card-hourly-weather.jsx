import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { tempContext } from '../context/context';


export default function CardHourlyWeather(props) {

  let time = new Date(props.info.dt * 1000).toLocaleTimeString('es-Es', { hour: 'numeric', minute: 'numeric' })

  const temp = useContext(tempContext)
  let tempSign = ''

  if(temp==='metric'){
    tempSign='ºC'
  }
  else{
    tempSign='ºF'
  }

  const HourlyCard = styled(Card)({
    maxWidth: 245,
    background: ' linear-gradient(180deg, rgba(37, 36, 36, 0) 0%, #252424 68.75%)', /** ESTE ES EL QUE HABÍA ANTES (EL DE AHORA ES EL DEL FIGMA) 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)'*/
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4em',
  })
  const HourlyCardContent = styled(CardContent)({
    borderRadius: '4em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  })

  const HourlyCardMedia = styled(CardMedia)({
    height: '50px',
    width: '50px',
  })
  const HourlyCardTitle = styled(Typography)({
    fontSize: 18,
    color: 'white'
  })
  const HourlyCardTemp = styled(Typography)({
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  })


  return (
    <HourlyCard>
      <HourlyCardContent>

        <HourlyCardTitle >{time}</HourlyCardTitle>

        <HourlyCardMedia
          image={window.location.origin + `/img/${props.info.weather[0].icon}.svg`}
        />
        <HourlyCardTemp>
          {Math.round(props.info.temp)+tempSign}
        </HourlyCardTemp>

      </HourlyCardContent>

    </HourlyCard>
  );
}