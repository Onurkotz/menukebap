let menu = document.getElementById("menu");

fetch("./data.json")
  .then((response) => response.json())
  .then((datas) => {
    console.log(datas);

    for (i = 0; i < datas.length; i++) {
      let list = document.createElement("div");

      menu.appendChild(list);

      list.innerHTML = `<div id="list">
        <div>${datas[i].name}</div>
        <div>${datas[i].price}</div>
      </div>`;
    }
  });
