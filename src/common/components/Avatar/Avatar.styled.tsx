import Image from 'next/image'
import styled from 'styled-components'

export const ComponentAvatar = styled(Image)<{ $circle: boolean }>`
  border: 1px solid #515a6c;
  border-radius: ${props => (props.$circle ? '50%' : '')};
`
