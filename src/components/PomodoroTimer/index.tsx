import React, { useCallback, useEffect, useState } from 'react';

import {
  Button, Card, CardActions, CardContent, CardHeader, Grid,
} from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import FlexContainer from 'components/FlexContainer';
import { Timer } from 'components/Timer';
import { useInterval } from 'hooks/use-interval';
import { secondsToTime } from 'utils/seconds-to-time';

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

  const styledProps: IPomodoroStyles = { isWorking: working };
  const classes = PomodoroTimerStyle(styledProps);

  useInterval(() => {
    setMainTime(mainTime - 1);
    if (working) setFullWorkingTime(fullWorkingTime + 1);
  }, timeCounting ? 1000 : null);

  const handleWorkStart = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setMainTime(pomodoroTime);
  }, [pomodoroTime]);

  const handlePlayPause = useCallback(() => {
    setTimeCounting(!timeCounting);
  }, [timeCounting]);

  const handleRestStart = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(longRestTime);
      } else {
        setMainTime(shortRestTime);
      }
    }, [longRestTime, shortRestTime],
  );

  useEffect(() => {
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      handleRestStart(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      handleRestStart(true);
      setCyclesQtdManager(new Array(cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) handleWorkStart();
  }, [
    mainTime,
    completedCycles,
    cycles,
    cyclesQtdManager,
    handleRestStart,
    handleWorkStart,
    numberOfPomodoros,
    resting,
    working,
  ]);

  return (
    <FlexContainer>
      <Card>
        <CardHeader
          className={classes.title}
          title={working ? 'Você está: Trabalhando' : 'Você está: Descansando'}
        />
        <CardContent className={classes.content}>
          <Grid container justify="space-around" spacing={3}>
            <Grid item>
              <Timer mainTime={mainTime} />
            </Grid>
            <Grid item>
              <Grid container spacing={3} direction="column" justify="flex-end">
                <Grid item>
                  <Card elevation={2}>
                    <CardHeader title="Ciclos" />
                    <CardContent>{completedCycles}</CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card elevation={2}>
                    <CardHeader title="Horas Totais" />
                    <CardContent>{secondsToTime(fullWorkingTime)}</CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card elevation={2}>
                    <CardHeader title="Pomodoros" />
                    <CardContent>{numberOfPomodoros}</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </CardContent>
        <CardActions className={classes.buttons}>
          <Button onClick={handleWorkStart}>Trabalhar</Button>
          <Button onClick={() => { handleRestStart(false); }}>Descansar</Button>
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
