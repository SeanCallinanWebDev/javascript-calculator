
// 3 main state changes for Calulator
var state = {
    // Retrieves current display state
    getState: function() {
        return this.state;
    },
    // Saves current displayed state for use later
    saveState: function(state, multiplier) {
        this.savedState = state;
        this.savedMultiplier = multiplier
    },
    // Updates state display
    updateState: function(state) {
        this.state = state;
    }
};

var addition = function(firstValue, secondValue) {
    return Number(firstValue) + Number(secondValue);
};

var subtraction = function(firstValue, secondValue) {
    return Number(firstValue) - Number(secondValue);
};

var division = function(firstValue, secondValue) {
    return Number(firstValue) / Number(secondValue);
};

var multiplication = function(firstValue, secondValue) {
    return Number(firstValue) * Number(secondValue);
};

// Basic object that holds valid keys for calculator input
// Also contains function references for calculator multiplication
var keys = {
    validNumerals: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
    validMultipliers: {
        "/": division,
        "*": multiplication,
        "-": subtraction,
        "+": addition
    },
    validReturn: "Enter"
};





function isNumeral(key) {
    for( let i = 0; i < keys.validNumerals.length; i++ ) {
        if( key === keys.validNumerals[i] ) {
            return true;
        }
    }
};

function isMultiplier(key) {
    for( let i = 0; i < Object.keys( keys.validMultipliers ).length; i++ ) {
        if( key === Object.keys( keys.validMultipliers )[i] ) {
            return true;
        }
    }
};

function isReturnKey(key) {
    if( key === keys.validReturn ) {
        return true;
    }
};





var Calculator = Object.create( state );

// Start app for first time
Calculator.startApp = function() {
    // Sets opening state to zero
    this.updateState("0");
    this.getState();
};

// Register and process' Calculator key press
Calculator.registerInput = function(keyValue) {

    // Looks for valid numerals (ie 7, 6)
    if( isNumeral(keyValue) ) {

        // Removes state placeholder of "0" the first time user begins to input numerals into calculator
        if( this.getState() === "0" ) {
            this.updateState("");
        }

        // Stores typed values in a string
        var typedValue = this.getState() + keyValue;

        // Updates current state
        this.updateState(typedValue);
        this.getState();

    }
    
    // Looks for valid multipliers (ie +, -)
    if( isMultiplier(keyValue) ) {
        
        this.saveState( this.getState(), keyValue );
        this.updateState("0");
        this.getState();

    }

    // Looks for return key (ie Enter)
    if( isReturnKey(keyValue) ) {

        console.log(this.savedState, '', this.savedMultiplier, '', this.state);
        console.log("= ", keys.validMultipliers[this.savedMultiplier](this.savedState, this.state) );

    }

};





Calculator.startApp();
Calculator.registerInput("4");
Calculator.registerInput("6");
Calculator.registerInput("7");
Calculator.registerInput("8");
Calculator.registerInput("*");
Calculator.registerInput("4");
Calculator.registerInput("5");
Calculator.registerInput("Enter");