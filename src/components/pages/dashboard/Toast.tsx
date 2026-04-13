import { ToastContainer } from "react-toastify"
import styled from "styled-components"

export default function Toastadmin() {
  return <Toast></Toast>
}

const Toast = styled(ToastContainer)`
  .Toastify__toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
