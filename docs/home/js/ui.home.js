import { loadIncludes } from "./dom.js";
(async ()=>{
  await loadIncludes();
  const btn = document.querySelector("[data-role='open-verify']");
  if(btn) btn.addEventListener("click", e=>{
    e.preventDefault(); location.href = "../verify/index.html";
  });
})();
