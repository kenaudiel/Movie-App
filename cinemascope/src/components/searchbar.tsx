import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  return (
    <Field orientation="horizontal">
      <Input className="w-150" type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}