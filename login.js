const teacherid = document.getElementById("teacherid")
const passwd = document.getElementById("password")
const submitbtn = document.getElementById("submitbtn")
const box1 = document.getElementById("box1")
const msg = document.getElementById("msg")

let x = 0;
async function getteacher() {
    let response = await fetch("http://localhost:8000/Teacher")
    const json = await response.json()
    console.log(json)

    console.log(teacherid.value)
    console.log(passwd.value)
    console.log(json.length)
    
    if(json.some(element => element.teacher_id == teacherid.value)){
        teacherid.style.borderColor = "white";
        msg.innerHTML = ``
        json.forEach(element =>{
            if(element.teacher_id == teacherid.value){
                if(element.password == passwd.value){
                    msg.innerHTML = ``
                    window.location.assign("http://127.0.0.1:5500/teacherscreen.html")

                }else{
                    passwd.style.borderColor = "red";
                    msg.innerHTML = `<p>Wrong Password<p>`
                }
            }
        })
        
    }else{
        teacherid.style.borderColor = "red";
        msg.innerHTML = `<p>Wrong Id<p>`


    }

    // for(let i =0;i<json.length;i++){
    //     console.log(json[i])
    //     if (json[i].teacher_id == teacherid.value) {
    //         x = 0;
    //         teacherid.style.borderColor = "white";
    //         msg.innerHTML = ``
    //         console.log("teacher id Allowed ")
    //         if (json[i].password == passwd.value) {
    //             console.log("Allowed")


    //             window.location.assign("http://127.0.0.1:5500/teacherscreen.html")


    //         } else {
    //             passwd.style.borderColor = "red";
    //             console.log("not Allowed 1")
    //             msg.innerHTML = `<p>Wrong Password<p>`
    //         }

    //     } else {
    //         x = 1;
            


    //         console.log("not Allowed 2")


    //     }
    //     if (x == 1) {
    //         teacherid.style.borderColor = "red";
            
    //     }

    // }

}

submitbtn.addEventListener("click", () => {
    getteacher();
})
document.getElementById("asStudent").addEventListener("click",()=>{
    window.location.assign("http://127.0.0.1:5500/Studentlogin.html")


})
