import React from 'react';

import {
  AppBar, Grid, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import { AccessAlarm, Settings } from '@material-ui/icons';
import FlexContainer from 'components/FlexContainer';

const App: React.FC = () => (
  <FlexContainer>
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Grid container direction="row" spacing={3} justify="space-between">
          <Grid item>
            <AccessAlarm />
          </Grid>
          <Grid item>
            <Typography variant="h6">Pomodoro App - MasterClass</Typography>
          </Grid>
          <Grid item>
            <IconButton edge="end">
              <Settings />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    Hello Mundo!!!
  </FlexContainer>
);

export default App;
