import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'

const sizes = {
  small: '12rem',
  default: '27.349375rem',
}

export const CardContainer = styled.div<{ $size: 'small' | 'default' }>`
  height: ${({ $size }) => sizes[$size]};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 25px;
  box-shadow:
    0.03125rem 0.03125rem rgba(0, 0, 0, 0.2),
    0.0625rem 0.0625rem rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
`

export const CardHeader = styled.div`
  padding: 1.25rem 1.25rem 0.875rem;
  height: 2.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;

  input {
    flex: 1;
    border: 0;

    font-size: 0.875rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.dark};

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark};
      font-weight: bold;
    }
  }

  button {
    all: unset;
    cursor: pointer;
  }
`

export const CardContent = styled.div`
  flex: 1;
  padding: 0.875rem 1.25rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    flex: 1;
    resize: none;
    border: 0;

    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-text']};

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`

export const CardActionsCreate = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    all: unset;
    cursor: pointer;
  }
`

export const PopoverContent = styled(Popover.Content)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9px;
  box-shadow:
    0.03125rem 0.03125rem rgba(0, 0, 0, 0.2),
    0.0625rem 0.0625rem rgba(0, 0, 0, 0.08);
  padding: 20px;
  width: 260px;
  background-color: white;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &:focus {
    box-shadow:
      hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
      0 0 0 2px var(--violet-7);
  }

  &[data-state='open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }
`
