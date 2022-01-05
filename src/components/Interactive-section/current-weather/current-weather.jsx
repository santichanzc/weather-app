import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { tempContext } from '../../context/context.js';
import TempSwitch from './switch-button.jsx';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import ToggleButtons from './toggle-buttons.jsx';
import { Icon } from '@iconify/react';
import { useState } from 'react';






export function CurrentWeatherCard(props) {

    let [infoToShow, setInfotoShow] = useState('')

    const temp = useContext(tempContext)
    let tempSign = ''
    let windSign = ''

    if (temp === 'metric') {
        tempSign = 'ºC';
        windSign = 'm/s'
    }
    else {
        tempSign = 'ºF';
        windSign = 'mph';
    }

    let iconInfo = '';
    let height = '';
    let width = '';
    let marg = '';
    let textFieldOne = '';
    let textFieldTwo = '';


    let day = new Date(props.info.current?.dt * 1000).toLocaleTimeString('es-Es', { weekday: 'long' }) //para obtener solo el día de la semana
    let date = new Date(props.info.current?.dt * 1000).toLocaleString('es-Es', { month: 'long', day: 'numeric' })

    let puestaSol = new Date(props.info.current?.sunset * 1000).toLocaleTimeString();

    puestaSol = puestaSol.substring(0, puestaSol.length-3)

    let salidaSol = new Date(props.info.current?.sunrise * 1000).toLocaleTimeString();

    salidaSol = salidaSol.substring(0, salidaSol.length-3)

    day = day.split(',')[0];
    day = day.charAt(0).toUpperCase() + day.slice(1);

    const city = props.currentCity
    const cityTemp = props.info.current?.temp

    const CurrentCard = styled(Card)({
        width: '100%',
        height: 'fit-content',
        background: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    })
    const CurrentCardContent = styled(CardContent)({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    })

    const CurrentCardMedia = styled(CardMedia)({
        height: '250px',
        width: '250px',
    })

    const CurrentCardTitle = styled(Typography)({
        fontSize: 70,
        fontWeight: 700,
        lineHeight: '82px',
        color: 'white',
        textAlign: 'left',
    })
    const CurrentCardTemp = styled(Typography)({
        fontSize: '117px',
        lineHeight: '105px;',
        fontWeight: 700,
        color: 'white',
        textAlign: 'center',
        margin: '25px 0px',
    })
    const CurrentCardDate = styled(Typography)({
        fontSize: 27,
        fontWeight: 700,
        lineHeight: '34px;',
        color: '#8A8A8A',
        textAlign: 'center',
    })
    const TitleOne = styled(Typography)({
        fontSize: 32,
        fontWeight: 900,
        color: grey[50]
    })
    const TitleTwo = styled(Typography)({
        fontSize: 20,
        lineHeight: '40px',
        fontWeight: 900,
        color: grey[50]
    })


    const onButtonChange = info => {
        setInfotoShow(info)
    }


    switch (infoToShow) {

        case 'humedad': iconInfo = "fontisto:blood-drop"; height = '70'; width = '38'; marg = 1; textFieldOne = 'Humedad'; textFieldTwo = `${props.info.current?.humidity !== undefined ? props.info.current?.humidity + '%' + ' ' + 'Humedad' : ''}`; break;
        case 'viento': iconInfo = "mdi:weather-windy"; height = '70'; width = '70'; marg = 0; textFieldOne = 'Viento'; textFieldTwo = `${props.info.current?.["wind_speed"]}` + ' ' + `${windSign}`; break;
        case 'uv': iconInfo = "carbon:uv-index-alt"; height = '70'; width = '70'; marg = 0; textFieldOne = 'Radiación UV'; textFieldTwo = `${props.info?.current.uvi} UV`; break;
        case 'sol': iconInfo = "mi:sunrise-alt"; height = '70'; width = '70'; marg = 0; textFieldOne = 'Salida y Puesta de Sol'; textFieldTwo = `${salidaSol}`+ 'h ' + ' ' + `${puestaSol}`+'h'; break;

    }





    return (
        <Box>
            <CurrentCard>
                <CurrentCardContent>
                    <CurrentCardMedia
                        image={window.location.origin + `/img/${props.info.current?.weather[0].icon}.svg`}
                    />
                </CurrentCardContent>
                <CurrentCardContent>
                    <Grid item container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Grid item>
                            <CurrentCardTitle>{city !== undefined ? city : ''}</CurrentCardTitle>
                        </Grid>
                        <Grid item>

                            <CurrentCardTemp>{cityTemp !== undefined ? Math.round(cityTemp) + tempSign : ''}</CurrentCardTemp>

                        </Grid>
                        <Grid item container>
                            <Grid item><CurrentCardDate>{day},</CurrentCardDate></Grid>
                            <Grid item><CurrentCardDate sx={{ marginLeft: '0.2em', fontWeight: 450 }}>{date}</CurrentCardDate></Grid>
                        </Grid>
                    </Grid>
                </CurrentCardContent>
            </CurrentCard>

            <Grid container sx={{ margin: '3em 0em', alignItems: 'center' }}>
                <Grid item sx={{ margin: `1em ${3 + marg + 'em'}` }}>
                    <Icon icon={iconInfo} color='white' height={height} width={width} />
                </Grid>
                <Grid item >
                    <TitleOne>{textFieldOne}</TitleOne>
                    <TitleTwo>{textFieldTwo !== undefined ? textFieldTwo : ''}</TitleTwo>
                </Grid>

                <Grid item container sx={{ alignItems: 'center' }} xs={12}>
                    <Grid item>
                        <ToggleButtons onButtonChange={onButtonChange}></ToggleButtons>
                    </Grid>
                    <Grid item sx={{ margin: '0em 1em' }}>
                        <TempSwitch onTempChange={props.onTempChange}></TempSwitch>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}
