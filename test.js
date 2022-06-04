// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One (1) euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Three (3) dollars should be 319.75 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (3 / 1.2) * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3)).toBe(319.75); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("19185 yen should be one (100) pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(19185)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = ((19185 / 127.9) / 1.2) * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(19185)).toBe(100); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("191.85 yen should be one (1) pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(191.85)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = ((191.85 / 127.9) / 1.2) * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(191.85)).toBeCloseTo(1); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})