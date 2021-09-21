import React from "react";
import Summary from "./Summary";

interface Props {
  topHeader: string;
}
const AreaSummary = ({ topHeader }: Props) => {
  return (
    <Summary>
      <h1>{topHeader}</h1>
    </Summary>
  );
};

export default AreaSummary;
