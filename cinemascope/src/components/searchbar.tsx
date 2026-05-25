import {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'
  
export default function SearchBar() {
  const [query, setQuery] = useState<string>("")
  const navigate = useNavigate();

  function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();

    if(query.trim() === ""){
      return
    }

    navigate(`/search/${query}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field orientation="horizontal">
        <Input className="w-150" type="search" placeholder="Search..." value={query} onChange={e => setQuery(e.target.value)}/>
        <Button type="submit">Search</Button>
      </Field>
    </form>
  )
}