import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DashPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export function RoutesComp() {
  const [user, setUser] = useState(false);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashPage noUser={setUser} userState={user} />}
      />
      <Route path="*" element={<LoginPage setUser={setUser} />} />
    </Routes>
  );
}
