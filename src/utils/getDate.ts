const getDateFunc = (targetDate: string) => {
  return new Date(
    new Date(targetDate).getTime() + 1000 * 60 * 60 * 9
  ).toISOString();
};
export default getDateFunc;
