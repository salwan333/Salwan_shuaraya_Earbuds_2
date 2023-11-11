function myHamburger(){
    let myNavigation = document.getElementById("navBar")
    let firstSection = document.getElementById("homeSection");

    if (myNavigation.className === "navigation") {
        myNavigation.className = "showHide";
        firstSection.className = "topSpace"
    } else {
        myNavigation.className = "navigation";
        firstSection.className = ""
    }
}
