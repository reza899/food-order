import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import { useHistory } from "react-router-dom";
import AreaCard from "../../components/UI/Card/AreaCard";
import AreaSummary from "../../components/UI/Summary/AreaSummary";
import { APIArea } from "../../model/api-meals";
import { Area } from "../../model/meals";
import { listAllArea } from "../../service/mealAgent";

const AreaList = () => {
  const [areaList, setAreaList] = useState<Area[]>([] as Area[]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const areaList: Area[] = [];

    async function fetchData() {
      setIsLoading(true);
      const resp = await listAllArea();
      const areas: APIArea[] = (await resp.data).meals;

      areas.map((cat) =>
        areaList.push({
          name: cat.strArea,
        })
      );

      setAreaList(areaList);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const categoryClickHandler = (param: string) => {
    history.push(`/area/${param}`);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <AreaSummary topHeader="Areas" />
      <AreaCard areas={areaList} clickHandler={categoryClickHandler} />
    </>
  );
};
export default AreaList;
