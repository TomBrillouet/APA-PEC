import React from "react"
import { Route, Routes } from "react-router"
import ErrorPage from "./components/page/ErrorPage"
import LoginPage from "./components/page/LoginPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
