const APIKEY=`99b3ac9bc17a4ddf95f51446250402`
const input=document.querySelector("#search");
const btn=document.querySelector("#btn");
const main=document.querySelector(".main");



btn.addEventListener("click",()=>{
const inputvalue=input.value.trim()
const api=`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${inputvalue}`;
apicall(inputvalue);


async function apicall() {
    const response=await fetch(api);
    const result=  await response.json()
    console.log(result);
    creatingElement(result);
}

    function creatingElement(result){
        main.innerHTML='';
   const box= document.createElement("div");
        box.classList.add(".sts")
        box.innerHTML=` 
    <div class="sts" id="sts">
        <h2>${result.current.temp_c} C</h2>
        <h4>${result.current.condition.text}</h4>
        <img src="${result.current.condition.icon}">

    </div>
   </div>
        `
        main.appendChild(box);
    }
});



