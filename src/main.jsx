import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/DashBoard/Dashboard";
import Team from "./page/Team/Team";
import Contacts from "./page/Contact/Contact";
import Invoices from "./page/Invoices/Invoices";
import Form from "./page/Form/Form";
import Calendar from "./page/Calendar/Calendar";
import FAQ from "./page/Faq/Faq";
import BarChart from "./page/Bar/Bar";
import PieChart from "./page/Pie/Pie";
import LineChart from "./page/Line/Line";
import Geography from "./page/Geography/Geography";
// import NotFound from "./page/notFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />

      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
