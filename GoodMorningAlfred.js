const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

const alfredStatements = {
    goodMorning: ['great','wonderful','magnificent', 'marvelous'],
    workout: ['50 push ups', '100 jumping jacks', '100 crunches', '20 burpees'],
    closingStatement: ['Have a great day and happy coding!',
        'Good Job! Now go make something amazing!',
        'P.S. I know you didnt do your workout >:(', 
        'You are gonna have to do better than that if you are going to save gotham....']
};

let outputArray = [];

for (let prop in alfredStatements) {
    let generateRandomIndex = randomNumber(alfredStatements[prop].length);

    switch (prop) {
    case 'goodMorning':
        outputArray.push(`Good morning sir, it's a ${alfredStatements[prop][generateRandomIndex]} day today!`);
        break;
        
    case 'workout':
        outputArray.push(`Lets get ready to take on the day. Give me ${alfredStatements[prop][generateRandomIndex]}!`);
        break;
    
    case 'closingStatement':
        outputArray.push(`${alfredStatements[prop][generateRandomIndex]}`);
        break;

    default:
        outputArray.push("oh no. something went wrong.")
        break;
    }
}

    
console.log(outputArray[0])

setTimeout(function () {
    
    console.log(outputArray[1])

},2000);

setTimeout(function () {
    
    console.log(outputArray[2])

},4000);


