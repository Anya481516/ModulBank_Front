import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import {NavLink} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {userPostFetch} from '../modules/accounts/actions/Actions';

export class Signup extends React.Component {

  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(completion){
    //return <Redirect to='/login' />
    //this.props.userPostFetch()
    var params = {
      "Email": this.state.email,
      "Username": this.state.username,
      "Password": this.state.password
      }
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('POST', 'https://localhost:44334/user/signup', false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  // 3. Отсылаем запрос
  xhr.send(JSON.stringify(params));
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    localStorage.setItem("token", xhr.status + ': ' + xhr.statusText );
  } else {
    // вывести результат
    alert( xhr.responseText ); // responseText -- текст ответа.
    localStorage.setItem("token", xhr.responseText);
    localStorage.setItem("userEmail", this.state.email);

    //this.props.login; 
    completion();
  }
  }


    render(){

      if (this.props.authorized) {
        return <Redirect to="/home"/>;
      }
        return(
            <div className = "mt-5 d-flex justify-content-left">
                <form>
                <h3>Регистрация.</h3>
            <div className="form-group">
        <label for="signupEmailTxt">Email: {this.state.email}</label>
              <input 
                name="email"
                type="email" 
                className="form-control" 
                id="signupEmailTxt" 
                placeholder="Введите Ваш email"
                value={this.state.email}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
        <label for="signupNameTxt">Имя: {this.state.username}</label>
              <input 
                name="username"
                type="text" 
                className="form-control" 
                id="signupNameTxt" 
                placeholder="Введите Ваше имя"
                value={this.state.username}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
        <label for="signupPassword1Txt">Пароль: {this.state.password}</label>
              <input 
                name="password"
                type="password" 
                className="form-control" 
                id="signupPassword1Txt" 
                placeholder="Введите Ваш пароль"
                value={this.state.password}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label for="signupPassword2Txt">Пароль:</label>
              <input type="password" className="form-control" id="signupPassword2Txt" placeholder="Подтвердите пароль"/>
            </div>
            <div className="form-group">
            <NavLink 
            onClick={ () =>
              this.handleSubmit(this.props.login)
              //this.props.login 
             } 
            className="d-inline p-2 bg-dark text-white" 
            to="/login"
            >Зарегистрироваться</NavLink>
            {/* <button 
              onClick={ () =>
                 this.handleSubmit(this.props.login)
                 //this.props.login 
                } 
              type="submit" 
              className="btn btn-primary">Зарегистрироваться</button> */}
            </div>
            <div className="form-group">
              <NavLink className="d-inline p-2 bg-dark text-white" to="/login">АВТОРИЗАЦИЯ</NavLink>
            </div>
          </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);