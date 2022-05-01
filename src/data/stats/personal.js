import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Age = () => {
  const [age, setAge] = useState();

  const matchSmallScreen = useMediaQuery({ maxWidth: 600 });

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-02-26T15:00:00');
    {matchSmallScreen ? (setAge(((Date.now() - birthTime) / divisor).toFixed(7))) : (setAge(((Date.now() - birthTime) / divisor).toFixed(11)))};
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'cities',
    label: 'Cities visited',
    value: 34,
    link:
      'https://www.google.com/maps/d/edit?mid=1i4kXyY1T6qw1_WdTBC8_DqhqKdYOS2K0&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Chennai, IN',
  },
];

export default data;
