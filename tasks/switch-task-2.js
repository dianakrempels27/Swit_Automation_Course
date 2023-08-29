/**
 * Є масив об'єктів (доповнити цей масив)
 * [
 * {
 *  user:"",
 *  birthday:"July"
 * }, 
 * {
 *  user:"",
 *  birthday:"May"
 * },
 * ...
 * ];
 * Відфільтрувати так, щоб вивести 4 масиви з тільки user, народжених восени, взимку, навесні та влітку.
 * Кінцевий результат має бути:
 * const summaryUsers = ["username1","username2","username3"];
 * ...
 */


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

const summaryUsers = [[], [], [], []];

users.forEach((user) => {
  switch (user.birthday) {
    case "September":
    case "October":
    case "November":
        summaryUsers[0].push(user.user);
        break;
    case "December":
    case "January":
    case "February":
      summaryUsers[1].push(user.user);
      break;
    case "March":
    case "April":
    case "May":
      summaryUsers[2].push(user.user);
      break;
    case "June":
    case "July":
    case "August":
      summaryUsers[3].push(user.user);
      break;
  }
});

console.log(summaryUsers);