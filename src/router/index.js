import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import Home from "../views/Home";
import CreatePosition from "../views/CreatePosition";
import CreateEmployee from "../views/CreateEmployee";
import PositionList from "../views/PositionList";
import CandidateList from "../views/CandidateList";
import EmployeeList from "../views/EmployeeList";
import CreateCandidate from "../views/CreateCandidate";
import EditPosition from "../views/EditPosition";
import EditCanditate from "../views/EditCanditate";
import EditEmployee from "../views/EditEmployee";



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/CreatePosition",
        name: "CreatePosition",
        component: CreatePosition,
    },
    {
        path: "/PositionList",
        name: "PositionList",
        component: PositionList,
    },
    {
        path: "/EditPosition/:id",
        name: "EditPosition",
        component: EditPosition,
    },
    {
        path: "/EditCanditate/:id",
        name: "EditCanditate",
        component: EditCanditate,
    },
    {
        path: "/CandidateList",
        name: "CandidateList",
        component: CandidateList,
    },
    {
        path: "/EmployeeList",
        name: "EmployeeList",
        component: EmployeeList,
    },
    {
        path: "/CreateCandidate",
        name: "CreateCandidate",
        component: CreateCandidate,
    },
    {
        path: "/CreateEmployee",
        name: "CreateEmployee",
        component: CreateEmployee,
    },
    {
        path: "/EditEmployee/:id",
        name: "EditEmployee",
        component: EditEmployee,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;