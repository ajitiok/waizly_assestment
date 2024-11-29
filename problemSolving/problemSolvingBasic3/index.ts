function convertToMilitaryTime(time: string): string {
  const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](AM|PM)$/;
  if (!timeRegex.test(time)) {
    console.log("Invalid time format. Expected format: hh:mm:ss AM/PM");
  }

  const [timePart, meridian] = time.split(/(AM|PM)/);
  let [hours, minutes, seconds] = timePart.split(":").map(Number);

  if (meridian === "AM" && hours === 12) {
    hours = 0;
  } else if (meridian === "PM" && hours !== 12) {
    hours += 12;
  }

  const militaryTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");

  return militaryTime;
}

console.log(convertToMilitaryTime("07:05:45PM"));
console.log(convertToMilitaryTime("12:00:00AM"));
console.log(convertToMilitaryTime("12:00:00PM"));
