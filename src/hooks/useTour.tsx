import { useState } from "react"

export const useTour = () => {
  const [tourCompleted, setTourCompleted] = useState(
    !!localStorage.getItem("tour_completed"),
  )

  const completeTour = () => {
    setTourCompleted(true)
    localStorage.setItem("tour_completed", "true")
  }

  return { tourCompleted, completeTour }
}
