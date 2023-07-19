// ============= https://www.youtube.com/watch?v=8HoOxOd86M4 ============= //

type Obj = {
  id: string;
  name: string;
  age: number;
};

/**
 * Object.values on the type level
 */
type ValuesOf<T> = T[keyof T];

type ExtractStringKeys<TObj> = ValuesOf<{
  [K in keyof TObj]: TObj[K] extends string ? K : never;
}>;

type ExtractKeysWhereValuesAreOfType<TObj, TCondition> = ValuesOf<{
  [K in keyof TObj]: TObj[K] extends TCondition ? K : never;
}>;

type Example1 = ExtractStringKeys<Obj>;
type Example2_1 = ExtractKeysWhereValuesAreOfType<Obj, string>;
type Example2_2 = ExtractKeysWhereValuesAreOfType<Obj, number>;
