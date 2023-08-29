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

const summaryUsers1 = users.reduce((acc, curr) => {
    let season;
    switch (curr.birthday) {
    case "December":
    case "January":
    case "February":
    season = "winter";
    break;
    case "March":
    case "April":
    case "May":
    season = "spring";
    break;
    case "June":
    case "July":
    case "August":
    season = "summer";
    break;
    case "September":
    case "October":
    case "November":
    season = "autumn";
    break;
    default:
    season = "unknown";
    };

    if (!acc[season]) {
    acc[season] = [];
    }
    acc[season].push(curr.user);
    
    return acc;
    }, {});
    
    const autumnUsers = summaryUsers["autumn"] || [];
    const winterUsers = summaryUsers["winter"] || [];
    const springUsers = summaryUsers["spring"] || [];
    const summerUsers = summaryUsers["summer"] || [];
    
    console.log(summaryUsers1);
