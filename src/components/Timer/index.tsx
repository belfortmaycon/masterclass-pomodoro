import React from 'react';

import { Typography } from '@material-ui/core';
import { secodsToMinutes } from 'utils/secods-to-minutes';

// import { Container } from './styles';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  const { mainTime } = props;
  return (
    <Typography variant="h1">{secodsToMinutes(mainTime)}</Typography>
  );
}
