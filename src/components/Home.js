import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';

export class Home extends React.Component {

constructor(props){
    super(props);
    this.state = {username: String};
}

componentDidMount(){
    this.refreshUser()
}

refreshUser(){
    this.setState({
        username: "Anya"
    })
   
}

    render(){
        const token = localStorage.token;
        const {username} = this.state
        return(
            <div className = "mt-5 d-flex justify-content-left">
                <form>
                    <label>ГЛАВНАЯ СТРАНИЦА {token}</label>
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