/**
 * Styles.
 */
import {
  Container,
  VolunteerInfoContainer,
  VolunteerPicture,
  VolunteerName,
  QuoteContainer,
  QuoteSymbol,
  Quote,
} from './styles';

import { IVolunteer } from '../VolunteersExperience';
/**
 * Type definitions.
 */

/**
 * Component.
 */
export function VolunteerContainer({
  name,
  image_url,
  quote
}: IVolunteer) {
  return (
    <Container>
      <VolunteerInfoContainer>
        <VolunteerPicture src={image_url}/>
        <VolunteerName>{name}</VolunteerName>
      </VolunteerInfoContainer>

      <QuoteContainer>
        <QuoteSymbol src="images/quote.svg" />
      </QuoteContainer>

      <Quote>{quote}</Quote>
    </Container>
  );
}
