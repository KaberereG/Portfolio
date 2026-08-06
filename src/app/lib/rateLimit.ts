const requests = new Map<string, number[]>();

export function isRateLimited(ip: string, limit = 3, windowMs = 60_000): boolean {
  const now = Date.now();
  const timestamps = (requests.get(ip) || []).filter(t => now - t < windowMs);

  if (timestamps.length >= limit) {
    requests.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requests.set(ip, timestamps);
  return false;
}