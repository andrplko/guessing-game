class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.assumption = Math.round(this.maxValue - ((this.maxValue - this.minValue) / 2));
        return this.assumption;
    }

    lower() {
        this.maxValue = this.assumption;
    }

    greater() {
        this.minValue = this.assumption;
    }
}

module.exports = GuessingGame;
