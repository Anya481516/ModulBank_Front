import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import {NavLink} from 'react-router-dom'; 

export class OpenNewAccount extends React.Component {

    state = {
        sum: 0
      }
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      handleOpen() {
        //event.preventDefault()
        //this.props.userLoginFetch(this.state)
        
        var params = {
          "UserId": localStorage.userId,
          "Balance":  parseInt(this.state.sum, 10)
          }
      var xhr = new XMLHttpRequest();
      // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
      xhr.open('POST', 'https://localhost:44334/account/openNew', false);
      xhr.setRequestHeader('Content-Type', 'application/json');
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
      }
      }

      render(){
        const {token} = localStorage.token
        const {sum} = this.state.sum
        const {userId} = localStorage.userId

        //  if (!this.props.authorized) {
        //    return <Redirect to="/login"/>;
        //  }
          return(
              <div className = "mt-5 d-flex justify-content-left">
                  <form>
                  <h3>Открытие нового счета.</h3>
              <div className="form-group">
          <label for="BalanceTxt">Баланс счетa: {userId} {token}</label>
                <input 
                  name="sum"
                  type="sum" 
                  className="form-control" 
                  id="sumTxt" 
                  placeholder="Введите баланс нового счета"
                  value={this.state.sum}
                  onChange={this.handleChange}/>
              </div>
              <NavLink 
               onClick={
                () =>
                this.handleOpen()
                }
                className="d-inline p-2 bg-dark text-white" 
                to="/home">Открыть</NavLink>
            </form>
              </div>
          )
      }
}