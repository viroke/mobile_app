import {api, virokeConnect, setClientToken} from './index';
import { getToken } from '../store';

export async function GET_SUBSCRIBED_EVENTS (callback, onError)  {
  let token = await getToken();
  setClientToken(token);
  if(typeof token === 'string'){
      try {
          let events = await fetch(`${api.BASE_URL}subscription/event/upcoming`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": token
              }
              });

            events = await events.json();
            callback && callback(events);

            return events;

      } catch (error) {
          onError && onError(error);
          return false;
      }
  }
  else {
      return null;
  }
}

export async function GET_EVENTS (callback, onError)  {
  let token = await getToken();
  if(typeof token === 'string'){
      try {
          let events = await fetch(`${api.BASE_URL}events`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": token
              }
              });

            events = await events.json();
            console.log("events " ,events)
            callback && callback(events.data.events);

            return events.data.events;

      } catch (error) {
          onError && onError(error);
          return false;
      }
  }
  else {
      return null;
  }

      
}