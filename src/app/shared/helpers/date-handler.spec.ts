import {
  convertFromTimestampToDate,
} from './date-handler-handler';

describe('Helper: date-handler', () => {

  it('convertFromTimestampToDate should get correct date', () => {
    const date = convertFromTimestampToDate(1544283306000);
    expect(date).toBe('8/12/2018');
  });

});
