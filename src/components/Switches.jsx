import React from "react";
import { AniSwitch } from "./ani-components/AniSwitch";

export const Switches = () => {
  const onchange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <>
      <div>
        <AniSwitch label="Switch" />
      </div>
      <div>
        <AniSwitch label="Label Placement" labelPlacement="bottom" />
      </div>
      <div>
        <AniSwitch label="Disabled" disabled />
      </div>
      <div>
        <AniSwitch label="small" color="secondary" size="small" />
      </div>
      <div>
        <AniSwitch label="OnChange" name="onChange" onChange={onchange} />
      </div>
    </>
  );
};
