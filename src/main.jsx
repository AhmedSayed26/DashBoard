import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import DashBoard from "./page/DashBoard/DashBoard.jsx";
import Team from "./page/Team/Team.jsx";
import Contact from "./page/Contact/Contact.jsx";
import Invoices from "./page/Invoices/Invoices.jsx";
import Form from "./page/Form/Form.jsx";
import Calendar from "./page/Calendar/Calendar.jsx";
import Faq from "./page/Faq/Faq.jsx";
import Bar from "./page/Bar/Bar.jsx";
import Pie from "./page/Pie/Pie.jsx";
import Line from "./page/Line/Line.jsx";
import Geography from "./page/Geography/Geography.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<DashBoard />}></Route>,
      <Route path="team" element={<Team />}></Route>
      <Route path="contacts" element={<Contact />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
