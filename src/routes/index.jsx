import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export function RoutesComp() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}
