// src/services/authService.js
export const loginService = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'nps_22@hotmail.com' && password === '1234') {
          resolve({ username });
        } else {
          reject('Usuario Incorrecto');
        }
      }, 1000);
    });
  };
  