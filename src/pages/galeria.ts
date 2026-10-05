import '../components/header';
import '../components/footer';
import '../components/cookies';

import { altText, formatCaption, paths } from '../shared/paths';

type Photo = (typeof paths)[number];

const galleryWrapper = document.querySelector('.gallery-groups');

const UNDATED = 'Sin fecha';

const decadeLabel = (year: number | null): string =>
  year ? `Década de ${Math.floor(year / 10) * 10}` : UNDATED;

// Sort chronologically and group by decade, with undated photos last
const groupByDecade = (photos: Photo[]): Map<string, Photo[]> => {
  const sorted = [...photos].sort(
    (a, b) => (a.year ?? Infinity) - (b.year ?? Infinity),
  );
  const groups = new Map<string, Photo[]>();

  for (const photo of sorted) {
    const label = decadeLabel(photo.year);
    groups.set(label, [...(groups.get(label) ?? []), photo]);
  }

  return groups;
};

const renderPhoto = (photo: Photo): string => {
  const { imgSrc, footnote, year } = photo;

  // The visible caption already names the link, so the image only needs alt text when there is none

  return `
		<a data-type="image"
			data-fslightbox="gallery"
			href="${imgSrc}"
			data-caption="${formatCaption(photo)}"
		>
		  <picture>
				<img src="${imgSrc}" alt="${footnote ? '' : altText(photo)}" loading="lazy" class="gallery-image">
		  </picture>
		  <footer>
				${year ? `<p class="year"><time datetime="${year}">${year}</time></p>` : ''}
				${footnote ? footnote.map((item) => `<p>${item}</p>`).join('') : ''}
		  </footer>
		</a>
    `;
};

const renderGallery = () => {
  const gallery = [...groupByDecade(paths)]
    .map(
      ([label, photos]) => `
      <section>
        <h3>${label}</h3>
        <div class="gallery">${photos.map(renderPhoto).join('')}</div>
      </section>
    `,
    )
    .join('');

  if (galleryWrapper) {
    galleryWrapper.innerHTML = gallery;
  }

  // @ts-expect-error
  if (typeof refreshFsLightbox !== 'undefined') {
    // @ts-expect-error
    refreshFsLightbox();
  }
};

document.addEventListener('DOMContentLoaded', renderGallery);
