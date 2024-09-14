var _a, _b, _c, _d;
//toggle visibility of a section
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === "none" ? "block" : "none";
    }
}
(_a = document.getElementById("Skills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return toggleVisibility("skills"); });
(_b = document.getElementById("Projects")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return toggleVisibility("projects"); });
(_c = document.getElementById("Experience")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return toggleVisibility("experience"); });
(_d = document.getElementById("Education")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return toggleVisibility("education"); });
// hide all sections
document.getElementById("skills").style.display = "none";
document.getElementById("projects").style.display = "none";
document.getElementById("experience").style.display = "none";
document.getElementById("education").style.display = "none";
