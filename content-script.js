if (/\bCrOS\b/.test(navigator.userAgent)) {
  console.warn(
    '[Open Deezer in desktop app] This script is not compatible with Chrome OS.',
  );
} else {
  window.location.href = `deezer://${window.location.pathname.substring(4)}`;
  window.close();
}
