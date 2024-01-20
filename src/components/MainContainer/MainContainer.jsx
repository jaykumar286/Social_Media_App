import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

export default function MainContainer() {
  return (
    <Box sx={{ width: '100%' , mt:'3rem' }} display="flex" justifyContent="center">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  justifyContent="space-between" alignItems="start">
        <Grid md={6}>
          <UserList/>
        </Grid>
        <Grid container md={6} direction="column" justifyContent="center" alignItems="center">
          <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}