// TODO:
// 1. Initialize H5 model 
// 2. Visualize data prediction in graph

import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import modelJson from '../../src/assets/model.json';

async function getModel() {
    const model = await tf.loadLayersModel(modelJson);

    return model;
}




