export const getLocalStorageValue = <T>(
  key: string,
  initialValue?: T,
): T | null => {
  const savedValue = localStorage.getItem(key)
  if (savedValue) {
    return JSON.parse(savedValue)
  }
  return initialValue || null
}

export const setValueLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}
