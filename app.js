
function findMax(pTemp) {
    let max = pTemp[0];
    for (let i = 0; i < pTemp.length; i++) {
        if(pTemp[i] > max){
            max = pTemp[i];
        }
    }
    console.log(max);
    document.querySelector('#max').value = max;  
}

function findMin(pTemp) {
    let min = pTemp[0];
    for (let i = 0; i < pTemp.length; i++) {
        if(pTemp[i] < min){
            min = pTemp[i];
        }
    }
    console.log(min);
    document.querySelector('#min').value = min;  
}

function findAvg(pTemp) {
    let sum = 0;
    for (let i = 0; i < pTemp.length; i++) {
        sum += pTemp[i];
    }
    let avg = sum/pTemp.length;
    avg = avg.toFixed(2);
    console.log(avg);
    document.querySelector('#avg').value = avg;  
}

function findAboveThreshold(pTemp) {
    let above = 0;
    let below = 0;
    let abovePerc = 0;
    let belowPerc = 0;

    for (let i = 0; i < pTemp.length; i++) {
        if(pTemp[i] >= 26){
            above++;
        }
        else{
            below++;
        }
    }

    above--;
    below--;

    abovePerc = (above/pTemp.length)*100;
    belowPerc = (below/pTemp.length)*100;

    abovePerc = abovePerc.toFixed(2);
    belowPerc = belowPerc.toFixed(2);
    
    console.log(above);
    console.log(below);
    console.log(abovePerc);
    console.log(belowPerc);
    document.querySelector('#above').value = abovePerc;  
    document.querySelector('#below').value = belowPerc;  
}

function check(){
    let temp = [28, 20, 33, 19, 45, 27, 28, 25, 36, 28, 18, 21, 22, 24, 30, 31, 32, 26, 40, 42, 48, 29, 17, 34];
    findMax(temp);
    findMin(temp);
    findAvg(temp);
    findAboveThreshold(temp);
    console.log(temp.length);
}
