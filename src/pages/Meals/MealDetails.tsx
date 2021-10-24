import { useEffect, useState } from "react";
import Loading from "../../components/UI/Loading";
import { useParams } from "react-router";
import MealCard from "../../components/UI/Card/MealCard";
import MealSummary from "../../components/UI/Summary/MealSummary";
import { APIMeal } from "../../model/api-meals";
import { Meal } from "../../model/meals";
import { useSearchMealByNameQuery } from "../../service/mealApi";

const MealDetails = () => {
  const [meal, setMeal] = useState<Meal>({} as Meal);
  // const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams<{ name: string }>();
  const { isFetching, data } = useSearchMealByNameQuery(name);

  useEffect(() => {
    const rand: APIMeal | undefined = data;

    if (rand) {
      const selectedMeal: Meal = {
        objectId: rand.idMeal,
        name: rand.strMeal,
        category: {
          name: rand.strCategory,
          description: "",
          thumbImg: "",
        },
        area: {
          name: rand.strArea,
        },
        instrution: rand.strInstructions,
        thumbImg: rand.strMealThumb,
        tags: rand.strTags?.split(","),
        description: rand.strInstructions?.split(".")[0],
        price: Number((Math.random() * 12.5).toFixed(2)),
      };
      console.log(selectedMeal);
      setMeal(selectedMeal);
    }
  }, [data, name]);

  if (isFetching) return <Loading />;

  return (
    <>
      <MealSummary meal={meal} topHeader="Meal" />
      <MealCard meal={meal} />
    </>
  );
};

export default MealDetails;
