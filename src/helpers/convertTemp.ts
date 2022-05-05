export const convertTemp = (kelvin: number): number => {
  return +(kelvin - 273.15).toFixed()
}