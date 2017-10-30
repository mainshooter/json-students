function getJSON() {
  let ajaxResult = Ajax.get_withCallback('students.json');
  ajaxResult = ajaxResult.responseText;

  ajaxResult = JSON.parse(ajaxResult);
  return(ajaxResult);
}

(function() {
  let students = getJSON();
  students = students.students;

  let htmlResult = '';
  htmlResult = '<table><tr><th>Name</th><th>Age</th></tr>';
  students.forEach(function(row, index, array) {
    htmlResult += '<tr>';
      htmlResult += '<td>' + row.Name + '</td>';
      htmlResult += '<td>' + row.Age + '</td>';
    htmlResult += '</tr>';
  });
  htmlResult += '</table>';
  select("#result").innerHTML = htmlResult;
})();
