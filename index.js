let menu = document.getElementById("menu");
fetch("./data.json")
  .then((response) => response.json())
  .then((datas) => {
    console.log(datas);
    for (i = 0; i < datas.length; i++) {
      let list = document.createElement("div");
      menu.appendChild(list);
      list.innerHTML = `<div id="list" class="${datas[i].option}"> <div>${
        i + 1
      }. ${datas[i].name}</div> <div>${
        datas[i].price
      } <img src="screenshot/tl.png" width="15px"/></div> </div>`;
    }
    $(function () {
      $(".btn-1").click(function () {
        $(".soup").show();
        $(".kebap").hide();
        $(".wait").hide();
        $(".dessert").hide();
        $(".drink").hide();
      });
    });
    $(function () {
      $(".btn-2").click(function () {
        $(".wait").show();
        $(".kebap").hide();
        $(".soup").hide();
        $(".dessert").hide();
        $(".drink").hide();
      });
    });
    $(function () {
      $(".btn-3").click(function () {
        $(".kebap").show();
        $(".soup").hide();
        $(".wait").hide();
        $(".dessert").hide();
        $(".drink").hide();
      });
    });
    $(function () {
      $(".btn-4").click(function () {
        $(".dessert").show();
        $(".kebap").hide();
        $(".wait").hide();
        $(".soup").hide();
        $(".drink").hide();
      });
    });
    $(function () {
      $(".btn-5").click(function () {
        $(".drink").show();
        $(".kebap").hide();
        $(".wait").hide();
        $(".dessert").hide();
        $(".soup").hide();
      });
    });
    $(function () {
      $(".btn-6").click(function () {
        $(".drink").show();
        $(".kebap").show();
        $(".wait").show();
        $(".dessert").show();
        $(".soup").show();
      });
    });
  });
