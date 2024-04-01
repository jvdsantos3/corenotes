import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  height: 3.5625rem;
  padding: 0 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    flex: 1;
  }

  button {
    all: unset;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.icon};
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  font-size: 0.875rem;
`
