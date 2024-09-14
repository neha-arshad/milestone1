//toggle visibility of a section
function toggleVisibility(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
}


document.getElementById("Skills")?.addEventListener("click", () => toggleVisibility("skills"));

document.getElementById("Projects")?.addEventListener("click", () => toggleVisibility("projects"));

document.getElementById("Experience")?.addEventListener("click", () => toggleVisibility("experience"));

document.getElementById("Education")?.addEventListener("click", () => toggleVisibility("education"));

// hide all sections
document.getElementById("skills")!.style.display = "none";
document.getElementById("projects")!.style.display = "none";
document.getElementById("experience")!.style.display = "none";
document.getElementById("education")!.style.display = "none";
