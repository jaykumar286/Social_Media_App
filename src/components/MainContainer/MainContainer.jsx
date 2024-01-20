import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

export default function MainContainer() {
  return (
    <Box container sx={{mt:'3rem' }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}  justifyContent="center" alignItems="start">
        <Grid>
          <UserList/>
        </Grid>
        <Grid container md={8} direction="column" justifyContent="center" alignItems="center">
          <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}