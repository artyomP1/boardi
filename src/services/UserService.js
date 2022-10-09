import HttpService from "./HttpService";

export default {
    login,
    logout,
    getPosList,
    getPosScheme,
    savePos,
    getCandidateList,
    getPosById,
    updatePos,
    getCandidateScheme,
    saveCandidate,
    getCandidateById,
    updateCandidate,
    getEmployeesList,
    updateEmployee,
    getEmployeeById,
    getEmployeeScheme,
    saveEmployee
};

async function login(userCred) {
    return await HttpService.post(`login`, userCred);
}
async function logout() {
    await HttpService.post("logout");
}
async function getPosList() {
    return await HttpService.get("positions");
}
async function getCandidateList() {
    return await HttpService.get("candidates");
}
async function getEmployeesList() {
    return await HttpService.get("employees");
}
async function getPosScheme() {
    const posScheme = await HttpService.get("positions/fields");
    console.log('posScheme', posScheme);
    return posScheme.schema;
}
async function getCandidateScheme() {
    const candidateScheme = await HttpService.get("candidates/fields");
    return candidateScheme.schema;
}
async function getPosById(id) {
    return await HttpService.get(`positions/${id}`);
}
async function getEmployeeById(id) {
    return await HttpService.get(`employees/${id}`);
}
async function getCandidateById(id) {
    return await HttpService.get(`candidates/${id}`);
}
async function updatePos(id, data) {
    return await HttpService.put(`positions/${id}`, data);
}
async function updateCandidate(id, data) {
    return await HttpService.put(`candidates/${id}`, data);
}
async function savePos(data) {
    const posScheme = await HttpService.post("positions", data);
    return posScheme.schema;
}
async function saveCandidate(data) {
    return await HttpService.post("candidates", data);
}
async function updateEmployee(id, data) {
    return await HttpService.put(`employees/${id}`, data);
}
async function getEmployeeScheme() {
    const employeeScheme = await HttpService.get("employees/fields");
    return employeeScheme.schema;
}
async function saveEmployee(data) {
    return await HttpService.post("employees", data);
}