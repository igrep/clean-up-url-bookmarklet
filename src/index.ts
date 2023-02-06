const l = location;
const u = new URL(l.href);

// processAny
const p = u.searchParams;
for (const k of [...p.keys()]) {
  if (
    k.startsWith("utm_") ||
    [
      // readyfor
      "dmai",
      "argument",
      // www.hmv.co.jp
      "site",
    ].includes(k)
  ) {
    p.delete(k);
  }
}
l.href = u.href;

// processYouTube
const h = "www.youtube.com";
if (u.host === h) {
  l.href = `https://${h}/watch?v=${u.href.slice(`${u.origin}/shorts/`.length)}`;
}
