import moment from 'moment';

export default function getDate(timestamp) {
  const date = moment(timestamp).fromNow();
  return date.includes('Invalid') ? 'Never' : date;
}
