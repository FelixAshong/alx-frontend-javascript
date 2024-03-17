const getListStudentIds = (getList) => {
  let listData = [];
  if (!(getList instanceof Array)) {
    return listData;
  }
  listData = getList.map((results) => results.id);
  return listData;
};
export default getListStudentIds;
