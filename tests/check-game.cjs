const fs=require('fs');
const vm=require('vm');
const assert=require('assert');
const html=fs.readFileSync('site/index.html','utf8');
const script=fs.readFileSync('site/app.js','utf8');
const elements=new Map();
function element(id){
  if(!elements.has(id)) elements.set(id,{addEventListener(){},textContent:'',hidden:false,checked:false,classList:{add(){},remove(){}},offsetWidth:100});
  return elements.get(id);
}
const context=vm.createContext({document:{getElementById:element},Math,Set,setTimeout(){},window:{scrollTo(){}},navigator:{},location:{protocol:'file:'}});
vm.runInContext(script,context);
assert.strictEqual(vm.runInContext('cards.length',context),23);
assert(vm.runInContext('Object.values(themes).every(theme=>theme.placeholder&&theme.placeholder.startsWith("Ej.:"))',context));
assert(vm.runInContext('new Set(cards.map(c=>c.id)).size===23',context));
assert(vm.runInContext('cards.slice(0,22).map(c=>c.n).join(",")==="0,I,II,III,IV,V,VI,VII,VIII,IX,X,XI,XII,XIII,XIV,XV,XVI,XVII,XVIII,XIX,XX,XXI"',context));
assert(vm.runInContext('cards[22].id==="gemini" && cards[22].n==="G"',context));
assert(vm.runInContext('cards.every(c=>c.text&&c.question&&cardMoods[c.id]&&cardCues[c.id]&&story[c.id]&&front(c).includes(`tarot-art/${c.id}.webp`))',context));
assert(vm.runInContext('cards.every(c=>["love","work","money","wellbeing"].every(t=>predictions[c.id][t]))',context));
for(const id of vm.runInContext('cards.map(c=>c.id)',context)) assert(fs.existsSync(`site/tarot-art/${id}.webp`),`Falta ilustración ${id}`);
for(const [question,topic] of [['¿Me escribirá Ana?','love'],['¿Volverá mi ex?','love'],['¿Aprobaré el examen?','work'],['¿Avanzará mi proyecto?','work'],['¿Me conviene comprar un piso?','money']]){
  context.sampleQuestion=question;
  assert.strictEqual(vm.runInContext('detectQuestionIntent(sampleQuestion)?.topic',context),topic);
}
vm.runInContext('deck=cards.filter(c=>c.id!=="gemini");lastIds=""',context);
assert(vm.runInContext('chooseCards(3,()=>0).some(c=>c.id==="gemini")',context));
assert(vm.runInContext('chooseCards(3,()=>0).some(c=>c.reversed)',context));
vm.runInContext('mode=3;selected=[cards[0],cards[10],cards[22]];activeTopic="money";activeQuestion="¿Me conviene comprar un piso?";activeIntent=detectQuestionIntent(activeQuestion)',context);
assert(vm.runInContext('verdict().includes("Géminis es la carta personal de María")&&verdict().includes("Sobre tu pregunta")',context));
assert(vm.runInContext('meaningFor(selected[0],0).length>20&&meaningFor(selected[1],1).length>20&&meaningFor(selected[2],2).length>20',context));
vm.runInContext(`setMemoryEnabled(true);setJournal([
  {id:'m1',createdAt:'2026-10-01T10:00:00Z',topic:'love',cards:[{id:'lovers',name:'Los Enamorados'}],question:'¿Me escribirá esta persona?',memoryUsed:true},
  {id:'m2',createdAt:'2026-10-02T10:00:00Z',topic:'love',cards:[{id:'moon',name:'La Luna'}],question:'¿Cuándo me escribirá esta persona?',memoryUsed:true}
]);activeTopic='love';activeQuestion='¿Me escribirá esta persona otra vez?'`,context);
assert(vm.runInContext('memoryProfile().total===2&&memoryProfile().topTopic==="love"',context));
assert(vm.runInContext('memoryContext().includes("ya ha aparecido")',context));
assert(vm.runInContext('currentReading().memoryUsed===true',context));
vm.runInContext('setMemoryEnabled(false)',context);
assert.strictEqual(vm.runInContext('memoryContext()',context),'');
assert(!vm.runInContext('shareText().includes("Pregunta:")',context));
element('include-question').checked=true;
assert(vm.runInContext('shareText().includes("Pregunta:")',context));
assert(vm.runInContext('siteUrl()==="https://mariapredice.com/"',context));
for(const id of ['draw-one','draw-three','synthesis','download-result','share-result','include-question','privacy','memory-enabled','memory-summary','memory-clear']) assert(html.includes(`id="${id}"`));
assert(html.includes('property="og:image"'));
console.log('Correcto: 23 cartas e imágenes, lecturas temáticas, Géminis, inversión, veredicto y privacidad al compartir.');

