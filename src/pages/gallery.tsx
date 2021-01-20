import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../components/gallery/paths';

const Gallery: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <main>
      {imagesPaths.map((imagePath, i) => (
        <article key={i}>
          <picture>
            <img src={imagePath[250]} alt="" />
          </picture>
        </article>
      ))}
    </main>
  );
};

export default Gallery;
