import { type ClassValue, clsx } from "clsx"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function useCountdown(startDateTime: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date(startDateTime);

    function updateCountdown() {
      const currentDate = new Date();
      const timeDiff = eventDate.getTime() - currentDate.getTime();

      if (timeDiff < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const seconds = Math.floor(timeDiff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      setTimeLeft({
        days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    }

    // Initial call
    updateCountdown();

    // Update every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, [startDateTime]);

  return timeLeft;
}


export function formatNumber(num: number): string {
  const numStr = num.toString();
  const parts = numStr.split('.');
  let integerPart = parts[0];
  const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

  const lastThree = integerPart.slice(-3);
  const otherNumbers = integerPart.slice(0, -3);

  if (otherNumbers !== '') {
    integerPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
  }

  return integerPart + decimalPart;
}