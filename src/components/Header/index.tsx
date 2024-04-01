import { HeaderContainer, HeaderContent, Logo } from './styles'
import logo from '../../assets/logo.svg'
import { Search } from '../Search'
import { X } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logo} alt="Logo CoreNotes" />
          CoreNotes
        </Logo>

        <Search />
      </HeaderContent>

      <button>
        <X size={22} weight="bold" />
      </button>
    </HeaderContainer>
  )
}
