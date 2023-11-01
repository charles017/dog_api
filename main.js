async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json;
  createBreedList(data.message);
}

start();

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
    <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected class="text-center">Choose a dog breed</option>
            ${Object.keys(breedList).map(function(breed) {
                return `<option>${breed}</option>` }).join('')};
          </select>
    `;
}
