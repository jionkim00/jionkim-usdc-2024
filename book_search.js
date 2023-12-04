/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    // result is now initialized with the SearchTerm
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    
    // outer for loop represents looking through different books and saves the ISBN in case a match is found
    for (i = 0; i < scannedTextObj.length; i++) {
        let ISBN = scannedTextObj[i]["ISBN"];

        // inner for loop goes through the each object in the content and if the text includes the searchTerm, then the ISBN, Page, and Line are pushed to the "Results" array in the results object
        for (j = 0; j < scannedTextObj[i]["Content"].length; j++){
            // regex introduced instead of includes because the regex match is more selective (no plurals or substring matches within words)
            let regex = new RegExp(`\\b${searchTerm}\\b`);
            if (regex.test(scannedTextObj[i]["Content"][j]["Text"])){
                
                result["Results"].push({
                                            "ISBN" : ISBN,
                                            "Page" : scannedTextObj[i]["Content"][j]["Page"],
                                            "Line" : scannedTextObj[i]["Content"][j]["Line"]
                })
            }
        }

    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


// Custom Test Cases Below:

/** Custom Test Input Object. */
const customInput = [
    {
        "Title": "Grokking: Algorithms",
        "ISBN": "9781617292231",
        "Content": [
            {
                "Page": 30,
                "Line": 1,
                "Text": "What if you want to delete an element? Again, lists are better, because"
            },
            {
                "Page": 30,
                "Line": 2,
                "Text": "you just need to change what the previous element points to. With"
            },
            {
                "Page": 30,
                "Line": 3,
                "Text": "arrays, everything needs to be moved up when you delete an element."
            } 
        ] 
    },
    {
        "Title": "Cracking the Coding Interview",
        "ISBN": "0984782869",
        "Content": [
            {
                "Page": 43,
                "Line": 9,
                "Text": "An Array List, or a dynamically resizing array, allows you to have the benefits of an array while offering"
            },
            {
                "Page": 43,
                "Line": 10,
                "Text": "flexibility in size. You won't run out of space in the Arraylist since its capacity will grow as you insert"
            },
            {
                "Page": 43,
                "Line": 11,
                "Text": "elements."
            } 
        ] 
    },
    {
        "Title": "Architecture of Happiness",
        "ISBN": "9780307481566",
        "Content": [
            {
                "Page": 15,
                "Line": 1,
                "Text": "There is no shortage of reasons to be suspicious of the ambition to create great"
            },
            {
                "Page": 15,
                "Line": 2,
                "Text": "architecture. Buildings rarely make palpable the efforts that their construction"
            },
            {
                "Page": 15,
                "Line": 3,
                "Text": "demands. They are, coyly silent about the bankruptcies, the delays, the fear and"
            } 
        ] 
    }
]


/** Positive Custom Test Output 1 */
const positiveOutput1 = {
    "SearchTerm": "you",
    "Results": [
        {
            "ISBN": "9781617292231",
            "Page": 30,
            "Line": 1,
        },
        {
            "ISBN": "9781617292231",
            "Page": 30,
            "Line": 2,
        },
        {
            "ISBN": "9781617292231",
            "Page": 30,
            "Line": 3,
        },
        {
            "ISBN": "0984782869",
            "Page": 43,
            "Line": 9,
        },
        {
            "ISBN": "0984782869",
            "Page": 43,
            "Line": 10,
        },
    ]
}

// Positive Custom Test #1 : This tests for instances in which the word "you" is found
const positiveTest1 = findSearchTermInBooks("you", customInput); 
if (JSON.stringify(positiveOutput1) === JSON.stringify(positiveTest1)) {
    console.log("PASS: Positive Test 1");
} else {
    console.log("FAIL: Positive Test 1");
    console.log("Expected:", positiveOutput1);
    console.log("Received:", positiveTest1);
}


/** Positive Custom Test Output 2 */
const positiveOutput2 = {
    "SearchTerm": "are",
    "Results": [
        {
            "ISBN": "9781617292231",
            "Page": 30,
            "Line": 1,
        },
        {
            "ISBN": "9780307481566",
            "Page": 15,
            "Line": 3,
        }
    ]
}

const positiveTest2 = findSearchTermInBooks("are", customInput); 
if (JSON.stringify(positiveOutput2) === JSON.stringify(positiveTest2)) {
    console.log("PASS: Positive Test 2");
} else {
    console.log("FAIL: Positive Test 2");
    console.log("Expected:", positiveOutput2);
    console.log("Received:", positiveTest2);
}

/** Negative Custom Test Output which should be empty like below */
const negativeOutput = {
    "SearchTerm": "negative",
    "Results": []
}

// Negative Custom Test #1 : This tests for cases where the searchTerm cannot be found in a regular input
const negativeTest1 = findSearchTermInBooks("negative", customInput); 
if (JSON.stringify(negativeOutput) === JSON.stringify(negativeTest1)) {
    console.log("PASS: Negative Test 1");
} else {
    console.log("FAIL: Negative Test 1");
    console.log("Expected:", negativeOutput);
    console.log("Received:", negativeTest1);
}

// Negative Custom Test #2 : This tests for cases where the searchTerm cannot be found in a regular input because the input is empty
const emptyInput = []
const negativeTest2 = findSearchTermInBooks("negative", emptyInput); 
if (JSON.stringify(negativeOutput) === JSON.stringify(negativeTest2)) {
    console.log("PASS: Negative Test 2");
} else {
    console.log("FAIL: Negative Test 2");
    console.log("Expected:", negativeOutput);
    console.log("Received:", negativeTest2);
}


// Capitalization Words

// Capitalization Custom Test #1:
const capitalInput = [
    {
        "Title": "Grokking: Algorithms",
        "ISBN": "9781617292231",
        "Content": [
            {
                "Page": 22,
                "Line": 1,
                "Text": "These are fake words, you see."
            },
            {
                "Page": 22,
                "Line": 2,
                "Text": "Nothing is wrong with these words, you see."
            },
            {
                "Page": 22,
                "Line": 3,
                "Text": "These words are real, you see."
            } 
        ] 
    },
    {
        "Title": "Cracking the Coding Interview",
        "ISBN": "0984782869",
        "Content": [
            {
                "Page": 44,
                "Line": 9,
                "Text": "Science is my favorite topic. These labs are fun."
            },
            {
                "Page": 44,
                "Line": 10,
                "Text": "Yes, these labs are incredibly fun!"
            },
            {
                "Page": 44,
                "Line": 11,
                "Text": "I'm quite sure about that."
            } 
        ] 
    },
    {
        "Title": "Architecture of Happiness",
        "ISBN": "9780307481566",
        "Content": [
            {
                "Page": 11,
                "Line": 1,
                "Text": "A world full of oysters and salmon. These are my wishes."
            },
            {
                "Page": 11,
                "Line": 2,
                "Text": "That would be a delicious world but impossible. How do we get these here?"
            },
            {
                "Page": 11,
                "Line": 3,
                "Text": "These fish are found in the ocean - far away from us."
            } 
        ] 
    }
]

const capitalOutput1 = {
    "SearchTerm": "These",
    "Results": [
        {
            "ISBN": "9781617292231",
            "Page": 22,
            "Line": 1,
        },
        {
            "ISBN": "9781617292231",
            "Page": 22,
            "Line": 3,
        },
        {
            "ISBN": "0984782869",
            "Page": 44,
            "Line": 9,
        },
        {
            "ISBN": "9780307481566",
            "Page": 11,
            "Line": 1,
        },
        {
            "ISBN": "9780307481566",
            "Page": 11,
            "Line": 3,
        },
    ]
}

const capitalTest1 = findSearchTermInBooks("These", capitalInput); 
if (JSON.stringify(capitalOutput1) === JSON.stringify(capitalTest1)) {
    console.log("PASS: Capital Test 1");
} else {
    console.log("FAIL: Capital Test 1");
    console.log("Expected:", capitalOutput1);
    console.log("Received:", capitalTest1);
}



// Edge Cases:

// edge test for apostrophe / contractions
const edgeOutput1 = {
    "SearchTerm": "I'm",
    "Results": [
        {
            "ISBN": "0984782869",
            "Page": 44,
            "Line": 11,
        }
    ]
}

const edgeTest1 = findSearchTermInBooks("I'm", capitalInput); 
if (JSON.stringify(edgeOutput1) === JSON.stringify(edgeTest1)) {
    console.log("PASS: Edge Test 1");
} else {
    console.log("FAIL: Edge Test 1");
    console.log("Expected:", edgeOutput1);
    console.log("Received:", edgeTest1);
}



// edge test for words ending not in whitespace : "element" + "." or "?" or "s"
const edgeOutput2 = {
    "SearchTerm": "element",
    "Results": [
        {
            "ISBN": "9781617292231",
            "Page": 30,
            "Line": 1,
        },
        {
            "ISBN": "9781617292231",
            "Page": 30,
            "Line": 2,
        },
        {
            "ISBN": "9781617292231",
            "Page": 30,
            "Line": 3,
        }
    ]
}

const edgeTest2 = findSearchTermInBooks("element", customInput); 
if (JSON.stringify(edgeOutput2) === JSON.stringify(edgeTest2)) {
    console.log("PASS: Edge Test 2");
} else {
    console.log("FAIL: Edge Test 2");
    console.log("Expected:", edgeOutput2);
    console.log("Received:", edgeTest2);
}

// edge test for multiple words
const edgeOutput3 = {
    "SearchTerm": "oysters and salmon",
    "Results": [
        {
            "ISBN": "9780307481566",
            "Page": 11,
            "Line": 1,
        }
    ]
}

const edgeTest3 = findSearchTermInBooks("oysters and salmon", capitalInput); 
if (JSON.stringify(edgeOutput3) === JSON.stringify(edgeTest3)) {
    console.log("PASS: Edge Test 3");
} else {
    console.log("FAIL: Edge Test 3");
    console.log("Expected:", edgeOutput3);
    console.log("Received:", edgeTest3);
}
