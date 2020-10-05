import { runInAction } from "mobx";

const setClassProps = (arr, self) => {
  arr.forEach((elem) => {
    self[elem.name] = elem.value;
  });
};

const runInActionUtil = (data, prop, self) => {
  runInAction(() => {
    self[prop] = data;
  });
};

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

function clipText(text, clipAt = 20) {
    return text.length > clipAt ? (((text).substring(0, clipAt - 3)) + '...') : text;
}

export { 
  setClassProps, 
  runInActionUtil, 
  isEmpty,
  clipText
};
