/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
// import Icons from "views/Icons.js";
import Metric from "views/Metric";
import MedicalMetric from "views/MedicalMetric.js";
import HumanMetric from "views/HumanMetric.js";
import EnvironmentMetric from "views/EnvironmentMetric";
import UserGuide from "views/UserGuide";
import Download from "views/Download"
import MetricDefination from "views/MetricDefination";
import Data from "views/Data";
import SuitConnect from "views/SuitConnect";
import Notifications from "views/Notifications.js";
import Swal from 'sweetalert2';
import SessionSummary from "views/SessionSummary";


// import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import UserProfile from "views/UserProfile.js";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: <Icons />,
  //   layout: "/admin",
  // },

  {
    path: "/metrics",
    name: "METRICS SUMMARY",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Metric />,
    layout: "/admin",
  },

  {
    path: "/metric-defination",
    name: "METRICS DEFINATION",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <MetricDefination />,
    layout: "/admin",
  //   notify: (place) => {
  //     console.log(place);
  //     Swal.fire({
  //       title: 'Hello!',
  //       text: 'METRICS DEFINATION will come in the future.',
  //       icon: 'info', // You can use 'info' for an hourglass icon
  //       confirmButtonText: 'Okay',
  //     });
  // },
  },

  {
    path: "/data",
    name: "DATA",
    rtlName: "الرموز",
    icon: "tim-icons icon-puzzle-10",
    component: <Data />,
    layout: "/admin",
  //   notify: (place) => {
  //     console.log(place);
  //     Swal.fire({
  //       title: 'Hello!',
  //       text: 'DATA will come in the future.',
  //       icon: 'info', // You can use 'info' for an hourglass icon
  //       confirmButtonText: 'Okay',
  //     });
  // },
  },

  {
    path: "/suit-connects",
    name: "SUIT CONNECT",
    rtlName: "الرموز",
    icon: "tfa-solid fa-user-astronaut",
    component: <SuitConnect />,
    layout: "/admin",
  },

  {
    path: "/session-summary",
    name: "SESSION SUMMARY",
    rtlName: "الرموز",
    icon: "tim-icons fa fa-sign-in",
    component: <SessionSummary />,
    layout: "/admin",
  //   notify: (place) => {
  //     console.log(place);
  //     Swal.fire({
  //       title: 'Hello!',
  //       text: 'SESSION SUMMARY will come in the future.',
  //       icon: 'info', // You can use 'info' for an hourglass icon
  //       confirmButtonText: 'Okay',
  //     });
  // },
  },

  {
    path: "/user-guide",
    name: "USER GUIDE",
    rtlName: "الرموز",
    icon: "tim-icons icon-single-02",
    component: <UserGuide />,
    layout: "/admin",
  },

  {
    path: "/downloads",
    name: "DOWNLOADS",
    rtlName: "الرموز",
    icon: "tim-icons icon-cloud-download-93",
    component: <Download />,
    layout: "/admin",
  },
  
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/admin",
  // },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  {
    path: "/medical-metric",
    name: "Medical Metric",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: <MedicalMetric />,
    layout: "/admin",
  },
  {
    path: "/human-metric",
    name: "Human Metric",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-align-center",
    component: <HumanMetric />,
    layout: "/admin",
  },

  {
    path: "/environment-metric",
    name: "Environment Metric",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-align-center",
    component: <EnvironmentMetric />,
    layout: "/admin",
  },
];
export default routes;
