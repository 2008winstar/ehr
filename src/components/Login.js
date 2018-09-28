import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends React.Component {
    render() {
        return (
            <div className="card text-center" style={{width: '30rem', marginTop: '35px'}}>
                <form action="#">
                    <div className="form-group row">
                        <label htmlFor="user-name" className="col-sm-2 col-form-label text-right">用户名:</label>
                        <div className="col-sm-10">
                            <input id="user-name" type="text" className="form-control"/>
                        </div>

                    </div>
                    <div className="form-group row">
                        <label htmlFor="pass-word" className="col-sm-2 col-form-label text-right">密码:</label>
                        <div className="col-sm-10">
                            <input id="pass-word" type="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="button" value="登录" className="btn btn-primary btn-lg"/>
                        </div>
                    </div>
            </form>
            </div>

        );
    }
}

export default Login;