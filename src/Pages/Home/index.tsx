import { Card } from '../../components/Card'
import { CardList, HomeContainer, NotesContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Card size="small" />

      <NotesContainer>
        <span>Favoritas</span>

        <CardList>
          <Card />
          <Card />
        </CardList>
      </NotesContainer>

      <NotesContainer>
        <span>Outras</span>

        <CardList>
          <Card />
          <Card />
        </CardList>
      </NotesContainer>
    </HomeContainer>
  )
}
