import { paths } from "../shared/paths";

// Function to shuffle array using Fisher-Yates algorithm
const shuffleArray = <T>(array: T[]): T[] => {
	const shuffled = [...array]; // Create a copy to avoid mutating original

	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
};

// Function to chunk array into groups of specified size
const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
	const chunks: T[][] = [];

	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}

	return chunks;
};

const numberOfItemsPerGroup = window.innerWidth > 800 ? 2 : 1;

const pathsGroupedByN = chunkArray(shuffleArray(paths), numberOfItemsPerGroup);

const carouselElement = document.querySelector(
	".carousel > .content-wrapper > ul",
);

const carouselItems = pathsGroupedByN.map((groupedByThree) => {
	return `
	  <li>
			${groupedByThree
				.map(({ imgSrc, footnote }) => {
					return `<picture>
                <source
                  srcset="${imgSrc}"
                  type="image/jpeg"
                />
                <img
                  src="${imgSrc}"
                  alt="${footnote ? footnote.map((item) => item).join("") : ""}"
                  loading="lazy"
                />
              </picture>`;
				})
				.join("")}
		</li>
	`;
});

if (carouselElement) {
	carouselElement.innerHTML = carouselItems.join("");
}
