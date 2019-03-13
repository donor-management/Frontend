export default function(timestamp) {
  const span = Date.now() - timestamp;
  return Math.floor(span / 86400000);
}
