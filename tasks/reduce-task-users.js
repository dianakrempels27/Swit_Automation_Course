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
        if (curr.birthday === "September" || curr.birthday === "October" || curr.birthday === "November") {
          acc.autumn.push(curr.user);
        } else if (curr.birthday === "December" || curr.birthday === "January" || curr.birthday === "February") {
          acc.winter.push(curr.user);
        } else if (curr.birthday === "March" || curr.birthday === "April" || curr.birthday === "May") {
          acc.spring.push(curr.user);
        } else if (curr.birthday === "June" || curr.birthday === "July" || curr.birthday === "August") {
          acc.summer.push(curr.user);
        }
        return acc;
      }, { autumn: [], winter: [], spring: [], summer: [] });
      
      console.log(summaryUsers);