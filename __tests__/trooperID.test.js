let Feeling = require('../src/components/trooperID/trooperID');


console.log('this is the TEST of trooperID');
console.log('Feeling', Feeling);

test('input of trooper id expected to be a whole number', () => {
    // render(<Feeling />)
    expect(Feeling(555).toBe(Number));
});