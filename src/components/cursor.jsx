import React from "react";
import AnimatedCursor from "react-animated-cursor"
export default function cursor() {
    return (
        <AnimatedCursor
         color="255,255,255"
  innerSize={1}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #fff'
  }}
        />
      
    );
  }