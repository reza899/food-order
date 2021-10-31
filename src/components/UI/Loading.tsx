import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactLoading type={"cylon"} width={210} />
    </div>
  );
};

export default Loading;
