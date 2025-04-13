export const filterElements =
    (condition: (item: any) => boolean) =>
        (array: any[]): boolean =>
            array.every(condition);
