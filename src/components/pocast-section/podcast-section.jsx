import Grid from '@mui/material/Grid';
import CardPodcast from '../cards/card-pod1';
import CardPodcastTwo from '../cards/card-pod2';
import CardPodcastThree from '../cards/card-pod3';
import CardPodcastFour from '../cards/card-pod4';
import CardPodcastFive from '../cards/card-pod5';
import CardPodcastSix from '../cards/card-pod6';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


export default function PodcastSection(props) {


    const city = props.city


    const PodcastTitle = styled(Typography)({
        fontSize: '36px',
        fontWeight: '200',
        color: 'white',
        marginBottom: '1em',
        marginLeft: '1.5em',
    })
    const PodcastCity = styled(Typography)({
        fontSize: '36px',
        fontWeight: '700',
        color: 'white',
        marginBottom: '1em',
        marginLeft: '0.6em',
    })


    return (
        <Grid container sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',

        }}>
            <Grid item container>
                <Grid item> <PodcastTitle>Los Podcasts más escuchados en</PodcastTitle></Grid>
                <Grid item> <PodcastCity>{city}</PodcastCity></Grid>

            </Grid>
            <Grid container sx={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin:'0em 1em'
            }}>

                <Grid item>
                    <a style={{textDecoration:'none'}} href='https://open.spotify.com/show/1A9njlCBGq8wesrRuuyUtx?si=3d5f16e98a854d36&nd=1' rel="noreferrer" target="_blank">
                        <CardPodcast></CardPodcast>
                    </a>
                </Grid>

                <Grid item>
                    <a style={{textDecoration:'none'}} href='https://open.spotify.com/show/0UBJK7YE7smAIekkKHqvSF?si=6d30749078904a75&nd=1' rel="noreferrer"  target="_blank">
                        <CardPodcastTwo></CardPodcastTwo>
                    </a>
                </Grid>

                <Grid item>
                    <a style={{textDecoration:'none'}} href='https://open.spotify.com/show/0TCJ4VZKU6YFJjxpl0oHNN?si=9bd39256d7434301&nd=1' rel="noreferrer"  target="_blank">
                        <CardPodcastThree></CardPodcastThree>
                    </a>
                </Grid>

                <Grid item>
                    <a style={{textDecoration:'none'}} href='https://open.spotify.com/show/56hx0zT5kdYRj7kh2XdkEN?si=e34c07cf58704908&nd=1' rel="noreferrer"  target="_blank">
                        <CardPodcastFour></CardPodcastFour>
                    </a>
                </Grid>

                <Grid item>
                    <a style={{textDecoration:'none'}} href='https://open.spotify.com/show/0wjoCjkw9kzNTtmvBUpQWQ?si=717b10cd31834603&nd=1' rel="noreferrer"  target="_blank">
                        <CardPodcastFive></CardPodcastFive>
                    </a>
                </Grid>

                <Grid item>
                    <a style={{textDecoration:'none'}} href=' https://open.spotify.com/show/110yTqqki5omQz2ZySXxst?si=40489de40b8b4cd1&nd=1' rel="noreferrer"  target="_blank">
                        <CardPodcastSix></CardPodcastSix>
                    </a>
                </Grid>
            </Grid>
        </Grid>
    )
}
