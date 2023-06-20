export const assignName = (f, name) =>
  Object.defineProperty(f, "name", {
    value: name,
    configurable: true,
  });

type TFilterPredicateArgs = [any, number, any[]];
type TFilterPredicate = (...args: TFilterPredicateArgs) => boolean;

const notFinal =
  (f: Function | TFilterPredicate) =>
  (...args: TFilterPredicateArgs) =>
    !f(...args);

export const not =
  (f: Function | TFilterPredicate) =>
  (...args: TFilterPredicateArgs) =>
    typeof f(...args) === "function" ? not(f(...args)) : notFinal(f)(...args);
