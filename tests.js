const Pyramid = require('./pyramid.js');
const assert = require('assert');

const it = (desc, fn) => {
    try {
        fn();
        console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`);
    } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`);
        console.error(error);
    }
};

it('should return correct value for file small example', () => {
    const pyramid = new Pyramid("resources/pyramid_small.txt");
    assert.strictEqual(pyramid.getFastestSlide(), 7)
});

it('should return correct value for file example', () => {
    const pyramid = new Pyramid("resources/pyramid_example.txt");
    assert.strictEqual(pyramid.getFastestSlide(), 14)
});

it('should return correct value for file a', () => {
    const pyramid = new Pyramid("resources/pyramid_a.txt");
    assert.strictEqual(pyramid.getFastestSlide(), 16)
});

it('should return correct value for file b', () => {
    const pyramid = new Pyramid("resources/pyramid_b.txt");
    assert.strictEqual(pyramid.getFastestSlide(), 447)
});

it('should return correct value after add layer called', () => {
    const pyramid = new Pyramid("resources/pyramid_small.txt");
    pyramid.addLayer([7, 8, 9, 10]);
    assert.strictEqual(pyramid.getFastestSlide(), 14)
});

it('should return correct value after remove layer called', () => {
    const pyramid = new Pyramid("resources/pyramid_example.txt");
    pyramid.removeLayer();
    assert.strictEqual(pyramid.getFastestSlide(), 7)
});

it('should return correct value when not loading from file', () => {
    const pyramid = new Pyramid();
    pyramid.addLayer([1]);
    pyramid.addLayer([2, 3]);
    pyramid.addLayer([4, 5, 6]);
    pyramid.addLayer([7, 8, 9, 10]);
    assert.strictEqual(pyramid.getFastestSlide(), 14)
});

it('should return correct value with only one layer', () => {
    const pyramid = new Pyramid();
    pyramid.addLayer([5]);
    assert.strictEqual(pyramid.getFastestSlide(), 5)
});

it('should return undefined when removing from pyramid without layers', () => {
    const pyramid = new Pyramid();
    assert.strictEqual(pyramid.removeLayer(), undefined)
});

it('should throw an error when first layer does not have length of one', () => {
    const pyramid = new Pyramid();
    const wrapper = () => {
        pyramid.addLayer([1, 1])
    }
    assert.throws(wrapper, Error)
});

it('should throw and error when layer length is wrong', () => {
    const pyramid = new Pyramid();
    pyramid.addLayer([1])
    const wrapper = () => {
        pyramid.addLayer([1, 2, 3])
    }
    assert.throws(wrapper, Error)
});

it('should throw an error if layer is empty', () => {
    const pyramid = new Pyramid();
    const wrapper = () => {
        pyramid.addLayer([])
    }
    assert.throws(wrapper, Error)
});