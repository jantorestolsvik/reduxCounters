export const HIDE_LESS_THAN = "HIDE_LESS_THAN";

export const hideCountersLessThan = (number) => {
    return {
        type: HIDE_LESS_THAN,
        value: number
    }
};