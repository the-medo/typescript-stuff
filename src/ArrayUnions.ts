// ============= https://www.youtube.com/watch?v=8HoOxOd86M4 ============= //

interface Fizz {
  id: string;
  fizz: number;
}

interface Buzz {
  id: string;
  buzz: number;
}

/* works since TS 5.2 */
const func1 = (arr: Array<Fizz> | Array<Buzz>) => {
  arr.filter((item) => {});
};

/* worked before too */
const func2 = (arr: Array<Fizz | Buzz>) => {
  arr.filter((item) => {});
};
