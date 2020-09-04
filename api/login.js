import {api, virokeConnect} from './index';

export async function VERIFY_EMAIL (email, callback, onError) {
    if(email){
        try {
            let email_exists = await fetch(`${api.BASE_URL}user/check_email`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(email)
                });

              email_exists = await email_exists.json();
              callback && callback(email_exists);

              return email_exists;

        } catch (error) {
            onError && onError(error);
            return false;
        }
    }
}

export async function LOGIN_USER (body, callback, onError)  {
  if(body.email && body.password){
      try {
          let user = await fetch(`${api.BASE_URL}users/login`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body)
              });

            user = await user.json();
            callback && callback(user);

            return user;

      } catch (error) {
          onError && onError(error);
          return false;
      }
  }
}