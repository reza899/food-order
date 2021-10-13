export interface Meal {
  objectId: string;
  name: string;
  description?: string;
  price?: number;
  amount?: number;

  category?: MealCategory;
  area?: Area;
  instrution?: string;
  thumbImg?: string;
  tags?: string[];
}

export interface MealCategory {
  name: string;
  thumbImg: string;
  objectId?: string;
  description?: string;
}

export interface Area {
  name: string;
}
