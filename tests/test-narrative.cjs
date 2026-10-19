const fs=require('fs');
const vm=require('vm');
const assert=require('assert');
const script=fs.readFileSync('site/app.js','utf8');
const elements=new Map();
function element(id){
  if(!elements.has(id)) elements.set(id,{addEventListener(){},textContent:'',hidden:false,checked:false,classList:{add(){},remove(){}},offsetWidth:100});
  return elements.get(id);
}
const context=vm.createContext({document:{getElementById:element},Math,Set,setTimeout(){},window:{scrollTo(){}},navigator:{},location:{protocol:'file:'}});
vm.runInContext(script,context);
const topics=['general','love','work','money','wellbeing'];
let checked=0;
for(const topic of topics){
  for(let i=0;i<23;i++){
    context.scenario={topic,index:i};
    vm.runInContext('activeTopic=scenario.topic;activeQuestion="";activeIntent=null;mode=1;selected=[cards[scenario.index]]',context);
    const one=vm.runInContext('verdict()',context);
    assert(one.length>65 && !one.includes('tu pregunta') && !one.includes('undefined'));
    vm.runInContext('mode=3;selected=[cards[scenario.index],cards[(scenario.index+7)%23],cards[(scenario.index+13)%23]]',context);
    const three=vm.runInContext('verdict()',context);
    assert(three.length>110 && !three.includes('tu pregunta') && !three.includes('undefined'));
    checked+=2;
  }
}
assert.strictEqual(checked,230);
assert(vm.runInContext('detectQuestionIntent("¿Me conviene comprar un piso?", "money").topic==="money"',context));
assert(vm.runInContext('detectQuestionIntent("¿Me escribirá?", "general").topic==="love"',context));
console.log(`Correcto: ${checked} lecturas con los 23 naipes y los 5 temas, con y sin síntesis.`);

