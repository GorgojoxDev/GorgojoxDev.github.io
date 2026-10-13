// Build the 10-notch skill bars from data-level / data-color
document.querySelectorAll(".skill").forEach((skill) => {
  const level = Number(skill.dataset.level) || 0;
  const color = skill.dataset.color || "cyan";
  const bar = skill.querySelector(".segments");
  for (let i = 0; i < 10; i++) {
    const cell = document.createElement("div");
    cell.className = i < level ? `seg on-${color}` : "seg";
    bar.appendChild(cell);
  }
});

// Typewriter effect in the hero command line
const commands = [
  "exec_build --hot-reload",
  "scratch run arcade_game.sb3",
  "python gif_creator.py",
  "git push origin hire-me",
];
const typed = document.getElementById("typed");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let line = 0;
let char = commands[0].length;
let deleting = true;

function type() {
  const text = commands[line];
  typed.textContent = text.slice(0, char);

  if (!deleting && char < text.length) {
    char++;
    setTimeout(type, 75);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1600);
  } else if (char > 0) {
    char--;
    setTimeout(type, 30);
  } else {
    deleting = false;
    line = (line + 1) % commands.length;
    setTimeout(type, 350);
  }
}
if (!reduceMotion) setTimeout(type, 2000);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
