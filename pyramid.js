'use strict';
const fs = require('fs');

module.exports = class Pyramid {
    constructor(filePath = "") {
        this.pyramidLayers = [];
        if (!filePath) {
            return;
        }

        fs.readFileSync(`${__dirname}/${filePath}`, 'utf8').split('\n').forEach((line, index) => {
            if (index === 0 || line.length === 0) {
                return;
            }
            const layer = line.split(' ').map(Number)
            this.addLayer(layer)
        });
    }

    addLayer(layer) {
        if (layer.length === 0) {
            throw new Error("Layer length must be greater than 0")
        }

        if (this.pyramidLayers.length === 0 && layer.length !== 1) {
            throw new Error("First layer must have a length of 1")
        }

        if (this.pyramidLayers.length !== 0 && layer.length !== this.pyramidLayers[this.pyramidLayers.length - 1].length + 1)
            throw new Error("Layer length must be one more than the previous layer")

        this.pyramidLayers.push(layer);
    }

    removeLayer() {
        return this.pyramidLayers.pop()
    }

    getFastestSlide() {
        if (this.pyramidLayers.length === 0) {
            return undefined;
        }

        if (this.pyramidLayers.length === 1) {
            return this.pyramidLayers[0][0];
        }

        //For each layer, take the minimum of every number's children and add it to itself until at the top of the pyramid
        const reduced = this.pyramidLayers.reduceRight((lastLayer, item, index) => {

            //Skip the last row of the pyramid
            if (index === this.pyramidLayers.length - 1)
                return lastLayer;


            return item.map((number, numberIndex) => {
                return number + Math.min(lastLayer[numberIndex], lastLayer[numberIndex + 1])
            })
        }, this.pyramidLayers[this.pyramidLayers.length - 1]);

        return reduced[0];
    }

}