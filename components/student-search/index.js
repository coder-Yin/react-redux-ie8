const React = require('react');
const {Component} = require('react');
// import isNeededChange from '../../js/shouldComponentUpdate.js'

class StudentSearch extends Component {

    handleSelect(event) {
      let {setStudentGenderType } = this.props;
      setStudentGenderType(event.target.value);
    }
  
    render() {
      console.log('StudentSearch render');
      return(
          <div className="container pt10 mb10">
            <form>
              <div className="form-group">
                <label>性别：</label>
                <select className="form-control" onChange = {this.handleSelect.bind(this)}>
                    <option value="0">不限</option>
                    <option value="1">男</option>
                    <option value="2">女</option>
                  </select>
              </div>
            </form>
        </div>
      )
    }
}

module.exports = StudentSearch;
