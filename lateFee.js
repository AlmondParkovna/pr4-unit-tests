
/**
 * Практична робота №3 — варіант 5.
 * Автор: Буй
 * Розрахунок плати за прострочення.
 */
function lateFee(days, daily) {
  if (!Number.isInteger(days) || days < 0) {
    throw new Error("Кількість днів має бути невід'ємним цілим числом");
  }

  if (typeof daily !== "number" || !Number.isFinite(daily) || daily < 0) {
    throw new Error("Денна ставка має бути невід'ємним числом");
  }

  return Math.min(days * daily, 100);
}

module.exports = { lateFee };
