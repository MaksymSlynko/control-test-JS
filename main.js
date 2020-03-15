let getSel = x => document.querySelector(x);
let FontSize = document.forms["FontSize"];
let FontFamily = document.forms["FontFamily"];
let FontWeight = document.forms["FontWeight"];
let FontStyle = document.forms["FontStyle"];
getSel(".edit").addEventListener("click", function () {
  getSel("textarea").innerHTML = getSel(".mainblock").innerHTML;
  getSel(".textedit").style.display = "block";
  getSel(".styleedit").style.display = "none";
  getSel(".blockColors").style.display = "none";
});
getSel(".save").addEventListener("click", function () {
  getSel(".mainblock").innerHTML = getSel("textarea").value;
  getSel(".textedit").style.display = "none";
});
getSel(".style").addEventListener("click", function () {
  getSel(".styleedit").style.display = "block";
  getSel(".textedit").style.display = "none";
});
for (let i = 0; i < FontSize.elements.length; i++) {
  FontSize.elements[i].addEventListener("click", function () {
    getSel(".mainblock").style.fontSize = this.value;
  });
}
FontFamily.Font.addEventListener("change", function () {
  getSel(".mainblock").style.fontFamily = this.value;
});
getSel(".color").addEventListener("click", function () {
  getSel(".blockColors").style.display = "flex";
  getSel(".blockBackgroundColors").style.display = "none";
});
for (let i = 0; i < getSel(".blockColors").children.length; i++) {
  getSel(".blockColors").children[i].addEventListener("click", function () {
    getSel(".mainblock").style.color = this.style.backgroundColor;
    getSel(".blockColors").style.display = "none";
  });
}
getSel(".background").addEventListener("click", function () {
  getSel(".blockColors").style.display = "none";
  getSel(".blockBackgroundColors").style.display = "flex";
});
for (let i = 0; i < getSel(".blockBackgroundColors").children.length; i++) {
  getSel(".blockBackgroundColors").children[i].addEventListener(
    "click",
    function () {
      getSel(".mainblock").style.backgroundColor = this.style.backgroundColor;
      getSel(".blockBackgroundColors").style.display = "none";
    }
  );
}
FontWeight.bold.addEventListener("click", function () {
  if (this.checked) getSel(".mainblock").style.fontWeight = this.value;
  else getSel(".mainblock").style.fontWeight = "";
});
FontStyle.italic.addEventListener("click", function () {
  if (this.checked) getSel(".mainblock").style.fontStyle = this.value;
  else getSel(".mainblock").style.fontStyle = "";
});
getSel(".add").addEventListener("click", function () {
  getSel(".firstPage").style.display = "none";
  getSel(".choose").style.display = "block";
});
getSel("#customRadioInline6").addEventListener("click", function () {
  getSel(".table").style.display = "block";
  getSel(".list").style.display = "none";
});
getSel("#customRadioInline7").addEventListener("click", function () {
  getSel(".table").style.display = "none";
  getSel(".list").style.display = "block";
});
getSel('.createTable').addEventListener('click', function () {
  getSel(".choose").style.display = "none";
  getSel('.firstPage').style.display = 'block';
  let countTr = getSel('.countTr').value;
  let countTd = getSel('.countTd').value;
  let table = document.createElement("table");
  for (let i = 0; i < countTr; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < countTd; j++) {
      let td = document.createElement("td");
      let text = document.createTextNode("TD");
      let width = getSel('.widthBorder ').value + 'px'
      let line = getSel('.typeOfBorder ').value
      let color = getSel('.colorOfBorder ').value
      td.appendChild(text);
      tr.appendChild(td);
      td.setAttribute('width', getSel('.widthTd').value)
      td.setAttribute('height', getSel('.heightTd').value)
      td.style.border = `${width} ${line} ${color}`
    }
    table.appendChild(tr);
  }
  getSel('textarea').innerText = getSel(".mainblock").innerHTML + '<table>' + table.innerHTML + '</table>';
})
getSel('.createList').addEventListener('click', function () {
  getSel(".choose").style.display = "none";
  getSel('.firstPage').style.display = 'block';
  let div = document.createElement('div');
  for (let i = 1; i <= getSel('.countLi').value; i++) {
    let li = document.createElement('li');
    let text = document.createTextNode(`Some text ${i}`)
    li.setAttribute('type', getSel('.typeOfMarks').value)
    li.appendChild(text)
    div.appendChild(li)
  }
  getSel('textarea').innerText = getSel(".mainblock").innerHTML + div.innerHTML;
})