type NameMonth =
  | 'styczeń'
  | 'luty'
  | 'marzec'
  | 'kwiecień'
  | 'maj'
  | 'czerwiec'
  | 'lipiec'
  | 'sierpień'
  | 'wrzesień'
  | 'październik'
  | 'listopad'
  | 'grudzień';

type Month = {
  [key: number]: NameMonth;
};

const months: Month = {
  0: 'styczeń',
  1: 'luty',
  2: 'marzec',
  3: 'kwiecień',
  4: 'maj',
  5: 'czerwiec',
  6: 'lipiec',
  7: 'sierpień',
  8: 'wrzesień',
  9: 'październik',
  10: 'listopad',
  11: 'grudzień',
};

export const fullDate = (time: Date) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const numberMonth = date.getMonth();
  const day = date.getDate();
  let nameMonth!: NameMonth;

  for (const key in months) {
    if (Number(key) === numberMonth) {
      nameMonth = months[Number(key)];
    }
  }

  const result = `${day} ${nameMonth} ${year}`;

  return result;
};
