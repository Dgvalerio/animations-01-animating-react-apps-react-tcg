import React from 'react';

import './Backdrop.css';

const backdrop = ({ show }) => {
  const cssClasses = [
    'Backdrop',
    show === 'entering'
      ? 'BackdropOpen'
      : show === 'exiting'
      ? 'BackdropClosed'
      : null,
  ];

  return <div className={cssClasses.join(' ')} />;
};

export default backdrop;
