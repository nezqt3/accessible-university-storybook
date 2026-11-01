(() => {
  "use strict";

  const mapOrigin = "https://campus.62-109-29-105.sslip.io";
  const frame = document.getElementById("faculty-map");
  const noncePattern = /^[A-Za-z0-9_-]{22,128}$/;
  let pendingNonce = null;

  function reportError(message) {
    window.FacultyMapBridge?.postMessage(
      JSON.stringify({ type: "campussy:error", message }),
    );
  }

  window.addEventListener("message", (event) => {
    if (
      event.source !== frame.contentWindow ||
      event.origin !== mapOrigin ||
      event.data?.type !== "campussy:ready" ||
      typeof event.data.nonce !== "string" ||
      !noncePattern.test(event.data.nonce)
    ) return;
    pendingNonce = event.data.nonce;
    if (!window.FacultyMapBridge) {
      reportError("Мобильный мост карты недоступен.");
      return;
    }
    window.FacultyMapBridge.postMessage(
      JSON.stringify({ type: "campussy:ready", nonce: pendingNonce }),
    );
  });

  window.deliverFacultyMapTicket = (nonce, ticket) => {
    if (nonce !== pendingNonce || typeof ticket !== "string" || !ticket) return;
    pendingNonce = null;
    frame.contentWindow.postMessage(
      { type: "campussy:launch", nonce, ticket },
      mapOrigin,
    );
  };

  frame.addEventListener("error", () => {
    reportError("Не удалось загрузить карту факультета.");
  });

  // Query parameters select a view; authentication never travels in the URL.
  frame.src = `${mapOrigin}/${location.search}`;
})();
