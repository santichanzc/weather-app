import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { tempContext } from '../context/context';

export default function CardWeather(props) {

  const WeeklyCard = styled(Card)({
    width: 164,
    height: 234,
    background: 'linear-gradient(180deg, rgba(57, 57, 57, 0) 0%, #252424 66.67%)', /** ESTE ES EL QUE HABÍA ANTES (EL DE AHORA ES EL DEL FIGMA) 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)'*/
    borderRadius: '10px',   
    display:'flex',
    alignItems: 'stretch',
    justifyContent: 'center', 
    marginBottom: '4em'
  })

  const WeeklyCardContent = styled(CardContent)({
    borderRadius: '4em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-between'
  })

  const WeeklyCardMedia = styled(CardMedia)({
    height: '80px',
    width: '80px',
  })
  const WeeklyCardTitle = styled(Typography)({
    fontSize: 18,
    fontWeight: 450,
    color: 'white',
    textAlign: 'center',
  })

  const WeeklyCardTemp = styled(Typography)({
    fontSize: 18,
    fontWeight: 600,
    lineHeight:'22.77px',
    color: 'white',
    textAlign: 'center',
  })
  

  const WeeklyCardTempMin = styled(Typography)({
    fontSize: 18,
    fontWeight: 500,
    color: '#888888',
    textAlign: 'center',
  })

  let day= new Date (props.info.dt*1000).toLocaleTimeString('es-Es',{weekday:'long'}) //para obtener solo el día de la semana
  day = day.split(',')[0];

  const temp = useContext(tempContext)
  let tempSign = ''

  if(temp==='metric'){
    tempSign='ºC'
  }
  else{
    tempSign='ºF'
  }



  return (
        <WeeklyCard >
          <WeeklyCardContent>
            <WeeklyCardTitle >{day}</WeeklyCardTitle>
            <WeeklyCardMedia
              image={window.location.origin + `/img/${props.info.weather[0].icon}.svg`}
            />

            <Grid container spacing={2} justifyContent='center' alignItems='center'>
              <Grid item>
                <WeeklyCardTemp>
                  {Math.round(props.info.temp.max) + tempSign}
                </WeeklyCardTemp>

              </Grid>
              <Grid item>
                <WeeklyCardTempMin>
                  {Math.round(props.info.temp.min) + tempSign}
                </WeeklyCardTempMin>
              </Grid>
            </Grid>
          </WeeklyCardContent>
        </WeeklyCard>
  );
}