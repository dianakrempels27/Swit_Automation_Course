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

const summaryUsers = users.filter(function (el) {
    return el.birthday === "April";
});
console.log(summaryUsers);