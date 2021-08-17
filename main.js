const nameInput = document.querySelector("#name"),
  ageInput = document.querySelector("#age"),
  locateInput = document.querySelector("#locate"),
  addBtn = document.querySelector(".btn"),
  rowl = document.querySelector("#myRow");
addBtn.addEventListener("click", function () {
  let data = {
    name: nameInput.value,
    age: Number(ageInput.value),
    locate: locateInput.value,
  };
  if (data.name === "" || data.age === "" || data.locate === "") {
    alert("inputlarni to`ldiring");
  } else {
    rowl.innerHTML +=
      ' <div class="col-md-2 mt-2"><div class="card"><div class="card-header"><img src="./media/user.jpg" width="100%" alt="" /></div><div class="card-body text-center"> <h5>' +
      data.name +
      "</h5> <h5>" +
      data.age +
      "</h5> <h5>" +
      data.locate +
      "</h5></div>";
  }
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = null;
  document.querySelector("#locate").value = "";
});
