import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CurrentWeatherCard } from './current-weather/current-weather';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


export default function InteractiveSection(props) {


    let lluvia = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl?utm_source=generator" width="100%" height="380" frameBorder="0" title='lluvia' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>

    let tormenta = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5hol82XuK24?utm_source=generator" width="100%" height="380" frameBorder="0" title='tormenta' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    
    let soleado = <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator" width="100%" height="380" frameBorder="0" title='soleado' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    // - **Opción 2 día soleado** - <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTUHzPOW6Jl7?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    
    let nocheClara = <iframe src="https://open.spotify.com/embed/playlist/2KakwSe9Wv5ltGkHkbxk2L?utm_source=generator" width="100%" height="380" frameBorder="0" title='nocheClara'  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    
    let nubladoDia =<iframe src="https://open.spotify.com/embed/album/1XKCEMI1C4zp6pIXvitjAv?utm_source=generator" width="100%" height="380" frameBorder="0" title='nubladoDia' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    
    let nubladoNoche=<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2pSTOxoPbx9?utm_source=generator" width="100%" height="380" frameBorder="0" title='nubladoNoche' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    
    let niebla =<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1PiujNwN5Yy?utm_source=generator" width="100%" height="380" frameBorder="0" title='niebla' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    
    let nieve =<iframe src="https://open.spotify.com/embed/playlist/5O1KGC2HrEAMbTTl0ux8J4?utm_source=generator" width="100%" height="380" frameBorder="0" title='nieve' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    


    const IframeTitle = styled(Typography)({
        fontSize: '31px',
        fontWeight: '450',
        color: 'white',
        lineHeight: '72px'
    })

    const weatherNow = props.info.current?.weather[0].icon

    let playListToPlay = '';
    
    switch (weatherNow) {
        case '01d': playListToPlay = soleado; break;
        case '02d': playListToPlay = nubladoDia; break;
        case '03d': playListToPlay = nubladoDia; break;
        case '04d': playListToPlay = nubladoDia; break;
        case '01n': playListToPlay = nocheClara; break;
        case '02n': playListToPlay = nubladoNoche; break;
        case '03n': playListToPlay = nubladoNoche; break;
        case '04n': playListToPlay = nubladoNoche; break;
        case '10d': playListToPlay = lluvia; break;
        case '10n': playListToPlay = lluvia; break;
        case '11d': playListToPlay = tormenta; break;
        case '11n': playListToPlay = tormenta; break;
        case '09d': playListToPlay = tormenta; break;
        case '09n': playListToPlay = tormenta; break;
        case '13d': playListToPlay = nieve; break;
        case '13n': playListToPlay = nieve; break;
        case '50d': playListToPlay = niebla; break;
        case '50n': playListToPlay = niebla; break;
        default: playListToPlay = soleado; break;
    }
            return (
                <Grid container spacing={8} sx={{
                    color: 'primary.contrastText',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Grid item xs={6} >
                        <Box>
                            <Grid item >
                                <CurrentWeatherCard info={props.info} city={props.city} currentCity={props.currentCity} onTempChange={props.onTempChange}></CurrentWeatherCard>
                            </Grid>
                        </Box >
                    </Grid>
                    <Grid item xs={5}>
                        <Box>
                            <Grid item >
                                <IframeTitle>♫ Hoy el tiempo suena a...</IframeTitle>
                            </Grid>
                            <Grid item sx={{marginRight:'1em'}} >
                            {playListToPlay}
                            </Grid>
                        </Box >
                    </Grid>
                </Grid>

            )
    }