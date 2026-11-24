// Carousel prev/next buttons
document.querySelectorAll('[data-carousel]').forEach((section) => {
  const track = section.querySelector('.track');
  if (!track) return;
  const step = () => Math.max(track.clientWidth * 0.8, 280);
  section.querySelector('[data-prev]')?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  section.querySelector('[data-next]')?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
});

// Level of cover buttons: the quote button stays "Choose cover" until a level is picked
const levels = document.querySelectorAll('#levels .level');
const quoteBtn = document.getElementById('quote-btn');
levels.forEach((b) => b.addEventListener('click', () => {
  levels.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  if (quoteBtn) {
    quoteBtn.textContent = 'Add to quote';
    quoteBtn.classList.remove('btn-idle');
    quoteBtn.setAttribute('aria-disabled', 'false');
  }
}));
quoteBtn?.addEventListener('click', (e) => {
  if (quoteBtn.getAttribute('aria-disabled') === 'true') e.preventDefault();
});


// Dashed orange line that draws itself as you scroll through the split sections
try{
const wrap=document.querySelector('.splitwrap');const svg=wrap&&wrap.querySelector('.sw-line');
if(svg){
let segs=[];
const pt=(el,end,wr)=>{const rg=document.createRange();rg.selectNodeContents(el);const rs=Array.from(rg.getClientRects()).filter((x)=>x.width>2&&x.height>2);if(!rs.length){return null;}
let r;if(end){r=rs.reduce((a,b)=>((b.bottom>a.bottom+2||(Math.abs(b.bottom-a.bottom)<=2&&b.right>a.right))?b:a));return {x:r.right-wr.left+14,y:r.top+r.height*0.62-wr.top};}
r=rs.reduce((a,b)=>((b.top<a.top-2||(Math.abs(b.top-a.top)<=2&&b.left<a.left))?b:a));return {x:r.left-wr.left-14,y:r.top+r.height*0.62-wr.top};};
const upd=()=>{const r=wrap.getBoundingClientRect();const y=window.innerHeight*0.8-r.top;const ms=svg.querySelectorAll('.sw-m');segs.forEach((s,i)=>{const p=Math.min(1,Math.max(0,(y-s[0].y)/Math.max(1,s[1].y-s[0].y)));if(ms[i]){ms[i].style.strokeDashoffset=String(1-p);}});};
const build=()=>{const wr=wrap.getBoundingClientRect();const W=wr.width;const H=wr.height;svg.setAttribute('viewBox','0 0 '+W+' '+H);
const L=(h)=>{const rg=document.createRange();rg.selectNodeContents(h);const rs=Array.from(rg.getClientRects()).filter((x)=>x.width>2&&x.height>2);if(!rs.length){return null;}
const f=rs.reduce((a,b)=>((b.top<a.top-2||(Math.abs(b.top-a.top)<=2&&b.left<a.left))?b:a));const l=rs.reduce((a,b)=>((b.bottom>a.bottom+2||(Math.abs(b.bottom-a.bottom)<=2&&b.right>a.right))?b:a));
return {fl:f.left-wr.left,ft:f.top-wr.top,fr:f.right-wr.left,lr:l.right-wr.left,lb:l.bottom-wr.top};};
const Hs=Array.from(wrap.querySelectorAll('.sp-big')).map(L);
segs=[];const sx=Math.max(0.6,Math.min(1,W/1440));const mk=(a,b,c1,c2)=>{segs.push([a,b,c1,c2]);};
if(Hs.length>=4&&Hs.every((h)=>h)){
let a,b,dx,dy;
a={x:Hs[0].lr-86*sx,y:Hs[0].lb+30};b={x:Hs[1].fl-14,y:Hs[1].ft-22};dx=b.x-a.x;dy=b.y-a.y;mk(a,b,{x:a.x,y:a.y+dy*0.35},{x:b.x-dx*0.45,y:b.y-dy*0.35});
a={x:Hs[1].lr-80*sx,y:Hs[1].lb+18};b={x:Hs[2].fr+20,y:Hs[2].ft-66};dx=b.x-a.x;dy=b.y-a.y;mk(a,b,{x:a.x,y:a.y+dy*0.45},{x:b.x,y:b.y-dy*0.45});
a={x:Hs[2].lr-115*sx,y:Hs[2].lb+36};b={x:Hs[3].fl-14,y:Hs[3].ft-68};dx=b.x-a.x;dy=b.y-a.y;mk(a,b,{x:a.x,y:a.y+dy*0.35},{x:b.x-dx*0.45,y:b.y-dy*0.35});
a={x:Hs[3].fl-10,y:Hs[3].lb+66};try{const bg=wrap.querySelectorAll('.sp-big')[3];let tn=null;if(bg){const tw=document.createTreeWalker(bg,NodeFilter.SHOW_TEXT);let nd;while((nd=tw.nextNode())){if(nd.nodeValue&&nd.nodeValue.indexOf('public')>=0){tn=nd;}}}const ix=tn?tn.nodeValue.lastIndexOf('public'):-1;if(ix>=0){const wrg=document.createRange();wrg.setStart(tn,ix);wrg.setEnd(tn,ix+6);const wb=wrg.getBoundingClientRect();if(wb.width>2){a={x:(wb.left+wb.right)/2-wr.left,y:wb.bottom-wr.top+26};}}}catch(e2){}b={x:Math.max(24,Math.min(W-40,2*a.x-W*0.445)),y:H-8};const yt=document.querySelector('.yt-line');if(yt){const yr=yt.getBoundingClientRect();if(yr.width>2){b={x:(yr.left+yr.right)/2-wr.left,y:yr.top-wr.top-18};}}dx=b.x-a.x;dy=b.y-a.y;const bx=Math.min(W-24,Math.max(a.x,b.x)+W*0.015);mk(a,b,{x:bx,y:a.y+dy*0.3},{x:bx,y:b.y-dy*0.3});}
const ds=segs.map((s)=>'M'+s[0].x+' '+s[0].y+' C'+s[2].x+' '+s[2].y+' '+s[3].x+' '+s[3].y+' '+s[1].x+' '+s[1].y);
svg.innerHTML='<defs><mask id="swm" maskUnits="userSpaceOnUse" x="-50" y="-50" width="'+(W+100)+'" height="'+(Math.max(H,segs.reduce((m,q)=>Math.max(m,q[1].y),0))+200)+'">'+ds.map((d)=>'<path class="sw-m" d="'+d+'" fill="none" stroke="#fff" stroke-width="40" stroke-linecap="round" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="0"/>').join('')+'</mask></defs><path d="'+ds.join(' ')+'" mask="url(#swm)" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="14 12"/>';
upd();};
build();window.addEventListener('scroll',upd,{passive:true,capture:true});window.addEventListener('resize',build);setTimeout(build,600);if(document.fonts&&document.fonts.ready){document.fonts.ready.then(build);}
}}catch(e){}
