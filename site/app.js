"use strict";
    const icons = {
      fool:'<path d="M19 86q25-18 43-8t39-9"/><path d="M28 79l14-24 13 2 13 22M43 55l-5-18 15-7 10 11-8 16M56 32q5-11 17-11M78 83l11-33 8-8M83 62l15 6"/><circle cx="47" cy="23" r="11"/><path d="M21 93q18-10 31-2m28 1q15-10 28 0"/>',
      magician:'<path d="M60 23c-19-17-27 12-8 9 16-3 8-18 1-13m7 4c19-17 27 12 8 9-16-3-8-18-1-13"/><circle cx="60" cy="46" r="11"/><path d="M60 57v27M39 89h42M33 57l27-10 27 10M28 69h64M40 68l-7 18h14l-7-18m40 0l-7 18h14l-7-18"/>',
      priestess:'<path d="M28 91V23h13v68m38 0V23h13v68M24 92h72M24 22h72M41 34q19-18 38 0M60 33v48M47 82h26M53 44q7-11 14 0M49 59q11 8 22 0"/><circle cx="60" cy="15" r="8"/>',
      empress:'<path d="M20 91q12-21 40-20 28-1 40 20M44 72l-8-36 24 7 24-7-8 36M37 35l6-17 17 13 17-13 6 17M60 43v28M21 54q-6-9 0-18 9 4 8 14m70 4q6-9 0-18-9 4-8 14"/><circle cx="60" cy="12" r="5"/>',
      emperor:'<path d="M29 91V45l14-9 17 8 17-8 14 9v46M22 92h76M38 74h44M43 44v29m34-29v29M44 35l-7-16 14 5 9-13 9 13 14-5-7 16M52 54h16"/><path d="M25 62l-8-11m78 11l8-11"/>',
      lovers:'<path d="M60 82C18 55 26 25 43 28c10 1 14 9 17 13 3-4 7-12 17-13 17-3 25 27-17 54Z"/><path d="M60 20V9M34 23l-8-9m60 9 8-9M39 88q20-10 42 0M31 94q29-8 58 0"/><circle cx="60" cy="54" r="9"/>',
      chariot:'<path d="M20 75h80l-9 16H29l-9-16ZM29 75l8-37h46l8 37M44 37V20h32v17M60 18V8M38 91l-5 7m54-7 5 7"/><circle cx="39" cy="80" r="4"/><circle cx="81" cy="80" r="4"/><path d="M45 54l15 11 15-11"/>',
      strength:'<path d="M20 83q5-20 23-23 11-2 17 5 6-7 17-5 18 3 23 23M31 80q10 10 29 2 19 8 29-2M44 60l-6-15 12 6m26 9 6-15-12 6M48 68h3m18 0h3M54 77q6 5 12 0"/><path d="M60 24c-19-17-27 12-8 9 16-3 8-18 1-13m7 4c19-17 27 12 8 9-16-3-8-18-1-13"/>',
      hermit:'<path d="M40 91q1-33 20-57 19 24 20 57M34 92h52M45 49q15-8 30 0M50 61h20M60 61v29M24 88V30m-8 1h16l-3 19H19l-3-19ZM24 23v8M91 93V24M88 24h6"/><circle cx="24" cy="41" r="4"/>',
      wheel:'<circle cx="60" cy="54" r="35"/><circle cx="60" cy="54" r="24"/><circle cx="60" cy="54" r="6"/><path d="M60 19v29m0 12v29M25 54h29m12 0h29M35 29l20 20m10 10 20 20M85 29L65 49M55 59 35 79"/><path d="M60 7v7m0 80v7M13 54h7m80 0h7"/>',
      justice:'<path d="M60 13v74M32 89h56M42 80h36M37 27h46M60 26L31 37m29-11 29 11M31 37l-9 29h18l-9-29m58 0-9 29h18l-9-29M18 67h26m32 0h26"/><circle cx="60" cy="16" r="6"/>',
      star:'<path d="m60 14 8 28 28 8-28 8-8 28-8-28-28-8 28-8 8-28Z"/><path d="M26 19l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Zm68 52 2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z"/><path d="M17 95q17-10 34 0t34 0 18 0"/>',
      hierophant:'<path d="M60 12v63M43 28h34M37 46h46M30 88h60M40 76q20-11 40 0M23 82l12-10m62 10L85 72"/><circle cx="60" cy="13" r="5"/>',
      death:'<path d="M24 86q19-17 36 0 17-17 36 0M60 84V24M45 40q15-26 30 0M37 68l46-21M31 94h58"/><circle cx="60" cy="20" r="7"/>',
      temperance:'<path d="M34 27l6 36h24l6-36H34Zm40 18 6 36h24l6-36H74ZM52 56q15-12 31-4M20 92h82M58 16v16m-8-8h16"/>',
      devil:'<path d="M35 25l-9-13m59 13 9-13M35 25q25-15 50 0l-8 31H43l-8-31ZM37 76q23 18 46 0M26 75l15-10m53 10L79 65"/><circle cx="50" cy="40" r="3"/><circle cx="70" cy="40" r="3"/>',
      tower:'<path d="M40 88V34h40v54M32 89h56M45 20l15 10 15-10M55 45h10v14H55zM37 10l14 15-8 3 9 12"/>',
      moon:'<path d="M73 16a33 33 0 1 0 0 65 27 27 0 1 1 0-65ZM20 87q20-13 40 0t40 0M27 42V24h10v18m46 0V24h10v18"/>',
      sun:'<circle cx="60" cy="53" r="22"/><path d="M60 10v13m0 60v13M17 53h13m60 0h13M29 22l10 10m42 42 10 10M91 22 81 32M39 74 29 84"/>',
      judgement:'<path d="M19 35h55l19 13-19 13H19V35ZM74 43l17-14M41 62v27m20-27v27M29 91h45M60 20v9"/><circle cx="60" cy="13" r="5"/>',
      world:'<ellipse cx="60" cy="53" rx="31" ry="39"/><path d="M47 51q13-20 26 0M60 37v36M43 72q17 12 34 0M18 16h13m58 0h13M18 90h13m58 0h13"/><circle cx="60" cy="31" r="6"/>'
    };
    const cards = [
      {id:'fool',n:'0',name:'El Loco',text:'Puede abrirse una oportunidad inesperada. Un primer paso espontáneo podría llevarte a algo nuevo.',question:'La señal: una invitación que no habías previsto.'},
      {id:'magician',n:'I',name:'El Mago',text:'Una idea pendiente parece lista para convertirse en acción. Una conversación podría darte el impulso.',question:'La señal: alguien pide tu iniciativa.'},
      {id:'priestess',n:'II',name:'La Sacerdotisa',text:'Quizá falte una información importante. Observar antes de responder puede mostrarte un detalle nuevo.',question:'La señal: un detalle que antes pasaste por alto.'},
      {id:'empress',n:'III',name:'La Emperatriz',text:'Un proyecto o vínculo al que has dedicado atención puede empezar a mostrar avances.',question:'La señal: una respuesta cálida o un pequeño resultado.'},
      {id:'emperor',n:'IV',name:'El Emperador',text:'Poner orden en un asunto disperso puede ayudarte. Un acuerdo claro daría estabilidad al siguiente paso.',question:'La señal: una decisión que deja de aplazarse.'},
      {id:'hierophant',n:'V',name:'El Sumo Sacerdote',text:'Un consejo o una tradición te ayudará a entender el siguiente paso. Escucha y conserva tu propio criterio.',question:'La señal: una persona con experiencia te ofrece una clave.'},
      {id:'lovers',n:'VI',name:'Los Enamorados',text:'Una elección importante puede acercarse. Escuchar lo que de verdad quieres te ayudará a responder.',question:'La señal: dos caminos igualmente atractivos.'},
      {id:'chariot',n:'VII',name:'El Carro',text:'Algo que parecía detenido puede ponerse en marcha. Mantener una dirección concreta favorecería el avance.',question:'La señal: una noticia que acelera tus planes.'},
      {id:'strength',n:'VIII',name:'La Fuerza',text:'Una tensión podría suavizarse si respondes con calma. La paciencia puede tener más efecto que la prisa.',question:'La señal: una conversación que pide tacto.'},
      {id:'hermit',n:'IX',name:'El Ermitaño',text:'Un momento a solas te ayudará a entender una situación confusa. Después verás con más claridad qué hacer.',question:'La señal: ganas de parar y pensar.'},
      {id:'wheel',n:'X',name:'La Rueda',text:'Un cambio de planes puede mostrarte una opción que ahora no contemplas. La flexibilidad jugaría a tu favor.',question:'La señal: un giro en una fecha o propuesta.'},
      {id:'justice',n:'XI',name:'La Justicia',text:'Un malentendido puede aclararse al conocer mejor los hechos. Comprueba cada versión antes de decidir.',question:'La señal: una explicación pendiente.'},
      {id:'hanged',n:'XII',name:'El Colgado',text:'Una pausa puede cambiar tu manera de ver algo importante. Lo detenido quizá empiece a tener otro sentido.',question:'La señal: una respuesta que llega al dejar de insistir.'},
      {id:'death',n:'XIII',name:'La Muerte',text:'Una etapa parece acercarse a su fin. Soltar lo que ya terminó puede darte margen para avanzar.',question:'La señal: un cierre que trae alivio.'},
      {id:'temperance',n:'XIV',name:'La Templanza',text:'Dos necesidades podrán encontrar un punto de equilibrio. La paciencia hará más fácil el acuerdo.',question:'La señal: una conversación que baja el tono.'},
      {id:'devil',n:'XV',name:'El Diablo',text:'Reconocerás un hábito o compromiso que te limita. Una pequeña decisión puede devolverte libertad.',question:'La señal: algo que haces por inercia.'},
      {id:'tower',n:'XVI',name:'La Torre',text:'Una novedad podría alterar un plan que parecía firme. Después del sobresalto quizá veas una base más clara.',question:'La señal: una noticia que obliga a replantear.'},
      {id:'star',n:'XVII',name:'La Estrella',text:'Una señal de ánimo puede aparecer tras una etapa de dudas. Una posibilidad vuelve a parecer cercana.',question:'La señal: un mensaje que renueva la ilusión.'},
      {id:'moon',n:'XVIII',name:'La Luna',text:'Una situación todavía tendrá zonas poco claras. Deja pasar la primera impresión y busca una señal comprobable.',question:'La señal: una duda que pide más contexto.'},
      {id:'sun',n:'XIX',name:'El Sol',text:'Una noticia clara o un encuentro agradable puede dar impulso a tus planes. Quizá haya algo que celebrar y compartir.',question:'La señal: una respuesta abierta y sencilla.'},
      {id:'judgement',n:'XX',name:'El Juicio',text:'Un asunto pendiente puede volver con la oportunidad de mirarlo de otra forma. Puedes elegir una respuesta nueva.',question:'La señal: una llamada o decisión que reactiva algo.'},
      {id:'world',n:'XXI',name:'El Mundo',text:'Un proceso parece acercarse a completarse. Reconocer lo conseguido puede ayudarte a elegir el siguiente horizonte.',question:'La señal: un cierre concreto o una meta cumplida.'},
      {id:'gemini',n:'G',name:'Géminis',text:'La energía personal de María entra en la tirada: curiosidad, conversación y dos perspectivas que merecen ser escuchadas.',question:'La señal: alguien con una mirada distinta.'}
    ];
    const themes = {
      general:{label:'Pregunta general',lead:'Puedes empezar sin escribir nada.',placeholder:'Ej.: ¿Qué necesito saber ahora?'},
      love:{label:'Amor y vínculos',lead:'Piensa en la persona o el vínculo que ocupa tu mente.',placeholder:'Ej.: ¿Me escribirá esa persona?'},
      work:{label:'Trabajo y estudios',lead:'Concéntrate en el proyecto o decisión que tienes delante.',placeholder:'Ej.: ¿Avanzará mi proyecto?'},
      money:{label:'Dinero',lead:'Piensa en una decisión económica concreta.',placeholder:'Ej.: ¿Me conviene hacer esta compra?'},
      wellbeing:{label:'Bienestar',lead:'Dedica este momento a lo que necesitas cuidar de ti.',placeholder:'Ej.: ¿Qué necesito cuidar de mí?'}
    };
    const predictions = {
      fool:{love:'Alguien nuevo puede acercarse de forma inesperada. Da espacio a la curiosidad antes de decidir qué significa.',work:'Una propuesta poco habitual puede abrirte un camino. Explórala antes de descartarla.',money:'Puede aparecer un gasto o una oportunidad imprevista. Revisa sus detalles antes de lanzarte.',wellbeing:'Un cambio pequeño en tu rutina puede devolverte entusiasmo. Prueba algo que te apetezca.'},
      magician:{love:'Una conversación iniciada por ti puede acercar posturas. Di con claridad lo que quieres.',work:'Tienes herramientas para impulsar una idea pendiente. El primer paso depende de ti.',money:'Una habilidad tuya puede ayudarte a mejorar una situación económica. Concreta cómo usarla.',wellbeing:'Tomar la iniciativa con un hábito sencillo puede darte una sensación de mayor control.'},
      priestess:{love:'Un gesto discreto puede ayudarte a comprender mejor a alguien. Observa antes de sacar conclusiones.',work:'Una información relevante puede llegar más tarde de lo esperado. Escucha y reúne datos.',money:'Antes de comprometer dinero, quizá falte un dato que conviene revisar con calma.',wellbeing:'Un momento de silencio puede ayudarte a reconocer qué necesitas realmente.'},
      empress:{love:'Un vínculo al que has dedicado cariño puede crecer. Haz sitio para compartir tiempo de calidad.',work:'Un proyecto cuidado con constancia puede dar señales de avance.',money:'Una inversión de tiempo o recursos puede empezar a rendir frutos. Sigue cuidando los detalles.',wellbeing:'Crear un espacio agradable para ti puede ayudarte a recuperar energía.'},
      emperor:{love:'Poner un límite claro puede dar estabilidad a una relación. Exprésalo con respeto.',work:'Una estructura nueva te ayudará a ordenar tareas y tomar una decisión pendiente.',money:'Organizar cifras y prioridades te dará más margen para elegir el siguiente paso.',wellbeing:'Una rutina realista puede darte la estabilidad que buscas estos días.'},
      hierophant:{love:'Un consejo puede ayudarte a hablar de lo que ambos esperáis. Conserva tu propia voz.',work:'Una persona con experiencia puede orientarte en un trámite o aprendizaje.',money:'Antes de firmar o pagar, consulta las condiciones con alguien de confianza.',wellbeing:'Un hábito sencillo y compartido puede darte continuidad; adapta el consejo a ti.'},
      lovers:{love:'Puede llegar una elección afectiva. Escucha tus deseos y habla con honestidad.',work:'Dos caminos profesionales pueden parecer atractivos. Aclara qué valoras más antes de elegir.',money:'Tal vez debas escoger entre dos prioridades. Decide cuál encaja mejor con tus planes.',wellbeing:'Elegir a qué dedicar tu tiempo puede ayudarte a sentirte más en sintonía contigo.'},
      chariot:{love:'Un vínculo puede avanzar si alguien se atreve a proponer un encuentro o una conversación.',work:'Una tarea estancada puede ponerse en marcha. Mantén el rumbo y aprovecha el impulso.',money:'Un plan de ahorro o pago puede avanzar si sostienes una dirección clara.',wellbeing:'Un objetivo pequeño y concreto puede ayudarte a recuperar impulso.'},
      strength:{love:'La paciencia puede suavizar una tensión. Una respuesta amable puede abrir más espacio que una reacción rápida.',work:'Una dificultad puede resolverse con constancia y tacto. Confía en lo que ya sabes hacer.',money:'La calma puede ayudarte a evitar una decisión impulsiva y proteger tus prioridades.',wellbeing:'Tratarte con paciencia puede ayudarte más que exigirte un cambio inmediato.'},
      hermit:{love:'Tomar un poco de distancia puede ayudarte a comprender lo que sientes antes de hablar.',work:'Un rato de reflexión puede mostrarte una salida que el ruido diario ocultaba.',money:'Revisar tus cuentas a solas puede aclarar una decisión que venías posponiendo.',wellbeing:'Reservar tiempo para ti puede darte claridad sobre lo que te está cansando.'},
      wheel:{love:'Un encuentro o cambio de planes puede alterar una historia afectiva. Mantente abierta a lo inesperado.',work:'Una novedad puede cambiar el calendario de un proyecto y abrir otra opción.',money:'Una circunstancia puede modificar tus planes. Deja un margen antes de comprometerte.',wellbeing:'Una variación en tu rutina puede mostrarte una forma distinta de cuidarte.'},
      justice:{love:'Una conversación sincera puede aclarar un malentendido. Escucha también la otra versión.',work:'Una decisión puede resolverse cuando se revisen los hechos. Ten a mano lo que necesitas explicar.',money:'Un documento o una cifra pendiente puede aclararse. Comprueba la información antes de decidir.',wellbeing:'Mirar tus necesidades con honestidad puede ayudarte a ajustar tus compromisos.'},
      hanged:{love:'Dar tiempo a una relación puede mostrarte algo que no veías. Evita forzar una respuesta.',work:'Una pausa en el proyecto puede revelar un enfoque mejor. Aprovecha para mirar desde otro ángulo.',money:'Retrasar una compra puede ayudarte a distinguir entre deseo y necesidad.',wellbeing:'Bajar el ritmo por un momento puede darte una perspectiva nueva sobre tus hábitos.'},
      death:{love:'Un vínculo puede cambiar de forma cuando se cierre una conversación pendiente.',work:'Una etapa de trabajo termina y deja espacio para otra tarea o dirección.',money:'Cerrar un gasto recurrente puede liberar margen para una prioridad nueva.',wellbeing:'Dejar atrás una exigencia que ya no te sirve puede abrir una rutina más amable.'},
      temperance:{love:'Una conversación tranquila puede acercar dos necesidades distintas.',work:'Coordinar ritmos y expectativas puede mejorar un proyecto compartido.',money:'Ajustar pequeñas partidas de tu presupuesto puede devolverle equilibrio.',wellbeing:'Un cambio gradual y sostenible puede sentarte mejor que una exigencia brusca.'},
      devil:{love:'Observa si repites una dinámica que te ata. Ponerle nombre puede ayudarte a elegir.',work:'Un compromiso que parecía imprescindible puede estar limitando tus opciones.',money:'Una compra impulsiva puede tentarte; espera antes de comprometer tu dinero.',wellbeing:'Detectar un hábito automático puede ser el primer paso para cambiarlo sin culpa.'},
      tower:{love:'Una verdad inesperada puede mover una relación. Hablar con claridad ayuda a decidir.',work:'Un cambio de planes puede deshacer una estructura rígida y mostrar otra salida.',money:'Un imprevisto puede pedir que revises tu margen antes de una compra.',wellbeing:'Si una rutina deja de funcionar, quizá necesites reorganizarla con más realismo.'},
      star:{love:'Un gesto de confianza puede renovar la ilusión en un vínculo o abrirte a otro.',work:'Una señal de apoyo puede devolverte confianza en un proyecto que parecía lejano.',money:'Una mejora pequeña puede animarte a seguir con un plan a largo plazo.',wellbeing:'Una actividad que te ilusiona puede ayudarte a recuperar ánimo esta semana.'},
      moon:{love:'Una señal ambigua puede confundirte. Pregunta antes de llenar los silencios con suposiciones.',work:'Un dato todavía poco claro puede cambiar tu lectura de una propuesta.',money:'Revisa las condiciones que no entiendes antes de decidir sobre dinero.',wellbeing:'Una inquietud puede aliviarse al ponerle palabras y buscar apoyo concreto.'},
      sun:{love:'Un encuentro o respuesta clara puede traer alegría y cercanía.',work:'Un avance visible puede darte confianza para mostrar lo que has hecho.',money:'Una mejora concreta puede aclarar tus próximos pasos económicos.',wellbeing:'Compartir tiempo al aire libre o con alguien querido puede renovar tu energía.'},
      judgement:{love:'Una conversación pendiente puede volver y permitir una respuesta más consciente.',work:'Una evaluación o noticia puede darte ocasión de retomar un plan.',money:'Revisar una decisión anterior puede abrir una salida más conveniente.',wellbeing:'Mirar lo que has aprendido puede ayudarte a elegir un cambio realista.'},
      world:{love:'Un vínculo puede llegar a una etapa más definida; reconoce lo que habéis construido.',work:'Un proyecto puede cerrarse con un resultado que merece ser reconocido.',money:'Completar un objetivo de ahorro o pago puede darte más margen para planear.',wellbeing:'Reconocer un progreso sostenido puede ayudarte a mantener lo que te hace bien.'},
      gemini:{love:'Una conversación puede abrir dos maneras de entender un vínculo. Escucha sin apresurarte.',work:'Alguien te ofrecerá otra perspectiva sobre un proyecto. Puede cambiar tu próximo paso.',money:'Comparar dos opciones con calma te ayudará a detectar un detalle valioso.',wellbeing:'Hablar con alguien de confianza puede ayudarte a ordenar lo que sientes.'}
    };
    const $ = id => document.getElementById(id);
    const cardMoods = {
      fool:'open',magician:'open',priestess:'pause',empress:'open',emperor:'mixed',hierophant:'mixed',
      lovers:'mixed',chariot:'open',strength:'mixed',hermit:'pause',wheel:'mixed',
      justice:'mixed',hanged:'pause',death:'mixed',temperance:'open',devil:'pause',tower:'mixed',
      star:'open',moon:'pause',sun:'open',judgement:'mixed',world:'open',gemini:'mixed'
    };
    const cardCues = {
      fool:'El Loco invita a dejar sitio a lo inesperado.',
      magician:'El Mago destaca el efecto de tu iniciativa.',
      priestess:'La Sacerdotisa pide observar una señal antes de concluir.',
      empress:'La Emperatriz favorece lo que has cuidado con constancia.',
      emperor:'El Emperador aconseja concretar límites y acuerdos.',
      hierophant:'El Sumo Sacerdote trae un consejo; tú decides cómo aplicarlo.',
      lovers:'Los Enamorados ponen el foco en una elección compartida.',
      chariot:'El Carro habla de movimiento cuando hay una dirección clara.',
      strength:'La Fuerza sugiere paciencia y una conversación cuidadosa.',
      hermit:'El Ermitaño recomienda pensar sin prisa.',
      wheel:'La Rueda anuncia un giro en las circunstancias.',
      justice:'La Justicia pide comprobar los hechos.',
      hanged:'El Colgado muestra que una pausa puede cambiar la perspectiva.',
      death:'La Muerte habla de cerrar una etapa para abrir otra.',
      temperance:'La Templanza señala un acuerdo construido con paciencia.',
      devil:'El Diablo invita a reconocer lo que te ata.',
      tower:'La Torre anuncia que un plan puede necesitar una base nueva.',
      star:'La Estrella señala una posibilidad que vuelve a ilusionarte.',
      moon:'La Luna pide comprobar lo que aún es confuso.',
      sun:'El Sol trae claridad y una alegría compartida.',
      judgement:'El Juicio permite responder de otra manera a algo conocido.',
      world:'El Mundo marca un cierre y un logro reconocible.',
      gemini:'Géminis trae a la lectura la mirada de María: curiosidad, conversación y una segunda perspectiva.'
    };
    const questionIntents = [
      {topic:'love',pattern:/\b(escrib|mensaje|whatsapp|llam|contact|hablar con|responder|contest)/,answers:{open:'Puede abrirse una conversación o llegar un mensaje. Una iniciativa sencilla puede facilitarlo.',mixed:'El contacto es posible, aunque dependerá de una decisión o un cambio de circunstancias.',pause:'Por ahora aparece una espera en la comunicación. El silencio no da una respuesta definitiva.'}},
      {topic:'love',pattern:/\b(volver|regres|reconcili|ex pareja|mi ex|retomar)/,answers:{open:'Hay una posibilidad de reencuentro. Hará falta hablar de lo que cambió entre vosotros.',mixed:'El reencuentro depende de que ambas personas elijan acercarse; la carta no lo da por hecho.',pause:'La carta señala distancia por ahora. Conviene dejar espacio antes de esperar una vuelta.'}},
      {topic:'love',pattern:/\b(siente|sentimient|quiere|ama|enamorad|gusto|interesad)/,answers:{open:'Puede haber interés y una apertura afectiva. Una conversación te dará una señal más clara.',mixed:'Los sentimientos pueden estar mezclados. Fíjate en los actos antes de interpretarlos.',pause:'La carta no permite saber lo que esa persona siente en privado. Espera una señal concreta o pregúntalo con calma.'}},
      {topic:'love',pattern:/\b(conocer a alguien|encontrar pareja|tendre pareja|nuevo amor|salir con alguien|cita)/,answers:{open:'Puede aparecer una oportunidad de conocer a alguien. Estar disponible para un encuentro puede acercarla.',mixed:'Puede surgir un vínculo, aunque antes tendrás que aclarar qué buscas.',pause:'Esta carta invita a mirar qué deseas antes de buscar un vínculo nuevo.'}},
      {topic:'love',pattern:/\b(pareja|relacion|novi|casar|compromiso|separar|dejarle|dejarla)/,answers:{open:'La relación puede avanzar si hay una conversación sincera y una intención compartida.',mixed:'El futuro de la relación depende de una decisión de los dos. Conviene hablar de lo que cada uno necesita.',pause:'La carta pide detenerse antes de decidir sobre la relación. Observa lo que se repite entre vosotros.'}},
      {topic:'work',pattern:/\b(examen|oposicion|aprobar|suspender|nota|estudi|universidad)/,answers:{open:'Hay buenas señales para ese examen o estudio si mantienes la preparación y el ritmo.',mixed:'El resultado dependerá de cómo organices el tiempo y revises lo que falta.',pause:'Aún no se ve un resultado claro. Repasar con calma puede ayudarte más que apresurarte.'}},
      {topic:'work',pattern:/\b(ascens|ascend|promocion|subida de sueldo|aumento de sueldo)/,answers:{open:'Puede abrirse una oportunidad de ascenso o mejora. Haz visibles tus logros.',mixed:'La mejora es posible, pero puede requerir una conversación y criterios claros.',pause:'La carta señala demora en ese reconocimiento. Reúne argumentos antes de insistir.'}},
      {topic:'work',pattern:/\b(cambiar de trabajo|dejar mi trabajo|renunci|otro trabajo|nuevo trabajo)/,answers:{open:'Un cambio de trabajo puede abrir una etapa favorable. Revisa la propuesta concreta antes de moverte.',mixed:'El cambio es una opción, pero compara estabilidad y posibilidades antes de decidir.',pause:'Conviene esperar a tener más información antes de dejar tu trabajo actual.'}},
      {topic:'work',pattern:/\b(empleo|contrat|conseguir trabajo|encontrar trabajo|entrevista|puesto)/,answers:{open:'Puede aparecer una oportunidad laboral. Prepara bien el siguiente contacto o entrevista.',mixed:'Hay una opción de empleo, aunque dependerá de una respuesta o un ajuste en tu búsqueda.',pause:'La búsqueda puede tardar más de lo esperado. Revisa tu estrategia y mantén abiertas varias opciones.'}},
      {topic:'work',pattern:/\b(proyecto|negocio|empresa|emprend|plan de trabajo|cliente)/,answers:{open:'Tu proyecto puede avanzar pronto si conviertes la idea en una acción concreta.',mixed:'El proyecto tiene posibilidades, pero necesitará una decisión, acuerdo o ajuste de rumbo.',pause:'El proyecto pide una pausa para revisar un detalle antes de seguir avanzando.'}},
      {topic:'money',pattern:/\b(comprar|compra|piso|casa|coche|invertir|inversion|hipoteca)/,answers:{open:'La compra o inversión puede encajar con tus planes si compruebas precio, condiciones y margen.',mixed:'Aún hay un detalle que comparar antes de comprometer dinero.',pause:'Esta carta aconseja aplazar la compra hasta tener más información o margen.'}},
      {topic:'money',pattern:/\b(deuda|prestamo|pagar|cobrar|factura|alquiler)/,answers:{open:'Puede abrirse una forma de ordenar ese pago o cobro. Da un paso concreto para aclararlo.',mixed:'La situación puede resolverse, pero requiere revisar plazos y acuerdos.',pause:'El dinero puede tardar más de lo deseado. Conviene preparar un plan mientras esperas.'}},
      {topic:'money',pattern:/\b(dinero|ganar|ingres|ahorr|econom|financ)/,answers:{open:'Se ve margen para mejorar tus cuentas con una oportunidad o una decisión práctica.',mixed:'La mejora económica podría ser gradual si mantienes prioridades claras.',pause:'Ahora conviene proteger el margen que tienes y evitar decisiones impulsivas.'}},
      {topic:'wellbeing',pattern:/\b(bienestar|salud|ansiedad|estres|dormir|descans|animo|habito|cuidarme)/,answers:{open:'La carta apunta a una oportunidad de cuidarte mejor mediante un cambio pequeño y sostenido.',mixed:'Tu bienestar puede mejorar si ajustas una exigencia y pides apoyo cuando lo necesites.',pause:'La carta invita a bajar el ritmo y atender lo que te está costando. Si hay síntomas, consulta a un profesional.'}},
      {topic:'wellbeing',pattern:/\b(enfermedad|diagnostico|embaraz|tratamiento|medic|terapia|curar|sanar|operacion|depresion|tristeza)/,answers:{open:'La carta puede ayudarte a pensar en cómo cuidarte; una consulta profesional te dará información fiable sobre tu salud.',mixed:'Conviene pedir orientación profesional y apoyo cercano antes de sacar conclusiones sobre tu salud.',pause:'No tomes esta lectura como un pronóstico de salud. Consulta a un profesional para decidir el siguiente paso.'}},
      {topic:'general',pattern:/\b(decid|decis|elegir|eleccion|conviene|deberia|hacer|futuro|semana|mes|manana)/,answers:{open:'La decisión puede abrirte una posibilidad favorable si das un primer paso informado.',mixed:'La respuesta depende de comparar dos caminos y aclarar qué priorizas.',pause:'Antes de decidir, deja que aparezca la información que falta.'}},
      {topic:'work',pattern:/\b(trabajo|laboral|carrera|curso|master|beca|practicas|jefe|profesor)/,answers:{open:'Puede abrirse una oportunidad en tu trabajo o estudios. Comprueba los pasos concretos para aprovecharla.',mixed:'El avance dependerá de una conversación, un plazo o una preparación pendiente.',pause:'Antes de moverte, aclara las condiciones y el siguiente paso.'}},
      {topic:'money',pattern:/\b(presupuesto|gast|salario|sueldo|precio|impuesto|pension)/,answers:{open:'Hay margen para ordenar esta decisión económica si revisas las cifras.',mixed:'Compara costes y plazos antes de comprometerte.',pause:'Conviene conservar margen y pedir información antes de decidir.'}},
      {topic:'love',pattern:/\b(amor|vinculo|amistad|amig[oa]|familia|herman[oa]|hij[oa]|padre|madre)/,answers:{open:'Puede abrirse una conversación que acerque a las personas implicadas.',mixed:'El vínculo puede cambiar si cada parte expresa lo que necesita.',pause:'Deja espacio para una respuesta real antes de interpretar el silencio.'}}
    ];
    function normalizeQuestion(value){
      return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    }
    function detectQuestionIntent(value,preferredTopic='general'){
      const normalized=normalizeQuestion(value);
      const matches=questionIntents.filter(intent=>intent.pattern.test(normalized));
      if(preferredTopic!=='general') return matches.find(intent=>intent.topic===preferredTopic)||matches.find(intent=>intent.topic!=='general')||matches[0]||null;
      if(isMedicalQuestion(value)) return matches.find(intent=>intent.topic==='wellbeing')||null;
      const topical=matches.filter(intent=>intent.topic!=='general');
      if(new Set(topical.map(intent=>intent.topic)).size>1) return matches.find(intent=>intent.topic==='general')||null;
      return topical[0]||matches[0]||null;
    }
    function isMedicalQuestion(value){return /\b(enfermedad|diagnostic|embaraz|tratamiento|medic|curar|sanar|operacion|operar|cirugi|cancer|tumor|hospital|pastill|farmac|antidepres|suicid|autolesi|morir|morira|muerte|fallec)\w*/.test(normalizeQuestion(value));}
    const story = {
      fool:{now:'Algo nuevo se mueve sin pedir permiso.',heed:'Mira dónde quieres llegar antes de seguir el impulso.',next:'Un paso pequeño puede abrir una oportunidad inesperada.',reverse:'La prisa puede estar disfrazada de valentía.'},
      magician:{now:'Tienes más recursos de los que creías.',heed:'Elige una acción concreta; la intención sola no basta.',next:'Tu iniciativa puede transformar una idea en algo real.',reverse:'Tal vez esperas tenerlo todo listo antes de empezar.'},
      priestess:{now:'Hay una señal discreta que aún no has leído.',heed:'Escucha y reúne información antes de responder.',next:'Una pieza que faltaba puede aclarar el camino.',reverse:'El silencio puede esconder una duda que conviene nombrar.'},
      empress:{now:'Algo que has cuidado empieza a tomar forma.',heed:'Dale espacio para crecer sin querer dirigir cada detalle.',next:'La constancia puede traer una respuesta cálida.',reverse:'Cuidar de todo también puede dejarte sin energía.'},
      emperor:{now:'Una situación pide orden y límites claros.',heed:'No confundas firmeza con rigidez.',next:'Un acuerdo claro puede dar estabilidad al plan.',reverse:'Una estructura que antes ayudaba quizá se ha vuelto estrecha.'},
      hierophant:{now:'Aparece una voz con experiencia o una regla conocida.',heed:'Escucha el consejo sin entregar tu criterio.',next:'Una conversación puede darte una referencia útil.',reverse:'Seguir la costumbre por inercia puede alejarte de lo que necesitas.'},
      lovers:{now:'Dos deseos o caminos reclaman tu atención.',heed:'Pregunta qué elegirías si no tuvieras que agradar a nadie.',next:'Una elección honesta puede acercarte a lo que buscas.',reverse:'Posponer la elección también tiene consecuencias.'},
      chariot:{now:'Hay movimiento donde antes parecía haber espera.',heed:'Marca una dirección antes de acelerar.',next:'Un avance puede hacerse visible si mantienes el rumbo.',reverse:'Ir deprisa sin rumbo puede agotarte.'},
      strength:{now:'Una tensión pone a prueba tu paciencia.',heed:'Responder con calma puede abrir más espacio que imponer.',next:'Tu constancia puede suavizar el conflicto.',reverse:'La fuerza también consiste en reconocer un límite.'},
      hermit:{now:'Necesitas un poco de distancia para entender mejor.',heed:'Busca silencio sin aislarte de quien puede ayudarte.',next:'Una reflexión honesta puede mostrar una salida sencilla.',reverse:'Pensar demasiado puede retrasar una conversación necesaria.'},
      wheel:{now:'Las circunstancias empiezan a cambiar.',heed:'Deja margen para lo que no puedes controlar.',next:'Un giro puede acercar una opción inesperada.',reverse:'Aferrarte al plan inicial puede hacerte perder otra posibilidad.'},
      justice:{now:'Los hechos pesan más que las suposiciones.',heed:'Comprueba los datos y escucha ambas versiones.',next:'Una aclaración puede ayudarte a decidir con serenidad.',reverse:'La necesidad de tener razón puede ocultar un matiz importante.'},
      hanged:{now:'Algo se ha detenido y pide otra mirada.',heed:'No fuerces una respuesta solo para acabar con la espera.',next:'La pausa puede mostrar una salida que no habías visto.',reverse:'Sacrificar demasiado puede dejar de tener sentido.'},
      death:{now:'Una etapa se acerca a su cierre.',heed:'Distingue lo que termina de lo que merece seguir contigo.',next:'Soltar una forma antigua puede abrir espacio a otra.',reverse:'Resistirte al cierre puede alargar una situación agotada.'},
      temperance:{now:'Dos necesidades buscan una medida común.',heed:'Escucha el ritmo de la otra parte sin perder el tuyo.',next:'Un ajuste paciente puede dar estabilidad.',reverse:'Buscar armonía a cualquier precio puede hacerte callar demasiado.'},
      devil:{now:'Un hábito o vínculo tira más de lo que parece.',heed:'Pon nombre a lo que haces por inercia.',next:'Reconocer esa atadura puede devolverte margen de elección.',reverse:'La tentación pierde fuerza cuando ves su coste real.'},
      tower:{now:'Una certeza empieza a resquebrajarse.',heed:'Espera a ver qué queda en pie antes de reconstruir.',next:'Un cambio incómodo puede dejar una base más sincera.',reverse:'Ignorar una grieta no hace más firme la estructura.'},
      star:{now:'Vuelve una pequeña señal de esperanza.',heed:'Cuida esa ilusión sin exigir resultados inmediatos.',next:'Un gesto de apoyo puede renovar tu confianza.',reverse:'La esperanza necesita también un paso concreto.'},
      moon:{now:'Todavía hay sombras en esta historia.',heed:'No conviertas una intuición en una certeza.',next:'Una señal comprobable puede aclarar lo que hoy confunde.',reverse:'El miedo puede hacer que veas señales donde aún no las hay.'},
      sun:{now:'Algo empieza a verse con más claridad.',heed:'Disfruta el avance y comparte el mérito.',next:'Una respuesta abierta puede traer alegría.',reverse:'Buscar una certeza perfecta puede quitar luz a un buen momento.'},
      judgement:{now:'Un asunto pendiente vuelve a llamar.',heed:'Escucha qué ha cambiado desde la última vez.',next:'Una segunda oportunidad puede pedir una respuesta nueva.',reverse:'Juzgarte con dureza puede impedirte aprender de lo ocurrido.'},
      world:{now:'Un proceso se acerca a completarse.',heed:'Reconoce lo conseguido antes de buscar otra meta.',next:'Un cierre claro puede dejarte lista para una etapa nueva.',reverse:'Querer cerrar todo a la vez puede retrasar una conclusión valiosa.'},
      gemini:{now:'Dos perspectivas conviven en la misma historia.',heed:'Escucha la versión que todavía no has querido mirar.',next:'Una conversación puede cambiar el sentido de lo que viene.',reverse:'Dos perspectivas conviven en la misma historia.'}
    };
    const verdictOpeners={
      general:['María encuentra un hilo entre estas cartas:','María ve cómo se relacionan estas tres señales:'],
      love:['María ve un hilo en este vínculo:','En el amor, María se detiene en esta combinación:'],
      work:['María ve un hilo en tus planes de trabajo o estudios:','En tu proyecto, María se detiene en esta combinación:'],
      money:['María ve un hilo en esta decisión económica:','En tus cuentas, María se detiene en esta combinación:'],
      wellbeing:['María ve un hilo en la forma de cuidarte:','Para tu bienestar, María se detiene en esta combinación:']
    };
    const topicAdvice={
      general:{open:'Un paso pequeño puede aclarar lo que sigue.',mixed:'Compara las señales antes de decidir.',pause:'La espera también puede darte información.'},
      love:{open:'Una conversación concreta puede abrir espacio en este vínculo.',mixed:'Pregunta antes de interpretar el silencio de otra persona.',pause:'Deja tiempo para una respuesta real.'},
      work:{open:'Haz visible un paso concreto de tu proyecto.',mixed:'Aclara expectativas y plazos con quien corresponda.',pause:'Revisa lo que falta antes de comprometerte.'},
      money:{open:'Comprueba cifras y condiciones antes de avanzar.',mixed:'Compara el margen que tienes con lo que deseas hacer.',pause:'Espera a conocer todos los costes.'},
      wellbeing:{open:'Elige un gesto de cuidado que puedas sostener.',mixed:'Escucha qué te pide el cuerpo sin exigirte de más.',pause:'Baja el ritmo y busca apoyo si lo necesitas.'}
    };
    const PUBLIC_URL='https://mariapredice.com/';
    const shufflePhrases=['María ha mezclado el mazo. Elige cómo quieres preguntarle.','Las cartas han cambiado de sitio. Tu pregunta puede empezar aquí.','Mazo preparado. María espera tu pregunta.'];
    const home=$('home'),reading=$('reading'),spread=$('spread');
    let deck=[],mode=1,selected=[],revealed=new Set(),activeTopic='general',activeQuestion='',activeIntent=null;
    let turn=0,lastIds='',shareUrl=null,shareBlob=null,shareGeneration=0,shuffleNoticeTimer=null;
    const JOURNAL_KEY='tarot-maria-journal-v1';
    const MOTION_KEY='tarot-maria-reduce-motion';
    const MEMORY_ENABLED_KEY='tarot-maria-memory-enabled-v1';
    const memoryStorage={};
    const storage=typeof localStorage==='undefined'?{getItem:key=>memoryStorage[key]??null,setItem:(key,value)=>{memoryStorage[key]=String(value);}}:localStorage;
    function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));}
    function getJournal(){try{const entries=JSON.parse(storage.getItem(JOURNAL_KEY)||'[]');return Array.isArray(entries)?entries:[];}catch{return [];}}
    function setJournal(entries){storage.setItem(JOURNAL_KEY,JSON.stringify(entries));}
    function memoryEnabled(){return storage.getItem(MEMORY_ENABLED_KEY)==='true';}
    function setMemoryEnabled(value){storage.setItem(MEMORY_ENABLED_KEY,String(!!value));}
    function extractMemoryKeywords(question){const ignored=new Set(['para','pero','porque','como','cuando','donde','esta','este','esto','quiero','puede','puedo','sera','sobre','tengo','hacer','hacia','entre','algo','alguna','alguien','mucho','ahora','solo','bien','cual','quien']);return normalizeQuestion(question||'').split(/[^a-z0-9ñ]+/).filter(word=>word.length>3&&!ignored.has(word));}
    function memoryProfile(){const entries=getJournal().filter(entry=>entry.memoryUsed===true);const topicCounts={},cardCounts={},keywordCounts={};entries.forEach(entry=>{topicCounts[entry.topic]=(topicCounts[entry.topic]||0)+1;(entry.cards||[]).forEach(card=>{cardCounts[card.id]=(cardCounts[card.id]||0)+1;});extractMemoryKeywords(entry.question).forEach(word=>{keywordCounts[word]=(keywordCounts[word]||0)+1;});});const topKey=counts=>Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]||[null,0];const [topTopic,topTopicCount]=topKey(topicCounts);const [topCardId,topCardCount]=topKey(cardCounts);const repeatedKeywords=Object.entries(keywordCounts).filter(([,count])=>count>1).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([word])=>word);return {total:entries.length,topicCounts,topTopic,topTopicCount,topCardId,topCardCount,repeatedKeywords};}
    function memorySummaryText(){if(!memoryEnabled()) return 'Está desactivada. No se utilizará el diario para personalizar las tiradas.';const profile=memoryProfile();if(!profile.total) return 'Está activada. Empezará a aprender cuando guardes una nueva lectura.';const details=[`María recuerda ${profile.total} ${profile.total===1?'lectura':'lecturas'}.`];if(profile.topTopic) details.push(`El tema más repetido es ${topicLabel(profile.topTopic).toLowerCase()}.`);if(profile.repeatedKeywords.length) details.push(`Asuntos que vuelven: ${profile.repeatedKeywords.join(', ')}.`);return details.join(' ');}
    function memoryContext(){if(!memoryEnabled()) return '';const profile=memoryProfile();if(profile.total<2) return '';const currentTopicCount=profile.topicCounts[activeTopic]||0;const currentWords=extractMemoryKeywords(activeQuestion);const repeated=currentWords.some(word=>profile.repeatedKeywords.includes(word));if(repeated) return 'La memoria de María reconoce que este asunto ya ha aparecido en tus preguntas. Observa qué ha cambiado desde la última vez.';if(currentTopicCount>1) return `La memoria de María reconoce que ${topicLabel(activeTopic).toLowerCase()} es un tema recurrente en tu diario. Esta lectura añade una nueva perspectiva a ese recorrido.`;return `María tiene en cuenta el recorrido de ${profile.total} lecturas anteriores, sin cambiar el significado de las cartas que han salido hoy.`;}
    function currentReading(){return {id:`reading-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,createdAt:new Date().toISOString(),topic:activeTopic,cards:selected.map(card=>({id:card.id,name:card.name,reversed:!!card.reversed})),verdict:verdict(),question:activeQuestion,note:'',favorite:false,memoryUsed:memoryEnabled()};}
    function topicLabel(topic){return ({love:'Amor',work:'Trabajo y estudios',money:'Dinero',wellbeing:'Bienestar',general:'Camino abierto'})[topic]||'Camino abierto';}
    function formatJournalDate(value){try{return new Intl.DateTimeFormat('es-ES',{dateStyle:'long',timeStyle:'short'}).format(new Date(value));}catch{return value;}}
    function renderMemoryPanel(){const control=$('memory-enabled'),summary=$('memory-summary'),clear=$('memory-clear');if(control) control.checked=memoryEnabled();if(summary) summary.textContent=memorySummaryText();if(clear) clear.disabled=!memoryProfile().total;}
    function renderJournal(){const list=$('journal-list');const entries=getJournal().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));renderMemoryPanel();if(!entries.length){list.innerHTML='<p class="journal-empty">Aún no has guardado ninguna lectura.</p>';return;}list.innerHTML=entries.map(entry=>{const cards=entry.cards.map(card=>`${escapeHtml(card.name)}${card.reversed?' (invertida)':''}`).join(' · ');return `<article class="journal-entry"><header><div><h3>${entry.favorite?'★ ':''}${escapeHtml(topicLabel(entry.topic))}</h3><time datetime="${escapeHtml(entry.createdAt)}">${escapeHtml(formatJournalDate(entry.createdAt))}</time></div><button class="journal-delete" type="button" data-delete-reading="${escapeHtml(entry.id)}">Borrar</button></header>${entry.memoryUsed?'<span class="journal-memory-tag">Recordada por María</span>':''}<p class="journal-cards">${cards}</p><p class="journal-verdict">${escapeHtml(entry.verdict)}</p>${entry.question?`<p><strong>Pregunta:</strong> ${escapeHtml(entry.question)}</p>`:''}${entry.note?`<p><strong>Nota:</strong> ${escapeHtml(entry.note)}</p>`:''}<button class="ghost" type="button" data-favorite-reading="${escapeHtml(entry.id)}">${entry.favorite?'Quitar favorita':'Marcar como favorita'}</button></article>`;}).join('');list.querySelectorAll('[data-delete-reading]').forEach(button=>button.addEventListener('click',()=>{setJournal(getJournal().filter(entry=>entry.id!==button.dataset.deleteReading));renderJournal();}));list.querySelectorAll('[data-favorite-reading]').forEach(button=>button.addEventListener('click',()=>{const entries=getJournal().map(entry=>entry.id===button.dataset.favoriteReading?{...entry,favorite:!entry.favorite}:entry);setJournal(entries);renderJournal();}));}
    function openJournal(){renderJournal();$('journal').showModal();}
    function applyMotionPreference(){const reduced=storage.getItem(MOTION_KEY)==='true';if(document.body?.classList) document.body.classList.toggle('reduce-motion',reduced);const control=$('reduce-motion');if(control) control.checked=reduced;}
    function reduceMotionPreferred(){return document.body?.classList?.contains('reduce-motion')||(typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);}
    function scrollToVerdict(element,duration=1600){
      if(reduceMotionPreferred()){element.scrollIntoView({block:'start'});return;}
      if(typeof window.requestAnimationFrame!=='function'||typeof element.getBoundingClientRect!=='function'){element.scrollIntoView({behavior:'smooth',block:'start'});return;}
      const start=window.scrollY||window.pageYOffset||0;
      const target=Math.max(0,start+element.getBoundingClientRect().top-18);
      const distance=target-start;
      const started=Date.now();
      const animate=()=>{const elapsed=Date.now()-started;const progress=Math.min(elapsed/duration,1);const eased=1-Math.pow(1-progress,3);window.scrollTo(0,start+(distance*eased));if(progress<1) window.requestAnimationFrame(animate);};
      window.requestAnimationFrame(animate);
    }
    function shuffleArray(items,rng=Math.random){
      const result=[...items];
      for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
      return result;
    }
    function shuffle(showConfirmation=false){
      deck=shuffleArray(cards.filter(card=>card.id!=='gemini'));
      home.classList.remove('shuffling');void home.offsetWidth;home.classList.add('shuffling');
      setTimeout(()=>home.classList.remove('shuffling'),580);
      const status=$('home-status');
      status.textContent=shufflePhrases[turn%shufflePhrases.length];
      status.classList.remove('shuffle-confirmed');
      if(showConfirmation){
        void status.offsetWidth;status.classList.add('shuffle-confirmed');
        clearTimeout(shuffleNoticeTimer);
        shuffleNoticeTimer=setTimeout(()=>status.classList.remove('shuffle-confirmed'),2800);
      }
    }
    function chooseCards(count,rng=Math.random){
      let picks=deck.slice(0,count);
      if(picks.map(card=>card.id).join('|')===lastIds && deck.length>count) picks=deck.slice(1,count+1);
      if(rng()<0.08) picks[Math.floor(rng()*count)]=cards.find(card=>card.id==='gemini');
      lastIds=picks.map(card=>card.id).join('|');
      return picks.map(card=>({...card,reversed:card.id!=='gemini'&&rng()<0.14}));
    }
    function effectiveMood(card){
      const mood=cardMoods[card.id];
      return card.reversed?(mood==='open'?'mixed':'pause'):mood;
    }
    function front(card){
      const symbol=card.id==='gemini'
        ? '<path d="M28 20h64M28 85h64M43 20v65M77 20v65M43 39q17 18 34 0M43 66q17-18 34 0"/>'
        : icons[card.id]||'<path d="M20 18h80M60 18v13M60 31l-18 24 18 24 18-24-18-24M42 87q18 12 36 0"/><circle cx="60" cy="90" r="8"/>';
      return `<img class="portrait ${card.reversed?'upside-down':''}" src="tarot-art/${card.id}.webp" alt=""><span class="portrait-shade"></span><span class="portrait-top"><span>✦ ${card.n}</span><span>✦</span></span><span class="symbol-seal"><svg viewBox="0 0 120 105" aria-hidden="true">${symbol}</svg></span><span class="portrait-caption"><small>EL TAROT DE MARÍA</small><strong>${card.name}</strong></span>${card.reversed?'<span class="reversed-ribbon">INVERTIDA</span>':''}`;
    }
    function meaningFor(card,index=0){
      if(activeTopic==='wellbeing'&&activeQuestion&&isMedicalQuestion(activeQuestion)){
        const messages=mode===1
          ?['Las cartas no pueden prever un diagnóstico, embarazo o evolución clínica. Consulta a un profesional para una respuesta fiable.']
          :['La incertidumbre puede pesar. Busca información fiable sobre la situación.','No conviertas una imagen simbólica en un diagnóstico. Pregunta al profesional que conoce el caso.','El siguiente paso es hablar con el equipo de salud y buscar apoyo cercano.'];
        return messages[index];
      }
      const base=activeTopic==='general'?card.text:predictions[card.id][activeTopic];
      const nuance=card.reversed?story[card.id].reverse:cardCues[card.id];
      if(mode===1){
        const lead=activeQuestion&&activeIntent?activeIntent.answers[effectiveMood(card)]:base;
        return `${lead} ${card.reversed?nuance:''}`.trim();
      }
      if(index===0) return `${base} ${card.reversed?nuance:''}`.trim();
      if(index===1) return `${story[card.id].heed} ${card.reversed?nuance:''}`.trim();
      return `${base} ${card.reversed?nuance:''}`.trim();
    }
    function addMemoryContext(text){const context=memoryContext();return context?`${text} ${context}`:text;}
    function verdict(){
      if(activeTopic==='wellbeing'&&activeQuestion&&isMedicalQuestion(activeQuestion)) return 'Esta lectura puede ayudarte a ordenar lo que sientes ante la incertidumbre. Las cartas no permiten pronosticar un resultado clínico. Busca una respuesta fiable en profesionales de salud.';
      if(mode===1){
        const card=selected[0];
        const s=story[card.id];
        const advice=topicAdvice[activeTopic][effectiveMood(card)];
        const safety=activeTopic==='wellbeing'&&activeQuestion&&isMedicalQuestion(activeQuestion)?' Esta lectura no pronostica resultados clínicos; consulta a un profesional de salud.':activeTopic==='wellbeing'?' Si te preocupa tu salud, consulta a un profesional.':'';
        return addMemoryContext(`María ve en ${card.name} una dirección: ${s.now} ${s.heed} ${s.next} ${advice}${safety}`);
      }
      const [a,b,c]=selected;
      let parts=[`${verdictOpeners[activeTopic][turn%2]} ${story[a.id].now}`,`El punto que pide atención es este: ${story[b.id].heed}`,`Si atiendes a esa señal, ${story[c.id].next.charAt(0).toLowerCase()+story[c.id].next.slice(1)}`];
      const reversed=selected.filter(card=>card.reversed);
      if(reversed.length) parts.push(`Con ${reversed.map(card=>card.name).join(' y ')} en posición invertida, conviene revisar el ritmo antes de actuar.`);
      if(selected.some(card=>card.id==='gemini')) parts.push('Géminis es la carta personal de María: pide escuchar la otra versión y dejar que una conversación aclare el siguiente paso.');
      else if(selected.some(card=>card.id==='tower')&&selected.some(card=>card.id==='death')) parts.push('Dos cartas hablan de cambio; conviene distinguir un cierre real de un primer sobresalto.');
      else if(selected.some(card=>effectiveMood(card)==='open')&&selected.some(card=>effectiveMood(card)==='pause')) parts.push('El impulso y la espera aparecen juntos; no hace falta resolverlo todo hoy.');
      if(activeQuestion&&activeIntent&&!(activeTopic==='wellbeing'&&isMedicalQuestion(activeQuestion))) parts.push(`Sobre tu pregunta: ${activeIntent.answers[effectiveMood(c)]}`);
      else if(activeQuestion&&!(activeTopic==='wellbeing'&&isMedicalQuestion(activeQuestion))) parts.push('La pregunta queda abierta: estas cartas sugieren una dirección, no una certeza.');
      if(!activeQuestion||!activeIntent) parts.push(topicAdvice[activeTopic][effectiveMood(c)]);
      if(activeTopic==='money'&&activeQuestion&&activeIntent) parts.push('Comprueba las cifras antes de comprometer dinero.');
      if(activeTopic==='wellbeing') parts.push(activeQuestion&&isMedicalQuestion(activeQuestion)?'Esta lectura no pronostica resultados clínicos; consulta a un profesional de salud.':'Si te preocupa tu salud, consulta a un profesional.');
      return addMemoryContext(parts.join(' '));
    }
    function specialMessage(card){return card.id==='gemini'?'Géminis es la carta personal de María. Como ella es Géminis, aparece para recordarte que una conversación, una pregunta bien hecha o una segunda mirada puede abrir la lectura.':'';}
    function render(){
      spread.className=`spread ${mode===1?'one':'three'}`;spread.innerHTML='';
      const labels=mode===1?['Tu carta']:['Lo que está pasando','Lo que debes tener en cuenta','Hacia dónde puede ir'];
      selected.forEach((card,index)=>{
        const slot=document.createElement('div');slot.className='slot';
        slot.innerHTML=`<p class="slot-label">${labels[index]}</p><button class="card-button" type="button" aria-label="Revelar carta: ${labels[index].toLowerCase()}" aria-expanded="false" aria-controls="card-meaning-${index}"><span class="card-inner"><span class="card-side card-back" aria-hidden="true"><span class="back-sigil">✧</span></span><span class="card-side card-front" aria-hidden="true">${front(card)}</span></span></button><div class="meaning" id="card-meaning-${index}" aria-live="polite" hidden><h3>${card.name}${card.reversed?' · invertida':''}</h3><p class="prediction"></p><p class="prompt">${card.question}</p><p class="special-note" hidden>${specialMessage(card)}</p></div>`;
        slot.querySelector('.prediction').textContent=meaningFor(card,index);
        if(activeTopic==='wellbeing'&&activeQuestion&&isMedicalQuestion(activeQuestion)) slot.querySelector('.prompt').hidden=true;
        slot.querySelector('button').addEventListener('click',()=>reveal(index));
        spread.appendChild(slot);
      });
      $('reveal-all').hidden=mode===1;$('reveal-all').disabled=false;
      $('synthesis').hidden=true;$('result-tools').hidden=true;$('special-live').hidden=true;$('reversed-help').hidden=true;
      if($('share-dialog').open) $('share-dialog').close();
      clearShare();
    }
    function updateProgress(){
      if(revealed.size===selected.length){
        $('reading-lead').textContent=mode===1?'María ya ha leído tu carta.':'María ya puede unir las tres señales.';
        $('reveal-all').disabled=true;
        $('synthesis-text').textContent=verdict();$('synthesis').hidden=false;$('result-tools').hidden=false;
        $('result-status').textContent='Puedes guardarla solo en este dispositivo o compartirla.';
        const completedTurn=turn;
        setTimeout(()=>{if(turn!==completedTurn||reading.hidden||$('synthesis').hidden) return;const title=$('synthesis-title');const reduced=reduceMotionPreferred();scrollToVerdict($('synthesis'),1600);setTimeout(()=>{if(turn===completedTurn&&!reading.hidden&&!$('synthesis').hidden) title.focus({preventScroll:true});},reduced?0:1650);},950);
      }else $('reading-lead').textContent=`${revealed.size} de ${selected.length} cartas reveladas. Sigue con la que prefieras.`;
    }
    function reveal(index){
      if(revealed.has(index)) return;
      revealed.add(index);
      const card=selected[index],slot=spread.children[index],button=slot.querySelector('button');
      button.classList.add('revealed');if(card.id==='gemini') button.classList.add('gemini-reveal');
      button.setAttribute('aria-label',`${card.name}${card.reversed?', invertida':''}, carta revelada`);
      button.setAttribute('aria-expanded','true');
      const meaning=slot.querySelector('.meaning');meaning.hidden=false;requestAnimationFrame(()=>meaning.classList.add('visible'));
      if(card.id==='gemini'){slot.querySelector('.special-note').hidden=false;$('special-live').textContent=specialMessage(card);$('special-live').hidden=false;}
      if(card.reversed){$('reversed-help').hidden=false;}
      updateProgress();
    }
    function start(count){
      mode=count;turn++;
      activeQuestion=$('question').value.trim();activeTopic=$('topic').value;
      const chosenTopic=activeTopic;
      const questionTopics=activeQuestion?new Set(questionIntents.filter(intent=>intent.topic!=='general'&&intent.pattern.test(normalizeQuestion(activeQuestion))).map(intent=>intent.topic)):new Set();
      const medicalQuestion=!!(activeQuestion&&isMedicalQuestion(activeQuestion));
      activeIntent=activeQuestion?detectQuestionIntent(activeQuestion,activeTopic):null;
      if(medicalQuestion) activeTopic='wellbeing';
      else if(activeTopic==='general'&&activeIntent&&activeIntent.topic!=='general') activeTopic=activeIntent.topic;
      const questionMismatch=!!(!medicalQuestion&&activeIntent&&activeIntent.topic!==activeTopic&&activeTopic!=='general');
      if(questionMismatch) activeIntent=null;
      const questionNote=medicalQuestion?'Esta pregunta trata de salud. Las cartas no pueden prever un resultado clínico; busca orientación profesional.'
        :questionMismatch?`Has elegido ${themes[activeTopic].label.toLowerCase()}, pero tu pregunta parece tratar otro tema. La lectura seguirá el tema elegido. Puedes volver al inicio para cambiarlo.`
        :activeQuestion&&chosenTopic==='general'&&activeTopic==='general'&&questionTopics.size>1?'Tu pregunta mezcla varios temas. Haré una lectura general; puedes volver y elegir uno para concretarla.'
        :activeQuestion&&!activeIntent?'No identifico un tema concreto en la pregunta. Leeré las cartas desde el tema elegido.':false;
      selected=chooseCards(count);revealed=new Set();
      home.hidden=true;reading.hidden=false;
      $('reading-eyebrow').textContent=`${themes[activeTopic].label} · ${count===1?'Una carta':'Tres cartas'}`;
      $('reading-title').textContent=count===1?'María tiene una carta para ti':activeQuestion?'María escucha tu pregunta':'María lee tus tres cartas';
      $('reading-lead').textContent=count===1?'Toca la carta para escuchar su lectura.':'Cada posición tiene un papel. Toca las cartas en el orden que quieras.';
      $('reading-question').hidden=!activeQuestion;$('reading-question').textContent=activeQuestion?`Tu pregunta: «${activeQuestion}»`:'';
      $('question-note').hidden=!questionNote;$('question-note').textContent=questionNote||'';
      const remembered=medicalQuestion?'':memoryContext();$('memory-live').hidden=!remembered;$('memory-live').textContent=remembered?`La memoria de María está activa. ${remembered}`:'';
      $('swipe-hint').hidden=count===1;render();window.scrollTo({top:0,behavior:'smooth'});$('reading-title').focus({preventScroll:true});
    }
    function backHome(){reading.hidden=true;home.hidden=false;shuffle();window.scrollTo({top:0,behavior:'smooth'});$('home-title').focus({preventScroll:true});}
    function clearShare(){shareGeneration++;if(shareUrl){URL.revokeObjectURL(shareUrl);shareUrl=null;}shareBlob=null;$('share-preview').removeAttribute('src');$('share-preview').hidden=true;$('download-result').removeAttribute('href');$('download-result').hidden=true;$('native-share').hidden=true;}
    function siteUrl(){return PUBLIC_URL;}
    function shareText(){
      const names=selected.map(card=>card.name+(card.reversed?' (invertida)':'')).join(' · ');
      const question=$('include-question').checked&&activeQuestion?`Pregunta: «${activeQuestion}». `:'';
      return `Mi lectura en EL TAROT DE MARÍA: ${question}${names}. ${verdict()} ${siteUrl()}`.trim();
    }
    function updateShareLink(){
      const link=$('share-result'),url=siteUrl();link.hidden=!url;
      if(url) link.href='https://wa.me/?text='+encodeURIComponent(shareText());
    }
    function loadArt(card){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=`tarot-art/${card.id}.webp`;});}
    function wrapLines(ctx,text,maxWidth){
      const lines=[];let line='';
      for(const word of text.split(/\s+/)){
        const next=line?`${line} ${word}`:word;
        if(line&&ctx.measureText(next).width>maxWidth){lines.push(line);line=word;}else line=next;
      }
      if(line) lines.push(line);return lines;
    }
    function drawLines(ctx,lines,x,y,lineHeight){lines.forEach((line,i)=>ctx.fillText(line,x,y+i*lineHeight,900));}
    function shareVerdict(){
      if(activeTopic==='wellbeing'&&activeQuestion&&isMedicalQuestion(activeQuestion)) return 'Las cartas no pueden prever un resultado clínico. Consulta a un profesional de salud.';
      if(mode===1) return `${story[selected[0].id].now} ${story[selected[0].id].next}`;
      const [a,b,c]=selected;
      let text=`${story[a.id].now} ${story[c.id].next}`;
      if(selected.some(card=>card.id==='gemini')) text+=' Géminis invita a escuchar otra mirada.';
      return text;
    }
    async function prepareShareImage(){
      const generation=++shareGeneration;
      $('share-status').textContent='Preparando tu imagen…';$('download-result').hidden=true;
      try{
        const images=await Promise.all(selected.map(loadArt));
        const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1350;
        const ctx=canvas.getContext('2d');if(!ctx) throw new Error('Canvas no disponible');
        ctx.fillStyle='#102b3a';ctx.fillRect(0,0,1080,1350);
        ctx.strokeStyle='#d8a83e';ctx.lineWidth=4;ctx.strokeRect(34,34,1012,1282);ctx.lineWidth=1;ctx.strokeRect(49,49,982,1252);
        ctx.textAlign='center';ctx.fillStyle='#e9bd60';ctx.font='28px Georgia';ctx.fillText('✦',540,100);
        ctx.fillStyle='#fff4d5';ctx.font='bold 58px Georgia';ctx.fillText('EL TAROT DE MARÍA',540,165);
        ctx.fillStyle='#e5d4ab';ctx.font='22px Arial';ctx.fillText(mode===1?'TU CARTA':'TRES CARTAS · UNA LECTURA',540,211);
        const withQuestion=$('include-question').checked&&!!activeQuestion;
        const width=mode===1?(withQuestion?320:388):(withQuestion?240:282);
        const height=mode===1?(withQuestion?480:580):(withQuestion?360:423);
        const gap=mode===1?0:(withQuestion?55:42),top=mode===1?250:256;
        const left=(1080-(width*selected.length+gap*(selected.length-1)))/2;
        const labels=mode===1?['TU CARTA']:['LO QUE PASA','TEN EN CUENTA','HACIA DÓNDE'];
        images.forEach((img,i)=>{
          const x=left+i*(width+gap),card=selected[i];
          ctx.fillStyle='#e8d2a2';ctx.fillRect(x-7,top-7,width+14,height+14);
          ctx.save();ctx.beginPath();ctx.rect(x,top,width,height);ctx.clip();
          const scale=Math.max(width/img.width,height/img.height),sw=width/scale,sh=height/scale;
          if(card.reversed){ctx.translate(x+width/2,top+height/2);ctx.rotate(Math.PI);ctx.drawImage(img,(img.width-sw)/2,(img.height-sh)/2,sw,sh,-width/2,-height/2,width,height);}
          else ctx.drawImage(img,(img.width-sw)/2,(img.height-sh)/2,sw,sh,x,top,width,height);
          ctx.restore();ctx.fillStyle='#f1dfb5';ctx.fillRect(x,top+height-73,width,73);
          ctx.fillStyle='#20231e';ctx.font=`bold ${mode===1?30:23}px Georgia`;ctx.fillText(card.name,x+width/2,top+height-(card.reversed?40:29),width-18);
          if(card.reversed){ctx.fillStyle='#9f5a37';ctx.font='bold 15px Arial';ctx.fillText('INVERTIDA',x+width/2,top+height-14);}
          ctx.fillStyle='#e9bd60';ctx.font='bold 17px Arial';ctx.fillText(labels[i],x+width/2,top+height+43);
        });
        let y=mode===1?(withQuestion?800:930):(withQuestion?690:758);
        if(withQuestion){
          ctx.fillStyle='#e9bd60';ctx.font='bold 17px Arial';ctx.fillText('LA PREGUNTA',540,y);y+=32;
          ctx.fillStyle='#fff4d5';ctx.font='italic 23px Georgia';
          const questionLines=wrapLines(ctx,`«${activeQuestion}»`,900);drawLines(ctx,questionLines,540,y,31);y+=questionLines.length*31+25;
        }
        ctx.fillStyle='#e9bd60';ctx.font='bold 18px Arial';ctx.fillText('EL VEREDICTO DE MARÍA',540,y);y+=38;
        const available=1198-y;let font=43,lines=[],message=shareVerdict();
        do{ctx.font=`${font}px Georgia`;lines=wrapLines(ctx,message,906);if(lines.length*(font+12)<=available) break;font--;}while(font>=24);
        if(lines.length*(font+9)>available) throw new Error('El texto no cabe en la imagen');
        ctx.fillStyle='#fff4d5';drawLines(ctx,lines,540,y,font+12);
        const endOfText=y+Math.max(0,lines.length-1)*(font+12);
        if(endOfText<1120){ctx.strokeStyle='#d8a83e88';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(405,1160);ctx.lineTo(512,1160);ctx.moveTo(568,1160);ctx.lineTo(675,1160);ctx.stroke();ctx.fillStyle='#e9bd60';ctx.font='24px Georgia';ctx.fillText('✦',540,1168);}
        ctx.fillStyle='#c7bea5';ctx.font='18px Arial';ctx.fillText('Lectura simbólica · '+siteUrl(),540,1269,900);
        const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
        if(!blob) throw new Error('No se pudo crear la imagen');
        if(generation!==shareGeneration||!$('share-dialog').open) return;
        if(shareUrl) URL.revokeObjectURL(shareUrl);shareUrl=URL.createObjectURL(blob);shareBlob=blob;
        $('share-preview').src=shareUrl;$('share-preview').hidden=false;$('download-result').href=shareUrl;$('download-result').hidden=false;
        const canShareFiles=typeof File!=='undefined'&&typeof navigator.canShare==='function'&&navigator.canShare({files:[new File([blob],'el-tarot-de-maria.png',{type:'image/png'})]});
        $('native-share').hidden=!canShareFiles;
        $('share-status').textContent=activeQuestion?'Imagen lista. La pregunta solo aparece si marcas la opción.':'Imagen lista para guardar o compartir.';updateShareLink();
      }catch(error){if(generation===shareGeneration){$('share-status').textContent='No se pudo crear la imagen en este navegador. Puedes compartir el texto y el enlace.';updateShareLink();}}
    }
    async function nativeShare(){
      if(!shareBlob) return;
      try{await navigator.share({files:[new File([shareBlob],'el-tarot-de-maria.png',{type:'image/png'})],title:'EL TAROT DE MARÍA'});}
      catch(error){if(error.name!=='AbortError') $('share-status').textContent='No se pudo abrir el menú de compartir. Prueba a guardar la imagen.';}
    }
    function updateTopicGuidance(){const theme=themes[$('topic').value];$('topic-lead').textContent=theme.lead;$('question').placeholder=theme.placeholder;}
    $('topic').addEventListener('change',updateTopicGuidance);
    $('draw-one').addEventListener('click',()=>start(1));$('draw-three').addEventListener('click',()=>start(3));
    $('shuffle').addEventListener('click',()=>{turn++;shuffle(true)});
    $('reveal-all').addEventListener('click',()=>selected.forEach((_,i)=>reveal(i)));
    $('new-reading').addEventListener('click',()=>{shuffle();start(mode)});
    $('go-home').addEventListener('click',backHome);$('brand').addEventListener('click',backHome);
    $('show-result').addEventListener('click',()=>{$('include-question').checked=false;$('share-choice').hidden=!activeQuestion;$('share-dialog').showModal();prepareShareImage()});
    $('save-reading').addEventListener('click',()=>{$('journal-include-question').checked=false;$('journal-note').value='';$('journal-save').showModal();});
    $('journal-save-cancel').addEventListener('click',()=>$('journal-save').close());
    $('journal-save-confirm').addEventListener('click',()=>{const entry=currentReading();if(!$('journal-include-question').checked) entry.question='';entry.note=$('journal-note').value.trim();const entries=getJournal();entries.unshift(entry);setJournal(entries);$('journal-save').close();$('result-status').textContent=entry.memoryUsed?'Lectura guardada. María la tendrá en cuenta en futuras tiradas.':'Lectura guardada en este dispositivo.';});
    $('journal-open').addEventListener('click',openJournal);
    $('view-journal').addEventListener('click',openJournal);
    $('memory-enabled').addEventListener('change',event=>{setMemoryEnabled(event.target.checked);renderMemoryPanel();});
    $('memory-clear').addEventListener('click',()=>{if(window.confirm('¿Quieres que María olvide lo aprendido? Tus lecturas seguirán en el diario.')){setJournal(getJournal().map(entry=>({...entry,memoryUsed:false})));renderJournal();}});
    $('journal-close').addEventListener('click',()=>$('journal').close());
    $('journal-clear').addEventListener('click',()=>{if(window.confirm('¿Borrar todas las lecturas guardadas en este dispositivo?')){setJournal([]);renderJournal();}});
    $('share-close').addEventListener('click',()=>$('share-dialog').close());
    $('include-question').addEventListener('change',prepareShareImage);
    $('native-share').addEventListener('click',nativeShare);
    $('privacy-open').addEventListener('click',()=>$('privacy').showModal());
    $('privacy-close').addEventListener('click',()=>$('privacy').close());
    $('gemini-open').addEventListener('click',()=>$('gemini-dialog').showModal());
    $('gemini-close').addEventListener('click',()=>$('gemini-dialog').close());
    $('reduce-motion').addEventListener('change',event=>{storage.setItem(MOTION_KEY,String(event.target.checked));applyMotionPreference();});
    applyMotionPreference();
    let installPrompt=null;
    const isIos=/iPad|iPhone|iPod/.test(navigator.userAgent);
    let isStandalone=window.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone===true;
    function refreshInstallHelp(){
      const help=$('install-help');
      if(isStandalone) help.textContent='El juego ya está abierto como aplicación en este dispositivo.';
      else if(isIos) help.textContent='En iPhone, abre este enlace en Safari, toca Compartir y elige «Añadir a pantalla de inicio».';
      else if(installPrompt) help.textContent='Este navegador permite instalar el juego. Pulsa «Instalar ahora».';
      else if(/Android/i.test(navigator.userAgent)) help.textContent='En Android, abre este enlace en Chrome y usa el menú ⋮ para elegir «Instalar aplicación» o «Añadir a pantalla de inicio».';
      else help.textContent='Abre el menú de tu navegador y elige «Instalar aplicación» o «Añadir a pantalla de inicio», si está disponible.';
      $('install-action').hidden=isStandalone||!installPrompt;
    }
    window.addEventListener?.('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;refreshInstallHelp()});
    window.addEventListener?.('appinstalled',()=>{installPrompt=null;isStandalone=true;refreshInstallHelp()});
    $('install-open').addEventListener('click',()=>{refreshInstallHelp();$('install-dialog').showModal()});
    $('install-close').addEventListener('click',()=>$('install-dialog').close());
    $('install-action').addEventListener('click',async()=>{if(!installPrompt)return;const prompt=installPrompt;installPrompt=null;$('install-action').hidden=true;await prompt.prompt();refreshInstallHelp()});
    if(siteUrl()){const link=$('share-whatsapp');link.href='https://wa.me/?text='+encodeURIComponent('Juega a EL TAROT DE MARÍA: '+siteUrl());link.hidden=false;}
    shuffle();$('home-status').textContent='María tiene el mazo listo. ¿Qué quieres preguntarle?';
    if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('/sw.js').catch(()=>{});
