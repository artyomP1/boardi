import Vue from "vue";
import Vuex from "vuex";
import UserService from "../services/UserService.js";

Vue.use(Vuex);

const BASE_URL = "http://vmedu255.mtacloud.co.il:5001/api";

export default new Vuex.Store({
    state: {
        loggedinUser: null,
    },
    getters: {
        user(state) {
            return state.loggedinUser;
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user;
        },
    },
    actions: {
        async userLogin(context, userCred) {
            const user = await UserService.login(userCred);
            context.commit({ type: "setUser", user });
            return user;
        },
        async logout(context) {
            await UserService.logout();
            context.commit({ type: "setUser", user: null });
        },
        async getPosScheme() {
            const posScheme = await UserService.getPosScheme();
            return posScheme;
        },
        async savePos(context, data) {
            const res = await UserService.savePos(data);
        },
        async getCandidateScheme() {
            return await UserService.getCandidateScheme();
        },
        async saveCandidate(context, data) {
            await UserService.saveCandidate(data);
        },
        async getPosList() {
            const positions = await UserService.getPosList();
            return positions.Payload;
        },
        async getPosById(context, id) {
            return await UserService.getPosById(id);
        },
        async getCandidateById(context, id) {
            return await UserService.getCandidateById(id);
        },
        async updatePos(context, { id, data }) {
            return await UserService.updatePos(id, data);
        },
        async updateCandidate(context, { id, data }) {
            return await UserService.updateCandidate(id, data);
        },
        async getCandidateList() {
            const candidateList = await UserService.getCandidateList();
            return candidateList.Payload;
        },
        async getEmployeeList() {
            const employeesList = await UserService.getEmployeesList();
            return employeesList.Payload;
        },
        async updateEmployee(context, { id, data }) {
            return await UserService.updateEmployee(id, data);
        },
        async getEmployeeScheme() {
            return await UserService.getEmployeeScheme();
        },
        async saveEmployee(context, data) {
            return await UserService.saveEmployee(data);
        },
        async getEmployeeById(context, id) {
            return await UserService.getEmployeeById(id);
        },

    },
    modules: {},
});
//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security