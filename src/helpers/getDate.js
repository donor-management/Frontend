import moment from 'moment';

export default function(timestamp) {
  const date = moment(timestamp).fromNow();
  return date.includes('Invalid') ? 'Never' : date;
}
