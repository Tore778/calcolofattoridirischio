export function mountSteps(onChange){
  const f=document.getElementById("risk-form");
  const handle=async ()=>{
    const {mapP,mapD}=await import("./map.js");
    const {calcR}=await import("./calc.js");
    const p=mapP(f.P.value), d=mapD(f.D.value);
    onChange({P:p,D:d,R:(p&&d)?calcR(p,d):0});
  };
  f.addEventListener("input",handle);
  f.addEventListener("change",handle);
  handle();
}
