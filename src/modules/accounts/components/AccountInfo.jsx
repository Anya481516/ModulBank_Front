import React from 'react';

class AccountInfo extends React.Component {
    render() {
        const {displayedAccount} = this.props;

        return (
            <div>
                <h1>Выбранный счет:</h1>
                <p>Номер счета: {displayedAccount.accountNumber}</p>
                <p>Остаток средств: {displayedAccount.balance}</p>
                ...
            </div>
        );
    }
}

export {AccountInfo};