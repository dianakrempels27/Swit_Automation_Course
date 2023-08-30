const users = [
    {
        user:"Diana",
        birthday:"April"
    },
    {
        user:"Lev",
        birthday:"February"
    },
    {
        user:"Eva",
        birthday:"June"
    },
    {
        user:"Vita",
        birthday:"September"
    }
    ];

    const summaryUsers = users.reduce((acc, curr) => {
        const season = Object.keys(seasons).find((key) => seasons[key].includes(curr.birthday));
        return {
            ...acc,
            [season]: [
                ...(acc[season] || []),
                curr.user
            ]
        };
    }, {});
    
    console.log(summaryUsers); // { autumn: [ 'Diana' ], winter: [ 'Lev' ], summer: [ 'Eva' ], spring: [ 'Vita' ] }
    
    const finalResult = Object.values(summaryUsers).flat();
    console.log(finalResult); // [ 'Diana', 'Lev', 'Eva', 'Vita' ]