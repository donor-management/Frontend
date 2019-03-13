import daysSince from './daysSince';

export default function(timestamp, days = 60) {
  return daysSince(timestamp) >= days;
}
