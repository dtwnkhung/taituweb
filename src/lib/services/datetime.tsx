export const LongToDateLocal = (date: number) => {
    return new Date(date % 10e10).toLocaleString();
}