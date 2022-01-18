const formatDate = (date) => {
  const n = 10;
  const formatedDate = date.substring(0, n);
  const dateArr = formatedDate.split('-');
  return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
};

export default formatDate;
