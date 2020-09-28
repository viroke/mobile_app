import { runInAction } from 'mobx';

const setClassProps = (arr, self) => {
	arr.forEach(elem => {
		self[elem.name] = elem.value;
	});
};

const runInActionUtil = (data, prop, self) => {
	runInAction(() => {
		self[prop] = data;
	})
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

export {
	setClassProps,
	runInActionUtil,
	isEmpty
};
