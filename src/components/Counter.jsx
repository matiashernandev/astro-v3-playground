import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="flex gap-5 justify-center items-center">
      <button
        className="border px-2 py-1"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        className="border px-2 py-1"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <div>{counter}</div>
    </div>
  )
}
