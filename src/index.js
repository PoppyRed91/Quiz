function clickOnNext() {
    let position = {
        freelance: 0,
        government: 0,
        bigCorporation: 0,
        startup: 0,
        nonProfit: 0,
        consultant: 0
    };
    

    let options1 = document.querySelectorAll("input[id=option1]");
    let options2 = document.querySelectorAll("input[id=option2]");
    let options3 = document.querySelectorAll("input[id=option3]");
    let options4 = document.querySelectorAll("input[id=option4]");
    let options5 = document.querySelectorAll("input[id=option5]");
    let options6 = document.querySelectorAll("input[id=option6]");
    
    for (let i = 0; i < options1.length; i++) {
        if (options1[i].checked) {
            position.freelance += 1;
        }
    }

    for (let i = 0; i < options2.length; i++) {
        if (options2[i].checked) {
            position.government += 1;
        }
    }

    for (let i = 0; i < options3.length; i++) {
        if (options3[i].checked) {
            position.bigCorporation += 1;
        }
    }

    for (let i = 0; i < options4.length; i++) {
        if (options4[i].checked) {
            position.startup += 1;
        }
    }

    for (let i = 0; i < options5.length; i++) {
        if (options5[i].checked) {
            position.nonProfit += 1;
        }
    }

    for (let i = 0; i < options6.length; i++) {
        if (options6[i].checked) {
            position.consultant += 1;
        }
    }

    

    let maxValue = Math.max(
        position.freelance,
        position.government,
        position.bigCorporation,
        position.startup,
        position.nonProfit,
        position.consultant
    );

    let result = Object.keys(position).find(key => position[key] === maxValue);
    
    console.clear();
    console.log("You are fit for: " + result);

    let resultDiv = document.querySelector(".result")
    let resultText = document.createElement("h2")
    let resultDescription = document.createElement("p")
    resultText.textContent = "You are a perfect fit for " + result
    resultDiv.append(resultText)
    resultDescription.textContent= "Description of the company"
    resultDiv.append(resultDescription)

    
    
}


