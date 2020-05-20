export const userPostFetch = async user => {
  localStorage.setItem("token", "yoooo");
  const Data = {
    email: 'melxxova@mail.ru',
    username: 'Anna',
    password: 'Anna'
  }
    try {
    const response = await fetch('https://localhost:44334/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify({user})
      body: JSON.stringify({ user })
    });
    const data = await response.json();
    localStorage.setItem("token", data);
  }
  catch (error) {
    localStorage.setItem("token", error);
  }
        
    }
  
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })

  export const userLoginFetch = user => {
    return dispatch => {
      return fetch('https://localhost:44334/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // Here you should have logic to handle invalid login credentials.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error
            localStorage.setItem("token", "data.error")
          } else {
            localStorage.setItem("token", "data.token")
            dispatch(loginUser(data.user))
          }
        })
    }
  }

  export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("https://localhost:44334/account", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              // An error will occur if the token is invalid.
              // If this happens, you may want to remove the invalid token.
              localStorage.removeItem("token")
            } else {
              dispatch(loginUser(data.user))
            }
          })
      }
    }
  }