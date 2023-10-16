/**
 * #3:
 * Є такі репортери:
 * Primary User Report - primary_user_report : ["date", "user name", "user job title", "user work time"]
 * General Users Report - general_users_report : ["date", "users list", "user's job title", "user's work time"]
 * End Of Year Report - eoy_report: ["date", "period", "workind days", "users list", "holiday days"]
 * Start Of Year Report - soy_report: ["date", "users list", "planning working days"]
 * 
 * Написати switch, який буде виводити масив елементів взалежності від обраного репортера
 * Протестити для всіх.
 * По замовчуванню має бути General Users Report;
const reporter = "End Of Year Report";
switch (reporter) {
    case "Primary User Report": 
        console.log(["date", "user name", "user job title", "user work time"]);
        break;
    case "General Users Report":
        console.log(["date", "users list", "user's job title", "user's work time"]);
        break;
    case "End Of Year Report":
        console.log(["date", "period", "workind days", "users list", "holiday days"]);
        break;
    case "Start Of Year Report":
        console.log(["date", "users list", "planning working days"]);
        break;
    default:
        console.log(["date", "users list", "user's job title", "user's work time"]);
};
*/

const reporter = "End Of Year Report";
function arrayOfElements(reporter) {
    if (reporter === "End Of Year Report") {
        return ["date", "period", "workind days", "users list", "holiday days"];
    } else {
        return ["date", "users list", "user's job title", "user's work time"];
    }
};
console.log(arrayOfElements(reporter));