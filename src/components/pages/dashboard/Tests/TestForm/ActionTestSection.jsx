import Button from "../../../../reusable/Button"

export default function ActionTestSection({
  handleAddNewResult,
  handleCancel,
}) {
  return (
    <>
      <Button
        label={"Ajouter un résultats attendu"}
        onClick={(e) => handleAddNewResult(e)}
        version="cancel"
      />
      <Button label={"Enregistrer"} version="submit" type="submit" />
      <Button label={"Annuler"} onClick={handleCancel} version={"red"} />
    </>
  )
}
