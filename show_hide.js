function displaySelectedOption() {
    // get the dropdown element
    var dropballs = document.getElementById("contact-select");
    var result = dropballs.options[dropballs.selectedIndex].value;
    // get the selected option so we know what to display
    if (result === "Phone") {
        document.getElementById("phone").style.display = "block";
        document.getElementById("email").style.display = "none";
    } else if (result === "Email") {
        document.getElementById("email").style.display = "block";
        document.getElementById("phone").style.display = "none";
    } else {
        document.getElementById("phone").style.display = "none";
        document.getElementById("email").style.display = "none";
    };
};