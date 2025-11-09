import { cleanupExpiredDonors } from '../Services/donorService';

// Run cleanup every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000;

let cleanupIntervalId = null;

export const startDataCleanup = () => {
  if (cleanupIntervalId) {
    console.warn('Data cleanup is already running');
    return;
  }

  // Run immediately on start
  cleanupExpiredDonors();

  // Then run every 5 minutes
  cleanupIntervalId = setInterval(() => {
    cleanupExpiredDonors();
  }, CLEANUP_INTERVAL);

  console.log('Data cleanup service started');
};

export const stopDataCleanup = () => {
  if (cleanupIntervalId) {
    clearInterval(cleanupIntervalId);
    cleanupIntervalId = null;
    console.log('Data cleanup service stopped');
  }
};