
const email = localStorage.getItem("userEmail") || "guest@gmail.com";

document.getElementById("userEmail").innerText = email;


document.getElementById("userName").innerText = email.split("@")[0];
function toggleMenu(){
  document.querySelector(".sidebar").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("show");
}

document.querySelector(".overlay").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.remove("active");
  this.classList.remove("show");
});

new Chart(document.getElementById("lineChart"),{
  type:'line',
  data:{
    labels:["Mon","Tue","Wed","Thu","Fri"],
    datasets:[{
      data:[3,5,2,8,6],
      borderColor:"#7c3aed",
      fill:false
    }]
  }
});

new Chart(document.getElementById("pieChart"),{
  type:'doughnut',
  data:{
    labels:["Completed","Pending","Progress"],
    datasets:[{
      data:[50,20,30],
      backgroundColor:["green","red","orange"]
    }]
  }
});