class Interval {

    static intervals = []

    constructor (params) {
        this.procedure = params.procedure;
        this.frequency = params.frequency;
        this.isPaused = false;
        let interval = this;
        this.id = setInterval(
            function() {
                if(!interval.isPaused)
                    params.procedure();

            },
            params.frequency
        );
    }

    pause() {
        this.isPaused = true;
    }

    unpause() {
        this.isPaused = false;
    }

    clear() {
        clearInterval(this.id);

        let result = [];
        for(let interval of Interval.intervals) {
            if(interval != this) {
                result.push(interval);
            }
        }
    }

    static clearAll () {
        for(let interval of Interval.intervals) {
            clearInterval(interval.id);
        }
        Interval.intervals = [];
    }


}