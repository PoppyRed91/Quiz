const companyDescriptions = {
    freelanceDescription : "Freelance! \n Working as a freelance front-end developer demands dedication and continuous growth. \n Enhancing technical prowess, honing soft skills, and adeptly managing your freelance enterprise play pivotal roles in achieving success. \n While freelancing offers independence, learning prospects, and earning potential, \n it does present hurdles like income uncertainty, client dynamics, and administrative duties. \n The decision to freelance depends on factors such as your personality, lifestyle choices, risk tolerance and \n career aspirations.",
    governmentDescription : "A government company!\n Working as a front-end developer at a government agency in Sweden offers stability, \n impactful work, and skill development, but it could involve dealing with bureaucracy, limited flexibility, and potential slower career advancement \n compared to the private sector. The decision depends on factors as your preferences \n for job security, societal contribution, and the working environment.",
    bigCorporationDescription : "Big corporation!\n Working as a front-end developer in a big tech corporation provides access to top \n resources, innovative projects, and significant learning opportunities. However, you might encounter bureaucracy, specialization, \n and potential work-life balance issues. Deciding to work in a big tech corporation depends on your \n career goals, preference for stability and resources, and your ability to navigate \n a larger organizational setting.",
    startupDescription : "A startup!\n Working as a front-end developer in a startup offers exciting learning experiences, a chance \n to make a significant impact, and opportunities for growth. However, the downsides include instability, potential long hours, \n resource limitations, and uncertain compensation. Deciding to work for a startup often depends on your \n risk tolerance, career goals, and personal preferences for work environment and challenges. \n Be prepared to do a lot of other tasks not connected to your profession!",
    nonProfitDescription : "A non-profit company!\n Working as a front-end developer in a non-profit can be rewarding due to the meaningful \n impact and mission alignment. However, you might encounter challenges related to limited resources, funding uncertainty, and workload.\n  Deciding to work for a non-profit depends on your passion for the cause, your willingness to adapt, \n and your comfort with potential limitations in resources and compensation.",
    consultantDescription : "A consultant company!\n Working as a front-end developer in a consulting firm offers exposure to diverse projects, \n skill growth, networking opportunities, and exposure to best practices. However, challenges include adapting to client variations, \n potential work-life balance struggles, and the pressure of meeting client expectations. Deciding to \n work in a consulting firm depends on your adaptability, preference for variety, \n and your ability to handle fast-paced environments.",   
}


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
    let resultDescription = document.createElement("h3")
    resultText.textContent = "You are a perfect fit for... "
    resultDiv.append(resultText)

    resultDescription.setAttribute("id", "resultDesc")
    resultDescription.style.display = "flex"
    resultDescription.style.justifyContent = "center"
    resultDescription.style.alignItems = "center"
    resultDescription.style.fontSize = "large"
    resultDescription.style.paddingTop = "50px"
    resultDescription.style.paddingLeft = "10%"
    resultDescription.style.paddingRight = "10%"
    
    // switch case // 
    resultImage = document.createElement("img")

    switch(result) {
        case "freelance":
            resultDescription.textContent= companyDescriptions.freelanceDescription;
            resultImage.src = "images/freelance.jpg";
            resultDiv.append(resultImage);
            resultDiv.append(resultDescription);
            break;
        case "government":
            resultDescription.textContent= companyDescriptions.governmentDescription;
            resultImage.src = "images/government.jpg";
            resultDiv.append(resultImage);
            resultDiv.append(resultDescription);
            break;
        case "bigCorporation":
            resultDescription.textContent= companyDescriptions.bigCorporationDescription;
            resultImage.src = "images/bigcorporation.jpg";
            resultDiv.append(resultImage);
            resultDiv.append(resultDescription);
            break;
        case "startup":
            resultDescription.textContent= companyDescriptions.startupDescription;
            resultImage.src = "images/startup.jpg";
            resultDiv.append(resultImage);
            resultDiv.append(resultDescription);
            break;
        case "nonProfit":
            resultDescription.textContent= companyDescriptions.nonProfitDescription;
            resultImage.src = "images/nonprofit.jpg";
            resultDiv.append(resultImage);
            resultDiv.append(resultDescription);
            break;
        case "consultant":
            resultDescription.textContent= companyDescriptions.consultantDescription;
            resultImage.src = "images/consulting.jpg";
            resultDiv.append(resultImage);
            resultDiv.append(resultDescription);
            break;
        default:
            resultDescription.textContent = "Maybe you really are Sid and don't know what you want yet. Good luck!";
    }
}



