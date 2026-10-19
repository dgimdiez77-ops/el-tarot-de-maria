const fs=require('fs');
const vm=require('vm');
const assert=require('assert');
const script=fs.readFileSync('site/app.js','utf8');
const elements=new Map();
function element(id){if(!elements.has(id))elements.set(id,{addEventListener(){},textContent:'',hidden:false,checked:false,classList:{add(){},remove(){}},offsetWidth:100});return elements.get(id);}
const context=vm.createContext({document:{getElementById:element},Math,Set,setTimeout(){},window:{scrollTo(){}},navigator:{},location:{protocol:'file:'}});
vm.runInContext(script,context);
const cases={
  love:['¿Me escribirá Ana?','¿Volverá mi ex?','¿Siente algo por mí?','¿Tendré pareja?','¿Seguiremos juntos en esta relación?','¿Me reconciliaré con mi hermana?','¿Cómo mejorar mi amistad?','¿Qué pasará con mi familia?'],
  work:['¿Aprobaré el examen?','¿Me ascenderán?','¿Cambiaré de trabajo?','¿Conseguiré empleo?','¿Avanzará mi proyecto?','¿Qué pasará con mi carrera?','¿Me darán la beca?','¿Cómo irá mi máster?'],
  money:['¿Me conviene comprar un piso?','¿Podré pagar la deuda?','¿Tendré más ingresos?','¿Puedo ahorrar?','¿Es buen momento para invertir?','¿Cuánto gastaré?','¿Cobraré la factura?','¿Me subirán el salario?'],
  wellbeing:['¿Cómo cuidar mi ansiedad?','¿Dormiré mejor?','¿Debería descansar?','¿Mejorará mi salud?','¿Cómo recuperar el ánimo?','¿Podré seguir con la terapia?','¿Estoy embarazada?','¿Se curará mi madre?'],
  general:['¿Qué decisión debo tomar?','¿Qué me depara esta semana?','¿Conviene esperar?','¿Cómo irá mañana?','¿Qué debería hacer?','¿Podré elegir bien?','¿Cambiará mi futuro?','¿Qué pasará este mes?']
};
let checked=0;
for(const [topic,questions] of Object.entries(cases)) for(const question of questions){
  context.sampleQuestion=question;
  const result=vm.runInContext('detectQuestionIntent(sampleQuestion)?.topic',context);
  assert.strictEqual(result,topic,`${question}: ${result}, esperado ${topic}`);
  checked++;
}
context.sampleQuestion='¿Me escribirá por la entrevista?';
assert.strictEqual(vm.runInContext('detectQuestionIntent(sampleQuestion,"work")?.topic',context),'work');
assert.strictEqual(vm.runInContext('detectQuestionIntent(sampleQuestion,"general")',context),null);
assert(vm.runInContext('isMedicalQuestion("¿Estoy embarazada?") && isMedicalQuestion("¿Se curará mi madre?")',context));
for(const question of ['¿Morirá mi madre?','¿Debo dejar las pastillas?','¿Tiene un tumor?','¿Habrá que operarme?']){
  context.sampleQuestion=question;
  assert(vm.runInContext('isMedicalQuestion(sampleQuestion)',context),`${question}: no detectada como pregunta clínica`);
}
console.log(`Correcto: ${checked} preguntas, preferencia temática y límite sanitario.`);

