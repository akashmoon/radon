
const express = require('express');

const lodash = require('lodash');

const router = express.Router();

router.get('/hello', function (req, res) {
    // first problem statement=> created an array containing all the months and then equally
    // splittd into 4 parts (sub array)

    let months = ["january", "february", "march","april","may","june","july","august","september","ocober","november","december"]
    const parts = lodash.chunk(months, [size=4]);
    console.log(parts);

    // 2nd problem statement=> created an array containing first 10 odd numbers
    let numbers = [1, 3, 5, 7 , 9, 11 , 13, 15, 17, 19]
    // using tail function=> printed last 9 elements from the array

    const lastEle = lodash.tail(numbers)
    console.log(lastEle);

    // 3rd problem statement

    const demo =   [25,4,5,6,7,8]
    const demo1 =    [43,56,7,23,4]
    const demo2 =    [65,23,8,12,56]
    const demo3 =    [90,75,34,29,43]
    const demo4 =    [13,29,65,97,36]
        
    // from above arrays only unique values will be printed and not duplicate using Union function.
    const extract =lodash.union(demo,demo1,demo2,demo3.demo4)
    console.log(extract);
    // 4 th problem statement
    
    const Arr = ([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])

    const doPair =lodash.fromPairs(Arr)
    console.log(doPair)
    
    // externalModule.log()
    res.send('lodash API')
});


module.exports = router;
// adding this comment for no reason