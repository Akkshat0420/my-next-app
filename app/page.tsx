import React from 'react';
import { Box, AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Layout = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
     
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'lightgreen',
          color: 'black',
          padding: { xs: 1, sm: 0 },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
         
          <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}>
            Brand Name
          </Typography>

          
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{
                padding: '0 10px',
                backgroundColor: 'white',
                borderRadius: '4px',
                border: '1px solid #ccc',
                height: '35px',
              }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>

          
          <Avatar sx={{ bgcolor: 'blue' }}>J</Avatar>
        </Toolbar>
      </AppBar>

     
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Grid container spacing={2}>
         
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Paper
              sx={{
                width: '90%',
                height: { xs: 300, md: 400 },
                backgroundColor: '#ececec',
              }}
            />
          </Grid>

         
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Paper
              sx={{
                width: '90%',
                height: { xs: 300, md: 400 },
                backgroundColor: '#ececec',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Layout;
