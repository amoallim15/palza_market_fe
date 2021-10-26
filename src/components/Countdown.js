import React from "react";

function Countdown() {
  return (
    <>

<div class="grid grid-flow-col gap-2 auto-cols-max justify-center">
      <div>
        <span className="font-mono countdown">
                  <span style={{"--value":30}}></span>
        </span>
        &nbsp;:
      </div>
      <div>
      <span className="font-mono countdown">
{/*         <span style="--value:30;"></span> */}
      </span>
      시간
    </div><div>
        <span className="font-mono text-4xl countdown">
                    <span style={{"--value":24}}></span>
        </span>
        &nbsp;:
      </div>
      <div>
        <span className="font-mono text-4xl countdown">
                    <span style={{"--value":50}}></span>
        </span>
      </div>
      <div>
        <span className="font-mono text-2xl font-light">
        남음
        </span>
      </div>
      </div>
      </>
  );
}

export default Countdown;
