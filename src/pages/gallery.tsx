import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../components/gallery/paths';

const imagesPaths800 = imagesPaths.map((path) => path[800]);

const Gallery: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setToggler(!toggler);
    // setProductIndex();
  };

  return (
    <main>
      <h1>Gallery</h1>
      {imagesPaths.map((imagePath, i) => {
        console.log({ imagePath });
        return (
          <article key={i} onClick={handleClick}>
            <picture>
              <img src={imagePath[250]} alt="" />
            </picture>
          </article>
        );
      })}

      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <button onClick={() => setProductIndex(1)}>Load second product</button>
      <FsLightbox
        toggler={toggler}
        sources={imagesPaths800}
        key={productIndex}
      />
    </main>
  );
};

export default Gallery;
