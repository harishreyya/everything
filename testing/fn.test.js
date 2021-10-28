const {seconds, minutes,hours} = require('./fn');

test('5200 miliseconds is equal to 5 seconds', () => {
  expect(seconds(5200)).toBe(5);
});
test('60000 miliseconds is equal to 1 minute', () => {
    expect(minutes(60000)).toBe(1);
  });
  test('180000 miliseconds is equal to 3 minutes', () => {
    expect(minutes(180000)).toBe(3);
  });
  test('3600000 miliseconds is equal to 1 hour', () => {
    expect(hours(3600000)).toBe(1);
  });