import React from 'react';
import { Helmet } from 'react-helmet';
import { Person } from 'schema-dts';
import { helmetJsonLdProp } from 'react-schemaorg';

interface HeadProps {
  children: React.ReactNode;
}

const Head: React.FC<HeadProps> = ({ children }) => (
  <Helmet
    script={[
      helmetJsonLdProp<Person>({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Pedro Martin Perez',
        alternateName: 'Pedro Marthan',
        birthDate: '1926-06-29',
        birthPlace: 'Santa Clara, Cuba',
        children: ['Yoana Martin Diaz', 'Pedro Martin Valera'],
        knowsAbout: ['Telenovela', 'Venezuela Theather'],
        deathDate: '2021-01-18',
        deathPlace: 'Valencia, Venezuela',
        familyName: 'Martin',
        gender: 'male',
        givenName: 'Pedro',
        nationality: 'Venezuelan',
      }),
    ]}
  >
    {children}
  </Helmet>
);

export default Head;
