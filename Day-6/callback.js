function submitForm(submit,db) {
    var [dbName,comment] = db()
    console.log("DB name is",dbName,comment)
    console.log(submit)
}
function dataBase() {
    dbName = "SECE"
    return [dbName,"Data Stored Sucessfully"]
}
submitForm(Form("Form Submitted Sucessfully",dataBase))