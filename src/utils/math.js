export const getAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)

  let age = today.getFullYear() - birth.getFullYear()

  // Ajustement si l'anniversaire n'est pas encore passé cette année
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate())

  if (!hasHadBirthdayThisYear) age--

  return age
}

export const getImc = (weight, height) => {
  parseFloat(weight / (height / 100) ** 2).toFixed(2)
}
