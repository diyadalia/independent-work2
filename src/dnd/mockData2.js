import { colors } from "@atlaskit/theme";

const distance = {
  id: "1",
  name: "distance() Pseudocode",
  colors: {
    soft: colors.Y50,
    hard: colors.N400A
  }
};

const allDistances = {
  id: "2",
  name: "allDistances() Pseudocode",
  colors: {
    soft: colors.G50,
    hard: colors.N400A
  }
};

const findMin = {
  id: "3",
  name: "findMin() Pseudocode",
  colors: {
    soft: colors.B50,
    hard: colors.N400A
  }
};

const main = {
  id: "4",
  name: "main() Pseudocode",
  colors: {
    soft: colors.P50,
    hard: colors.N400A
  }
};

const distanceB = {
  id: "5",
  name: "distance() Bank",
  colors: {
    soft: colors.Y50,
    hard: colors.N400A
  }
};

const allDistancesB = {
  id: "6",
  name: "allDistances() Bank",
  colors: {
    soft: colors.G50,
    hard: colors.N400A
  }
};

const findMinB = {
  id: "7",
  name: "findMin() Bank",
  colors: {
    soft: colors.B50,
    hard: colors.N400A
  }
};

const mainB = {
  id: "8",
  name: "main() Bank",
  colors: {
    soft: colors.P50,
    hard: colors.N400A
  }
};

export const authors = [distance, allDistances, findMin, main, distanceB, allDistancesB, findMinB, mainB];

export const quotes = [
  {
    id: "1",
    content: "LOLOLOL",
    author: authors[4],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "21",
    content: "HIIIII",
    author: authors[4],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "22",
    content: "SOUPPPPP",
    author: authors[4],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "23",
    content: "Calculate sin = sin(x1)",
    author: authors[4],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
];


// Helper function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Shuffle the entire quotes array
const shuffledQuotes = [...quotes];

shuffleArray(shuffledQuotes);

export const shuffledQuotesData = {
  authors,
  quotes: shuffledQuotes,
  getByAuthor: (author, items) => items.filter((quote) => quote.author === author),
  authorQuoteMap: () =>
    authors.reduce(
      (previous, author) => ({
        ...previous,
        [author.name]: shuffledQuotes.filter((quote) => quote.author === author),
      }),
      {}
    ),
};