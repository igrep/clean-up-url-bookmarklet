const l = location;
const u = new URL(l.href);
u.hash = "";

// processAny
const p = u.searchParams;
for (const k of [...p.keys()]) {
  if (
    k.startsWith("utm_") ||
    // manning.com
    k.startsWith("trk_") ||
    [
      // store.line.me
      "adId",
      // readyfor
      "dmai",
      "argument",
      // www.hmv.co.jp
      "site",
      // nikkei.com
      "n_cid",
      // asahi.com
      "linkType",
      "ref",
      // sdgs.yahoo.co.jp
      "cpt_n",
      "cpt_m",
      "cpt_c",
      "cpt_k",
      "cpt_s",
    ].includes(k) ||
    (u.host === "www.asahi.com" &&
      // Only asahi. But `id` is often used for essential parameters.
      k === "id")
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
