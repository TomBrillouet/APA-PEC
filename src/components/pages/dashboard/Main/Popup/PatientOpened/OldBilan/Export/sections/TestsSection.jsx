import { useContext } from "react"
import { MainContext } from "../../../../../../../../../context/MainContext"

export default function TestsSection({ className, selectedBilan }) {
  const { listTests } = useContext(MainContext)

  return (
    <>
      <b>Résultats des tests de condition physique:</b>
      <p>
        Les tests réalisés permettent d'évaluer votre condition physique
        actuelle et d'adapter votre acoompagnement.
      </p>
      <div className={className}>
        {selectedBilan.tests.map((test, i) => {
          return (
            <div className="test-container" key={i}>
              <div className="test-number">
                <b>Test n°{i + 1}</b>
              </div>
              <div className="test-infos">
                <b className="test-name">{test.name}</b>
                <span>
                  {listTests.find((el) => el.name === test.name).description}
                </span>
                <div className="results">
                  {test?.results?.map(({ field, value }, i) => {
                    if (value) {
                      return (
                        <div key={i}>
                          <span>
                            {field}: <b>{value}</b>
                          </span>
                        </div>
                      )
                    }
                  })}
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
