// Toggle between hiding and showing second menu
function toggler() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Closes menu when user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropBtn')) {
        let dropdowns = document.getElementsByClassName("dropdown__content");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}