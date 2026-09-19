/**
 * "Today" as a Singapore calendar date.
 *
 * Every deadline these tools count towards is a Singapore date — an ICA window,
 * an MOM notice period, a school term. Anchoring to SGT (UTC+8) rather than to
 * the viewer's device clock keeps the answer the same whether they open the page
 * in Singapore, on a layover, or from the posting they are about to leave.
 *
 * Previously each tool took the UTC calendar date, which read as the previous
 * day for every Singapore viewer between 00:00 and 08:00 local. That handed
 * them a countdown one day too generous and suppressed the "deadline passed"
 * warning on the morning it should first fire.
 *
 * Singapore has observed no daylight saving since 1935, so the fixed +8 offset
 * is safe year-round.
 */
export function todaySgt(): Date {
  const now = new Date();
  const sgt = new Date(now.getTime() + 8 * 3_600_000);
  return new Date(
    Date.UTC(sgt.getUTCFullYear(), sgt.getUTCMonth(), sgt.getUTCDate()),
  );
}
