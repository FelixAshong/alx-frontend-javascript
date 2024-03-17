const getStudentIdsSum = (students) => students.reduce((prevVal, cur) => prevVal + cur.id, 0);

export default getStudentIdsSum;
