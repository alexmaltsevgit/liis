import React from "react";
import { StarContainer } from "./Star.styles";
import { ReactComponent as StarSVG } from "../../images/star.svg";

type StarProps = {
  active?: boolean;
};

const Star = ({ active }: StarProps) => {
  return (
    <StarContainer active={active}>
      <StarSVG />
    </StarContainer>
  );
};

export default Star;
