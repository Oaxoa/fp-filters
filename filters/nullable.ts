
/**
 * Argument is null
 */
export const isNull = <T>(arg: T): arg is Exclude<T, null> => arg === null;

/**
 * Argument is undefined
 */
export const isUndefined = <T>(arg: T): arg is Exclude<T, undefined> =>
    arg === undefined;

/**
 * Argument is nullable (null or undefined)
 */
export const isNullable = <T>(arg: T): arg is Exclude<T, null | undefined> =>
    arg === undefined || arg === null;