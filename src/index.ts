const l = location;
const u = new URL(l.href);

// processAny
const p = u.searchParams;
for (const k of p.keys()) {
  if (k.startsWith("utm_")) {
    p.delete(k);
  }
}

// processYouTube
const h = "www.youtube.com";
l.href = u.href;
if (u.host === h) {
  l.href = `https://${h}/watch?v=${u.href.slice(`${u.origin}/shorts/`.length)}`;
}
