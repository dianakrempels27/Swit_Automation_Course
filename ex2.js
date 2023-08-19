const names = ["Yuriy", "Oleg","Vlas","Oksana","Iryna","Yaryna","Ivan","Lubov"];
const newNames = names.filter(function (item) {
    return item.length > 4;
});
console.log(newNames);