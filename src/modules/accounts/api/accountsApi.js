export const fetchAccounts = () => {
    return fetch('/api/accounts', {
        method: 'GET'
    })
        .then(response => response.json()) 
        .catch(error => {
            throw new Error(error.message);
        });
}