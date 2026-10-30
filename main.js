document.addEventListener('DOMContentLoaded',function(){
  const nav=document.querySelector('.launch-mobile-toggle');const links=document.querySelector('.launch-navlinks');
  nav?.addEventListener('click',function(){const next=nav.getAttribute('aria-expanded')!=='true';nav.setAttribute('aria-expanded',String(next));nav.textContent=next?'✕':'☰';links?.classList.toggle('launch-navopen',next)});
  document.querySelectorAll('.launch-navlinks a').forEach(a=>a.addEventListener('click',()=>{nav?.setAttribute('aria-expanded','false');links?.classList.remove('launch-navopen')}));
  document.querySelectorAll('.faq-toggle,.day-toggle').forEach(b=>b.addEventListener('click',()=>{const active=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!active));const content=b.nextElementSibling; if(content)content.style.display=active?'none':'block';const s=b.querySelector('.launch-faq-plus');if(s)s.textContent=active?'+':'−'}));
  document.querySelectorAll('[data-place-selector]').forEach(form=>{
    const selector=form.querySelector('select[name="place"]');
    const customRow=form.querySelector('.launch-place-custom');
    const custom=form.querySelector('input[name="customPlace"]');
    const feedback=form.querySelector('.launch-place-help');
    const labels={srinagar:'Srinagar',gulmarg:'Gulmarg',pahalgam:'Pahalgam',munnar:'Munnar',wayanad:'Wayanad',goa:'Goa',manali:'Manali'};
    function update(){
      const isOther=selector.value==='other';
      customRow.hidden=!isOther; custom.required=isOther;
      feedback.textContent=['lakshadweep','kashmir'].includes(selector.value)?'A detailed OFFDAYA package is available for this destination.':'Other destinations are enquiry-only; our team will help with a custom plan.';
    }
    selector.addEventListener('change',update);update();
    form.addEventListener('submit',e=>{
      e.preventDefault();if(!form.reportValidity())return;
      const key=selector.value;
      if(key==='lakshadweep'){window.location.href='lakshadweep.html';return}
      if(key==='kashmir'){window.location.href='kashmir.html';return}
      const place=key==='other'?custom.value.trim():labels[key];
      if(!place)return;
      const msg=`Hi OFFDAYA, I would like to explore a trip to ${place}. Please share available options, approximate prices and details.`;
      window.location.href='https://wa.me/917994849989?text='+encodeURIComponent(msg);
    });
  });
  document.querySelectorAll('[data-whatsapp-form]').forEach(form=>form.addEventListener('submit',function(e){e.preventDefault();if(!form.reportValidity())return; const data=new FormData(form); const topic=form.dataset.topic||'Travel enquiry';const msg=`Hi OFFDAYA! I would like to enquire about ${topic}.\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nPreferred travel date: ${data.get('date')||'Flexible'}\nTravellers: ${data.get('people')}\nNotes: ${data.get('notes')||'Please share options and quotation.'}\n\nPlease confirm availability and final pricing.`;const dest='https://wa.me/917994849989?text='+encodeURIComponent(msg);window.location.assign(dest)}));
});