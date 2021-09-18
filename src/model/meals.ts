export interface Meal {
  objectId: string;
  name: string;
  description: string;
  price: number;
  amount?: number;

  category?: MealCategory;
  area?: string;
  instrution?: string;
  thumbImg?: string;
  tags?: string[];

}

export interface MealCategory {
  name: string;
  thumbImg: string;
  description: string;
}