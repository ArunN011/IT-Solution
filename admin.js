document.addEventListener("DOMContentLoaded", function(){
  function toggleMenu(){
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("show");
  }
  window.toggleMenu = toggleMenu;

  document.querySelectorAll(".sidebar a").forEach(link=>{
  link.addEventListener("click", function(e){

    const href = this.getAttribute("href");

   
    if(!href) return;

   
    e.preventDefault();

 
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".overlay").classList.remove("show");

  
    setTimeout(()=>{
      window.location.href = href;
    }, 200); 

  });
});


  const email = localStorage.getItem("userEmail") || "admin@gmail.com";
  document.getElementById("userEmail").innerText = email;
  document.getElementById("userName").innerText = email.split("@")[0];
  new Chart(document.getElementById("barChart"),{
    type:'bar',
    data:{
      labels:["S","M","T","W","T","F","S"],
      datasets:[{
        data:[3,5,2,6,4,3,5],
        backgroundColor:"#7c3aed"
      }]
    },
    options:{
      responsive:true,
      plugins:{
        legend:{ display:false }
      }
    }
  });

  
  new Chart(document.getElementById("donutChart"),{
    type:'doughnut',
    data:{
      labels:["Completed","Pending","Ongoing"],
      datasets:[{
        data:[40,30,30],
        backgroundColor:["#7c3aed","#e5e7eb","orange"]
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{
          position:'bottom'
        }
      }
    }
  });


  let sec = 0;
  setInterval(()=>{
    sec++;
    let h = String(Math.floor(sec/3600)).padStart(2,'0');
    let m = String(Math.floor((sec%3600)/60)).padStart(2,'0');
    let s = String(sec%60).padStart(2,'0');
    document.getElementById("timer").innerText = `${h}:${m}:${s}`;
  },1000);

});