import React, { useState, useEffect, useCallback } from "react";
import { Language } from "../App";

interface CountdownProps {
  targetDate: string;
  lang: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, lang }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center min-w-[80px] sm:min-w-[95px] bg-white/10 backdrop-blur-sm p-1.5 sm:p-3 rounded-lg shadow-xl border border-white/10">
      <div className="flex items-center justify-center h-8 sm:h-12">
        <span className="text-2xl sm:text-4xl font-black text-[#DC2627] leading-none tracking-tighter tabular-nums flex items-center justify-center drop-shadow-md">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <p className="text-gray-200 mt-1 sm:mt-2 font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-center w-full">
        {label}
      </p>
    </div>
  );

  const labels = {
    days: lang === "TR" ? "GÜN" : "DAYS",
    hours: lang === "TR" ? "SAAT" : "HOURS",
    minutes: lang === "TR" ? "DAKİKA" : "MINUTES",
    seconds: lang === "TR" ? "SANİYE" : "SECONDS",
  };

  return (
    <section className="py-4 text-center">
      <div className="flex justify-center items-center gap-1 sm:gap-3 px-2">
        <TimeBlock value={timeLeft.days} label={labels.days} />
        <div className="text-gray-300 dark:text-gray-600 text-xl sm:text-3xl font-black select-none">
          :
        </div>
        <TimeBlock value={timeLeft.hours} label={labels.hours} />
        <div className="text-gray-300 dark:text-gray-600 text-xl sm:text-3xl font-black select-none lg:block hidden">
          :
        </div>
        <TimeBlock value={timeLeft.minutes} label={labels.minutes} />
        <div className="text-gray-300 dark:text-gray-600 text-xl sm:text-3xl font-black select-none lg:block hidden">
          :
        </div>
        <TimeBlock value={timeLeft.seconds} label={labels.seconds} />
      </div>
    </section>
  );
};

export default Countdown;
