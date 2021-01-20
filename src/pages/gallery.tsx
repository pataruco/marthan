import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../components/gallery/paths';

const Gallery: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <main>
      <h1>Gallery</h1>
      {imagesPaths.map((imagePath, i) => {
        console.log({ imagePath });
        return (
          <article key={i}>
            <picture>
              <img src={imagePath[250]} alt="" />
            </picture>
          </article>
        );
      })}
    </main>
  );
};

export default Gallery;
