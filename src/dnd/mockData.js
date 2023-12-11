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
    content: "Convert x1, y1, x2, y2 to radians",
    author: authors[4],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "21",
    content: "Convert x1, y1, x2, y2 to degrees",
    author: authors[4],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "22",
    content: "Calculate sin = sin(x1) / sin(x2)",
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
  {
    id: "2",
    content: "Calculate sin = sin(x1) * sin(x2)",
    author: authors[4],
    isCorrect: true, 
    finalPos: 1,
    currLoc: true,
  },
  {
    id: "3",
    content: "Calculate cos = cos(x1) * cos(x2) * cos(y1 - y2)",
    author: authors[4],
    isCorrect: true,
    finalPos: 2,
    currLoc: true,
  },
  {
    id: "24",
    content: "Calculate cos = cos(x1 - x2) * cos(y1) * cos(y2)",
    author: authors[4],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "25",
    content: "Calculate cos = cos(x1 - x2) / cos(y1 * y2)",
    author: authors[4],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "4",
    content: "Set RADIUS = 3963.0  // Earth radius in miles",
    author: authors[4], 
    isCorrect: true,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "26",
    content: "Set RADIUS = 1323.0  // Earth radius in miles",
    author: authors[4], 
    isCorrect: false,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "5",
    content: "Calculate dis = RADIUS * acos(sin + cos)",
    author: authors[4], 
    isCorrect: true,
    finalPos: 4,
    currLoc: true,
  },
  {
    id: "27",
    content: "Calculate dis = acos(sin + cos) / RADIUS",
    author: authors[4], 
    isCorrect: false,
    finalPos: 4,
    currLoc: true,
  },
  {
    id: "28",
    content: "Calculate dis = RADIUS + acos(sin + cos)",
    author: authors[4], 
    isCorrect: false,
    finalPos: 4,
    currLoc: true,
  },
  {
    id: "6",
    content: "Return dis",
    author: authors[4],
    isCorrect: true, 
    finalPos: 5,
    currLoc: true,
  },
  {
    id: "7",
    content: "Initialize distances array with length x.length",
    author: authors[5], 
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "29",
    content: "Initialize distances array with length x.length + 1",
    author: authors[5], 
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "30",
    content: "Initialize distances array with length x.length - 1",
    author: authors[5], 
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "8",
    content: "For i from 0 to x.length - 1:",
    author: authors[5], 
    isCorrect: true,
    finalPos: 1,
    currLoc: true,
  },
  {
    id: "9",
    content: "distances[i] = distance(cx, cy, x[i], y[i])",
    author: authors[5], 
    isCorrect: true,
    finalPos: 2,
    currLoc: true,
  },
  {
    id: "31",
    content: "distances[i] = distance(cx, cy, cx + 1, cy - 1)",
    author: authors[5], 
    isCorrect: false,
    finalPos: 2,
    currLoc: true,
  },
  {
    id: "10",
    content: "Return distances",
    author: authors[5], 
    isCorrect: true,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "11",
    content: "Set minDis = INFINITY",
    author: authors[6],
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "32",
    content: "Set minDis = 0",
    author: authors[6],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "12",
    content: "Set minIndex = 0",
    author: authors[6], 
    isCorrect: true,
    finalPos: 1,
    currLoc: true,
  },
  {
    id: "33",
    content: "Set minIndex = 1",
    author: authors[6],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "13",
    content: "For i from 0 to distances.length - 1:",
    author: authors[6],
    isCorrect: true,
    finalPos: 2,
    currLoc: true,
  },
  {
    id: "34",
    content: "For i from 0 to distances.length:",
    author: authors[6],
    isCorrect: false,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "14",
    content: " If distances[i] < minDis:",
    author: authors[6], 
    isCorrect: true,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "35",
    content: " If distances[i] > minDis:",
    author: authors[6], 
    isCorrect: false,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "15",
    content: "Set minDis = distances[i]",
    author: authors[6], 
    isCorrect: true,
    finalPos: 4,
    currLoc: true,
  },
  {
    id: "36",
    content: "Set minDis = distances[i] + 1",
    author: authors[6], 
    isCorrect: false,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "16",
    content: "Set minIndex = i",
    author: authors[6], 
    isCorrect: true,
    finalPos: 5,
    currLoc: true,
  },
  {
    id: "37",
    content: "Set minIndex = i + 1",
    author: authors[6], 
    isCorrect: false,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "17",
    content: " Return minIndex",
    author: authors[6], 
    isCorrect: true,
    finalPos: 6,
    currLoc: true,
  },
  {
    id: "18",
    content: "For i from 0 to x.length - 1:",
    author: authors[7], 
    isCorrect: true,
    finalPos: 0,
    currLoc: true,
  },
  {
    id: "38",
    content: "For i from 0 to x.length:",
    author: authors[7], 
    isCorrect: false,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "19",
    content: "distances[i] = distance(cx, cy, x[i], y[i])",
    author: authors[7], 
    isCorrect: true,
    finalPos: 1,
    currLoc: true,
  },
  {
    id: "39",
    content: "distances[i] = distance(x[i], y[i], cx, cy)",
    author: authors[7], 
    isCorrect: false,
    finalPos: 3,
    currLoc: true,
  },
  {
    id: "20",
    content: "Return distances",
    author: authors[7], 
    isCorrect: true,
    finalPos: 2,
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