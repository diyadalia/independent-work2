import { colors } from "@atlaskit/theme";

const score = {
  id: "1",
  name: "score() Pseudocode",
  colors: {
    soft: colors.Y50,
    hard: colors.N400A
  }
};

const main = {
  id: "2",
  name: "main() Pseudocode",
  colors: {
    soft: colors.P50,
    hard: colors.N400A
  }
};

const scoreB = {
  id: "3",
  name: "score() Bank",
  colors: {
    soft: colors.Y50,
    hard: colors.N400A
  }
};

const mainB = {
  id: "4",
  name: "main() Bank",
  colors: {
    soft: colors.P50,
    hard: colors.N400A
  }
};

export const authors = [score, main, scoreB, mainB];

export const quotes = [
  {
    id: "1",
    content: "LOLOLOL",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "21",
    content: "HIIIII",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "22",
    content: "SOUPPPPP",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "23",
    content: "Calculate sin = sin(x1)",
    author: authors[3],
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