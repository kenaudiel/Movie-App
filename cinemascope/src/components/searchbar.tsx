import {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const [query, setQuery] = useState<string>("")

function handleChange(e:React.ChangeEvent<HTMLInputElement>){
  setQuery(e.target.value)
}
  
export default function SearchBar() {
  return (
    <Field orientation="horizontal">
      <Input className="w-150" type="search" placeholder="Search..." value={query} onChange={handleChange}/>
      <Button>Search</Button>
    </Field>
  )
}