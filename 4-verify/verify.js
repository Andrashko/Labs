document.forms["form1"].onsubmit = Validate;

function Validate() {
    let inputs = document.getElementsByTagName("input");
    let product_title = inputs[0].value;
    let count = inputs[1].value;
    let price = inputs[2].value;
    let days = inputs[3].value;
    let error_log = "";
    error_log += new RegExp("\"[a-zA-Z]+\"","g").exec(product_title) ? "" : "Title should be between \" \".<br>";
    error_log += parseInt(count)>0 ? "" : "Count should be > 0.<br>";
    error_log += parseInt(price)>0 ? "" : "Price should be > 0.<br>";
    error_log += parseInt(days) >0 ? "" : "Days should be > 0.";

    if (error_log.length == 0) {
        document.write("Correct.")
    } else {
        document.write("Error:<br>"+error_log);
    }
}