// Transition.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Transition = ({ children, ...props }) => {
  return (
    <CSSTransition {...props} timeout={500} classNames="fade">
      {children}
    </CSSTransition>
  );
};

export default Transition;
