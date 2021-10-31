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
      {!cat && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          quibusdam odio voluptatem consequuntur eaque natus laborum autem
          obcaecati recusandae cupiditate.
        </p>
      )}
    </Summary>
  );
};

export default CategorySummary;
