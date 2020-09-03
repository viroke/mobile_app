import {api, virokeConnect} from './index';

export const LOGIN_USER = params => {
    if(params.email && params.password){

    }
}

export async function VERIFY_EMAIL (email, callback, onError) {
    if(email){
        try {
          console.log(api.BASE_URL);
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