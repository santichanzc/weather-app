import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Icon } from '@iconify/react';


export default function ToggleButtons(props) {
  const [property, setProperty] = useState('');

  const [bgColor, setColor] = useState(true)

  const handleChange = (event, newProperty) => {
    setProperty(newProperty);
    props.onButtonChange(newProperty)
  };

  function handleClick(e){
    setColor(!bgColor)
  }

  let fontColor = 'white'

  const ButtonToggleGroup = styled(ToggleButtonGroup)({

    '&.MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped': {
      borderRadius: '50%',
      borderLeft: `2px solid white`
    },
    '&.MuiToggleButtonGroup-root.MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped.Mui-selected': {
      borderLeft: `2px solid #00CB51`
    },

    display: 'flex',
    justifyContent: 'center',
  })

  if(bgColor===true){
    fontColor='white';
  }
  else{
    fontColor='#00CB51'
  }


  return (

    <ButtonToggleGroup
      value={property}
      exclusive
      onChange={handleChange}
      onClick={handleClick}
      aria-label="propiedad"
      sx={{margin:'0em'}}

    >

      <ToggleButton  value="humedad" aria-label="humedad" sx={{ border: '2px solid', borderColor:`${property==='humedad'?'#00CB51':'white'}`, m: 3 }} >
        <Icon icon="fontisto:blood-drop" color={property==='humedad'?'#00CB51':'white'} height="30" width='30' />
      </ToggleButton>

      <ToggleButton value="viento" aria-label="viento" sx={{ border: '2px solid',borderColor:`${property==='viento'?'#00CB51':'white'}`, m: 3 }}>
        <Icon icon="mdi:weather-windy" color={property==='viento'?'#00CB51':'white'} height="30" />

      </ToggleButton>
      <ToggleButton value="uv" aria-label="uv" sx={{ border: '2px solid', borderColor:`${property==='uv'?'#00CB51':'white'}`, m: 3 }}>
        <Icon icon="carbon:uv-index-alt" color={property==='uv'?'#00CB51':'white'} height='30' />

      </ToggleButton>
      <ToggleButton value="sol" aria-label="sol" sx={{ border: '2px solid', borderColor:`${property==='sol'?'#00CB51':'white'}`, m: 3 }}>
        <Icon icon="mi:sunrise-alt" color={property==='sol'?'#00CB51':'white'} height="30" />
      </ToggleButton>
      
    </ButtonToggleGroup >


  );
}
