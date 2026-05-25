import {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
  
export default function SearchBar() {
  const [query, setQuery] = useState<string>("")

  return (
    <Field orientation="horizontal">
      <Input className="w-150" type="search" placeholder="Search..." value={query} onChange={e => setQuery(e.target.value)}/>
      <Button>Search</Button>
    </Field>
  )
}