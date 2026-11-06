(function(){
  // Set the lab's contact address here
  var CONTACT_EMAIL = "info@example.org";
  var b = document.querySelector('.burger'), n = document.getElementById('nav');
  if (b) b.addEventListener('click', function(){ var o = n.classList.toggle('open'); b.setAttribute('aria-expanded', o); });
  var y = document.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll('.tabs').forEach(function(t){
    var scope = t.parentElement, bs = t.querySelectorAll('button');
    var panels = scope.querySelectorAll('.panel');
    bs.forEach(function(x){ x.addEventListener('click', function(){
      bs.forEach(function(o){ o.setAttribute('aria-selected', o === x); });
      panels.forEach(function(p){ p.hidden = p.dataset.i !== x.dataset.i; });
    }); });
  });
  var f = document.getElementById('cf');
  if (f) f.addEventListener('submit', function(e){
    e.preventDefault(); var d = new FormData(f);
    var body = 'Name: ' + d.get('n') + '\nOrganisation: ' + d.get('o') + '\nEmail: ' + d.get('e') + '\n\n' + d.get('m');
    location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('IESST Lab enquiry: ' + d.get('a')) + '&body=' + encodeURIComponent(body);
    document.getElementById('fs').textContent = 'Your email app should open with a draft. If it does not, write to ' + CONTACT_EMAIL + '.';
  });
})();
