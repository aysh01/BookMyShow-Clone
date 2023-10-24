const categories = {
    Normal: [
        { value: 'A', number: 8 },
        { value: 'B', number: 6 },
        { value: 'C', number: 5 },
    ],
    Exclusive: [
        { value: 'D', number: 5 },
        { value: 'E', number: 7 },
    ],
    Club: [
        { value: 'F', number: 4 },
        { value: 'G', number: 5 },
        { value: 'H', number: 7 },
    ],
    VIP: [
        { value: 'I', number: 3 },
        { value: 'J', number: 2 },
    ],
};

function getRandomValue(i) {
    const values = categories[i];
    if (values) {
        const randomIndex = Math.floor(Math.random() * values.length);
        return values[randomIndex];
    }
    return null;
}

// const a = 'Normal';
// const randomValue = getRandomValue(a);

// if (randomValue) {
//     console.log(randomValue);
//     console.log(`Value:${randomValue.value}`);
//     console.log(`Number:${randomValue.number}`);
// } else {
//     console.log('Invalid');
// }

//Checking, every Condition
if (localStorage.getItem("platinum").includes('VIP')) {
    const a = 'VIP';
    const randomValue = getRandomValue(a);

    if (randomValue) {
        //console.log(randomValue);
        localStorage.setItem('123',randomValue.value);
        localStorage.setItem('456',randomValue.number);
        console.log(`Value:${randomValue.value}`);
        console.log(`Number:${randomValue.number}`);
    } else {
        console.log('Invalid');
    }
}
else if (localStorage.getItem("platinum").includes('CLUB')) {
    const a = 'Club';
    const randomValue = getRandomValue(a);

    if (randomValue) {
        // console.log(randomValue);
        localStorage.setItem('123',randomValue.value);
        localStorage.setItem('456',randomValue.number);
        console.log(`Value:${randomValue.value}`);
        console.log(`Number:${randomValue.number}`);
    } else {
        console.log('Invalid');
    }
}

else if (localStorage.getItem("platinum").includes('EXCLUSIVE')) {
    const a = 'Exclusive';
    const randomValue = getRandomValue(a);

    if (randomValue) {
        // console.log(randomValue);
        localStorage.setItem('123',randomValue.value);
        localStorage.setItem('456',randomValue.number);
        console.log(`Value:${randomValue.value}`);
        console.log(`Number:${randomValue.number}`);
    } else {
        console.log('Invalid');
    }
}

else if (localStorage.getItem("platinum").includes('NORMAL')) {
    const a = 'Normal';
    const randomValue = getRandomValue(a);

    if (randomValue) {
        // console.log(randomValue);
        localStorage.setItem('123',randomValue.value);
        localStorage.setItem('456',randomValue.number);
        console.log(`Value:${randomValue.value}`);
        console.log(`Number:${randomValue.number}`);
    } else {
        console.log('Invalid');
    }
}