let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "This is a poemy poem",
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}
