/* Jeremy Calhoun
WEB115-N801 Fall 24 */

document.getElementById("submit").onclick = function greetUser() {

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    if (!firstName || !lastName) {
        alert("First and last names are required!");
        return;
    }

    const fullName = middleInitial ? `${firstName} ${middleInitial}. ${lastName}` : `${firstName} ${lastName}`;
    
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Fizz Buzz, ${fullName}!`;

    const output = document.getElementById('output');
    textContent = '';

    const divisors = {
        3: 'Student',
        5: 'Dreamer',
        7: 'BANG!'
    };
    
    const countLimit = 140;

    function checkDivision(num, divisor) {
        return num % divisor === 0;
    }

    for (let count = 1; count <= countLimit; count++) {
        let listItem = document.createElement('li');
        let result = '';

        Object.entries(divisors).forEach(([divisor, word]) => {
            if (checkDivision(count, divisor)) {
                result += word + ' ';
            }
        });

        if (result === '') {
            result = 'Study';
        }

        listItem.textContent = `${count}. ${result.trim()}`;
        output.appendChild(listItem);
    }
};