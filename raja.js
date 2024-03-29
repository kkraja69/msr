/*the following code checkes whether the entered userid and password are matching*/
function check(form) { 
  if(form.useru.value == "user@gmail.com" && form.userp.value == "123456") {
      window.location.href = "curd.html";
  }
  else {
      alert("Error in Password or Username")/*displays error message*/
  }
}

/* Redirect to  registration page*/
function myRegistration() {
    location.replace("registration.html")
  }
  /* After Registration successfully Redirect to indexpag*/
  function myHome() {
    location.replace("index.html")
  }

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["studentId"] = document.getElementById("studentid").value;
    formData["fullName"] = document.getElementById("fullname").value;
    formData["Email"] = document.getElementById("email").value;
    formData["Class"] = document.getElementById("class").value;
    formData["Year"] = document.getElementById("year").value;
    formData["City"] = document.getElementById("city").value;
    formData["Country"] = document.getElementById("country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Class;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Year;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.City;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Country;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("StudentId").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Class").value = "";
    document.getElementById("Year").value = "";
    document.getElementById("City").value = "";
    document.getElementById("Country").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fullname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("class").value = selectedRow.cells[3].innerHTML;
    document.getElementById("year").value = selectedRow.cells[4].innerHTML;
    document.getElementById("city").value = selectedRow.cells[5].innerHTML;
    document.getElementById("country").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentId;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.Class;
    selectedRow.cells[4].innerHTML = formData.Year;
    selectedRow.cells[5].innerHTML = formData.City;
    selectedRow.cells[6].innerHTML = formData.Country;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
  isValid = true;
  if (document.getElementById("fullname").value == "") {
      isValid = false;
      document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
          document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}

