const data = Array.from({ length: 50 }, (_, i) => "Item " + (i + 1));

let page = 1;
const perPage = 5;

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const start = (page - 1) * perPage;
  const end = start + perPage;

  data.slice(start, end).forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById("page").innerText = `Page ${page}`;
}

function next() {
  if (page * perPage < data.length) {
    page++;
    render();
  }
}

function prev() {
  if (page > 1) {
    page--;
    render();
  }
}

render();
