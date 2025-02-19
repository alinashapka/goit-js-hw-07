const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
    
nameInput.addEventListener("input", () => {
    const normalizedName = nameInput.value.trim();
    
    if (normalizedName === "") {
        nameOutput.textContent = "Anonymous";
    }

    else {
        nameOutput.textContent = normalizedName;
    }
    })