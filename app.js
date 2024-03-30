// Get Notes Button 
let createButton = document.querySelector(".button-notes");

let notesContainer = document.querySelector(".notes-container");

let notesInput = document.querySelectorAll(".input-area");




if (localStorage.getItem("notes")) {
    notesContainer.innerHTML = localStorage.getItem("notes");
}




// Save Update In Local Storage 
function saveStorage() {
    window.localStorage.setItem("notes", notesContainer.innerHTML);
};

createButton.onclick = function () {

    // Call Create Element Function 
    createElement();

};


// Create Element Function 
function createElement() {
    // maindiv
    let mainDiv = document.createElement("div");
    mainDiv.className = "loo";

    // Main P Element 
    let p = document.createElement("p");
    p.setAttribute("contenteditable", "true");
    p.className = "input-area";

    // Create Trash Icon
    let trash = document.createElement("img");
    trash.className = "clear";
    trash.src = "./delete.png";

    mainDiv.appendChild(p);
    // Append Trash Element In Main P Element 
    mainDiv.appendChild(trash);

    // Append P Element in Container
    notesContainer.appendChild(mainDiv);

};


notesContainer.addEventListener("click", function (e) {
    // Clear Parent Element Of Trash icon 
    if (e.target.classList == "clear") {

        e.target.parentElement.remove();

        // Call Update Local Storage Function 
        saveStorage();
    }
    else if (e.target.classList == "input-area") {
        console.log(e.target);
        notesInput = document.querySelectorAll(".input-area");

        notesInput.forEach((el) => {

            el.addEventListener("keyup", function () {

                // Call Update Local Storage Function 
                saveStorage();

            });

        });
    };

});

// Key Down Enter
document.addEventListener("keydown", function (event) {

    if (event.key == "Enter") {

        // Add <br> Break Line In The Paragraph
        document.execCommand("insertLineBreak");
        event.preventDefault();
    };
});

