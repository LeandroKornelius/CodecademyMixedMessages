const superheroQuotes = {
    spiderman: [
        "With great power comes great responsibility.",
        "I believe there's a hero in all of us, that keeps us honest, gives us strength, makes us noble, and finally allows us to die with pride, even though sometimes we have to be steady, and give up the thing we want the most. Even our dreams.",
        "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        "The more people I save, the more enemies I make.",
        "I'm not a superhero. I'm just a kid who got bit by a spider.",
        "One person can make a difference.",
        "Sometimes, you have to take a leap of faith first. The trust part comes later.",
        "It's not who I am underneath, but what I do that defines me.",
        "The world needs heroes.",
        "You're friendly neighborhood Spider-Man!",
    ],
    ironman: [
        "I am Iron Man.",
        "I told you. I don't want to join your super-secret boy band.",
        "Genius, billionaire, playboy, philanthropist.",
        "I prefer the weapon you only have to fire once.",
        "Give me a scotch. I'm starving.",
        "We have a Hulk.",
        "I have a plan: Attack.",
        "I shouldn't be alive... unless it was for a reason.",
    ],
    captainamerica: [
        "I can do this all day.",
        "I'm just a kid from Brooklyn.",
        "I'm with you till the end of the line.",
        "The price of freedom is high... and it's a price I'm willing to pay.",
        "I don't like bullies. I don't care where they're from.",
        "I'm not looking for forgiveness, and I'm way past asking for permission.",
        "The world has changed, and none of us can go back. All we can do is our best, and sometimes the best that we can do is to start over.",
        "I'm not a perfect soldier, but I'm a good man.",
        "I'm not going to fight you. You're my friend.",
    ],
};

console.log(superheroQuotes);


const randomIdx = Math.floor(Math.random() * spidermanQuotes.length); // variable contains random index from zero to the number of elements in the array
// console.log(randomIdx);

console.log(spidermanQuotes[randomIdx]); // displays in the terminal a random quote from the array