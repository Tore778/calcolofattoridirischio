export async function loadIncludes(){
  const slots=[...document.querySelectorAll("[data-include]")];
  for (const el of slots){
    const url=el.getAttribute("data-include");
    try{
      const res=await fetch(url,{cache:"no-store"});
      if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const html=await res.text();
      const tmp=document.createElement("template");
      tmp.innerHTML=html.trim();
      el.replaceWith(tmp.content.cloneNode(true)); // sostituisce il nodo placeholder
    }catch(err){
      console.error("Include failed:", url, err);
      el.innerHTML=`<div class="text-red-600 text-sm">Failed to load ${url}</div>`;
    }
  }
}
