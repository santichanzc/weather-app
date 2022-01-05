import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageFour from '../../img/podcast-images/pod4.jpg'

export default function CardPodcasFour(props) {

  const PodcastCard = styled(Card)({
    width: 164,
    height: 234,
    background: 'black', /** ESTE ES EL QUE HABÍA ANTES (EL DE AHORA ES EL DEL FIGMA) 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)'*/
    borderRadius: '10px',   
    display:'flex',
    alignItems: 'stretch',
    justifyContent: 'center', 
    marginBottom: '4em'
  })

  const PodcastCardContent = styled(CardContent)({
    borderRadius: '4em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-between'
  })

  const PodcastCardMedia = styled(CardMedia)({
    height: '80px',
    width: '80px',
  })
  const PodcastCardTitle = styled(Typography)({
    fontSize: 14,
    fontWeight: 450,
    color: 'white',
    textAlign: 'center',
  })

  const PodcastCardDescription = styled(Typography)({
    fontSize: 14,
    fontWeight: 450,
    color: '#A7A7A7',
    textAlign: 'center',
  })
 
  


  return (
        <PodcastCard >
          <PodcastCardContent>

          
          <Grid item >
                        <img alt='podcast one' src={imageFour} width="150" height="150" margin="auto"></img>
                    </Grid>
  
        
            <PodcastCardTitle >Ven con un Cuento</PodcastCardTitle>
            <PodcastCardDescription >Podcast • Spotify Studios</PodcastCardDescription>
            
            <PodcastCardMedia/>
            <Grid container spacing={2} justifyContent='center' alignItems='center'>
              
            </Grid>
          </PodcastCardContent>
        </PodcastCard>
  );
}