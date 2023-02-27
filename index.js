function Instagram(
        handleOfAuthor,
        content,
        imageLink,
        numberOfViews,
        numberOfLikes
      ) {
        this.handleOfAuthor = handleOfAuthor;
        this.content = content;
        this.imageLink = imageLink;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
      }
const post = new Instagram(
        'Zainab',
        'Heyyy it is zayy',
        'zay.jpg',
        100,
        50
);
const posts = new Instagram(
        'Zainab',
        'Heyyy it is zayy',
        'zay.jpg',
        100,
        50  
);
console.log(post);
console.log(posts);

function createPerson(name, age, location) {
        return {
          name: name,
          age: age,
          location: location,
        };
      }
      
      const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
      function createJambScores(eng, govt, lit, crk) {
        return {
          eng: eng,
          govt: govt,
          lit: lit,
          crk: crk,
        };
      }
      
      musa["results"] = createJambScores("70", "85", "82", "94");
      
      console.log(musa);
      //Using the assign function
      let objectA = {a: 1, b: 2}

      let objectB = {c: 3, d: 4}
      
      Object.assign(objectA, objectB)
      
      console.log(objectA);
      //lodash clone
      const clone = require('lodash.clone')
var objA = { 
  a: 1,
  b: {
        c: 2,
        d: {
            e: 3
      }
  }
}
var objB = clone(objA)
objA.b.c = 30
console.log(objA)

//spread
const objA = { 
        name: 'Alexander', 
        age: 26, 
    }
    
    const objB = { 
        Licensed: true, 
        location: "Ikeja" 
    }
    
    const mergedObj = {...objA, ...objB}
    console.log(mergedObj) 

    const presidentialCandidates = {
        AAC: "Omoyele Sowore",
        ACCORD: "Christopher Imumolen",
        APC: "Bola Ahmed Tinubu",
        LP: "Peter Obi",
        NNPP: "Rabiu Kwankwaso",
        PDP: "Atiku Abubakar",
      };
      for (const key in presidentialCandidates) {
        console.log(
          `${presidentialCandidates[key]} Sowore is the presidential candidate of ${key}`
        );
      }
      
      for (let key of Object.keys(presidentialCandidates)) {
        console.log(
          `${presidentialCandidates[key]} Sowore is the presidential candidate of ${key}`
        );
      }
      