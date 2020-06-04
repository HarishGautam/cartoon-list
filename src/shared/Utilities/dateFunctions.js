export const getTimeInyrs = date => {
  const currentYear = new Date().getFullYear();
  const createdYear = new Date(date).getFullYear();
  if (currentYear > createdYear) {
    return currentYear - createdYear;
  }
  return createdYear;
};
