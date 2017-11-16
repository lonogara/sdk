export const queryjoin = query =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
