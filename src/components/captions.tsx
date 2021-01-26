import React from 'react';
import styled from 'styled-components';
import { Year, Footnote } from './GalleryItem';

interface CaptionsProps {
  800: string;
  250: string;
  footnote: string[] | null;
  year: number | null;
}

const StyledCaption = styled.footer`
  p {
    text-align: start;
    &:first-of-type {
      font-weight: bold;
      font-size: 1.15em;
    }
  }
`;

const Captions = (captions: CaptionsProps[]) => {
  return captions.map((caption) => {
    const { footnote, year } = caption;
    return (
      <StyledCaption>
        <Year year={year} />
        {Footnote({ footnote })}
      </StyledCaption>
    );
  });
};

export default Captions;
