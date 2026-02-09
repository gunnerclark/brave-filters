// user-redirect-youtube-shorts.js
// Redirects any YouTube Shorts URL (including SPA navigation) to its normal watch page
(function() {
  "use strict";

  function redirectIfShorts(url) {
    try {
      const u = new URL(url, location.origin);
      const m = u.pathname.match(/^\/shorts\/([A-Za-z0-9_-]+)/);
      if (!m) return;

      const videoId = m[1];
      const params = new URLSearchParams(u.search);
      if (!params.has("v")) params.set("v", videoId);

      const target = `${u.origin}/watch?${params.toString()}${u.hash}`;
      if (u.href !== target) {
        console.log("[Shorts Redirect] Redirecting to:", target);
        location.replace(target);
      }
    } catch (e) {
      console.error("[Shorts Redirect] Error:", e);
    }
  }

  // Run once on load
  redirectIfShorts(location.href);

  // Detect SPA (client-side) navigations:
  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      redirectIfShorts(location.href);
    }
  }).observe(document, { subtree: true, childList: true });

  // Also intercept history API usage (pushState/replaceState)
  const wrap = (fn) => function(...args) {
    const result = fn.apply(this, args);
    window.dispatchEvent(new Event("locationchange"));
    return result;
  };
  history.pushState = wrap(history.pushState);
  history.replaceState = wrap(history.replaceState);
  window.addEventListener("popstate", () => window.dispatchEvent(new Event("locationchange")));
  window.addEventListener("locationchange", () => redirectIfShorts(location.href));
})();
// redirect-youtube-shorts.js
// Redirects any YouTube Shorts URL (including SPA navigation) to its normal watch page
(function() {
  "use strict";

  function redirectIfShorts(url) {
    try {
      const u = new URL(url, location.origin);
      const m = u.pathname.match(/^\/shorts\/([A-Za-z0-9_-]+)/);
      if (!m) return;

      const videoId = m[1];
      const params = new URLSearchParams(u.search);
      if (!params.has("v")) params.set("v", videoId);

      const target = `${u.origin}/watch?${params.toString()}${u.hash}`;
      if (u.href !== target) {
        console.log("[Shorts Redirect] Redirecting to:", target);
        location.replace(target);
      }
    } catch (e) {
      console.error("[Shorts Redirect] Error:", e);
    }
  }

  // Run once on load
  redirectIfShorts(location.href);

  // Detect SPA (client-side) navigations:
  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      redirectIfShorts(location.href);
    }
  }).observe(document, { subtree: true, childList: true });

  // Also intercept history API usage (pushState/replaceState)
  const wrap = (fn) => function(...args) {
    const result = fn.apply(this, args);
    window.dispatchEvent(new Event("locationchange"));
    return result;
  };
  history.pushState = wrap(history.pushState);
  history.replaceState = wrap(history.replaceState);
  window.addEventListener("popstate", () => window.dispatchEvent(new Event("locationchange")));
  window.addEventListener("locationchange", () => redirectIfShorts(location.href));
})();