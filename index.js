export default class a{constructor(a){this.divId="#"+a,this.init()}findDivId(){if("smallest-text-editor"===this.divId)return console.error("The assigned id must not be 'smallest-text-editor'"),!1;let a=document.querySelector(this.divId)||null;return null!==a||(console.error("The div id you provided can not be found!"),!1)}stylize(a,b=!1,c=null){document.execCommand(a,b,c)}init(){if(!this.findDivId())return;let h=this,b=document.createElement("div");b.id="smallest-text-editor",b.setAttribute("contenteditable","true"),b.style.padding="5px",b.style.minHeight="50px",b.style.width="100%",b.style.border="1px solid #f3e7e7",b.style.borderRadius="5px",b.style.position="relative",b.style.background="#fff";let d=document.createElement("div");d.style.display="flex",d.style.background="#fff",d.style.borderRadius="3px";let e=document.createElement("button");e.onclick=function(){h.stylize("bold")},e.innerHTML="B",e.style.fontSize="bold",e.style.margin="2px 4px",e.style.cursor="pointer";let f=document.createElement("button");f.onclick=function(){h.stylize("italic")},f.innerHTML="I",f.style.fontStyle="italic",f.style.margin="2px 4px",f.style.cursor="pointer";let g=document.createElement("button");g.onclick=function(){h.stylize("underline")},g.innerHTML="U",g.style.textDecoration="underline",g.style.margin="2px 4px",g.style.cursor="pointer";let c=document.createElement("button");c.id="smallest-text-editor-text-color-picker",c.innerHTML="A",c.style.color="#eb5e1a",c.style.fontWeight="bold",c.style.margin="2px 4px",c.style.cursor="pointer",c.style.display="flex",c.style.alignItems="center";let a=document.createElement("input");a.type="color",a.id="input-colorpicker",a.style.margin="0",a.style.padding="0",a.style.border="0",a.style.height="110%",a.style.width="20px",a.style.cursor="pointer",a.value="#0000ff",c.appendChild(a),a.oninput=function(a){h.stylize("foreColor",!1,a.srcElement.value)},d.appendChild(e),d.appendChild(f),d.appendChild(g),d.appendChild(c),document.querySelector(this.divId).appendChild(d),document.querySelector(this.divId).appendChild(b)}getValue(){return document.querySelector("#smallest-text-editor").innerHTML}}