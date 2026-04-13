import styled from "styled-components"
import React from "react"

export default function ListWithButton({
  children,
}: {
  children: React.ReactNode
}) {
  return <ListWithButtonStyled>{children}</ListWithButtonStyled>
}

const ListWithButtonStyled = styled.ul`
  display: inline-block;
  li {
    display: flex;
    button {
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    list-style: none;
    padding: 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      margin-bottom: 5px;
    }
  }
`
