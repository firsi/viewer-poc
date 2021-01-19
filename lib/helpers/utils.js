import date from "date-and-time";
import { Typography } from "antd";

const { Link } = Typography;

export const isServer = typeof window === "undefined";

export const percentage = (num, per) => (num / 100) * per;


export function checkNull(value) {
  try {
    if (value) {
      return value;
    } 
    return "N/A";
  } catch (ex) {
    console.error(ex);
    return JSON.stringify(ex);
  }
}

export function CheckIfUrl(dt) {
  try {
    if (dt !== undefined) {
      if (dt.value && dt.value !== "") {
        if (typeof dt.value === "string") {
          if (dt.value.startsWith("http")) {
            return <Link href={dt.value}>{dt.name}</Link>;
          }
        }
        return dt.value;
      }
    }

    return "N/A";
  } catch (ex) {
    console.error(ex);
    return JSON.stringify(ex);
  }
}

export function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}


export function getTimeDifference(todayTime){
  if (typeof todayTime !== "undefined" && todayTime !== null) {
    let plusMinus = "";
    let nowClientHour = new Date(Date.now()).getHours();
    let nowClientMinutes = new Date(Date.now()).getMinutes();
    console.log(todayTime);
    let placeParsed = date.parse(todayTime, "HH:mm:ss");
    let placeHour = new Date(placeParsed).getHours();
    let placeMinutes = new Date(placeParsed).getMinutes();
    let hoursDiff = nowClientHour - placeHour;
    let minutesDiff = nowClientMinutes - placeMinutes;

    // Keep for debug!
    // console.log("API data toDay_Time_UTC_24h: " + todayTime)
    // console.log("nowClientHour: " + nowClientHour);
    // console.log("nowClientMinutes: " + nowClientMinutes)
    // console.log("placeHour: " + placeHour);
    // console.log("placeMinutes: " + placeMinutes)

    // this might be unnecessary because timezones are per 1 hour, correct? But it does no harm if not.
    if (minutesDiff > 30) {
      hoursDiff++;
    }

    if (hoursDiff === 0) {
      return {
        plusMinus,
        hoursDiff : "0"
      }
    } 

    if (hoursDiff > 0) {
      plusMinus = "+";
    }
    return {
      plusMinus,
      hoursDiff: hoursDiff.toString(),
    }
  }
  
}

export function getNameOfMonthOfYear(date) {
  // TODO: This will obviously not be enough when we have different languages but will for now!
  // Something like this might also work https://stackoverflow.com/a/34981484/1187583

  let month = [];
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "March";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  let dt = new Date(date);
  return month[dt.getMonth()];
}

export function getDayOfMonth(date) {
  let dt = new Date(date);
  return dt.getDate();
}
