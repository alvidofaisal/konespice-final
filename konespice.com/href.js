<button onclick="goToSection1()">Go to Section 1</button>

<script>
function goToSection1() {
    var section1 = document.getElementById("section1");
    window.scrollTo(0, section1.offsetTop);
}
</script>