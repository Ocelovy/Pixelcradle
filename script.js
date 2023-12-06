let selectedRow = null;

function onFormSubmit() {
    event.preventDefault();
    const formData = readFormData();
    if(selectedRow === null && validateInsertData(formData)) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    const formData = {};
    formData["Comment"] = document.getElementById("Comment").value;
    formData["idComment"] = document.getElementById("idComment").value;
    formData["Nickname"] = document.getElementById("Nickname").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Comment;
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idComment;
    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Nickname;
    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<button onClick=onEdit(this)>Editovať</button> <button onClick=onDelete(this)>Vymazať</button>';
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Comment').value = selectedRow.cells[0].innerHTML;
    document.getElementById('idComment').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Nickname').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    if (validateInsertData(formData)) {
    selectedRow.cells[0].innerHTML = formData.Comment;
    selectedRow.cells[1].innerHTML = formData.idComment;
    selectedRow.cells[2].innerHTML = formData.Nickname;
    selectedRow = null;
    } else {
        alert("Musíte vyplniť všetky údaje !");
    }
}

function onDelete(td) {
    let row;
    if (confirm("Chceš vážne vymazať tento záznam ?")) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    document.getElementById("Comment").value = "";
    document.getElementById("idComment").value = "";
    document.getElementById("Nickname").value = "";
}

function validateInsertData(data) {
    return !(!data.Comment || !data.idComment || !data.Nickname);
}

/*function isIdCommentUnique(newFormData) {
    var table = document.getElementById("storeList");
    for (var i = 1; i < table.rows.length; i++) {
        var existingIdComment = table.rows[i].cells[1].innerHTML;
        if (existingIdComment.toString() === newFormData.cells[1].innerHTML) {
            alert("ID musí byť unikátne!");
            return false;
        }
    }
    return true;
}*/