import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    margin-left: 1.4375rem;

    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['sub-title']};
  }
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`
