// این کد امتیاز رو هر چند ثانیه یه‌بار شبیه‌سازی می‌کنه که "زنده" به‌نظر برسه
function simulateLiveUpdate() {
  const liveCard = document.querySelector('.match-card:not(.finished) .score');
  if (liveCard) {
    setTimeout(() => {
      liveCard.textContent = '۳'; // یا هر امتیاز دیگه
    }, 5000);
  }
}
simulateLiveUpdate();