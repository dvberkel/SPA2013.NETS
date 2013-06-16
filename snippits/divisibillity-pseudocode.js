
var d = 3;
var eta = 0.5;
var ws = generateRandomWeightsFor(nunmberOfInputs);
var b = generateRandomThreshold();
var neuron = createNeuronWith(ws, b);
while (notSatisfied()) {
    var n = pickTrainingTarget();
    var is = convertToBase(n, 2);
    var y = (n % d) ? 1 : 0;
    var o = neuron.signal(is).output();
    if (o !== y) {
        ws = adjustWeights(eta, is, y, ws, o);
        b = adjustThreshold(eta, is, y, b, o);
    }
    var neuron = createNeuronWith(ws, b);
}
