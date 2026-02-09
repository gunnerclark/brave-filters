// user-modify-reddit-css.js
(function() {
  const restyle = () => {
	console.log("[reddit-css] test log");
	const el0 = document.getElementById("right-sidebar-container");
	if (el0) {
		console.log("[reddit-css] test 1");
		el0.style["display"] = "none";
	}
	
	const el = document.getElementById("subgrid-container").getElementsByClassName("main-container")[0];
	if (el) {
		el.style.display = "block";
	}

	console.log("[reset-grid-container] Grid CSS reset applied to #main-container");
  };

  // Run immediately
  document.onload = restyle();

  // Observe DOM changes for dynamically loaded SPAs
  new MutationObserver(restyle).observe(document.body, { childList: true, subtree: true });
})();