import Summary from "./Summary";

interface Props {
  topHeader: string;
}
const AreaSummary = ({ topHeader }: Props) => {
  return (
    <Summary>
      <h1>{topHeader}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea labore quas
        obcaecati. Porro facilis excepturi quos pariatur dolores dolorum quidem.
      </p>
    </Summary>
  );
};

export default AreaSummary;
