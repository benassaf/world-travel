import data from '/memory.json' assert { type: 'json' };
const posTxt = JSON.stringify(data)
//console.log(posTxt);
localStorage.clear();
localStorage.setItem("myPos", posTxt);