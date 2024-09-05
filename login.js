const teacherid = document.getElementById("teacherid")
const passwd = document.getElementById("password")
const submitbtn = document.getElementById("submitbtn")

let x = 0;
async function getteacher() {
    let response = await fetch("http://localhost:8000/Teacher")
    const json = await response.json()
    console.log(response)
    console.log(teacherid.value)
    console.log(passwd.value)
    console.log(json.length)
    for(let i =0;i<json.length;i++){
        console.log(json[i])
        if (json[i].teacher_id == teacherid.value) {
            x = 0;
            teacherid.style.borderColor = "white";
            console.log("teacher id Allowed ")
            if (json[i].password == passwd.value) {
                console.log("Allowed")


                window.location.assign("http://127.0.0.1:5500/teacherscreen.html")





            } else {
                passwd.style.borderColor = "red";


                console.log("not Allowed 1")
               


            }

        } else {
            x = 1;

            console.log("not Allowed 2")


        }
        if (x == 1) {
            teacherid.style.borderColor = "red";
        }

    }

}

submitbtn.addEventListener("click", () => {
    getteacher();
    if (x==1) {
        teacherid.style.borderColor = "red";
    }


})

