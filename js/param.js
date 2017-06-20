const bindActions = require('./bindActions');
// import Immutable from 'immutable';
let { setStudentGenderType, getStudentList, setEnter, addStudent } = bindActions;

export function mapStateToProps(state) {

  // let studentList = state.get('studentList');
  // let studentGenderType = state.get('studentGenderType');
  // let isLoading = state.get('isLoading');
  // debugger;
  // console.log('-----------',Object.prototype.toString.call(state));

  let {studentList, studentGenderType, isLoading} = state;

  // debugger;


  /**
   * [filterStudentList 根据学生性别筛选列表数据]
   * @param  {[Array]} list   [所有的学生列表数据]
   * @param  {[String]} filter [学生性别]
   * @return {[Array]}        [筛选后的数据]
   */
  const filterStudentList = (list, filter) => {

    list = list ? list : [];
    switch (filter) {
      case '1':
        list = list.filter(item => {
          return item.gender === 'male'
        });
        break;
      case '2':
        list = list.filter(item => {
          return item.gender === 'female'
        });
        break;
    }

    return list;
  }

  return {
    isLoading,
    getStudentList,
    studentAddInfo: {
      addStudent
    },
    studentSearchInfo: {
      setStudentGenderType
    },
    studentListInfo:  {
      studentList: filterStudentList(studentList, studentGenderType)
    }
  }
}
