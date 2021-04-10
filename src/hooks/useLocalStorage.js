import { useEffect, useState } from 'react'

// ? using this to prefix what is saved in local storage so that way things don't get conflicted later on down the road
// ? that way when debugging you can see which thing its coming from for sure
const PREFIX = 'whats-app-clone-'

export default function useLocalStorage(key, initialValue) {

    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])


    return [value, setValue]
}