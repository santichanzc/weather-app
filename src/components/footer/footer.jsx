import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import spotifyLogoFooter from '../../img/logos/logo-footer.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function Footer() {


    const SpotifyTitle = styled(Typography)({
        fontSize: '32px',
        fontWeight: '900',
        color: 'white'
    })
    const SpotifySubTitle = styled(Typography)({
        fontSize: '12px',
        fontWeight: '450',
        color: 'white'
    })


    return (
        <Box sx={{
            height:'85px',
            backgroundColor: '#282828',
            color: 'primary.contrastText',
            display:'flex',
            justifyContent:'space-between',}}>

            <Grid container >
                <Grid item container sx={{display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', alignContent:'center'}}>
                   
                    <Grid item container sx={{alignItems:'center'}}>
                        <Grid item sx={{marginLeft:'650px'}}>
                            <SpotifyTitle> <img alt='spotify logo footer' src={spotifyLogoFooter}></img>Spotify</SpotifyTitle>
                        </Grid>
                        <Grid item sx={{marginLeft: '500px'}} >
                            <SpotifySubTitle>©2021 Spotify AB</SpotifySubTitle>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>


    )
}





