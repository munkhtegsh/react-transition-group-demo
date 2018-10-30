import React from 'react';
import Transition from "react-transition-group/Transition";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

const transitionStyles = {
  entering: {
    opacity: "0",
    transition: "0ms"
  },

  entered: {
    opacity: "1",
  },

  exiting: {
    opacity: "0",
    transition: "0ms"
  },

  exited: {
    opacity: "1"
  }
};

export const FadeTransition = ({flagInfo, load}) => (
    < Transition in={load} timeout={500}>
        {(state => {
            return (
                <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
                    <img src={flagInfo.flag} alt="flag" />
                    <p>{flagInfo.name}</p>
                </div>
            )
        })}
    </Transition > 
)


          