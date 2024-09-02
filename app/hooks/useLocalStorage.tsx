import { useEffect, useState } from 'react'

export const useLocalStorage = (key : string) => {
    const [value, setValue] = useState(localStorage.getItem(key) || '')

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])

    return [value, setValue]
}
