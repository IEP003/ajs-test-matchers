import sortObj from '../app';

test('sort health', () => {
  const value = [
    { name: 'мечник', health: 10 },
    { name:'маг', health: 100 },
    { name:'лучник', health: 80 },
  ];
  const result = sortObj(value);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(expected)
});