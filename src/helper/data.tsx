import { History } from "../screens/HistoryScreen"

export const getRecord: () => History[] | null = () => {
  const prev = localStorage.getItem('record')
  if(prev !== null)
    return JSON.parse(prev)

  return null
}

export const saveRecord : (newValue:History) => void = (newValue :History) => {
  const prev = getRecord()
  if(prev !== null)
    localStorage.setItem('record', JSON.stringify([...prev, newValue]))
  else
    localStorage.setItem('record', JSON.stringify([newValue]))
}