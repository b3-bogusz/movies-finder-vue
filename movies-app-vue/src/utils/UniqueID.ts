let UUID: number = 0

export default function UniqueID(): number {
  const getID = () => {
    UUID++
    return UUID
  }

  return getID()
}
