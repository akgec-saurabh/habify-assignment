// Function to get the time difference in a human-readable format
export function getTimeDifference(timestamp) {
  const currentTime = new Date("2023-07-24 08:50:00");
  const targetTime = new Date(timestamp);

  const timeDifference = Math.abs(currentTime - targetTime); // Get the difference in milliseconds

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return `${seconds}s`;
  }
}
