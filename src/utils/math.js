export const getAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)

  let age = today.getFullYear() - birth.getFullYear()

  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate())

  if (!hasHadBirthdayThisYear) age--

  return age
}

export const getImc = (weight, height) => {
  return parseFloat(weight / (height / 100) ** 2).toFixed(2)
}

export const dateFr = (date) =>
  new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
