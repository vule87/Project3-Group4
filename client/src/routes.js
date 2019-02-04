import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import UserProfile from "views/UserProfile.jsx";
import Login from "./views/Login";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Favorited List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Log in",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: Login,
    layout: "/admin"
  }
];
export default routes;
