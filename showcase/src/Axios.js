const axios = require('axios')

const fetchData = async (minAge, maxAge, bpDiff) => {
  let patientArray = []

     await axios.get(`https://jsonmock.hackerrank.com/api/medical_records?page=1`)
    .then((res) => res.data)
    .then(page1 => {
      return page1.data.map(patient => patient.name)}) //arr of all names
    .then(arrOfNames => {
      arrOfNames.forEach(name => patientArray.push(name))
    })


    return patientArray;
}

fetchData(25, 35, 64)









        // let dateOfVisit = new Date(onePatient.timestamp)
        // let monthOfVisit = dateOfVisit.getMonth()
        // let dayOfVisit = dateOfVisit.getDay()
        // let yearOfVisit = dateOfVisit.getFullYear()
        // let userDobArray = onePatient.userDob.split('-')
        // let userYearofBirth = Number(userDobArray[2])
        // let userMonthOfBirth = Number(userDobArray[1])
        // let userDayOfBirth = Number(userDobArray[0])
        // let yearAge = yearOfVisit - userYearofBirth
        // let month = monthOfVisit - userMonthOfBirth
        // if(month < 0 || (month === 0 && dayOfVisit < userDayOfBirth )){
        //   yearAge = yearAge - 1
        // }
        // let bpNums = onePatient.vitals.bloodPressureDiastole - onePatient.vitals.bloodPressureSystole
        // if((bpNums === bpDiff) && (yearAge > minAge) && (yearAge < maxAge)){
        //    return onePatient.id
        // }
