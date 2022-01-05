import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const Root = styled('span')`
  font-size: 13px;
  position: relative;
  display: inline-block;
  width: 96px;
  height: 42px;
  cursor: pointer;

  & .${switchUnstyledClasses.track} {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 100px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 55px;
    height: 42px;
    left: 40px;
    border-radius: 100px;
    background-color:#42A0F0;
    position: relative;
    transition: all 200ms ease;
   
  }
  & .${switchUnstyledClasses.thumb.before} {
    content:ºC,
  }

  // &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
  //   box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  // }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 0px;
      top:0px;
      background-color: #42A0F0;
    }

    .${switchUnstyledClasses.track} {
      background: rgba(255, 255, 255, 0.16);
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

export default function TempSwitch(props) {

  const handleChange = () => {
    props.onTempChange()
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } }

  return (
    <FormGroup>
      <FormControlLabel sx={{ position: 'absolute' }}
        control={<SwitchUnstyled component={Root} defaultChecked onClick={handleChange} />}
        label=''
      />
      <Grid container sx={{display:'flex', flexDirection:'row', alignItems:'center', height: '42px'}}>
        <Grid><Typography sx={{ position: 'relative', fontSize:'22px', fontWeight:400 }}>ºC</Typography></Grid>
        <Grid><Typography sx={{ position: 'relative', fontSize:'22px', fontWeight:400, marginLeft:'1em'}}>ºF</Typography></Grid>
      </Grid>
    </FormGroup>
  )

}


