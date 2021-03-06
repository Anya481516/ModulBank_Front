import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import {NavLink} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {userLoginFetch} from '../modules/accounts/actions/Actions';

export class Login extends React.Component {

  state = {
    email: "",
    password: "",
    id: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  refreshUser(){
    var params = {
      "Email": this.state.email,
      }
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('POST', 'https://localhost:44334/user/getAllInfo', false);
  xhr.setRequestHeader('Content-Type', 'application/json');//
  xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
  // 3. Отсылаем запрос
  xhr.send(JSON.stringify(params));
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    //localStorage.setItem("token", xhr.status + ': ' + xhr.statusText );
  } else {
    // вывести результат
    alert( xhr.responseText ); // responseText -- текст ответа.
    //var id = JSON.parse(xhr.responseText).id;
    //localStorage.setItem("userId", id);
  }
}

  handleGetUserID() {
    var params = {
      "Email": this.state.email,
      }
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('POST', 'https://localhost:44334/user/getByEmail', false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  //xhr.setRequestHeader('Token', localStorage.token);
  xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
  // 3. Отсылаем запрос
  xhr.send(JSON.stringify(params));
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    //localStorage.setItem("token", xhr.status + ': ' + xhr.statusText );
  } else {
    // вывести результат
    alert( xhr.responseText ); // responseText -- текст ответа.
    var id = JSON.parse(xhr.responseText).id;
    localStorage.setItem("userId", id);
  }
  }

  handleSubmit(completion) {
    //event.preventDefault()
    //this.props.userLoginFetch(this.state)
    
    var params = {
      "Email": this.state.email,
      "Password": this.state.password
      }
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('POST', 'https://localhost:44334/user/login', false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  // 3. Отсылаем запрос
  xhr.send(JSON.stringify(params));
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    //localStorage.setItem("token", xhr.status + ': ' + xhr.statusText );
  } else {
    // вывести результат
    var token = JSON.parse(xhr.responseText).token;
    alert( token ); // responseText -- текст ответа.
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", this.state.email);
    //yo.props.login;
    this.handleGetUserID();
    //this.refreshUser();
    completion();
  }
  }

  // constructor(props){
  //   super(props);
  //   this.state = {token: String};
//}

componentDidMount(){
    //this.getToken()
}

    render(){

      //const {token} = localStorage.token

      if (this.props.authorized) {
        return <Redirect to="/Home"/>;
      }
        return(
            <div className = "mt-5 d-flex justify-content-left">
                <form>
                <h3>Авторизация.</h3>
            <div className="form-group">
              <label for="loginEmailTxt">Email:</label>
              <input 
                name="email"
                type="email" 
                className="form-control" 
                id="loginEmailTxt" 
                aria-describedby="emailHelp" 
                placeholder="Введите Ваш email"
                value={this.state.email}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label for="loginPasswordTxt">Пароль:</label>
              <input 
                name="password"
                type="password" 
                className="form-control" 
                id="loginPasswordTxt" 
                placeholder="Введите Ваш пароль"
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
              <button onClick={
                () =>
                this.handleSubmit(this.props.login)
                } type="submit" className="btn btn-primary">Войти</button>
            </div>
            <div className="form-group">
        <NavLink className="d-inline p-2 bg-dark text-white" to="/signup">РЕГИСТРАЦИЯ</NavLink>
            </div>
          </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);