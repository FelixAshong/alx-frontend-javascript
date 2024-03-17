export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(NameValue) {
    if (typeof NameValue !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = NameValue;
  }

  get length() {
    return this._length;
  }

  set length(LengthValue) {
    if (typeof LengthValue !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = LengthValue;
  }

  get students() {
    return this._students;
  }

  set students(CurrentStudents) {
    if (typeof CurrentStudents === 'object') {
      for (const student in CurrentStudents) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array');
        }
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = CurrentStudents;
  }
}
