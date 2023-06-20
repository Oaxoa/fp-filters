export const sameProp =
  (comparisonObject: object, propertyName: string) => (arg) =>
    arg[propertyName] === comparisonObject[propertyName];

export const hasProp = (propertyName: string, value?: unknown) => (arg) => {
  return value !== undefined
    ? arg[propertyName] === value
    : arg[propertyName] !== undefined;
};

export const hasProps =
  (propertyNames: string[], values?: unknown[]) => (arg) => {
    return values instanceof Array
      ? propertyNames.every(
          (propertyName, index) => arg[propertyName] === values[index]
        )
      : propertyNames.every((propertyName) => arg[propertyName] !== undefined);
  };
