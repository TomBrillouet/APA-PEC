export const formatPhone = (phone: string) => {
  return phone.replace(/(\d{2})(?=\d)/g, "$1.")
}
