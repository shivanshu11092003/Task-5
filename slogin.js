const teacherid = document.getElementById("sid")
const passwd = document.getElementById("password")
const submitbtn = document.getElementById("submitbtn")
let x = 0;
async function getteacher() {
    let response = await fetch("http://localhost:8000/student")
    const json = await response.json()
    console.log(response)
    console.log(teacherid.value)
    console.log(passwd.value)
    if(json.some(element => element.student_id == teacherid.value)){
        teacherid.style.borderColor = "white";
        msg.innerHTML = ``
        json.forEach(element =>{
            if(element.student_id == teacherid.value){
                if(element.password == passwd.value){
                    msg.innerHTML = ``
                    window.location.assign("http://127.0.0.1:5500/studentdetails/stdetails.html")

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


//     for(let i =0;i<json.length;i++){
//         console.log(json[i])
//         if (json[i].student_id == teacherid.value) {
//             x = 0;
//             teacherid.style.borderColor = "white";
//             console.log("teacher id Allowed ")
//             if (json[i].password == passwd.value) {
//                 console.log("Allowed")
//                 sessionStorage.setItem("sid",teacherid.value)
//                 sessionStorage.setItem("passwd",passwd.value)


//                 window.location.assign("http://127.0.0.1:5500/studentdetails/stdetails.html")


//             } else {
//                 passwd.style.borderColor = "red";
//                 msg.innerHTML = `<p>Wrong Password<p>`


//                 console.log("not Allowed 1")
               


//             }

//         } else {
//             x = 1;

//             console.log("not Allowed 2")
            

//         }
//         if (x == 1) {
//             teacherid.style.borderColor = "red";
//         }

//     }

}

submitbtn.addEventListener("click", () => {
    getteacher();
})
document.getElementById("asteacher").addEventListener("click",()=>{
    window.location.assign("http://127.0.0.1:5500/Teacherlogin.html")


})

/* .from
   .at
   .fromasync
   .isArray
   .of
   .concat
   .copywithin
   .entries - return array iterable  iterator object 
   .every - boolean 
   .fill - value start end 
   .filter - copy callbackfn
   .find - return first element that satifes the condition
   .findIndex - return index of element that passes the condition
   .findlast -
   .findlastindex-
   .flat - return array from subarray

    */