const superHero = require('./super-hero');
console.log(superHero.getName());
superHero.setName("SuperMan");
console.log(superHero.getName());

const newSuperHero = require('./super-hero');
console.log(newSuperHero.getName());

/**
 * We can see that in both case, the name is 'SuperMan'. 
 * It is because when module caching. When we import same file multiple times, it will return same object. Eg: super-hero.js is imported 2 times
 */