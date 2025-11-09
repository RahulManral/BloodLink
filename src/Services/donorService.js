import {
  ref,
  push,
  set,
  get,
  remove,
  query,
  orderByChild,
  equalTo,
  onValue,
} from 'firebase/database';
import { database } from '../config/firebase';

export const fetchDonors = () => {
  return new Promise((resolve, reject) => {
    const donorsRef = ref(database, 'donors');

    onValue(
      donorsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const donorsList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          resolve(donorsList);
        } else {
          resolve([]);
        }
      },
      (error) => {
        reject(error);
      },
      { onlyOnce: true }
    );
  });
};

export const addDonor = async (donorData) => {
  try {
    const donorsRef = ref(database, 'donors');
    const newDonorRef = push(donorsRef);

    const donorWithMetadata = {
      ...donorData,
      isPermanent: false,
      createdAt: Date.now(),
      expiresAt: Date.now() + 60 * 60 * 1000,
    };

    await set(newDonorRef, donorWithMetadata);
    return newDonorRef.key;
  } catch (error) {
    console.error('Error adding donor:', error);
    throw new Error('Failed to add donor. Please try again.');
  }
};


export const findDonor = async (name, phone) => {
  try {
    const donorsRef = ref(database, 'donors');
    const snapshot = await get(donorsRef);

    if (snapshot.exists()) {
      const donors = snapshot.val();
      const donorEntry = Object.entries(donors).find(
        ([_, donor]) =>
          donor.name.toLowerCase() === name.toLowerCase() &&
          donor.phone === phone
      );

      if (donorEntry) {
        return {
          id: donorEntry[0],
          ...donorEntry[1],
        };
      }
    }
    return null;
  } catch (error) {
    console.error('Error finding donor:', error);
    throw new Error('Failed to find donor. Please try again.');
  }
};

// Delete a donor record
export const deleteDonor = async (donorId) => {
  try {
    const donorRef = ref(database, `donors/${donorId}`);
    await remove(donorRef);
  } catch (error) {
    console.error('Error deleting donor:', error);
    throw new Error('Failed to delete donor. Please try again.');
  }
};

export const cleanupExpiredDonors = async () => {
  try {
    const donorsRef = ref(database, 'donors');
    const snapshot = await get(donorsRef);

    if (snapshot.exists()) {
      const donors = snapshot.val();
      const now = Date.now();
      const deletionPromises = [];

      Object.entries(donors).forEach(([id, donor]) => {
        if (!donor.isPermanent && donor.expiresAt && donor.expiresAt < now) {
          const donorRef = ref(database, `donors/${id}`);
          deletionPromises.push(remove(donorRef));
        }
      });

      await Promise.all(deletionPromises);
      console.log(
        `Cleaned up ${deletionPromises.length} expired donor(s)`
      );
    }
  } catch (error) {
    console.error('Error cleaning up expired donors:', error);
  }
};