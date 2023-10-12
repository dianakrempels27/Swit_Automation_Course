class Car {
    constructor(model) {
        this.model = model;
        this.color = "";
        this.year = 0;
        this.count = 0;
    }

    get() {
        return {
            model: this.model,
            color: this.color,
            year: this.year,
            count:this.count
        };
    }
}

module.exports = Car;