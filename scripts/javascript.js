

document.getElementById("submit").onclick = function greetUser() {

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    const fullName = `${firstName} ${middleInitial}. ${lastName}`;
    
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Fizz Buzz, ${fullName}!`;

    const count = prompt(`How high do you want to count, ${firstName}?`);
    
    const outputList = document.getElementById("output");
    outputList.textContent = "";

    for (let i = 1; i <= count; i++) {
        const listItem = document.createElement("li");
        const oddEvenText = i % 2 === 0 ? "The number is even" : "The number is odd";
        listItem.textContent = `${i}. Bazoom Bazang - ${oddEvenText}`;
        outputList.appendChild(listItem); 
    }
};
