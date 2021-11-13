/**
 * Styles.
 */
import WhiteLogo from '../../../../assets/white-logo.svg';
import { RegularText } from '../../../Typography/components/RegularText';

import { Container, Logo } from './styles'

/**
 * Component.
 */
export function Footer() {
  return (
    <Container>
      <Logo src="images/white-logo.svg" />
      <RegularText isWhite text="H.A.P.P.Y 2021 © All rights reserved" />
    </Container>
  );
}
