import { PaintBucket, PencilSimple, Plus, Star, X } from 'phosphor-react'
import {
  CardActions,
  CardActionsCreate,
  CardContainer,
  CardContent,
  CardHeader,
  PopoverContent,
} from './styles'
import * as Popover from '@radix-ui/react-popover'

interface CardProps {
  size?: 'small' | 'default'
}

export function Card({ size = 'default' }: CardProps) {
  return (
    <CardContainer $size={size}>
      <CardHeader>
        <input type="text" placeholder="Título" />

        <button>
          <Star size={22} weight="bold" />
        </button>
      </CardHeader>
      <CardContent>
        <textarea placeholder="Criar nota..."></textarea>

        {size === 'default' ? (
          <CardActions>
            <div>
              <button title="Editar Nota">
                <PencilSimple size={20} weight="bold" />
              </button>

              <Popover.Root>
                <Popover.Trigger asChild>
                  <button title="Editar Cor">
                    <PaintBucket size={20} weight="bold" />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <PopoverContent sideOffset={5} align="start">
                    <div>teste</div>
                  </PopoverContent>
                </Popover.Portal>
              </Popover.Root>
            </div>

            <button title="Excluir Nota">
              <X size={20} weight="bold" />
            </button>
          </CardActions>
        ) : (
          <CardActionsCreate>
            <button title="Adicionar Nota">
              <Plus size={20} weight="bold" />
            </button>
          </CardActionsCreate>
        )}
      </CardContent>
    </CardContainer>
  )
}
