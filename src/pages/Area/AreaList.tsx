import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "../../components/UI/Loading";
import AreaCard from "../../components/UI/Card/AreaCard";
import AreaSummary from "../../components/UI/Summary/AreaSummary";

import { APIArea } from "../../model/api-meals";
import { Area } from "../../model/meals";
import { useListAllAreaQuery } from "../../service/foodApi";

const AreaList = () => {
  const [areaList, setAreaList] = useState<Area[]>([] as Area[]);
  const { isFetching, data } = useListAllAreaQuery();

  const history = useHistory();

  useEffect(() => {
    const areaList: Area[] = [];

    if (data) {
      const areas: APIArea[] = data;

      areas.map((cat) =>
        areaList.push({
          name: cat.strArea,
        })
      );

      setAreaList(areaList);
    }
  }, [data]);

  const categoryClickHandler = (param: string) => {
    history.push(`/area/${param}`);
  };

  if (isFetching) return <Loading />;

  return (
    <>
      <AreaSummary topHeader="Areas" />
      <AreaCard areas={areaList} clickHandler={categoryClickHandler} />
    </>
  );
};
export default AreaList;
