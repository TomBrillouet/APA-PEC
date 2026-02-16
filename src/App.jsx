import React from "react"
import { Route, Routes } from "react-router"
import ErrorPage from "./components/pages/error/ErrorPage"
import LoginPage from "./components/pages/login/LoginPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
