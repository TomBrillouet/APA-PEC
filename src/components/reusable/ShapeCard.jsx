import styled from "styled-components"
import { getImc } from "../../utils/math"
import { GiBodyHeight } from "react-icons/gi"
import { IoIosBody } from "react-icons/io"
import { FaWeightScale } from "react-icons/fa6"
import { theme } from "../../theme"
export default function ShapeCard({ dataShape, labels }) {
  const height = dataShape.height
  const weight = dataShape.weight

  return height && weight ? (
    <ShapeCardStyled className="old-values">
      <div className="card-shape">
        <div>
          {" "}
          <FaWeightScale />
          <span>
            {labels.weight} {weight}
          </span>
        </div>
        <div>
          {" "}
          <GiBodyHeight />
          <span>
            {labels.height} {height}
          </span>
        </div>
        <div>
          <IoIosBody />
          <span>
            {labels.imc} {getImc(weight, height)}
          </span>
        </div>
      </div>
    </ShapeCardStyled>
  ) : null
}

const ShapeCardStyled = styled.div`
  display: flex;
  justify-content: center;
  .card-shape {
    display: flex;
    flex-direction: column;
    border: 2px dotted #646363;
    border-radius: 8px;
    padding: 50px 10px;
    gap: 1em;
    svg {
      color: ${theme.colors.primary};
    }
    span {
      margin-left: 1em;
    }
  }
`
