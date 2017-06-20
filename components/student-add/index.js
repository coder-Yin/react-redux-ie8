const React = require('react');
const {Component} = require('react');

class StudentAdd extends Component{
   
    onAddStudent(event) {
      let {addStudent} = this.props;
      let stuNo = this.refs.stuNo.value,
          stuName = this.refs.stuName.value,
          gender = this.refs.stuGender.value;

      if ( stuNo && stuName) {
        addStudent({stuNo, stuName, gender});
        event.preventDefault();
      } else {
				alert('请填写必须字段！');
			}
    }

    render(){
        return(
    		 	<div className="container bg-info pt10">
    			 	 <div className="form-horizontal">
    				  <div className="form-group">
    				    <label htmlFor="stuNo" className="col-sm-2 control-label">学号：</label>
    				    <div className="col-sm-10">
    				      <input type="number" className="form-control" placeholder="请输入学生学号" ref="stuNo" required />
    				    </div>
    				  </div>
    				  <div className="form-group">
    				    <label htmlFor="stuName" className="col-sm-2 control-label">姓名：</label>
    				    <div className="col-sm-10">
    				      <input type="text" className="form-control" placeholder="请输入学生姓名" ref="stuName" required />
    				    </div>
    				  </div>
              <div className="form-group">
    				    <label htmlFor="stuGender" className="col-sm-2 control-label">性别：</label>
    				    <div className="col-sm-10">
                  <select className="form-control" ref="stuGender">
                    <option value="male">男</option>
                    <option value="female">女</option>
                  </select>
    				    </div>
    				  </div>
    				  <div className="form-group">
    				    <div className="col-sm-offset-2 col-sm-10">
    				      <button type="submit" className="btn btn-primary" onClick={this.onAddStudent.bind(this)}>添 加</button>
    				    </div>
    				  </div>
    				</div>
        		</div>
	    )

    }
}

module.exports = StudentAdd;
