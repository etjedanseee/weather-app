import { ChangeEvent, FormEvent, useState } from "react"
import { useActions } from "../hooks/useActions"
import s from '../styles/search.module.scss'


const Search = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState<null | string>(null)

  const { fetchWeather } = useActions()

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setError(null)
  }

  const onBlur = () => {
    setError(null)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (search) {
      fetchWeather(search)
      setSearch('')
    } else {
      setError('Поле обязательное!')
    }
  }

  return (
    <form onSubmit={onSubmit} className={s.cnt}>
      <input
        value={search}
        onChange={onSearchChange}
        className={s.search}
        type="text"
        placeholder="Search for a city"
        onBlur={onBlur}
      />
      {error ? <div className={s.error}>{error}</div> : null}

      <button className={s.btn}>submit</button>
    </form>
  )
}

export default Search