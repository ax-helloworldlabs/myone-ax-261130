const address = '서울특별시 성북구 성북로 5-9 마이원타워 지하 1층';
document.getElementById('copy-address').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(address); status.textContent = '교육장 주소를 복사했습니다.'; }
  catch { status.textContent = address; }
});
let closedForPrint = [];
window.addEventListener('beforeprint', () => {
  closedForPrint = [...document.querySelectorAll('details:not([open])')];
  closedForPrint.forEach(detail => detail.open = true);
});
window.addEventListener('afterprint', () => {
  closedForPrint.forEach(detail => detail.open = false);
  closedForPrint = [];
});
document.getElementById('print-page').addEventListener('click', () => window.print());
