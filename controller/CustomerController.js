function loadAllCustomers(){
$("tblCustomer").empty();
    for (var i of customerDB){
        let row = `<tr><td>${i.getCustomerID()}</td><td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td><td>${i.getCustomerSalary()}</td></tr>`;
        $("#tblCustomer").append(row);
        $("#tblCustomer>tr").click(function () {
            $('#inputSearchCus').val($(this).children(":eq(0)").text())

            $('#inputUId').val($(this).children(":eq(0)").text())
            $('#inputUCustomerName').val($(this).children(":eq(1)").text())
            $('#inputUAddress').val($(this).children(":eq(2)").text())
            $('#inputUSalary').val($(this).children(":eq(3)").text())
        })
    }
}

function saveCustomer() {
    var id = $("#txtCusID").val();
    var name = $("#txtCusName").val();
    var address = $("#txtCusAddress").val();
    var salary = $("#txtCusSalary").val();

    customerDB.push(new CustomerDTO(id, name, address, salary));

}