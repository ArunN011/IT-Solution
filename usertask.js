
function toggleMenu(){
  document.querySelector(".sidebar").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("show");
}

document.querySelector(".overlay").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.remove("active");
  this.classList.remove("show");
});


const email = localStorage.getItem("userEmail") || "guest@gmail.com";
document.getElementById("userEmail").innerText = email;
document.getElementById("userName").innerText = email.split("@")[0];


function logout(){
  localStorage.removeItem("userEmail");
}

new Chart(document.getElementById("statusChart"),{
  type:'doughnut',
  data:{
    labels:["Completed","Pending","In Progress"],
    datasets:[{
      data:[8,3,4],
      backgroundColor:["#22c55e","#ef4444","#f59e0b"]
    }]
  }, options:{
    responsive:true,
    maintainAspectRatio:false,
    cutout:'70%',   
    plugins:{
      legend:{
        position:'top'
      }
    }
  }
});

new Chart(document.getElementById("lineChart"),{
  type:'line',
  data:{
    labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets:[{
      data:[2,4,3,5,6,4,7],
      borderColor:"#7c3aed",
      tension:0.4,
      fill:false
    }]
  }
});