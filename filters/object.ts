export const hasProp = (propertyName: string, value?: unknown) => (arg) =>
  value !== undefined
    ? arg[propertyName] === value
    : arg[propertyName] !== undefined;

export const hasProps =
  (propertyNames: string[], values?: unknown[]) => (arg) => {
    return propertyNames.every((propertyName, index) =>
      hasProp(propertyName, values?.[index])(arg)
    );
  };

export const sameProp =
  (comparisonObject: object, propertyName: string) => (arg) =>
    arg[propertyName] === comparisonObject[propertyName];

export const sameProps =
  (comparisonObject: object, propertyNames: string[]) => (arg) =>
    propertyNames.every((propertyName) =>
      sameProp(comparisonObject, propertyName)(arg)
    );
