import { useContext } from "react"
import { MainContext } from "../../../../../../../../../context/MainContext"
import { BilanType, TestType } from "../../../../../../../../../types"

type TestsSectionType = {
  className: string
  selectedBilan: BilanType
}

export default function TestsSection({
  className,
  selectedBilan,
}: TestsSectionType) {
  const { listTests } = useContext(MainContext)
  return (
    <>
      <b>Résultats des tests de condition physique:</b>
      <p>
        Les tests réalisés permettent d'évaluer votre condition physique
        actuelle et d'adapter votre accompagnement.
      </p>
      <div className={className}>
        {selectedBilan.tests.map((test: TestType, i: number) => {
          return (
            <div className="test-container" key={i}>
              <div className="test-number">
                <b>Test {i + 1}</b>
              </div>
              <div className="test-infos">
                <b className="test-name">{test.name}</b>
                <span style={{ whiteSpace: "pre-line" }}>
                  {listTests.find((el) => el.name === test.name)?.description}
                </span>
                <div className="results">
                  {test?.results?.map(
                    (
                      { field, value }: { field: string; value: string },
                      i: number,
                    ) => {
                      if (value) {
                        return (
                          <div key={i}>
                            <span>
                              {field}: <b>{value}</b>
                            </span>
                          </div>
                        )
                      }
                    },
                  )}
                </div>
                {test.remarques && <p>{test.remarques}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
