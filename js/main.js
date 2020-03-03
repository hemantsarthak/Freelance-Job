/**opens a href link when enter key is pressed using key code and click functio****/
/**used as a tremporary patch before whole databse is developed****/

var input = document.getElementById("searchinput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchink").click();
    }
});