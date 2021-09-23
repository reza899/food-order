import React, { useEffect, useState } from "react";
import Loading from "../../components/UI/Loading";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import CategoryDetailsCard from "../../components/UI/Card/CategoryDetailsCard";
import AreaSummary from "../../components/UI/Summary/AreaSummary";
import { APIMealsArea } from "../../model/api-meals";
import { MealCategory } from "../../model/meals";
import { filterByArea } from "../../service/mealAgent";

const AreaDetails = () => {
  const [areaList, setAreaList] = useState<MealCategory[]>(
    [] as MealCategory[]
  );
  const [isLoading, setIsLoading] = useState(false);

  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const resp = await filterByArea(name);
      const areas: APIMealsArea[] = (await resp.data).meals;

      const areaListArray: MealCategory[] = [] as MealCategory[];

      areas.map((area) =>
        areaListArray.push({
          name: area.strMeal,
          description: "",
          thumbImg: area.strMealThumb,
        })
      );

      setAreaList(areaListArray);
      setIsLoading(false);
    }

    fetchData();
  }, [name]);

  const areaClickHandler = (areaName: string) => {
    history.push(`/meal/${areaName.toLowerCase()}`);
  };

  if (isLoading) return <Loading />;
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
