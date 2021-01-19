import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import imageOne from '../assets/images/03.png';
import imagetwo from '../assets/images/04.png';
import imageThree from '../assets/images/05.png';

const Gallery: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[imageOne, imagetwo, imageThree]}
      />
    </>
  );
};

export default Gallery;
