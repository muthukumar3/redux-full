import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

export default function Profile() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Box sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
                <Item elevation={6}>
                    Elevation
                </Item>
                <Item elevation={6}>
                    Elevation
                </Item>
                <Item elevation={6}>
                    Elevation
                </Item>
            </Box> 
        </Grid>

        <Grid item xs={6}>
            <Box sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
                <Item elevation={12}>
                    Elevation
                </Item>
                <Item elevation={12}>
                    Elevation
                </Item>
                <Item elevation={12}>
                    Elevation
                    Ends in 05:65 s
                </Item>
            </Box> 
        </Grid>
    </Grid>
  );
}
