import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Loading from "../../components/UI/Loading";
import CategoryDetailsCard from "../../components/UI/Card/CategoryDetailsCard";
import AreaSummary from "../../components/UI/Summary/AreaSummary";

import { APIMealsArea } from "../../model/api-meals";
import { MealCategory } from "../../model/meals";
import { useFilterByAreaQuery } from "../../service/foodApi";

const AreaDetails = () => {
  const [areaList, setAreaList] = useState<MealCategory[]>(
    [] as MealCategory[]
  );
  // const [isLoading, setIsLoading] = useState(false);

  const { name } = useParams<{ name: string }>();
  const history = useHistory();
  const { isFetching, data } = useFilterByAreaQuery(name);

  useEffect(() => {
    const areaListArray: MealCategory[] = [];

    const areas: APIMealsArea[] | undefined = data;

    areas &&
      areas.map((area) =>
        areaListArray.push({
          name: area.strMeal,
          thumbImg: area.strMealThumb,
          objectId: area.idMeal,
        })
      );

    setAreaList(areaListArray);
  }, [name, data]);

  const areaClickHandler = (areaName: string) => {
    history.push(`/meal/${areaName.toLowerCase()}`);
  };

  if (isFetching) return <Loading />;
  return (
    <>
      <AreaSummary topHeader={name[0].toUpperCase() + name.slice(1)} />
      <CategoryDetailsCard
        mealsCategory={areaList}
        clickHandler={areaClickHandler}
      />
    </>
  );
};

export default AreaDetails;
