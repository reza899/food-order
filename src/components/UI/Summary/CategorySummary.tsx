import React from "react";
import Summary from "./Summary";

interface Props {
  cat?: string;
  topHeader: string;
}

const CategorySummary = ({ cat, topHeader }: Props) => {
  return (
    <Summary>
      <h3>{topHeader}</h3>
      {cat && <h1>{cat[0].toUpperCase() + cat.slice(1)}</h1>}
    </Summary>
  );
};

export default CategorySummary;
