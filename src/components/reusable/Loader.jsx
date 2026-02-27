import { HashLoader } from "react-spinners"
import { theme } from "../../theme"
import styled from "styled-components"
export default function Loader() {
  return (
    <LoaderStyled>
      <HashLoader color={theme.colors.primary} />
    </LoaderStyled>
  )
}

const LoaderStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`
