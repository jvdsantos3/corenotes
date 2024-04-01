import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Pesquisar notas" />
      <MagnifyingGlass size={18} weight="bold" />
    </SearchContainer>
  )
}
