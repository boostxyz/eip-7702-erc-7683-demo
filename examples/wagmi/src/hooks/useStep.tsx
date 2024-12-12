import { useState } from 'react'

export function useStep(initialStep = 0) {
  const [step, setStep] = useState(initialStep)

  function forward() {
    setStep((curr) => curr + 1)
  }
  function back() {
    setStep((curr) => (curr > 0 ? curr - 1 : curr))
  }

  return {
    step,
    forward,
    back,
    setStep,
  }
}
