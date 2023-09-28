var exerciceContainer = document.querySelectorAll('.exercice');
console.log('la liste dexo est', exerciceContainer);

function fetchAndProcessData(index) {
  if (index >= exerciceContainer.length) {
    return; // Stop when all elements have been processed
  }

  var id = exerciceContainer[index].id;
  var url = `https://docs.google.com/spreadsheets/d/1ummMvclKId79oW1X3d-xLDB5oz6N19fAQHHEqfy8HN4/gviz/tq?tq=select%20A%20where%20B%20%3D%20${id}`;
  var conteneur = exerciceContainer[index];
  console.log('le conteneur est :', conteneur);

  ////////////GET THE HTML TO INJECT///
  fetch(url)
    .then(res => res.text())
    .then(rep => {
      // Remove additional text and extract only JSON:
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colz = [];
      var data = [];
      const tr = document.createElement('tr');
      // Extract column labels
      jsonData.table.cols.forEach((heading) => {
        if (heading.label) {
          let column = heading.label;
          colz.push(column);
          const th = document.createElement('th');
          th.innerText = column;
          tr.appendChild(th);
        }
      })
      //extract row data:
      jsonData.table.rows.forEach((rowData) => {
        const row = {};
        colz.forEach((ele, ind) => {
          row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
        })
        data.push(row);
      })
      processRows(data);
      console.log(data[0].content);
      console.log(conteneur);
  
    
      conteneur.innerHTML = `
 
<div class="fake-embed">

 ${data[0].content}
</div>

`;

      // Continue with the next element
      fetchAndProcessData(index + 1);
    })
}

// Start processing from the first element
fetchAndProcessData(0);






function processRows(json) {
  json.forEach((row) => {
    const tr = document.createElement('tr');
    const keys = Object.keys(row);

    keys.forEach((key) => {
      const td = document.createElement('td');
      td.textContent = row[key];
      tr.appendChild(td);
    })
    //  output.appendChild(tr);
  })
}
