import {INCREMENT, DECREMENT, counter} from './counter';

describe("counter", () => {
    it("should increment and decrement", () => {
        expect(counter(0, {type: INCREMENT})).toEqual(1);
        expect(counter(0, {type: DECREMENT})).toEqual(-1);
        expect(counter(0, {})).toEqual(0);
        expect(counter(undefined, {})).toEqual(0);
    })
});

