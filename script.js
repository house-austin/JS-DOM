 
    const counterButton = document.querySelector("#counterButton");
    const counterDisplay = document.querySelector("#counter");
    const toggleButton = document.querySelector("#toggleButton");
    const toggleText = document.querySelector("#toggleText");
    const toggle10 = document.querySelector("#toggle10");
    const toggle15 = document.querySelector("#toggle15");
    const toggle24 = document.querySelector("#toggle24");
    const toggle35 = document.querySelector("#toggle35");
    const encourage = document.querySelector("#encourage");
    const inputEcho = document.querySelector("#inputEcho");
    const outputEcho = document.querySelector("#outputEcho");
    const listInput = document.querySelector("#listInput");
    const listButton = document.querySelector("#addButton");
    const listItem = document.querySelector("#listItem");
    
    
    let count = 0;
    
    // Clicker counter
    counterButton.addEventListener("click", function() {
        count++;
        counterDisplay.textContent = count;
        if (count == 10) {
          toggle10.classList.remove("hidden");
         }
        if (count == 15) {
          toggle15.classList.remove("hidden");
         } 
        if (count == 24) {
          toggle24.classList.remove("hidden");
         } 
        if (count == 35) {
          toggle35.classList.remove("hidden");
         } 
        if (count > 50) {
          const newp = document.createElement("p");
          newp.textContent = "How high can you go?"
          encourage.appendChild(newp);
         } 
         
    })
    
    // Text Toggler
    toggleButton.addEventListener("click", function() {
        toggleText.classList.toggle("hidden");
    })
    
    //Text Echo
    inputEcho.addEventListener("input", function() {
        outputEcho.textContent = inputEcho.value;
    })
    
    // List
    listButton.addEventListener("click", function() {
        const newItem = document.createElement("li");
        newItem.textContent = listInput.value;
        listItem.appendChild(newItem);
    })
