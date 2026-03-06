import styled from "styled-components"
import Button from "./Button"
import { IoDocumentTextOutline } from "react-icons/io5"

export default function ListWithButton({
  datas,
  onClick,
  buttonLabel,
  renderItem,
  secondButtonLabel,
  onClickSecondButton,
  icon,
  className,
}) {
  return (
    <ListWithButtonStyled>
      {datas?.map((item) => {
        return (
          <li key={item.id} className={className}>
            {icon}
            {renderItem ? <span>{renderItem(item)}</span> : null}
            <div>
              <Button
                label={buttonLabel}
                onClick={() => onClick(item)}
                version="minimalist"
              />
              {secondButtonLabel && onClickSecondButton && (
                <Button
                  label={secondButtonLabel}
                  onClick={() => onClickSecondButton(item.id)}
                  version="minimalistred"
                />
              )}
            </div>
          </li>
        )
      })}
    </ListWithButtonStyled>
  )
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
