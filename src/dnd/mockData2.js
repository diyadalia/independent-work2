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
    content: "min = MAX_INT",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "20",
    content: "min = MIN_INT",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "2",
    content: "max = MIN_INT",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "21",
    content: "max = MAX_INT",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "3",
    content: "n = length of judgeRatings",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "22",
    content: "n = length of judgeRatings / 2",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "4",
    content: "sum = 0",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "23",
    content: "sum = 1",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "5",
    content: "for i = 0 to n-1",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "24",
    content: "for i = 0 to n",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "6",
    content: "min = minimum of min and judgeRatings[i]",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "25",
    content: "min = minimum of max - 1 and judgeRatings[i]",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "7",
    content: "max = maximum of max and judgeRatings[i]",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "26",
    content: "max = maximum of min + 1 and judgeRatings[i]",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "8",
    content: "sum = sum + judgeRatings[i]",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "27",
    content: "sum = sum - judgeRatings[i]",
    author: authors[2],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "9",
    content: "average = round((sum - min - max) / (n - 2.0))",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "10",
    content: "return average",
    author: authors[2],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "11",
    content: "k = read integer from StdIn()",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "11",
    content: "n = read integer from StdIn()",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "12",
    content: "print k",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "13",
    content: "for i=0 to k-1",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "28",
    content: "for i=0 to k",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "29",
    content: "for i=1 to k",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "14",
    content: "name = read string from StdIn()",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "29",
    content: "name = read int from StdIn()",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "15",
    content: "ratings = new Array of size n",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "30",
    content: "ratings = new Array of size n - 1",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "31",
    content: "ratings = new Array of size n + 1",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "16",
    content: "for j=0 to n-1",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "32",
    content: "for j=1 to n-1",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "33",
    content: "for j=0 to n",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "17",
    content: "ratings[j] = read integer from StdIn()",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "18",
    content: "overall = score(ratings)",
    author: authors[3],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "34",
    content: "overall = score(ratings)",
    author: authors[3],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "19",
    content: "print name and overall",
    author: authors[3],
    isCorrect: true,
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