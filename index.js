// Write your solution in this file!
const employee = {name: 'Sebastian Bach', streetAddress: '8004 W. Main St.'}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeTwo = {...employee};
    delete employeeTwo[key];
    return employeeTwo;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}