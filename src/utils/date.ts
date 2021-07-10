import moment from 'moment';

const date = {
  isDay: (date:Date) => moment(date).format('dddd'),
};

export default date;
