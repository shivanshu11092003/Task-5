const nextpagebtn = document.getElementById("nextpage")
const studentcard = document.getElementById("student")
nextpagebtn.addEventListener("click",()=>{
    console.log("submit")
    window.location.assign("http://127.0.0.1:5500/index.html")

})
const x = new Date().toJSON().slice(0,10);
console.log(x)
// let date=x.getDate()

// let month=x.getMonth()+1
// let year=x.getFullYear()

// const currentDate=`${year}-${month}-${date}`;

async function getdetails(){
    let response = await fetch(`http://localhost:8000/data?date=${x}`)
    const json = await response.json()
    console.log(response)
    let html = ''
    json[0].attendence.forEach((element,index) => {
        
        if (element.status == "present") {
            html += `  <div class="studentitem" id="studentitem${index}">
        <div class="name">  Name : ${element.name}  </div>
       
        <div class="attendence">   Status:
        <label><input type="checkbox" class="inputcheckbox"  id="checkbox${index}" name="checkbox${index}" value="present" Checked ></label>
        </div>
            
    </div>`
        } else {
            html += `  <div class="studentitem" id="studentitem${index}">
        <div class="name">  Name : ${element.name} </div>
        
        <div class="attendence">   Status:
        <label><input type="checkbox" class="inputcheckbox" id="checkbox${index}" name="checkbox${index}" value="present"></label>
        </div>
    </div>`

        }
       

    })

    studentcard.innerHTML = html

}
getdetails();

document.getElementById("logout").addEventListener("click",()=>{

    if(confirm("Are You Sure?")){
        window.location.assign("http://127.0.0.1:5500/Teacherlogin.html")

    }
})