import React from "react";

function Countdown() {
  return (
      <>
      <div>
      <span className="font-mono countdown">
{/*         <span style="--value:30;"></span> */}
      </span>
      시간
    </div><div>
        <span className="font-mono text-4xl countdown">
{/*           <span style="--value:24;"></span> */}
        </span>
        분
      </div><div>
        <span className="font-mono text-4xl countdown">
{/*           <span style="--value:50;"></span> */}
        </span>
        초
      </div>
      </>
  );
}

export default Countdown;
