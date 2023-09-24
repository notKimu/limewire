export function formatTimestamp(timestamp: string) {
    // Parse the timestamp string into a Date object
    const date = new Date(timestamp);
  
    // Get the current date and time
    const now = new Date();
  
    // Calculate the time difference in milliseconds
    const diff = +now - +date;
  
    // Calculate minutes, hours, and days
    const minutes = Math.floor(diff / (60 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  
    if (minutes < 60) {
      // Less than an hour ago
      return `${minutes} min ago`;
    } else if (hours < 24) {
      // Less than a day ago
      const minutesAgo = minutes % 60;
      return `Today ${hours}:${minutesAgo < 10 ? '0' : ''}${minutesAgo}`;
    } else if (days === 1) {
      // Yesterday
      const hoursAgo = date.getHours();
      const minutesAgo = date.getMinutes();
      return `Yesterday ${hoursAgo}:${minutesAgo < 10 ? '0' : ''}${minutesAgo}`;
    } else {
      // Older than a day
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Months are zero-based
      const day = date.getDate();
      return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
    }
  }
  