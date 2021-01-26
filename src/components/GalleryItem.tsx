import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSlideNumber, toggleOpen } from '../redux/gallery/gallerySlice';
import Image from './image';

interface GalleryItemProps {
  footnote: string[] | null;
  year: number | null;
  imagePath: string;
  id: number;
}

interface YearElementProps {
  year: GalleryItemProps['year'];
}

interface FootnoteProps {
  footnote: GalleryItemProps['footnote'];
}

const Year: React.FC<YearElementProps> = ({ year }) =>
  year ? (
    <p>
      <time dateTime={String(year)}>{year}</time>
    </p>
  ) : (
    <p>Fecha desconocida</p>
  );

const Footnote = ({ footnote }: FootnoteProps) =>
  Array.isArray(footnote)
    ? footnote.map((note, i) => <p key={i}>{note}</p>)
    : null;

const StyledGalleryItem = styled.article`
  footer {
    p:first-of-type {
      font-weight: bold;
      font-size: 1.15rem;
    }
  }
`;

const GalleryItem: React.FC<GalleryItemProps> = ({
  footnote,
  year,
  imagePath,
  id,
}) => {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent) => {
    const { currentTarget } = event;

    const cardNumber =
      Number(currentTarget.getAttribute('data-slide-number')) ?? 1;

    event.preventDefault();
    dispatch(toggleOpen());
    dispatch(setSlideNumber(cardNumber + 1));
  };

  return (
    <StyledGalleryItem key={id} onClick={handleClick} data-slide-number={id}>
      <picture>
        <Image src={imagePath} alt={imagePath} />
      </picture>
      <footer>
        <Year year={year} />
        {Footnote({ footnote })}
      </footer>
    </StyledGalleryItem>
  );
};

export default GalleryItem;
