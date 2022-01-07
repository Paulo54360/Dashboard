import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box,Button,ButtonBase, Typography,  }from '@mui/material/';
import { red, purple } from '@mui/material/colors';
import { Stack } from '@mui/material';

const ColorBoutton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

const twitchBoutton =  styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
 
export default function Service() {
  return (
    <Box >
      <ColorBoutton variant="contained" href='/github'>GitHub</ColorBoutton>
      <ColorBoutton variant="contained" href='/meteo'>Météo</ColorBoutton>
      <ColorBoutton variant='contained' href='/google'>Google</ColorBoutton>
    </Box>
  )
}