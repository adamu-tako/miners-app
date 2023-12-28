export function isDev(): boolean {
  const url = new URL(window.location.href);

  // TODO: avoid hard coding the port number
  if (!url.port || url.port === "5173") {
    return true;
  }

  return false;
}
