var finalWpmTag, accTag, rawpmTag, cpmTag, mistakeTag, testTimeTag, resetBtnTag, themeStyle;
const wpmStorage = localStorage.getItem("wpm"),
    theme = localStorage.getItem("theme");
accuracyStorage = localStorage.getItem("accuracy"),
    rawpmStorage = localStorage.getItem("rawwpm"),
    cpmStorage = localStorage.getItem("cpm"),
    mistakesStorage = localStorage.getItem("mistakes"),
    maxtimeStorage = localStorage.getItem("time");
var fetchTheme;


document.addEventListener("DOMContentLoaded", function () {
    finalWpmTag = document.querySelector(".wpm span "),
        accTag = document.querySelector(".acc span "),
        rawpmTag = document.querySelector(".rawwpm  span"),
        cpmTag = document.querySelector(".cpm span "),
        mistakeTag = document.querySelector(".mistakes span"),
        testTimeTag = document.querySelector(".test_time span");
    themeStyle = document.getElementById('themeStyle');
    resetBtnTag = document.querySelector("#resultresetBtn");
    fetchTheme = localStorage.getItem('prevTheme');
    if (themeStyle != null)
        themeStyle.href = fetchTheme + '.css';
    resultPage();
    if(resetBtnTag)
        resetBtnTag.addEventListener("click", resetGame);

});
function resetGame() {
    localStorage.setItem("prevTheme", fetchTheme);
    window.location.replace("index.html");

}


function setTheme1(themeName) {
    let theme = document.getElementById('theme-style');
    theme.href = themeName + '.css';
}

function resultPage() {
    if (finalWpmTag != null && accTag != null && rawpmTag != null && cpmTag != null && mistakeTag != null && testTimeTag != null) {
        finalWpmTag.innerHTML = wpmStorage;
        accTag.innerHTML = accuracyStorage + "%";
        rawpmTag.innerHTML = rawpmStorage;
        cpmTag.innerHTML = cpmStorage;
        mistakeTag.innerHTML = mistakesStorage;
        testTimeTag.innerHTML = maxtimeStorage + 's';
    }
}
