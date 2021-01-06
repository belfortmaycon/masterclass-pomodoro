import React, { useCallback, useState } from 'react';

import {
  Button, Card, CardActions, CardContent, CardHeader,
} from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import FlexContainer from 'components/FlexContainer';
import { Timer } from 'components/Timer';
import { useInterval } from 'hooks/use-interval';

import { IPomodoroStyles, IPomodoroTimerProps } from './interfaces';
import { PomodoroTimerStyle } from './styles';

export default function PomodoroTimer(props: IPomodoroTimerProps): JSX.Element {
  const {
    pomodoroTime,
    shortRestTime,
    longRestTime,
    cycles,
  } = props;

  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(cycles - 1).fill(true),
  );
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  const styledProps: IPomodoroStyles = { isWorking: true };
  const classes = PomodoroTimerStyle(styledProps);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null);

  const handleWorkStart = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setMainTime(pomodoroTime);
  }, [pomodoroTime]);

  const handlePlayPause = useCallback(() => {
    setTimeCounting(!timeCounting);
  }, [timeCounting]);

  return (
    <FlexContainer>
      <Card>
        <CardHeader className={classes.title} title="Você está: Trabalhando" />
        <CardContent className={classes.content}>
          <Timer mainTime={mainTime} />
        </CardContent>
        <CardActions>
          <Button onClick={handleWorkStart}>Trabalhar</Button>
          <Button>Descansar</Button>
          <Button
            disabled={!working && !resting}
            onClick={handlePlayPause}
          >
            {
              timeCounting ? <Pause /> : <PlayArrow />
            }
          </Button>
        </CardActions>
      </Card>
    </FlexContainer>
  );
}
