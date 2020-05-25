import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';

export class Home extends React.Component {

    state = {
        id: "",
        email: "",
        username: "",
        accs: "",
        totalBalance: "",
        accNumber: ""
      }

// constructor(props){
//     super(props);
//     this.state = {username: String};
// }

componentDidMount(){
    //this.refreshUser()
}

refreshUser(){
    const Data = {
        "Email": localStorage.userEmail
      }
      var xhr = new XMLHttpRequest();
      // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
      xhr.open('POST', 'https://localhost:44334/user/getAllInfo', false);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
      // 3. Отсылаем запрос
      xhr.send(JSON.stringify(Data));
      if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        //localStorage.setItem("token", xhr.status + ': ' + xhr.statusText );
      } else {
        // вывести результат
        this.state.id = JSON.parse(xhr.responseText).user.id;
        this.state.username = JSON.parse(xhr.responseText).user.username;
        this.state.userEmail = JSON.parse(xhr.responseText).user.email;
        this.state.totalBalance = JSON.parse(xhr.responseText).totalAmount;
        this.state.accNumber = JSON.parse(xhr.responseText).accNumber;
        this.state.accs = JSON.parse(xhr.responseText).accs;
        alert( xhr.responseText ); // responseText -- текст ответа.
      }
}

    render(){
        //localStorage.userId = "yo";
       this.refreshUser();
        const token = localStorage.token;
        const userEmail = localStorage.userEmail;
        const userId = localStorage.userId;
        const userName = this.state.username;
        const totalBalance = this.state.totalBalance;
        return(
            <div className = "mt-5 d-flex justify-content-left">
                <form>
        <label>ГЛАВНАЯ СТРАНИЦА {userId}</label>
                    <div className="form-row border border-primary">
                        <div className="m-2 pb-1">
        <label id="homeTotalBalance">ОБЩИЙ БАЛАНС: {totalBalance}</label>
                        </div>
                        <div className="m-2 pb-1">
                            <label id="homeDate">19.05.2020</label>
                        </div>
                        <div className="m-2 pb-1">
        <label id="homeName">NAME: {userName}</label>
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