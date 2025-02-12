import { useState, useEffect } from "react";

interface SaleTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function SaleTimer({
  days,
  hours,
  minutes,
  seconds,
}: SaleTimerProps) {
  // Convert all time parts into total seconds
  const initialSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount or if timeLeft changes
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Compute days, hours, minutes, and seconds from the total remaining seconds
  const computedDays = Math.floor(timeLeft / (24 * 60 * 60));
  const computedHours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const computedMinutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const computedSeconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="text-sm font-medium">Days</p>
        <p className="text-3xl font-bold pr-[17px]">{computedDays}</p>
      </div>
      <p className="text-xl text-[#E07575] font-bold">:</p>
      <div>
        <p className="text-sm font-medium">Hours</p>
        <p className="text-3xl font-bold pr-[17px]">{computedHours}</p>
      </div>
      <p className="text-xl text-[#E07575] font-bold">:</p>
      <div>
        <p className="text-sm font-medium">Minutes</p>
        <p className="text-3xl font-bold pr-[17px]">{computedMinutes}</p>
      </div>
      <p className="text-xl text-[#E07575] font-bold">:</p>
      <div>
        <p className="text-sm font-medium">Seconds</p>
        <p className="text-3xl font-bold pr-[17px]">{computedSeconds}</p>
      </div>
    </div>
  );
}
