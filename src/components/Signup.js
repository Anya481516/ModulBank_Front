import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import {NavLink} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {userPostFetch} from '../modules/accounts/actions/Actions';
import axios from 'axios'

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

  handleSubmit = event => {
    event.preventDefault()
    //return <Redirect to='/login' />
    //this.props.userPostFetch(this.state)
    
    const url = 'https://localhost:44334/user/signup';
    const Data = {
      email: 'melxxova@mail.ru',
      username: 'Anna',
      password:'Anna'
    }
      return fetch(url, {
          method: 'POST',
          
          //body: JSON.stringify({user})
          body: JSON.stringify(Data)
        })
          .then(response => response.json())
          .then(data => {
            this.state.username = data;
            localStorage.setItem("token", data);
          })
          .catch((error) => {
            this.state.username = error;
            localStorage.setItem("token", error);
          });
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
            <button 
              onClick={ 
                fetch('https://localhost:44334/user/signup', {
                  method: 'POST',
                  //body: JSON.stringify({user})
                  body: JSON.stringify({
                    "email": "melxxova@mail.ru",
                    "username": "Anna",
                    "password": "Anna"
                  })
                })
                  .then(response => response.json())
                  .then(data => {
                    this.state.username = data;
                    localStorage.setItem("token", data);
                  })
                  .catch((error) => {
                    this.state.username = error;
                    localStorage.setItem("token", error);
                  }),
                 this.props.login } 
              type="submit" 
              className="btn btn-primary">Зарегистрироваться</button>
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