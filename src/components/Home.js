import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';

export class Home extends React.Component {

    state = {
        id: "",
        email: "",
        username: "",
        password: "",
        passwordHash: "",
        salt: "",
        
      }

// constructor(props){
//     super(props);
//     this.state = {username: String};
// }

componentDidMount(){
    this.refreshUser()
}

refreshUser(){
    const Data = {
        Email: localStorage.userEmail
      }
      var xhr = new XMLHttpRequest();
      // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
      xhr.open('POST', 'https://localhost:44334/user/getByEmail', false);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Token', localStorage.token);
      // 3. Отсылаем запрос
      xhr.send(JSON.stringify(Data));
      if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        //localStorage.setItem("token", xhr.status + ': ' + xhr.statusText );
      } else {
        // вывести результат
        alert( xhr.responseText ); // responseText -- текст ответа.
        
        //yo.props.login;
        //completion();
      }
}

    render(){
        //localStorage.token = "yo";
        const token = localStorage.token;
        const userEmail = localStorage.userEmail;
        const {username} = this.state
        return(
            <div className = "mt-5 d-flex justify-content-left">
                <form>
        <label>ГЛАВНАЯ СТРАНИЦА {userEmail}</label>
                    <div className="form-row border border-primary">
                        <div className="m-2 pb-1">
                            <label id="homeTotalBalance">ОБЩИЙ БАЛАНС СЧЕТОВ</label>
                        </div>
                        <div className="m-2 pb-1">
                            <label id="homeDate">19.05.2020</label>
                        </div>
                        <div className="m-2 pb-1">
        <label id="homeName">{username} {username}</label>
                        </div>
                        <div className="m-2 pb-1">
                            <button type="settings" className="btn btn-primary">Настройки</button>
                        </div>
                        <div className="m-2 pb-1">
                            <button onClick={this.props.logout} type="submit" className="btn btn-primary">ВЫЙТИ</button>
                        </div>
                    </div>
                    <div className="form-row border border-success">
                        <div className="border border-primary m-1 pb-1">
                            <label id="homeAccNumberLbl">НОМЕР СЧЕТА</label>
                            <div className="form-row">
                                <label id="homeBalanceLbl" className="m-2">БАЛАНС</label>
                                <label id="homeShowBalanceLbl" className="m-2">$10000</label>
                            </div>
                            <div className="form-row ">
                                <button type="submit" className="btn btn-primary m-1 pb-1" id="homeDeposit">ПОПОЛНИТЬ</button>
                                <button type="submit" className="btn btn-primary m-1 pb-1" id="homeTransfer">ПЕРЕВОД</button>
                                <button type="submit" className="btn btn-primary m-1 pb-1" id="homePayment">ПЛАТЕЖ</button>
                            </div>
                            <div className="form-row">
                                <button type="submit" className="btn btn-primary m-1 pb-1" id="homeInvoice">ВЫПИСКА</button>
                                <button type="submit" className="btn btn-primary m-1 pb-1" id="homeSample">СОЗДАТЬ ШАБЛОН</button>
                                <button type="submit" className="btn btn-primary m-1 pb-1" id="homeClose">ЗАКРЫТЬ</button>
                            </div>
                        </div>
                        <div className="border border-primary m-1 pb-1">
                            <select id="homeAccNumberSelect" className="form-control pb-1">
                                <option selected>4000000000</option>
                                <option>...</option>
                            </select>
                            <button type="submit" className="btn btn-primary m-1 pb-1" id="homeOpen">ОТКРЫТЬ НОВЫЙ СЧЕТ</button>
                        </div>
                    </div>
                    <div className="form-row border border-primary">
                        <div className="border border-primary m-1 pb-1 w-70">
                            <label id="homeHistory" className="m-2">ИСТОРИЯ ОПЕРАЦИЙ ПО СЧЕТУ</label>
                            <label id="homePeriod" className="m-2">ПЕРИОД</label>
                            
                        </div>
                        <div className="border border-primary m-1 pb-1 w-30">
                        <label id="homeChat" className="m-1">ОКНО ЧАТА</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}