const React = require('react');
const {Component} = require('react');
const StudentSearch = require('../student-search');
const StudentAdd = require('../student-add');
const StudentList = require('../student-list');
// const isNeededChange = require('../../js/shouldComponentUpdate.js');
const Loading = require('../loading');

class TodoDetail extends Component {

    componentDidMount() {
      let { getStudentList } = this.props
      getStudentList();
    }

    render() {
      let { studentListInfo, studentSearchInfo, studentAddInfo, isLoading} = this.props;
      return (
        <div>
        {
          isLoading ?
          <Loading /> :
          <div>
            <StudentSearch {...studentSearchInfo} />
            <StudentAdd {...studentAddInfo} />
            <StudentList {...studentListInfo} />
          </div>
        }
        </div>
      )
    }
}

module.exports = TodoDetail;
