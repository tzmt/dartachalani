var adbs = require("ad-bs-converter");
let d = new Date();
let month = d.getMonth() + 1;
let day = d.getDate();
let YY = d.getFullYear();
let MM = (month < 10 ? '0' : '') + month;
let DD = (day < 10 ? '0' : '') + day;
// `${YY}/${MM}/${DD}`
let date = adbs.ad2bs(`${YY}/${MM}/${DD}`);
let convertedDate = `${date.en.year}-${date.en.month}-${date.en.day}`;  
console.log(convertedDate);