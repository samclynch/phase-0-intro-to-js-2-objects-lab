// Write your solution in this file!
const employee = {  
    name: "",
    streetAdress: "",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
	const copyObj = { ...employee }
	copyObj[key] = value
	return copyObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee) 
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

