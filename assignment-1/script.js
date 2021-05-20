var list = [
    {
      sno: null,
      fname: "ashish",
      lName: "basak",
      city: "delhi",
      country: "india",
    },
  ];
  var cols = [];
  
  window.onload = function () {
    //starting point
    constructTable("#table");
  };
  
  function constructTable(selector) {
    // Getting the all column names
    cols = getHeaders(list, selector);
  
    // Traversing the JSON data
    for (var i = 0; i < list.length; i++) {
      var row = $("<tr/>"); //adding each row
      for (var colIndex = 0; colIndex < cols.length; colIndex++) {
        var val = colIndex == 0 ? i + 1 : list[i][cols[colIndex]];
  
        // If there is any key, which is matching
        // with the column name
        if (val == null) val = "";
        row.append($("<td/>").html(val));
      }
  
      // Adding each row to the table
      $(selector).append(row);
    }
  }
  
  function getHeaders(list, selector) {
    var columns = [];
    var header = $("<tr/>");
  
    for (var i = 0; i < list.length; i++) {
      var row = list[i];
  
      for (var heading in row) {
        //checking if heading already in columns
        if ($.inArray(heading, columns) == -1) {
          columns.push(heading);
  
          // Creating the header bu appending all headings
          header.append($("<th/>").html(heading));
        }
      }
    }
  
    // Appending the header to the table
    $(selector).append(header);
    return columns;
  }
  
  function addRowToBottom(selector) {
    list.push({
      sno: null,
      fname: "piyush",
      lName: "dhawan",
      city: "tokyo",
      country: "japan",
    });
    $(selector).empty();
    constructTable(selector);
  }
  
  function addRowToTop(selector) {
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
    $(selector).empty();
    constructTable(selector);
  }
  
  
  
  
  
  
  
