import React from 'react';

import {
  AppBar, Grid, IconButton, Toolbar, Typography,
  ThemeProvider,
} from '@material-ui/core';
import { AccessAlarm, Settings } from '@material-ui/icons';
import FlexContainer from 'components/FlexContainer';
import PomodoroTimer from 'components/PomodoroTimer';
import GlobalStyles from 'styles/GlobalStyles';
import { lightTheme } from 'styles/themes/lightTheme';

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <FlexContainer>
      <GlobalStyles />
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
      <FlexContainer padding={3}>
        <PomodoroTimer
          pomodoroTime={10}
          shortRestTime={3}
          longRestTime={5}
          cycles={2}
        />
      </FlexContainer>
    </FlexContainer>
  </ThemeProvider>
);

export default App;
