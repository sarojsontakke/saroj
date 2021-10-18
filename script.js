var selectedRow=null;

function onFormSubmit(){
    var formData=readFormData();
     
  if(selectedRow==null){
     insertNewRecord(formData);
  }
    else{

    }
}

function readFormData(){
    var formData={};
    formData["Name"]=document.getElementById("Name").ariaValueMax;
    formData["Email"]=document.getElementById("Email").ariaValueMax;
    formData["Phone"]=document.getElementById("Phone").ariaValueMax;
    formData["Age"]=document.getElementById("age").ariaValueMax;
    formData["Gender"]=document.getElementById("gender").ariaValueMax;
    formData["Photo"]=document.getElementById("photo").ariaValueMax;
    formData["Address"]=document.getElementById("address").ariaValueMax;
    return formData;
}
function insertNewRecord(data){
    var table=document.getElementById("registerform").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1= newRow.insertCell(0);
        cell1.innerHTML=data.Name;
    var cell2= newRow.insertCell(1);
        cell2.innerHTML=data.Name;
    var cell3= newRow.insertCell(2);
        cell3.innerHTML=data.Name;
    var cell4= newRow.insertCell(3);
        cell4.innerHTML=data.Name;
    var cell5= newRow.insertCell(4);
        cell5.innerHTML=data.Name;
    var cell6= newRow.insertCell(5);
        cell6.innerHTML=data.Name;
    var cell7= newRow.insertCell(6);
    cell7.innerHTML=data.Name;
    cell7.innerHTML='<button>Edit</button>'
}
function restForm(){
    document.getElementsById("Name").value;
    document.getElementsById("Email").value;
    document.getElementsById("Phone").value;
    document.getElementsById("Age").value;
    document.getElementsById("Gender").value;
    document.getElementsById("Photo").value;
    document.getElementsById("Address").value;
    var selectedRow=null
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementsById("Name").value=selectedRow.cell[0].innerHTML;
    document.getElementsById("Email").value=selectedRow.cell[1].innerHTML;
    document.getElementsById("Phone").value=selectedRow.cell[2].innerHTML;
    document.getElementsById("Age").value=selectedRow.cell[3].innerHTML;
    document.getElementsById("Gender").value=selectedRow.cell[4].innerHTML;
    document.getElementsById("Photo").value=selectedRow.cell[5].innerHTML;
    document.getElementsById("Address").value=selectedRow.cell[6].innerHTML;
}
function updateRecord(formData){
    selectedRow.cell[0].innerHTML=formData.Name;
    selectedRow.cell[1].innerHTML=formData.Email;
    selectedRow.cell[2].innerHTML=formData.Phone;
    selectedRow.cell[3].innerHTML=formData.Age;
    selectedRow.cell[4].innerHTML=formData.Gender;
    selectedRow.cell[5].innerHTML=formData.Photo;
    selectedRow.cell[6].innerHTML=formData.Address;
    

}
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementsById("RegistrationList").deleteRow(row.rowIndex);
        
    }

}

function restForm(){
    document.getElementsById("Name").value="";
    document.getElementsById("Email").value="";
    document.getElementsById("Phone").value="";
    document.getElementsById("Age").value="";
    document.getElementsById("Gender").value="";
    document.getElementsById("Photo").value="";
    document.getElementsById("Address").value="";

}