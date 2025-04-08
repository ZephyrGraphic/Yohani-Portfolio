export function saveToLocalStorage(key: string, data: any): void {
  if (typeof window !== "undefined") {
    try {
      const serializedData = JSON.stringify(data)
      localStorage.setItem(key, serializedData)
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }
  }
}

export function loadFromLocalStorage(key: string): any {
  if (typeof window !== "undefined") {
    try {
      const serializedData = localStorage.getItem(key)
      if (serializedData === null) {
        return null
      }
      return JSON.parse(serializedData)
    } catch (error) {
      console.error("Error loading from localStorage:", error)
      return null
    }
  }
  return null
}

export function removeFromLocalStorage(key: string): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error("Error removing from localStorage:", error)
    }
  }
}
