document.getElementById("submit").onclick = function greetUser() {

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    if (!firstName || !lastName) {
        alert("First and last names are required!");
        return;
    }

    const fullName = `${firstName} ${middleInitial}. ${lastName}`;
    
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Fizz Buzz, ${fullName}!`;

    const count = 140;

    const output = document.getElementById('output');
    const word3 = 'Student';
    const word5 = 'Dreamer';
	const mainword ='Study';

    for (let i = 1; i <= 140; i++) {
        let listItem = document.createElement('li');
        if (i % 3 === 0 && i % 5 === 0) {
            listItem.textContent = `${i}. ${word3} ${word5}`;
        } else if (i % 3 === 0) {
            listItem.textContent = `${i}. ${word3}`;
        } else if (i % 5 === 0) {
            listItem.textContent = `${i}. ${word5}`;
        } else {
		listItem.textContent = `${i}. ${mainword}`;
        }
        output.appendChild(listItem);
    }
};
