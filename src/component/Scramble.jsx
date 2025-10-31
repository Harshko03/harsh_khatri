import React from "react";
import { useScramble } from "use-scramble";

function Scrambled({ text }) {
  const { ref, replay } = useScramble({
    text,
    speed: 0.32,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
    // This stops auto-play
    overdrive: false,
  });


    return (
      <span
        ref={ref}   
        onMouseOver={replay} 
        style={{ cursor: "pointer" }}
      >
        {text} 
      </span>
    );
  }


export default Scrambled;
