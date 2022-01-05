import Grid from '@mui/material/Grid';
import CardHourlyWeather from '../cards/card-hourly-weather';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export default function HourlyWeatherSection(props) {

    const dailyArray = props.info.hourly?.slice(0, 12)


    const HourlyTitle = styled(Typography)({
        fontSize: '36px',
        fontWeight: '200',
        color: 'white',
        marginBottom: '1em',
        marginLeft: '1.5em',
    })

    return (
        <Grid container sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around',
        }}>
            <Grid item container >
                <HourlyTitle>Por horas</HourlyTitle>
            </Grid>
            <Grid item container sx={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: '0em 2em'
        }}>
                {dailyArray?.map((e, i) => <Grid item key={i} >
                    <CardHourlyWeather info={e}></CardHourlyWeather>
                </Grid>)}
            </Grid>
        </Grid>

    )
}