const studentcard = document.getElementById("student")
const datecard = document.getElementById("date")
const inputdate = document.getElementById("selectdate")
const addAttendence = document.getElementById("addAttendence")
let date = []

const dateinput = inputdate.value


addAttendence.addEventListener("click", async () => {
    const dateinput = inputdate.value
    localStorage.setItem("InputDate",dateinput)
    
    let response = await fetch(`http://localhost:8000/data?date=${dateinput}`)
    const json = await response.json()
    const id = json.length;
    console.log(dateinput)

    const currentdata = await fetch("http://localhost:8000/data")
    const json2 = await currentdata.json();
    const id2 = json2.length

    if (id == 0) {
        const adddate = await fetch("http://localhost:8000/data",
            {
                method: `POST`,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "id": `${id2}`,
                    "date": `${dateinput}`,
                    "attendence": [{
                        "student_id": "123",
                        "name": "John Smith",
                        "status": "absent"
                    },
                    {
                        "student_id": "456",
                        "name": "Jane Doe",
                        "status": "absent"
                    },
                    {
                        "student_id": "789",
                        "name": "Bob Johnson",
                        "status": "absent"
                    },
                    {
                        "student_id": "00001",
                        "name": "Alice Smith",
                        "status": "absent"
                    },
                    {
                        "student_id": "00002",
                        "name": "Bob Johnson",
                        "status": "absent"
                    },
                    {
                        "student_id": "00041",
                        "name": "Owen Parker",
                        "status": "absent"
                    },
                    {
                        "student_id": "00042",
                        "name": "Paige Evans",
                        "status": "absent"
                    },
                    {
                        "student_id": "00043",
                        "name": "Quinn Edwards",
                        "status": "absent"
                    },
                    {
                        "student_id": "00044",
                        "name": "Riley Collins",
                        "status": "absent"
                    }]
                })
            }

        )

    }
    getdata(dateinput);


})

// async function getdata() {
//     try {
//         let response = await fetch("http://localhost:8000/data")
//         const json = await response.json()
//         console.log(json);


//         let html = ''

//         date.forEach((element, index) => {

//             html += `<button class="dateitem" id=${index} onclick="getstudent(this.id)">${element}</button>`


//         })
//         datecard.innerHTML = html


//     } catch (e) {
//         console.log(e);
//     }


// }
// getdata();
async function getdata(dateinput) {


        let response = await fetch(`http://localhost:8000/data?date=${dateinput}`)
        const json = await response.json()
        let html = ''
        const passid=json[0].id
        

        json[0].attendence.forEach((element,index) => {
        
            if (element.status == "present") {
                html += `  <div class="studentitem" id="studentitem${index}">
            <div class="name">  Name : ${element.name}  </div>
            <div class="id">    Id:${element.student_id}  </div>
            <div class="attendence">   Status:
            <label><input type="checkbox" class="inputcheckbox"  id="checkbox${index}}" name="checkbox${index}}" value="present" Checked></label>
            </div>
                
        </div>`
            } else {
                html += `  <div class="studentitem" id="studentitem${index}">
            <div class="name">  Name : ${element.name} </div>
            <div class="id">    Id:${element.student_id}  </div>
            <div class="attendence">   Status:
            <label><input type="checkbox" class="inputcheckbox" id="checkbox${index}    " name="checkbox${index}}" value="present"></label>
            </div>
        </div>`

            }
           

        })

        studentcard.innerHTML = html + `<button id="${passid}" class="submitbtn" onclick="submitAttendence(this.id)" >Submit</button>`

}
const localdate=localStorage.getItem("InputDate")
inputdate.value = localdate
getdata(localdate);


async function submitAttendence(id) {
    const page = id
    let attendancMarkedArray = []
    console.log(studentcard.querySelectorAll("input"))

    const checkboxarray = studentcard.querySelectorAll("input")
    checkboxarray.forEach(element => {
        if (element.checked == true) {
            attendancMarkedArray.push("present")

        } else {
            attendancMarkedArray.push("absent")
        }
    })
    console.log(attendancMarkedArray)
    console.log(page)

    url = `http://localhost:8000/data?id=${page}`
    console.log(url)
    let response = await fetch(url)
    let json = await response.json()
    let updatebody = {}

    json[0].attendence.forEach((element,index)=>{
        element.status=attendancMarkedArray[index]
    })
    updatebody=json[0]
    console.log(updatebody)


    // // json.forEach((newelement) => {
    // //     updatebody = newelement
    // //     console.log(updatebody)

    // //     // for (let i = 0; i < updatebody.attendance.length; i++) {
    // //     //     updatebody.attendance[i].status = attendancMarkedArray[i]

    // //     // }

    // //     console.log(updatebody.attendance)


    // // })
    //PUT
    const updateresponse = await fetch(`http://localhost:8000/data/${page}`, {
        method: `PUT`,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(updatebody)

    });
    console.log(await updateresponse.json)
    window.location.assign("http://127.0.0.1:5500/teacherscreen.html    ")



    attendancMarkedArray = []
    updatebody=[]
    checkboxarray=[]

}



