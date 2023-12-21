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
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import EnvironmentWrapper from "./components/EnvironmentWrapper/EnvironmentWrapper";
import MedicalDataWrapper from "./components/MedicalDataWrapper/MedicalDataWrapper";
import HumanDataWrapper from "components/HumanDataWrapper/HumanDataWrapper";
import HumanMetric from "views/HumanMetric";
import MedicalMetric from "views/MedicalMetric";
import EnvironmentMetric from "views/EnvironmentMetric";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <EnvironmentWrapper>
        <MedicalDataWrapper>
          <HumanDataWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/rtl/*" element={<RTLLayout />} />
          <Route path="/admin/*" element={<HumanMetric></HumanMetric>} />
          <Route path="/admin/*" element={<MedicalMetric />} />
          <Route path="/admin/*" element={<EnvironmentMetric/>} />
          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
      </BrowserRouter>
      </HumanDataWrapper>
      </MedicalDataWrapper>
      </EnvironmentWrapper>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
