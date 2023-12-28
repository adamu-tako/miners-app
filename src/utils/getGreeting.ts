export const getGreetingByTime = (): string => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greeting: string;

  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(currentDate);
  const dayOfMonth = currentDate.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    currentDate
  );
  const year = currentDate.getFullYear();

  return `${greeting} - ${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
};
