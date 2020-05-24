export const fetchAccounts = () => {
    return fetch('/api/accounts', {
        method: 'GET'
    })
        .then(response => response.json()) 
        .catch(error => {
            throw new Error(error.message);
        });
}
export const signUp = () => {
    var params = {
        "Email": "AidAnya@gmail.com",
        "Username": "AidAnya",
        "Password": "AidAnya"
        }
    var xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('POST', 'https://localhost:44334/user/signup', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 3. Отсылаем запрос
    xhr.send(JSON.stringify(params));
}

export const logIn = () =>{
    var params = {
        "Email": "Vanya@gmail.com",
        "Username": "Vanya",
        "Password": "Vanya"
        }
  
    var xhr = new XMLHttpRequest();
  
    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('POST', 'https://localhost:44334/user/signup', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 3. Отсылаем запрос
    xhr.send(JSON.stringify(params));
    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
      alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
      localStorage.setItem("token", xhr.status + ': ' + xhr.statusText );
    } else {
      // вывести результат
      alert( xhr.responseText ); // responseText -- текст ответа.
      localStorage.setItem("token", xhr.responseText);
    }
}