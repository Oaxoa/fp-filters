export const assignName = (f: Function, name: string) =>
    Object.defineProperty(f, "name", {
        value: name,
        configurable: true,
    });

type TFilterPredicateArgs<T = unknown> = [T?, number?, unknown[]?];
export type TFilterPredicate<T = unknown> = (...args: TFilterPredicateArgs<T>) => boolean;

const notFinal =
    (f: Function | TFilterPredicate) =>
        (...args: TFilterPredicateArgs) =>
            !f(...args);

export const not =
    (f: Function | TFilterPredicate) =>
        (...args: TFilterPredicateArgs) =>
            typeof f(...args) === "function" ? not(f(...args)) : notFinal(f)(...args);

export const and =
    (...functions: TFilterPredicate[]) =>
        (...args: TFilterPredicateArgs) =>
            functions.every((f) => f(...args) === true);

export const or =
    (...functions: TFilterPredicate[]) =>
        (...args: TFilterPredicateArgs) =>
            functions.some((f) => f(...args) === true);
