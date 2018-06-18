var state = {
    getState: function() {
        return this.state;
    },
    saveState: function(state, multiplier) {
        this.savedState = state;
        this.savedMultiplier = multiplier
        console.log(this.savedState, this.savedMultiplier);
    },
    updateState: function(state) {
        this.state = state;
    }
};

var keys = {
    validNumerals: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
    validMultipliers: [ "/", "*", "-", "+" ]
};

var Calculator = Object.create( state );

function isNumeral(key) {
    for( let i = 0; i < keys.validNumerals.length; i++ ) {
        if( key === keys.validNumerals[i] ) {
            return true;
        }
    }
};

function isMultiplier(key) {
    for( let i = 0; i < keys.validMultipliers.length; i++ ) {
        if( key === keys.validMultipliers[i] ) {
            return true;
        }
    }
};

Calculator.startApp = function() {
    this.updateState("0");
    console.log( this.getState() );
};

Calculator.registerInput = function(keyValue) {

    if( isNumeral(keyValue) ) {

        // Removes state placeholder of "0" the first time user begins to input numerals into calculator
        if( this.getState() === "0" ) {
            this.updateState("");
        }

        // Stores typed values in a string
        var typedValue = this.getState() + keyValue;

        // Updates state
        this.updateState(typedValue);

        console.log( this.getState() );

    }
        
    if( isMultiplier(keyValue) ) {
        
        this.saveState( this.getState(), keyValue );
        this.updateState("0");

        console.log( this.getState() );

    }

};


// Calculator.startApp();
// Calculator.registerInput("5");
// Calculator.registerInput("2");
// Calculator.registerInput("-");
// Calculator.registerInput("2");
// Calculator.registerInput("4");

var obj = {
    "/": function(){},
    "*": function(){},
    "-": function(){},
    "+": function(){}
};

console.log(Object.keys(obj)[2]);