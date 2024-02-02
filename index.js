const quotations = [
  "Once you know what failure feels like, determination chases success",
  "Dedication makes dreams come true",
  "The most important thing is you must put everybody on notice that you're here and you are for real",
];

const randomIndex = Math.floor(Math.random() * quotations.length);
const selectedQuotation = quotations[randomIndex];

console.log(selectedQuotation);

import { everyLoop, everySome } from './exercises.js';

everyLoop()
everySome()