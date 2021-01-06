import React from 'react';

import { Card, CardContent, CardHeader } from '@material-ui/core';
import FlexContainer from 'components/FlexContainer';
import { Timer } from 'components/Timer';

import { IPomodoroStyles } from './interfaces';
import { PomodoroTimerStyle } from './styles';

export default function PomodoroTimer(): JSX.Element {
  const styledProps: IPomodoroStyles = { isWorking: true };
  const classes = PomodoroTimerStyle(styledProps);

  return (
    <FlexContainer>
      <Card>
        <CardHeader className={classes.title} title="Você está: Trabalhando" />
        <CardContent className={classes.content}>
          <Timer mainTime={2000} />
        </CardContent>
      </Card>
    </FlexContainer>
  );
}
