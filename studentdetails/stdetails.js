const studentcard = document.getElementById("student")

async function getdetails(){
    let response = await fetch("http://localhost:8000/data")

    const json = await response.json()
    console.log(json)
    let html = ''
    json.forEach(element => {
        console.log(element.date)

        element.attendence.forEach(ele =>{
            let sid = sessionStorage.getItem("sid")
            if(ele.student_id == sid){
    
                if (ele.status == "present") {
                    html += `  <div class="studentitem" id="studentitem">
                    <div class="name">  Date : ${element.date}  </div>
                    <div class="id">     </div>
                    <div class="attendence">   Status:
                    <label><input type="checkbox" class="inputcheckbox"  id="checkbox}" name="checkbox}" value="present" Checked></label>
                    </div>
                        
                </div>`
                } else {
                    html += `  <div class="studentitem" id="studentitem">
                    <div class="name">  Date : ${element.date} </div>
                    <div class="id">  </div>
                    <div class="attendence">   Status:
                    <label><input type="checkbox" class="inputcheckbox" id="checkbox" name="checkbox}" value="present"></label>
                    </div>
                </div>`
        
                }
                studentcard.innerHTML = html
            }

        })
       
              
    });
    
}
getdetails()