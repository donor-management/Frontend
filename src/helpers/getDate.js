import moment from 'moment';

export default function(timestamp) {
  return moment(timestamp).format('LLL');
}
