const initialData = {
  booths: {
    "5": { id: "5", farmName: "MoonRise Farms", address: "", URL: "", bio: "", atMarket: true, likes: 2, marketId: 1 },
    "6": { id: "6", farmName: "Becker Farms", address: ""},
    "7": { id: "7", farmName: "3 Flock Farm", address: "" },
    "8": { id: "8", farmName: "Moon Valley Farm", address: "" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Un-mapped Booths",
      boothIds: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",

      ],
    },
    "column-2": {
      id: "column-2",
      title: "column 1",
      boothIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "column 2",
      boothIds: [],
    },
  },
  // Facilitate reordering of the columns
  // columnOrder: ['column-1', 'column-2'],
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
