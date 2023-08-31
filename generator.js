function* steps() {


    console.log('Step 1');
    yield 'Step1'

    console.log('Step 2');

    yield 'step 2'
    
}


let stg = steps()

function callSteps() {
    
    console.log(stg.next());
}