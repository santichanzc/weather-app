import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import spotifyLogo from '../../img/logos/spotify.png'
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function Header() {


    const SpotifyTitle = styled(Typography)({
        fontSize: '36px',
        fontWeight: '900',
        color: 'white'
    })
    const SpotifySubTitle = styled(Typography)({
        fontSize: '36px',
        fontWeight: '450',
        color: 'white'
    })


    return (
        <Box sx={{
            height:'70px',
            backgroundColor: 'neutral.dark',
            color: 'primary.contrastText',
            display:'flex',
            justifyContent:'center',}}>

            <Grid container>
                <Grid item container sx={{display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center'}}>
                    <Grid item sx={{marginLeft:'4em'}}>
                        <img alt='spotify logo' src={spotifyLogo}></img>
                    </Grid>
                    <Grid item container>
                        <Grid item sx={{marginLeft:'0.5em'}}>
                            <SpotifyTitle>Spotify</SpotifyTitle>
                        </Grid>
                        <Grid item sx={{marginLeft:'0.5em'}} >
                            <SpotifySubTitle>Weather</SpotifySubTitle>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>


    )
}