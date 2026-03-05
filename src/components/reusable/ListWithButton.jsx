import styled from "styled-components"
import Button from "./Button"

export default function ListWithButton({
  datas,
  onClick,
  buttonLabel,
  renderItem,
}) {
  return (
    <ListWithButtonStyled>
      {datas.map((item) => {
        return (
          <li key={item.id || item.name}>
            {renderItem ? <span>{renderItem(item)}</span> : null}
            <Button
              label={buttonLabel}
              onClick={() => onClick(item)}
              version="minimalist"
            />
          </li>
        )
      })}
    </ListWithButtonStyled>
  )
}

const ListWithButtonStyled = styled.ul`
  display: inline-block;
  list-style-type: disclosure-closed;
  li {
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
