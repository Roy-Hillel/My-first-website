// Main function that controls the active tab according to the button clicked
function opentab (tabName) {
    let navButtons = document.getElementsByClassName("nav-buttons");
    let tabContents = document.getElementsByClassName("tab-contents");
    for (button of navButtons) { // removes the active class from all links
        button.classList.remove("active-link");
    }
    for (content of tabContents) { // removes the active class from all tabs
        content.classList.remove("active-tab");
    }

    // add the active class only to the active link and tab
    document.getElementById(tabName).classList.add("active-tab");
    document.getElementById(tabName+"Link").classList.add("active-link");

    if (tabName == 'employment') {
        alert("Haha that's funny!");
        handleMeme();
    }
    
    //toggle mobile nav if necessary (clicked a tab link from the mobile nav-bar)
    let mobileNav = document.getElementById("myLinks");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    }
}

// main toggle nav-bars function - depending on screen width
function toggleNav() {
    let mobileNav = document.getElementById("myLinks");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } 
    else {
        mobileNav.style.display = "block";
    }
}

// 'employment' tab clicked - after 1.2 seconds - go back to About me tab
function handleMeme() {
    let seconds = 0;
    let myInterval = setInterval(() => {
        if (seconds < 3) { seconds++; }
        else {
            clearInterval(myInterval);
            opentab('about');
        }},600);
}

/* Open mail function:
    - validate email address
    - create mail from client's mail app with fields inserted according to the form filled
    - cleans the form
*/
function openMail() {
    let name = document.getElementById('fullName');
    let mailAddress = document.getElementById('mailaddr');
    let desc = document.getElementById('description');
    if (validateEmail(mailAddress.value)) {
        let subject = name.value + " - via contact form";
        let body = desc.value;
        let link = `mailto:royhillel@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = link;
        opentab('contact');
        name.value = '';
        mailAddress.value = '';
        desc.value = '';
    }
    else {
        alert("You have entered an invalid mail address");
        mailAddress.focus();
    }
}

/* Validate mail - conditions:
    '@' - exists and not first char in the address.
    '.' - exists and at least 2 chars after '@' and at least 2 chars after it.
*/
function validateEmail(inputText) {
    let atPosition = inputText.indexOf("@");  
    let dotPosition = inputText.lastIndexOf(".");  
    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= inputText.length) {  
        return false;  
    } 
    return true;
}  
