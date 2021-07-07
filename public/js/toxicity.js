const threshold = 0.9;

function setup() {
}

function classifyText(){
  clearCheckboxes()
  toxicity.load(threshold).then(model => {
      let text = [select('#text').value()];
      model.classify(text).then(predictions => {
        predictions.forEach(showPrediction);
      });
    });

}

function clearCheckboxes(){
  select('#toxicity').elt.checked = false
  select('#identity_attack').elt.checked = false
  select('#insult').elt.checked = false
  select('#obscene').elt.checked = false
  select('#severe_toxicity').elt.checked = false
  select('#sexual_explicit').elt.checked = false
  select('#threat').elt.checked = false

}
function showPrediction(item, index){

  if(item.results[0].match == true){
    console.log(item.label + ":" + item.results[0].match);
    select('#' + item.label).elt.checked = true
  }

}