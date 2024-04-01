import styled from 'styled-components'

export const SearchContainer = styled.div`
  max-width: 19.63125rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  padding: 0.5rem 0.5625rem;
  box-shadow:
    0.03125rem 0.03125rem rgba(0, 0, 0, 0.2),
    0.0625rem 0.0625rem rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  gap: 0.5625rem;

  input {
    flex: 1;
    border: 0;

    font-size: 0.5625rem;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  @media screen and (min-width: 1417px) {
    max-width: 33.135625rem;
  }
`
