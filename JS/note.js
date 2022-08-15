document.getElementById("btn-submit").addEventListener("click", function () {
  const textBox = document.getElementById("text-area");
  const textArea = textBox.value;

  const mainContainer = document.getElementById("container");
  const li = document.createElement("li");
  li.classList.add("text");
  li.innerText = textArea;
  mainContainer.appendChild(li);
  textBox.value = "";
  const texts = document.getElementsByClassName("text");
  for (const text of texts) {
    text.addEventListener("click", function (event) {
      event.target.parentNode.removeChild(event.target);
    });
  }
});
