// https://www.sohamkamani.com/blog/javascript/making-a-node-js-test-runner/
// The test function accepts a name and a function
let tests = []

// The test function accepts a name and a function
function test(name, fn) {
    // add to tests array
    tests.push({ name, fn })
}

// define a function that will run all the declared tests:
function run() {
    // `run` runs all the tests in the `tests` array
    tests.forEach(test => {
        // For each test, we try to execute the
		// provided function. 
        try {
            test.fn()
            // If there is no exception
			// that means it ran correctly
            console.log('✅', test.name)

        } catch(e) {
            // Exceptions, if any, are caught
			// and the test is considered failed
            console.log('❌', test.name)

            // the stack error
            console.log(e.stack)
        }
    })
}

// Get the list of files from the command line
// arguments
const files = process.argv.slice(2)

// expose the test function as a global variable
global.test = test

// Load each file using `require`
files.forEach(file => {
	// Once a file is loaded, it's tests are
	// added to the `tests` singleton variable
	require(file)
})

// Now that all the tests from all the files are
// added, run them one after the other
run()