import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../components/gallery/paths';

const imagesPaths800 = imagesPaths.map((path) => path[800]);

const Gallery: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const [slideNumber, setSlideNumber] = useState(1);

  const handleClick = (event: React.MouseEvent) => {
    const { currentTarget } = event;

    const cardNumber =
      Number(currentTarget.getAttribute('data-slide-number')) ?? 1;

    event.preventDefault();
    setToggler(!toggler);
    setSlideNumber(cardNumber + 1);
  };

  return (
    <main>
      <h1>Gallery</h1>
      <section>
        {imagesPaths.map((imagePath, i) => {
          return (
            <article key={i} onClick={handleClick} data-slide-number={i}>
              <picture>
                <img src={imagePath[250]} alt="" />
              </picture>
            </article>
          );
        })}
      </section>

      <FsLightbox
        toggler={toggler}
        sources={imagesPaths800}
        slide={slideNumber}
      />
    </main>
  );
};

export default Gallery;
