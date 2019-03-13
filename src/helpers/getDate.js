import moment from 'moment';

export default function(timestamp) {
  const date = moment(timestamp).format('LLL');
  return date.includes('Invalid') ? 'Never' : date;
}
