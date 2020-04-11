const initialData = {
    booths: {
        'booth-1': { id: 'booth-1', content: 'MoonRise Farms'},
        'booth-2': { id: 'booth-2', content: 'Becker Farms'},
        'booth-3': { id: 'booth-3', content: '3 Flock Farm'},
        'booth-4': { id: 'booth-4', content: 'Moon Valley Farm'},
        'booth-5': { id: 'booth-5', content: 'empty'},
        'booth-6': { id: 'booth-6', content: 'empty'},
        'booth-7': { id: 'booth-7', content: 'empty'},

    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Un-mapped Booths',
            boothIds:['booth-1', 'booth-2', 'booth-3', 'booth-4', 'booth-5', 'booth-6', 'booth-7'],
        },
        'column-2': {
            id: 'column-2',
            title: 'column 1',
            boothIds:[],
        },
        'column-3': {
            id: 'column-3',
            title: 'column 2',
            boothIds:[],
        },
    },
    // Facilitate reordering of the columns
        // columnOrder: ['column-1', 'column-2'],
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;