
function daysInMonth(year, month) {
  const date = new Date(year, month, 0);
  const lastDay = date.getDate();
  return lastDay;
}

export {
  daysInMonth,
};
