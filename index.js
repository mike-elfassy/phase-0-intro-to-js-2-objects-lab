const employee = {
    name: '',
    streetAddress: '',
};

const updateEmployeeWithKeyAndValue = function(object, key, value) {
    return {
        ...object,
        [key]: value,
    };
};

const destructivelyUpdateEmployeeWithKeyAndValue = function(object, key, value) {
    object[key] = value;
    return object;
};

const deleteFromEmployeeByKey = function(object, key) {
    let newObject = {...object};
    delete newObject[key];
    return newObject;
};

const destructivelyDeleteFromEmployeeByKey = function(object, key) {
    delete object[key];
    return object;
};
