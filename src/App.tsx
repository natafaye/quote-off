import { useMemo, useState } from "react"
import useTranscript from "./useTranscript"

const movies = [
  {
    id: "a-new-hope",
    title: "Star Wars: A New Hope"
  },
  {
    id: "empire-strikes-back",
    title: "Star Wars: The Empire Strikes Back"
  },
  {
    id: "return-of-the-jedi",
    title: "Star Wars: Return of the Jedi"
  }
]

export default function App() {
  const [movieIndex, setMovieIndex] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const transcript = useMemo(() => useTranscript(movies[movieIndex].id), [movieIndex])
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center">
      <div>
        <div className="flex justify-between items-center gap-3 mb-8">
          <button
            className="text-2xl"
            onClick={() => setMovieIndex((movieIndex - 1 + movies.length) % movies.length)}
          >⬅️</button>
          <h3 className="text-4xl font-light">{movies[movieIndex].title}</h3>
          <button
            className="text-2xl"
            onClick={() => setMovieIndex((movieIndex + 1) % movies.length)}
          >➡️</button>
        </div>
        <div className="text-2xl flex flex-col justify-center gap-4 bg-gray-800 p-4 w-200 min-h-70">
          <p>{transcript[currentLine]}</p>
          <p>{transcript[currentLine + 1]}</p>
          <p>{transcript[currentLine + 2]}</p>
        </div>
        <div>
          <button
            className="bg-blue-700 p-4 rounded text-white mt-8 me-3"
            onClick={() => setCurrentLine(currentLine + 1)}
          >
            Show Next Line
          </button>
          <button className="bg-blue-700 p-4 rounded text-white mt-8"
            onClick={() => setCurrentLine(Math.floor(Math.random() * transcript.length - 3))}>
            Go to Random Line
          </button>
        </div>
      </div>
    </div>
  )
}