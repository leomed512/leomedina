function sendMail() {
    let nameC = document.getElementById("nameInput").value;
    let emailC = document.getElementById("emailInput").value;
    let messageC = document.getElementById("messageInput").value;
    let subjectC = document.getElementById("subjectId").value;
    if (nameC == "" || emailC == "" || messageC == "" || subjectC == "") {
        alert("No se puede enviar un mensaje vacío!")
    } else {
        let params = {
            name: nameC,
            email: emailC,
            message: messageC,
            subject: subjectC
        }

        const serviceID = "portfolio_lm";
        const templateID = "porfolio_lm";

        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    document.getElementById("nameInput").value = "";
                    document.getElementById("emailInput").value = "";
                    document.getElementById("messageInput").value = "";
                    document.getElementById("subjectId").value = "";
                    alert("Tu mensaje ha sido enviado!")
                }
            )
            .catch((err) => {
                console.log(err);
                alert("Algo ha salido mal durante el envío de su mensaje, por favor intente de nuevo.")
            });
    }
}
