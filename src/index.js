function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d84fo7b1165495bfa04e4513f7c437tf";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include the HTML notation nor a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
