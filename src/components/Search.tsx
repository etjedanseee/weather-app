import { ChangeEvent, FormEvent, useState } from "react"
import { useActions } from "../hooks/useActions"

//add validation to input
const Search = () => {
  const [search, setSearch] = useState('')
  const { fetchWeather } = useActions()

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    fetchWeather(search)
    setSearch('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={search}
        onChange={onSearchChange}
        type="text"
        placeholder="Search for a city"
      />
      <button>submit</button>
    </form>
  )
}

export default Search