import { ChangeEvent, FormEvent, useState } from "react"
import { useActions } from "../hooks/useActions"

const Search = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState<null | string>(null)

  const { fetchWeather } = useActions()

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setError(null)
  }

  const onBlur = () => {
    if (!search) {
      setError('Поле обязательное!')
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (search) {
      fetchWeather(search)
      setSearch('')
    } else {
      setError(null)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={search}
        onChange={onSearchChange}
        type="text"
        placeholder="Search for a city"
        onBlur={onBlur}
      />
      {error ? error : null}

      <button>submit</button>
    </form>
  )
}

export default Search