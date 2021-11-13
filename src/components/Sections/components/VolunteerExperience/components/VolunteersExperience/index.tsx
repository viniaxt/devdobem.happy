import Carousel, { ResponsiveType } from 'react-multi-carousel'

/**
 * Styles.
 */
import { Container } from './styles';
import { Section } from '../../../Section';
import { VolunteerContainer } from '../VolunteerContainer';
import { useState } from 'react';

/**
 * Type definitions.
 */
export interface IVolunteer {
  name: string;
  image_url: string;
  quote: string;
}
/**
 * Component.
 */


export function VolunteersExperience() {
  /**
   * Corousel configurations.
   */
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 2,
      partialVisibilityGutter: 200
    },
    smallDesktop: {
      breakpoint: { max: 1300, min: 1050 },
      items: 2,
      partialVisibilityGutter: 100
    },
    tablet: {
      breakpoint: { max: 1050, min: 950 },
      items: 2,
      partialVisibilityGutter: 20
    },
    smallTablet: {
      breakpoint: { max: 950, min: 720 },
      items: 1,
      partialVisibilityGutter: 200
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 0
    }
  }

  const volunteerExperiences = [
    {
      name: 'Voluntário 1',
      image_url: 'https://via.placeholder.com/300X300',
      quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      name: 'Voluntário 2',
      image_url: 'https://via.placeholder.com/300X300',
      quote: `Experiência do voluntário 2`
    },
    {
      name: 'Voluntário 3',
      image_url: 'https://via.placeholder.com/300X300',
      quote: `Experiência do voluntário 3`
    }
  ]

  return (
    <Section hasPaddingRight={false} sectionId="voluntarios" title="Experiência dos nossos voluntários" hasUnderline>
      <Container>
        <Carousel
          swipeable
          showDots
          infinite
          partialVisible
          responsive={responsive}
        >
          {volunteerExperiences.map((experience) => (
            <VolunteerContainer
              key={experience.image_url}
              {...experience}
            />
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
