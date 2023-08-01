export const hasProp =
  (propertyName: string, value?: unknown) => (arg: object) => {
    const property = arg[propertyName as keyof typeof arg];
    return value !== undefined ? property === value : property !== undefined;
  };
export const hasProps =
  (propertyNames: string[], values?: unknown[]) => (arg: object) => {
    return propertyNames.every((propertyName, index) =>
      hasProp(propertyName, values?.[index])(arg)
    );
  };

export const sameProp =
  (comparisonObject: object, propertyName: string) => (arg: object) =>
    arg[propertyName as keyof typeof arg] ===
    comparisonObject[propertyName as keyof typeof comparisonObject];

export const sameProps =
  (comparisonObject: object, propertyNames: string[]) => (arg: object) =>
    propertyNames.every((propertyName) =>
      sameProp(comparisonObject, propertyName)(arg)
    );
