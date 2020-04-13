const initialData = {
  booths: {
    "0": {
      id: "0",
      farmName: "MoonRise Farms",
      address: "",
      URL: "",
      bio: "",
      atMarket: true,
      likes: 2,
      marketId: 1,
    },
    "1": { id: "1", farmName: "Becker Farms", address: "" },
    "2": { id: "2", farmName: "3 Flock Farm", address: "" },
    "3": { id: "3", farmName: "Moon Valley Farm", address: "" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Un-mapped Booths",
      boothIds: [
        "0",
        "1",
        "2",
        "3",
        // "4",
        // "5",
        // "6",
        // "7",
        // "8",
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
