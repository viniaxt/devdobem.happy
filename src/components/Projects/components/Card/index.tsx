/**
 * Styling.
 */
import { Container, Title, Picture, Text } from './styles'

/**
 * Type definition.
 */
type Props = {
  title: string
  picture?: string
  text: string
}

/**
 * Component.
 */
export function Card({ title, picture, text }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <Picture 
        alt={`Imagem do projeto ${title}`} 
        src={picture || 'https://via.placeholder.com/520x210'} 
      />
      
      <Text>{text}</Text>
    </Container>
  )
}
