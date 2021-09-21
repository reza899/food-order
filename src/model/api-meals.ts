export type APIMeal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
};

export type APICategory = {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type APIArea = {
  strArea: string;
};

export type APIMealsCategory = {
  strMeal: string;
  strMealThumb: string;
};

export type APIMealsArea = {
  strMeal: string;
  strMealThumb: string;
};
