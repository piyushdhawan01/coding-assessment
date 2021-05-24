var list = [
    {
      sno: null,
      fname: "Samarth",
      lName: "Dhawan",
      city: "Delhi",
      country: "India",
    },
    {
      sno: null,
      fname: "Vatsal",
      lName: "Garg",
      city: "Washington",
      country: "USA",
    },
    {
      sno: null,
      fname: "Sapna",
      lName: "Biswas",
      city: "Kolkata",
      country: "India",
    },
    {
      sno: null,
      fname: "Amitabh",
      lName: "Bacchan",
      city: "Kathmandu",
      country: "Nepal",
    },
    {
      sno: null,
      fname: "Sameer",
      lName: "Rana",
      city: "Jakarta",
      country: "Indonesia",
    },
  ];
  var cols = [];
  
  var table = document.getElementById("table");
  
  window.onload = function () {
    // Getting the all column names
    cols = getHeaders();
    constructTable();
  };
  
  function constructTable() {
    // Traversing the JSON data
    for (var i = 0; i < list.length; i++) {
      var row = document.createElement("tr"); //adding each row
      for (var colIndex = 0; colIndex < cols.length; colIndex++) {
        var val = colIndex == 0 ? i + 1 : list[i][cols[colIndex]];
  
        // If there is any key, which is matching
        // with the column name
        if (val == null) val = "";
        var td = document.createElement("td");
        td.innerHTML = val;
        row.appendChild(td);
      }
      // Adding each row to the table
      table.appendChild(row);
    }
  }
  
  function getHeaders() {
    var columns = [];
  
    var header = document.createElement("tr");
  
    for (var i = 0; i < list.length; i++) {
      var row = list[i];
  
      for (var heading in row) {
        //checking if heading already in columns
        if (!columns.includes(heading)) {
          columns.push(heading);
          // Creating the header bu appending all headings
          var th = document.createElement("th");
          th.innerHTML = heading;
          header.appendChild(th);
        }
      }
    }
    // Appending the header to the table
    table.appendChild(header);
    return columns;
  }
  
  function addRowToBottom() {
    list.push({
      sno: null,
      fname: "piyush",
      lName: "dhawan",
      city: "tokyo",
      country: "japan",
    });
    resetTable();
    constructTable();
  }
  
  function addRowToTop() {
    var newList = [];
    newList.push({
      sno: null,
      fname: "piyush",
      lName: "dhawan",
      city: "tokyo",
      country: "japan",
    });
  
    list.forEach((row) => newList.push(row));
    list = newList;
    resetTable();
    constructTable();
  }
  
  function resetTable() {
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  }
  