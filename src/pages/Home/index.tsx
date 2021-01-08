import React from 'react';

import PomodoroTimer from 'components/PomodoroTimer';

const Home: React.FC = () => (
  <PomodoroTimer
    pomodoroTime={10}
    shortRestTime={3}
    longRestTime={5}
    cycles={2}
  />
);

export default Home;
