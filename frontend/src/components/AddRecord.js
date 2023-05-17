import {React,useState} from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download';

export default function AddRecord() {
  //defining variables
  const [name,setName] = useState("")
  const [degreeType,setDegreeType] = useState("")
  const [program,setProgram] = useState("")
  const [rollnumber,setRollnumber] = useState("")

  // handleSubmit method
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit caleld")
    console.log(name,degreeType,program,rollnumber)

    const formData = {
      name: name,
      degree: degreeType,
      program: program,
      rollnumber: rollnumber,
      // cnic:cnic,
      // address:address,
      // batch:batch,
    };
    const registerResponse = await axios.post('http://localhost:8000/register', formData);

    let response = await axios.post("http://localhost:8000/generatePDF", { username: name, degree: degreeType, program, rollnumber:rollnumber}, {
        responseType: 'blob'
    });
    console.log(response.data);
    var fileName = rollnumber + ".pdf"
    fileDownload(response.data, fileName)
    // e.preventDefault();
}


  return (
    <>

<section className='form'>
<form action="http://localhost:8000/register" method="post" onSubmit={handleSubmit}>
<h2>Registration</h2>
<div className="form-group">
    <div class="input-box">
      <label for="name">Full Name</label>
        <input type="text" placeholder="Enter First Name" name="name" required="" onChange={(e) => setName(e.target.value)}/>
    </div>
    {/* <div class="input-box">
      <label for="LastName">Last Name</label>
        <input type="text" placeholder="Enter Last Name" name="LastName" required=""/>
    </div> */}
    <label for="gender-title">Gender</label>
  <div class="gender-category">
    <label for="male">
      Male</label>
      <input type="radio" name="gender" id="male" value="male" />
    <label for="female">Female</label>
      <input type="radio" name="gender" id="female" value="female"/>
  </div>

    <div class="input-box">
      <label for="cnic">CNIC</label>
        <input type="text" placeholder="CNIC i.e 12345-1234563-2" name="cnic" pattern="^\d{5}-\d{7}-\d{1}$" />
    </div>
    <div class="input-box">
      <label for="email">Email</label>
        <input type="email" placeholder="Enter Email Address" name="email" required=""/>
    </div>
    <div class="input-box">
      <label for="PhoneNumber">Phone No.</label>
        <input type="tel" placeholder="PhoneNo. i.e 03000000000" name="PhoneNumber" pattern="[0-9]{11}" required=""/>
    </div>

    <div class="input-box">
      <label for="nationality">Nationality</label>
        <input type="text" placeholder="Enter Your Nationality" name="nationality" required=""/>
    </div>

    <div class="input-box">
      <label for="address">Address</label>
        <textarea id="address" name="address" rows="4" cols="60"  required=""></textarea>
    </div>
    <div class="input-box">
        <label for="rollnumber">Roll Number:</label>
        <input type="text" placeholder="Roll Number i.e (17k-1234)" name="rollnumber" pattern="^\d{2}[Kk]-\d{4}$" required="" onChange={(e) => setRollnumber(e.target.value)}/>
    </div>

    <div class="input-box">
      <label for="campus">Campus</label>
        <input type="text" placeholder="Enter Your Campus" name="campus" required=""/>
    </div>
    <div class="input-box">
      <label for="credits">Credentials Completed</label>
      <input type="number" id="credits" name="Credentials" min="0" max="130"/>

        {/* <script>
          var creditsInput = document.getElementById("credits");
          creditsInput.addEventListener("input", function() {
            if (creditsInput.value > 130) {
              creditsInput.value = 130;
            }
          });
        </script> */}
    </div>
    <div class="input-box">
      <label for="cgpa">CGPA</label>
      <input type="number" step="0.01" id="cgpa" name="cgpa" min="2.00" max="4.00"/>
        {/* <script>
        var cgpaInput = document.getElementById("cgpa");
        cgpaInput.addEventListener("input", function() {
          if (cgpaInput.value < 2.00) {
            cgpaInput.value = 2.00;
          } else if (cgpaInput.value > 4.00) {
            cgpaInput.value = 4.00;
          }
        });
        </script> */}
    </div>


        <div class="input-box">
          <label for="degree">Degree Type</label>
          <select id="degree" name="degree" required="" onChange={(e) => setDegreeType(e.target.value)}>
             <option value="" disabled="" selected="">Select your degree</option>
             <option value="BS">BS</option>
             <option value="MS">MS</option>
           </select>
        </div>
        <div class="input-box">
          <label for="major">Major</label>
          <select id="major" name="program" value={program} required="" onChange={(e) => setProgram(e.target.value)}>
             <option value="" disabled="" selected="">Select your major</option>
             <option value="Computer Science">Computer Science</option>
             <option value="cyber security">Cyber security</option>
             <option value="Artificial Intelligence">Artificial Intelligence</option>
             <option value="Software Engineering">Software Engineering</option>
           </select>
        </div>
        <div class="input-box">
          <label for="batch">Batch</label>
            <select id="year" name="batch">
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              </select>
        </div>
    <div class="input-box">
      <label for="Gyear">Graduation Year</label>
      <select id="Gyear" name="year"><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option></select>
      {/* <script>

        var currentYear = new Date().getFullYear();
        var startYear = currentYear - 30;
        var yearSelect = document.getElementById("Gyear");
        for (var Gyear = currentYear; Gyear >= startYear; Gyear--) {
          var option = document.createElement("option");
          option.value = Gyear;
          option.text = Gyear;
          yearSelect.add(option);
        }
      </script> */}
    </div>
    <div class="button-container">
      <button type="Submit" className='btn btn-block' onSubmit={handleSubmit}>Register</button>

    </div>
  </div>
</form>
</section>





    
    </>
  )
}
