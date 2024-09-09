const students = [
  {name:"shyamendra",class: "10th",marks:"85", city:"jaipur"},
  {name:"shyam",class: "11th",marks:"80", city:"kanpur"},
  {name:"aastha",class: "10th",marks:"85", city:"mumbai"},
  {name:"shreekant",class: "12th",marks:"75", city:"delhi"},
  {name:"Raj",class: "12th",marks:"95", city:"patna"},
  {name:"mrinal",class: "11th",marks:"90", city:"noida"},
  {name:"aakash",class: "10th",marks:"80", city:"agra"},
  {name:"tushar",class: "11th",marks:"95", city:"meruth"},
  {name:"shivam",class: "12th",marks:"65", city:"gurugram"},
  {name:"zaid",class: "10th",marks:"80", city:"gaziyabad"},
  {name:"simran",class: "11th",marks:"80", city:"bhopal"},
  {name:"sonali",class: "12th",marks:"95", city:"Jaipur"},
  {name:"urvashi",class: "11th",marks:"85", city:"mumbai"},
  {name:"shweta",class: "12th",marks:"75", city:"pune"},
  {name:"himakansha",class: "10th",marks:"80", city:"Jaipur"},
  {name:"shyamendra",class: "10th",marks:"85", city:"Jaipur"}
]
const list= document.querySelector('.list');
let newArray;
const input = document.querySelector('#input-text');
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
   list.innerHTML = ""
  newArray = students.filter(curvalue => {
    if (curvalue.name.startsWith(input.value)) {
      return students;
    }
  });

  if (newArray.length > 0) {
   originalData(newArray);   

  }
});

function originalData(students){
  list.innerHTML ="";
  students.map((curvalue) => {
      console.log(curvalue.name);
      let ul = document.createElement("ul") ;
      ul.classList.add('style-list');
      ul.innerHTML = `<li>Student Name: ${curvalue.name}</li><li> Marks: ${curvalue.marks}</li><li>Class: ${curvalue.class}</li><li> City: ${curvalue.city}</li>`;
      list.appendChild(ul);      
     });
}
originalData(students);