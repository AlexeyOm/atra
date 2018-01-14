function calculateMacro(depot, lastPrice, firstStep, coverage, numberOfOrders, strategy, martingale = 0, log = false) {
    
    console.log(arguments);
    
    let macroOrders = [];
    
    firstStep = strategy === 'BUY' ? firstStep : -firstStep;
    let netStep = lastPrice * (coverage - firstStep)/100 / (numberOfOrders - 1 ); 
    netStep = strategy === 'BUY' ? netStep : -netStep;
    
    
    
    console.log('netStep = ' + netStep);
    
    for(let i = 0; i < numberOfOrders; i++) {
        macroOrders.push([lastPrice * (1 - firstStep/100) - i * netStep, 1]);
    }
    
    return macroOrders;
}

module.exports = {
      macro : calculateMacro
};