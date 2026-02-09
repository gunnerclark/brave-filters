// user-modify-youtube-css.js
(function() {
  const restyle = () => {
	const elementList = document.querySelectorAll('[is-in-first-column]');
	console.log(elementList);
	if (elementList.length > 0) {
		elementList.forEach(x => x.style.marginLeft = 0)
	}
  };

  // Run immediately
  document.addEventListener('DOMContentLoaded', function() {
		setTimeout(function(){
		   restyle();
		}, 3000);
	}, false);

  // Observe DOM changes for dynamically loaded SPAs
  new MutationObserver(restyle).observe(document.body, { childList: true, subtree: true });
})();