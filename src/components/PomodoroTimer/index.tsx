import React from 'react';

import { Card, CardContent, CardHeader } from '@material-ui/core';
import FlexContainer from 'components/FlexContainer';
import { Timer } from 'components/Timer';

export default function PomodoroTimer(): JSX.Element {
  return (
    <FlexContainer>
      <Card>
        <CardHeader title="Você está: Trabalhando" />
        <CardContent>
          <Timer mainTime={2000} />
        </CardContent>
      </Card>
    </FlexContainer>
  );
}
