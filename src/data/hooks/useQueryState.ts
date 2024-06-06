import { useState } from 'react'

import { useDebounceCallback } from 'usehooks-ts'

type QueryState = [string, (value: string) => void]

export const useQueryState = (
  initialValue: string,
  delay = 1000,
): QueryState => {
  const [value, setValue] = useState(initialValue)

  const debounced = useDebounceCallback(setValue, delay)

  return [value, debounced]
}
