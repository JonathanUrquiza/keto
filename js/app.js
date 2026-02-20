// ========================================
// Data - Recetas Keto Completas
// ========================================
const recipesData = {
    // DESAYUNOS
    "muffins-huevo": {
        id: "muffins-huevo",
        name: "🍳 Muffins de Huevo con Aguacate y Tocino",
        time: "25 min",
        portions: "6 muffins",
        carbs: "2g netos",
        ingredients: [
            "6 huevos grandes",
            "4 tiras de tocino",
            "1 aguacate maduro",
            "1/4 taza de queso cheddar rallado",
            "Sal y pimienta al gusto",
            "Aceite en spray para el molde"
        ],
        steps: [
            "Precalienta el horno a 180°C (350°F).",
            "Cocina el tocino en una sartén hasta que esté crujiente. Córtalo en trozos pequeños.",
            "Engrasa un molde para muffins con aceite en spray.",
            "En un bowl, bate los huevos con sal y pimienta.",
            "Distribuye el tocino y el queso en los moldes.",
            "Vierte la mezcla de huevo sobre cada molde (3/4 de capacidad).",
            "Hornea por 15-18 minutos hasta que estén firmes.",
            "Sirve con rodajas de aguacate fresco encima."
        ]
    },
    "tortilla-espinacas": {
        id: "tortilla-espinacas",
        name: "🥚 Tortilla de Espinacas y Queso Feta",
        time: "15 min",
        portions: "1 porción",
        carbs: "3g netos",
        ingredients: [
            "3 huevos grandes",
            "1 taza de espinacas frescas",
            "50g de queso feta desmenuzado",
            "1 cucharada de mantequilla",
            "Sal y pimienta al gusto"
        ],
        steps: [
            "Bate los huevos en un bowl con sal y pimienta.",
            "Derrite la mantequilla en una sartén antiadherente a fuego medio.",
            "Agrega las espinacas y saltea por 1-2 minutos hasta que se marchiten.",
            "Vierte los huevos batidos sobre las espinacas.",
            "Cuando los bordes empiecen a cuajar, espolvorea el queso feta.",
            "Dobla la tortilla por la mitad y cocina 1 minuto más.",
            "Sirve inmediatamente."
        ]
    },
    "pancakes-keto": {
        id: "pancakes-keto",
        name: "🥞 Pancakes Keto de Almendra con Frutos Rojos",
        time: "20 min",
        portions: "4 pancakes",
        carbs: "4g netos",
        ingredients: [
            "1 taza de harina de almendra",
            "2 huevos grandes",
            "2 cucharadas de queso crema (suavizado)",
            "1/2 cucharadita de polvo para hornear",
            "1/2 cucharadita de extracto de vainilla",
            "1/4 taza de frutos rojos (fresas, frambuesas, moras)",
            "Mantequilla para cocinar"
        ],
        steps: [
            "Mezcla la harina de almendra, huevos, queso crema, polvo para hornear y vainilla hasta obtener una masa homogénea.",
            "Calienta una sartén a fuego medio-bajo con un poco de mantequilla.",
            "Vierte 1/4 de taza de masa por pancake.",
            "Cocina 2-3 minutos por lado hasta que estén dorados.",
            "Sirve con frutos rojos frescos encima."
        ]
    },
    "pudding-chia": {
        id: "pudding-chia",
        name: "🥣 Pudding de Chía con Leche de Coco",
        time: "10 min + 4h refrigeración",
        portions: "2 porciones",
        carbs: "5g netos",
        ingredients: [
            "1/4 taza de semillas de chía",
            "1 taza de leche de coco entera",
            "1 cucharada de eritritol o stevia",
            "1/2 cucharadita de extracto de vainilla",
            "2 cucharadas de coco rallado sin azúcar"
        ],
        steps: [
            "En un frasco o bowl, mezcla las semillas de chía con la leche de coco.",
            "Agrega el endulzante y la vainilla. Mezcla bien.",
            "Refrigera por al menos 4 horas o toda la noche.",
            "Al servir, revuelve y agrega el coco rallado encima.",
            "Opcional: agrega frutos rojos frescos."
        ]
    },
    "huevos-revueltos": {
        id: "huevos-revueltos",
        name: "🍳 Huevos Revueltos con Queso y Tomates",
        time: "10 min",
        portions: "1 porción",
        carbs: "3g netos",
        ingredients: [
            "3 huevos grandes",
            "1/4 taza de queso cheddar rallado",
            "5-6 tomates cherry cortados por la mitad",
            "1 cucharada de mantequilla",
            "Sal, pimienta y hierbas al gusto"
        ],
        steps: [
            "Bate los huevos en un bowl con sal y pimienta.",
            "Derrite la mantequilla en una sartén a fuego medio-bajo.",
            "Vierte los huevos y revuelve suavemente con espátula.",
            "Cuando empiecen a cuajar, agrega el queso y los tomates.",
            "Continúa revolviendo hasta alcanzar la consistencia deseada.",
            "Sirve inmediatamente con hierbas frescas."
        ]
    },
    "batido-keto": {
        id: "batido-keto",
        name: "🥤 Batido Keto de Espinaca",
        time: "5 min",
        portions: "1 porción",
        carbs: "4g netos",
        ingredients: [
            "1 taza de espinacas frescas",
            "1 taza de leche de almendra sin azúcar",
            "1 cucharada de aceite MCT",
            "1/4 aguacate",
            "1 cucharada de mantequilla de almendra",
            "Hielo al gusto"
        ],
        steps: [
            "Agrega todos los ingredientes a la licuadora.",
            "Licúa a alta velocidad por 1-2 minutos hasta que esté cremoso.",
            "Ajusta la consistencia con más leche si es necesario.",
            "Sirve inmediatamente."
        ]
    },
    "cafe-cetogenico": {
        id: "cafe-cetogenico",
        name: "☕ Café Cetogénico (Bulletproof Coffee)",
        time: "5 min",
        portions: "1 porción",
        carbs: "0g netos",
        ingredients: [
            "1 taza de café recién hecho",
            "1 cucharada de mantequilla sin sal",
            "1 cucharada de aceite MCT o aceite de coco",
            "Opcional: canela o extracto de vainilla"
        ],
        steps: [
            "Prepara el café como de costumbre.",
            "Vierte el café caliente en la licuadora.",
            "Agrega la mantequilla y el aceite MCT.",
            "Licúa por 20-30 segundos hasta que esté espumoso.",
            "Sirve inmediatamente. Acompaña con un puñado de nueces."
        ]
    },
    // ALMUERZOS
    "ensalada-pollo": {
        id: "ensalada-pollo",
        name: "🥗 Ensalada de Pollo a la Parrilla",
        time: "25 min",
        portions: "2 porciones",
        carbs: "4g netos",
        ingredients: [
            "300g de pechuga de pollo",
            "4 tazas de hojas verdes mixtas",
            "1 aguacate en rodajas",
            "1/4 taza de aceitunas",
            "3 cucharadas de aceite de oliva extra virgen",
            "Jugo de 1/2 limón",
            "Sal, pimienta y orégano"
        ],
        steps: [
            "Sazona el pollo con sal, pimienta y orégano.",
            "Cocina en una parrilla o sartén caliente por 6-7 minutos por lado.",
            "Deja reposar 5 minutos y córtalo en tiras.",
            "En un bowl grande, coloca las hojas verdes.",
            "Agrega el pollo, aguacate y aceitunas.",
            "Mezcla el aceite de oliva con el limón para el aderezo.",
            "Vierte el aderezo y sirve."
        ]
    },
    "rollups-atun": {
        id: "rollups-atun",
        name: "🥬 Roll-ups de Lechuga con Ensalada de Atún",
        time: "15 min",
        portions: "2 porciones",
        carbs: "2g netos",
        ingredients: [
            "2 latas de atún en agua (escurrido)",
            "3 cucharadas de mayonesa keto",
            "1 tallo de apio picado fino",
            "1 cucharada de mostaza Dijon",
            "4-6 hojas grandes de lechuga romana",
            "Sal y pimienta al gusto"
        ],
        steps: [
            "En un bowl, mezcla el atún escurrido con la mayonesa.",
            "Agrega el apio picado y la mostaza. Mezcla bien.",
            "Sazona con sal y pimienta.",
            "Coloca 2-3 cucharadas de la mezcla en cada hoja de lechuga.",
            "Enrolla como un wrap y sirve."
        ]
    },
    "salteado-carne": {
        id: "salteado-carne",
        name: "🥩 Salteado de Carne con Arroz de Coliflor",
        time: "25 min",
        portions: "2 porciones",
        carbs: "6g netos",
        ingredients: [
            "300g de carne de res en tiras",
            "2 tazas de arroz de coliflor",
            "1 pimiento rojo en tiras",
            "2 cucharadas de salsa de soja (tamari)",
            "1 cucharada de aceite de coco",
            "2 dientes de ajo picados",
            "Jengibre fresco rallado (1 cucharadita)"
        ],
        steps: [
            "Calienta el aceite en un wok o sartén grande a fuego alto.",
            "Saltea la carne por 3-4 minutos hasta dorar. Retira y reserva.",
            "En la misma sartén, saltea el ajo y jengibre por 30 segundos.",
            "Agrega el pimiento y cocina 2 minutos.",
            "Incorpora el arroz de coliflor y saltea 3-4 minutos.",
            "Regresa la carne, agrega la salsa de soja y mezcla bien.",
            "Sirve caliente."
        ]
    },
    "ensalada-pavo": {
        id: "ensalada-pavo",
        name: "🥑 Ensalada de Pavo y Aguacate",
        time: "15 min",
        portions: "2 porciones",
        carbs: "4g netos",
        ingredients: [
            "200g de pechuga de pavo en lonjas",
            "2 aguacates maduros",
            "1/4 cebolla morada en rodajas finas",
            "2 cucharadas de aceite de oliva",
            "Jugo de 1 limón",
            "Cilantro fresco picado",
            "Sal y pimienta"
        ],
        steps: [
            "Corta el pavo en tiras y el aguacate en cubos.",
            "En un bowl, combina el pavo, aguacate y cebolla.",
            "Mezcla el aceite de oliva con el limón, sal y pimienta.",
            "Vierte el aderezo sobre la ensalada.",
            "Decora con cilantro fresco y sirve."
        ]
    },
    "ensalada-cobb": {
        id: "ensalada-cobb",
        name: "🥓 Ensalada Cobb con Tocino y Queso Azul",
        time: "20 min",
        portions: "2 porciones",
        carbs: "5g netos",
        ingredients: [
            "4 tazas de lechuga romana picada",
            "150g de pechuga de pollo cocida",
            "4 tiras de tocino crujiente",
            "2 huevos duros",
            "1 aguacate",
            "50g de queso azul desmenuzado",
            "Aderezo ranch keto o aceite de oliva"
        ],
        steps: [
            "Cocina el tocino hasta que esté crujiente y córtalo.",
            "Cocina los huevos duros (10 min), pélalos y córtalos.",
            "Corta el pollo y el aguacate en cubos.",
            "En un plato grande, dispón la lechuga como base.",
            "Organiza los ingredientes en filas sobre la lechuga.",
            "Espolvorea el queso azul encima.",
            "Sirve con el aderezo al lado."
        ]
    },
    "rollups-salmon": {
        id: "rollups-salmon",
        name: "🍣 Roll-ups de Salmón Ahumado",
        time: "10 min",
        portions: "2 porciones",
        carbs: "2g netos",
        ingredients: [
            "150g de salmón ahumado en lonjas",
            "100g de queso crema suavizado",
            "1 aguacate en rodajas",
            "4-6 hojas de lechuga",
            "Eneldo fresco (opcional)",
            "Alcaparras (opcional)"
        ],
        steps: [
            "Extiende una capa de queso crema sobre cada lonja de salmón.",
            "Coloca una rodaja de aguacate en un extremo.",
            "Enrolla el salmón firmemente.",
            "Sirve sobre hojas de lechuga.",
            "Decora con eneldo fresco y alcaparras."
        ]
    },
    "ensalada-pollo-limon": {
        id: "ensalada-pollo-limon",
        name: "🍗 Ensalada de Pollo con Aderezo de Limón",
        time: "20 min",
        portions: "2 porciones",
        carbs: "3g netos",
        ingredients: [
            "300g de pechuga de pollo",
            "4 tazas de hojas verdes mixtas",
            "1/4 taza de pepino en rodajas",
            "1/4 taza de aceitunas",
            "3 cucharadas de aceite de oliva",
            "Jugo de 1 limón",
            "1 diente de ajo picado",
            "Sal y pimienta"
        ],
        steps: [
            "Sazona y cocina el pollo a la parrilla o sartén.",
            "Deja reposar y córtalo en tiras.",
            "Prepara el aderezo mezclando aceite, limón, ajo, sal y pimienta.",
            "En un bowl, combina las hojas verdes, pepino y aceitunas.",
            "Agrega el pollo y vierte el aderezo.",
            "Mezcla suavemente y sirve."
        ]
    },
    // CENAS
    "zoodles-albondigas": {
        id: "zoodles-albondigas",
        name: "🍝 Fideos de Calabacín con Albóndigas",
        time: "35 min",
        portions: "2 porciones",
        carbs: "8g netos",
        ingredients: [
            "3 calabacines medianos",
            "400g de carne molida",
            "1 huevo",
            "1/4 taza de queso parmesano rallado",
            "1 taza de salsa marinara sin azúcar",
            "2 dientes de ajo picados",
            "1 cucharadita de orégano",
            "Aceite de oliva, sal y pimienta"
        ],
        steps: [
            "Usa un espiralizador para hacer los fideos de calabacín. Reserva.",
            "Mezcla la carne con huevo, parmesano, orégano, sal y pimienta.",
            "Forma albóndigas de 3cm y dóralas en una sartén por 8-10 minutos.",
            "En otra sartén, calienta el ajo con aceite, agrega la salsa marinara.",
            "Añade las albóndigas a la salsa y cocina 5 minutos.",
            "Saltea los zoodles 2-3 minutos (no cocinar demasiado).",
            "Sirve los zoodles con las albóndigas y salsa encima."
        ]
    },
    "salmon-esparragos": {
        id: "salmon-esparragos",
        name: "🐟 Salmón al Horno con Espárragos al Limón",
        time: "25 min",
        portions: "2 porciones",
        carbs: "4g netos",
        ingredients: [
            "2 filetes de salmón (150-180g cada uno)",
            "1 manojo de espárragos",
            "3 cucharadas de aceite de oliva",
            "1 limón (jugo y ralladura)",
            "3 dientes de ajo picados",
            "Sal, pimienta y eneldo"
        ],
        steps: [
            "Precalienta el horno a 200°C (400°F).",
            "Coloca el salmón y los espárragos en una bandeja para horno.",
            "Mezcla el aceite con el ajo, jugo de limón, sal y pimienta.",
            "Vierte la mezcla sobre el salmón y los espárragos.",
            "Espolvorea la ralladura de limón y eneldo.",
            "Hornea por 15-18 minutos hasta que el salmón esté cocido.",
            "Sirve inmediatamente."
        ]
    },
    "chuletas-cerdo": {
        id: "chuletas-cerdo",
        name: "🥩 Chuletas de Cerdo con Mantequilla de Ajo",
        time: "25 min",
        portions: "2 porciones",
        carbs: "4g netos",
        ingredients: [
            "2 chuletas de cerdo gruesas",
            "3 cucharadas de mantequilla",
            "4 dientes de ajo picados",
            "200g de judías verdes",
            "1 cucharada de aceite de oliva",
            "Romero fresco, sal y pimienta"
        ],
        steps: [
            "Sazona las chuletas con sal, pimienta y romero.",
            "Calienta el aceite en una sartén a fuego alto.",
            "Cocina las chuletas 4-5 minutos por lado.",
            "Retira y deja reposar.",
            "En la misma sartén, derrite la mantequilla con el ajo.",
            "Blanquea las judías verdes en agua hirviendo por 3 minutos.",
            "Saltea las judías en la mantequilla de ajo.",
            "Sirve las chuletas con las judías y la mantequilla encima."
        ]
    },
    "camarones-calabacin": {
        id: "camarones-calabacin",
        name: "🦐 Camarones a la Parrilla con Calabacines",
        time: "20 min",
        portions: "2 porciones",
        carbs: "5g netos",
        ingredients: [
            "300g de camarones pelados y desvenados",
            "2 calabacines medianos en rodajas",
            "3 cucharadas de aceite de oliva",
            "3 dientes de ajo picados",
            "Jugo de 1 limón",
            "Perejil fresco picado",
            "Sal, pimienta y pimentón"
        ],
        steps: [
            "Marina los camarones con 2 cucharadas de aceite, ajo, limón y pimentón por 10 minutos.",
            "Calienta una sartén o parrilla a fuego alto.",
            "Cocina los camarones 2-3 minutos por lado hasta que estén rosados.",
            "En otra sartén, saltea los calabacines con aceite, sal y pimienta por 4-5 minutos.",
            "Sirve los camarones sobre los calabacines.",
            "Decora con perejil fresco."
        ]
    },
    "curry-pollo": {
        id: "curry-pollo",
        name: "🍛 Curry de Pollo con Arroz de Coliflor",
        time: "30 min",
        portions: "2 porciones",
        carbs: "7g netos",
        ingredients: [
            "300g de pechuga de pollo en cubos",
            "2 tazas de arroz de coliflor",
            "1 lata de leche de coco (400ml)",
            "2 cucharadas de pasta de curry (o curry en polvo)",
            "1 cucharada de aceite de coco",
            "1 cebolla pequeña picada",
            "2 dientes de ajo picados",
            "Jengibre fresco rallado",
            "Cilantro fresco"
        ],
        steps: [
            "Calienta el aceite en una sartén grande a fuego medio.",
            "Saltea la cebolla, ajo y jengibre por 2 minutos.",
            "Agrega el pollo y cocina hasta que dore (5-6 minutos).",
            "Incorpora la pasta de curry y mezcla bien.",
            "Vierte la leche de coco y cocina a fuego bajo por 15 minutos.",
            "En otra sartén, saltea el arroz de coliflor por 4-5 minutos.",
            "Sirve el curry sobre el arroz de coliflor con cilantro."
        ]
    },
    "entrecot-coles": {
        id: "entrecot-coles",
        name: "🥩 Entrecot con Mantequilla de Ajo y Coles de Bruselas",
        time: "25 min",
        portions: "2 porciones",
        carbs: "6g netos",
        ingredients: [
            "2 entrecots (200-250g cada uno)",
            "300g de coles de Bruselas cortadas por la mitad",
            "4 cucharadas de mantequilla",
            "4 dientes de ajo picados",
            "2 cucharadas de aceite de oliva",
            "Tomillo fresco, sal y pimienta"
        ],
        steps: [
            "Precalienta el horno a 200°C (400°F).",
            "Sazona los entrecots con sal y pimienta.",
            "Mezcla las coles de Bruselas con aceite de oliva, sal y pimienta.",
            "Ásalas en el horno por 20-25 minutos hasta que estén doradas.",
            "Calienta una sartén de hierro a fuego muy alto.",
            "Cocina los entrecots 3-4 minutos por lado (término medio).",
            "En una sartén pequeña, derrite la mantequilla con el ajo y tomillo.",
            "Sirve los entrecots con las coles y la mantequilla de ajo encima."
        ]
    },
    "pollo-champinones": {
        id: "pollo-champinones",
        name: "🍗 Pollo al Horno con Crema de Champiñones",
        time: "40 min",
        portions: "2 porciones",
        carbs: "5g netos",
        ingredients: [
            "2 muslos de pollo con piel",
            "200g de champiñones en láminas",
            "1/2 taza de crema para batir",
            "3 dientes de ajo picados",
            "1 cucharada de mantequilla",
            "1 taza de espinacas frescas",
            "Tomillo, sal y pimienta"
        ],
        steps: [
            "Precalienta el horno a 190°C (375°F).",
            "Sazona el pollo con sal, pimienta y tomillo.",
            "Dora el pollo en una sartén apta para horno, piel hacia abajo, por 5 minutos.",
            "Voltea y hornea por 25-30 minutos.",
            "Mientras, saltea los champiñones con mantequilla y ajo.",
            "Agrega la crema y cocina hasta que espese.",
            "Incorpora las espinacas al final.",
            "Sirve el pollo con la salsa de champiñones."
        ]
    },
    // SNACKS
    "bastones-queso": {
        id: "bastones-queso",
        name: "🧀 Bastones de Queso con Almendras",
        time: "2 min",
        portions: "1 porción",
        carbs: "2g netos",
        ingredients: [
            "60g de queso cheddar o mozzarella",
            "30g de almendras crudas"
        ],
        steps: [
            "Corta el queso en bastones o cubos.",
            "Acompaña con un puñado de almendras crudas.",
            "Disfruta como snack entre comidas."
        ]
    },
    "apio-almendra": {
        id: "apio-almendra",
        name: "🥒 Apio con Mantequilla de Almendra",
        time: "2 min",
        portions: "1 porción",
        carbs: "3g netos",
        ingredients: [
            "2-3 tallos de apio",
            "2 cucharadas de mantequilla de almendra"
        ],
        steps: [
            "Lava y corta los tallos de apio en bastones.",
            "Unta la mantequilla de almendra en el canal del apio.",
            "Disfruta como snack crujiente."
        ]
    },
    "yogur-chia": {
        id: "yogur-chia",
        name: "🥛 Yogur Griego con Semillas de Chía",
        time: "2 min",
        portions: "1 porción",
        carbs: "4g netos",
        ingredients: [
            "150g de yogur griego sin azúcar",
            "1 cucharada de semillas de chía",
            "Opcional: stevia y canela"
        ],
        steps: [
            "Sirve el yogur griego en un bowl.",
            "Agrega las semillas de chía y mezcla.",
            "Opcional: añade un poco de stevia y canela."
        ]
    },
    "aceitunas-pepperoni": {
        id: "aceitunas-pepperoni",
        name: "🫒 Aceitunas y Pepperoni",
        time: "1 min",
        portions: "1 porción",
        carbs: "1g neto",
        ingredients: [
            "1/4 taza de aceitunas mixtas",
            "6-8 rodajas de pepperoni"
        ],
        steps: [
            "Sirve las aceitunas en un plato pequeño.",
            "Acompaña con las rodajas de pepperoni.",
            "Snack perfecto alto en grasa."
        ]
    },
    "mix-nueces": {
        id: "mix-nueces",
        name: "🥜 Mix de Nueces y Semillas",
        time: "1 min",
        portions: "1 porción",
        carbs: "3g netos",
        ingredients: [
            "15g de almendras",
            "15g de nueces de macadamia",
            "10g de semillas de calabaza",
            "10g de semillas de girasol"
        ],
        steps: [
            "Mezcla todas las nueces y semillas en un bowl pequeño.",
            "Porción recomendada: 30-40g.",
            "Guarda el resto en un recipiente hermético."
        ]
    },
    "fat-bomb": {
        id: "fat-bomb",
        name: "🍪 Fat Bomb de Chocolate",
        time: "10 min + 1h congelación",
        portions: "8 bombas",
        carbs: "1g neto por bomba",
        ingredients: [
            "100g de mantequilla de coco",
            "2 cucharadas de cacao en polvo sin azúcar",
            "Stevia al gusto",
            "Opcional: extracto de vainilla"
        ],
        steps: [
            "Derrite la mantequilla de coco a baño maría.",
            "Agrega el cacao en polvo y stevia. Mezcla bien.",
            "Vierte en moldes de silicona pequeños.",
            "Congela por al menos 1 hora.",
            "Guarda en el congelador."
        ]
    },
    "helado-keto": {
        id: "helado-keto",
        name: "🍨 Helado Keto de Vainilla",
        time: "15 min + 3h congelación",
        portions: "4 porciones",
        carbs: "2g netos",
        ingredients: [
            "1 taza de crema para batir",
            "2 cucharadas de eritritol",
            "1 cucharadita de extracto de vainilla",
            "Pizca de sal"
        ],
        steps: [
            "Bate la crema con el eritritol y vainilla hasta formar picos suaves.",
            "Vierte en un recipiente apto para congelador.",
            "Congela y revuelve cada 30-45 minutos durante 3 horas.",
            "Sirve en bolas pequeñas."
        ]
    },
    "mousse-chocolate": {
        id: "mousse-chocolate",
        name: "🍫 Mousse de Chocolate Keto",
        time: "10 min + 1h refrigeración",
        portions: "2 porciones",
        carbs: "3g netos",
        ingredients: [
            "1 taza de crema para batir",
            "2 cucharadas de cacao en polvo sin azúcar",
            "2 cucharadas de eritritol",
            "1/2 cucharadita de extracto de vainilla"
        ],
        steps: [
            "Bate la crema hasta que empiece a espesar.",
            "Agrega el cacao, eritritol y vainilla.",
            "Continúa batiendo hasta formar picos firmes.",
            "Divide en copas y refrigera por 1 hora.",
            "Sirve con chocolate rallado encima (opcional)."
        ]
    }
};

// Weekly Menu Data - Dieta sin TACC (6 comidas: desayuno, colación mañana, almuerzo, colación tarde, merienda, cena)
const weeklyMenu = [
    {
        day: "Lunes",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Infusión + licuado de frutas (durazno) o manzana sin piel", recipeId: null },
            { type: "colacion", icon: "🍎", name: "Colación: 1 manzana sin piel o 1 pera sin piel", recipeId: null },
            { type: "almuerzo", icon: "🍽️", name: "Caldo + Pechuga pollo plancha + Ensalada cruda + Zapallito hervido", recipeId: null },
            { type: "colacion", icon: "🍵", name: "Colación: Infusión + 2 cdas queso untable descremado con bastones de apio", recipeId: null },
            { type: "merienda", icon: "🥜", name: "Infusión + 1 pera sin piel", recipeId: null },
            { type: "cena", icon: "🌙", name: "Caldo + Pescado al horno + Acelga hervida + Ensalada chaucha y tomate", recipeId: null }
        ]
    },
    {
        day: "Martes",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Café con leche descremada o capuccino light + 1 fruta", recipeId: null },
            { type: "colacion", icon: "🍎", name: "Colación: 1 durazno sin piel o 1 manzana sin piel", recipeId: null },
            { type: "almuerzo", icon: "🍽️", name: "Caldo + Carne magra plancha + Ensalada cruda + Calabaza al horno", recipeId: null },
            { type: "colacion", icon: "🍵", name: "Colación: Mate + 1 yogur descremado o gelatina diet", recipeId: null },
            { type: "merienda", icon: "🥜", name: "Mate + queso untable descremado con bastones de apio", recipeId: null },
            { type: "cena", icon: "🌙", name: "Caldo + Pollo sin piel al horno con espárragos + Ensalada berenjena y tomate", recipeId: null }
        ]
    },
    {
        day: "Miércoles",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Licuado detox o infusión + 1 fruta permitida", recipeId: null },
            { type: "colacion", icon: "🍎", name: "Colación: 1 pera sin piel o 1 ciruela sin piel", recipeId: null },
            { type: "almuerzo", icon: "🍽️", name: "Caldo + Merluza al vapor + Ensalada cruda + Espinaca hervida", recipeId: null },
            { type: "colacion", icon: "🍵", name: "Colación: Infusión + 1 fruta (manzana o durazno sin piel)", recipeId: null },
            { type: "merienda", icon: "🥜", name: "Infusión + yogur descremado o gelatina diet", recipeId: null },
            { type: "cena", icon: "🌙", name: "Caldo + Lomo de cerdo plancha + Zapallo hervido + Ensalada cruda", recipeId: null }
        ]
    },
    {
        day: "Jueves",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Infusión + licuado (½ banana o manzana + agua)", recipeId: null },
            { type: "colacion", icon: "🍎", name: "Colación: 1 manzana sin piel o bastones de zanahoria con queso untable", recipeId: null },
            { type: "almuerzo", icon: "🍽️", name: "Caldo + Pollo con salsa fileto light + Ensalada + Chaucha hervida", recipeId: null },
            { type: "colacion", icon: "🍵", name: "Colación: Infusión + 1 pote postre light o 1 yogur descremado", recipeId: null },
            { type: "merienda", icon: "🥜", name: "Infusión + 1 fruta (ciruela o damasco sin piel)", recipeId: null },
            { type: "cena", icon: "🌙", name: "Caldo + Carne magra con salsa bolognesa light + Ensalada + Calabacín al horno", recipeId: null }
        ]
    },
    {
        day: "Viernes",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Café o té + 1 fruta. Opción: 2 claras revueltas con verduras", recipeId: null },
            { type: "colacion", icon: "🍎", name: "Colación: 1 pera sin piel o 1 durazno sin piel", recipeId: null },
            { type: "almuerzo", icon: "🍽️", name: "Caldo + Pescado a la plancha + Ensalada cruda + Espárragos hervidos", recipeId: null },
            { type: "colacion", icon: "🍵", name: "Colación: Mate + queso untable con bastones de apio", recipeId: null },
            { type: "merienda", icon: "🥜", name: "Mate + postre light o 1 fruta", recipeId: null },
            { type: "cena", icon: "🌙", name: "Caldo + Harinas 1x/sem: 2 empanadas o tarta sin TACC + Ensalada cruda", recipeId: null }
        ]
    },
    {
        day: "Sábado",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Licuado de frutas (manzana + agua) o infusión + 1 fruta", recipeId: null },
            { type: "colacion", icon: "🍎", name: "Colación: 1 manzana sin piel o 1 ciruela sin piel", recipeId: null },
            { type: "almuerzo", icon: "🍽️", name: "Caldo + Pollo con salsa italiana light + Ensalada + Hongos salteados", recipeId: null },
            { type: "colacion", icon: "🍵", name: "Colación: Infusión + yogur descremado o gelatina diet", recipeId: null },
            { type: "merienda", icon: "🥜", name: "Infusión + queso untable con bastones de apio/zanahoria", recipeId: null },
            { type: "cena", icon: "🌙", name: "Caldo + Milanesa al horno (1x/sem, sin TACC) + Ensalada cruda + Tomate", recipeId: null }
        ]
    },
    {
        day: "Domingo",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Capuccino light o infusión + durazno o pera sin piel", recipeId: null },
            { type: "colacion", icon: "🍎", name: "Colación: 1 manzana sin piel o 1 pera sin piel", recipeId: null },
            { type: "almuerzo", icon: "🍽️", name: "Caldo + Carne magra a la parrilla + Ensalada abundante + Puerro y calabaza", recipeId: null },
            { type: "colacion", icon: "🍵", name: "Colación: Infusión + 1 fruta o 2 cdas queso untable con apio", recipeId: null },
            { type: "merienda", icon: "🥜", name: "Infusión + 1 vaso leche descremada o 1 yogur descremado", recipeId: null },
            { type: "cena", icon: "🌙", name: "Caldo + Pescado al horno con limón y hierbas + Acelga y espinaca + Ensalada", recipeId: null }
        ]
    }
];

// ========================================
// Data - Lista de Compras Dieta sin TACC (según menú semanal)
// ========================================
const shoppingData = [
    {
        id: "carnes",
        name: "Carnes y Pescado (magros)",
        icon: "🥩",
        items: [
            { name: "Pechuga de pollo", quantity: "para 3-4 comidas", notes: "Sin piel; plancha/horno" },
            { name: "Carne magra (lomo, peceto, cuadril)", quantity: "para 3-4 comidas", notes: "Porción palma de mano/día" },
            { name: "Lomo de cerdo", quantity: "1 porción", notes: "Solo lomo" },
            { name: "Pescado (merluza, etc.)", quantity: "para 3-4 comidas", notes: "De mar; enlatado al agua si aplica" },
            { name: "Huevos", quantity: "1 docena", notes: "2 claras/día; entero máx. 2/semana" },
            { name: "Carne para milanesa (1x/sem)", quantity: "1 porción", notes: "Al horno, empanado sin TACC" }
        ]
    },
    {
        id: "lacteos",
        name: "Lácteos descremados",
        icon: "🧀",
        items: [
            { name: "Leche descremada", quantity: "1 litro", notes: "1 vaso = 1 yogur = 1 pote postre" },
            { name: "Yogur descremado sin azúcar", quantity: "4-6 potes", notes: "Meriendas y postres" },
            { name: "Queso untable descremado sin sal", quantity: "2-3 unidades", notes: "Porción cassette o 2 cda; no queso duro" },
            { name: "Postres light/diet (Ser, Cormillot, Nestlé)", quantity: "a gusto", notes: "Gelatina diet, etc." }
        ]
    },
    {
        id: "verduras",
        name: "Verduras (sin papa, batata, mandioca)",
        icon: "🥬",
        items: [
            { name: "Lechuga romana/mixta", quantity: "4-5 cabezas", notes: "Base ensaladas" },
            { name: "Tomate", quantity: "1 kg", notes: "Sin piel/semillas en cocidos" },
            { name: "Pepino", quantity: "4-6 unidades", notes: "Sin piel" },
            { name: "Zanahoria", quantity: "1 kg", notes: "Ensaladas y caldos" },
            { name: "Zapallito", quantity: "1 kg", notes: "Sin piel" },
            { name: "Calabaza", quantity: "1 unidad", notes: "Sin piel" },
            { name: "Espinaca", quantity: "500 g", notes: "Ensaladas y hervida" },
            { name: "Acelga", quantity: "2 atados", notes: "Hervida" },
            { name: "Espárragos", quantity: "2 manojos", notes: "Hervidos" },
            { name: "Berenjena", quantity: "2-3 unidades", notes: "Sin piel" },
            { name: "Chaucha (judías verdes)", quantity: "500 g", notes: "" },
            { name: "Apio", quantity: "1 atado", notes: "Bastones merienda; caldo" },
            { name: "Puerro", quantity: "2-3 unidades", notes: "Poco" },
            { name: "Remolacha", quantity: "2-3 unidades", notes: "Ensaladas" },
            { name: "Champiñones / hongos", quantity: "300 g", notes: "Salsas y salteados" },
            { name: "Palta", quantity: "1 unidad", notes: "Solo 1 por semana" },
            { name: "Ají", quantity: "2-3", notes: "Sin semillas" },
            { name: "Cebolla", quantity: "1 kg", notes: "Salsas y caldos" }
        ]
    },
    {
        id: "frutas",
        name: "Frutas (sin piel ni semillas)",
        icon: "🍓",
        items: [
            { name: "Manzana", quantity: "1 kg", notes: "Licuados y colación" },
            { name: "Pera", quantity: "6-8 unidades", notes: "" },
            { name: "Durazno", quantity: "6-8 unidades", notes: "" },
            { name: "Ciruela", quantity: "4-6 unidades", notes: "" },
            { name: "Damasco", quantity: "4-6 unidades", notes: "" },
            { name: "Banana", quantity: "2 pequeñas (opcional)", notes: "Máx. 2 por semana, no muy maduras" },
            { name: "Limón", quantity: "6-8 unidades", notes: "Aderezos y licuado detox" }
        ]
    },
    {
        id: "aceites",
        name: "Aceites y condimentos",
        icon: "🫒",
        items: [
            { name: "Aceite (oliva, girasol, maíz, canola)", quantity: "1 botella", notes: "Máx. 2 cucharaditas postre/día en crudo" },
            { name: "Rocío vegetal", quantity: "1 envase", notes: "Para cocinar" },
            { name: "Vinagre / aceto balsámico", quantity: "1 botella", notes: "" },
            { name: "Jugo de limón", quantity: "a gusto", notes: "" },
            { name: "Sal (poca)", quantity: "1 paquete", notes: "" },
            { name: "Pimienta, laurel, tomillo, orégano", quantity: "a gusto", notes: "" },
            { name: "Mayonesa light", quantity: "1 frasco", notes: "Muy esporádica; 1 cda = 1 cda aceite" },
            { name: "Mostaza", quantity: "1 frasco", notes: "Sin azúcar" },
            { name: "Edulcorante", quantity: "1 frasco", notes: "Para infusiones" }
        ]
    },
    {
        id: "despensa",
        name: "Despensa y caldo",
        icon: "🍫",
        items: [
            { name: "Caldo light / sobre caldo verduras sin sal", quantity: "para la semana", notes: "20-30 min antes de almuerzo y cena" },
            { name: "Tomates naturales (para salsas)", quantity: "1 kg", notes: "Salsa fileto, bolognesa, italiana" },
            { name: "Harinas sin TACC (1x/semana)", quantity: "según producto", notes: "Arepas, empanadas o tarta con sello sin TACC" },
            { name: "Pan rallado sin TACC (opcional)", quantity: "1 paquete", notes: "Solo para milanesa 1x/semana" }
        ]
    },
    {
        id: "bebidas",
        name: "Bebidas",
        icon: "☕",
        items: [
            { name: "Té, mate cocido, café", quantity: "a gusto", notes: "Infusiones amargas o con edulcorante" },
            { name: "Agua mineral o corriente", quantity: "a gusto", notes: "" },
            { name: "Jugos sin azúcar / gaseosas 0%", quantity: "opcional", notes: "Evitar gasificadas en exceso" },
            { name: "Leche descremada (capuccino light)", quantity: "1 litro", notes: "" }
        ]
    }
];

// ========================================
// State Management
// ========================================
const STORAGE_KEY = 'sin-tacc-shopping-list';
const MEALS_STORAGE_KEY = 'sin-tacc-meals-completed';

let checkedItems = loadFromStorage(STORAGE_KEY);
let completedMeals = loadFromStorage(MEALS_STORAGE_KEY);
let currentFilter = 'all';
let currentCategory = 'all';
let searchQuery = '';
let currentMealId = null;

function loadFromStorage(key) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// ========================================
// DOM Elements
// ========================================
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const menuContainer = document.getElementById('menuContainer');
const shoppingListEl = document.getElementById('shoppingList');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryPillsEl = document.getElementById('categoryPills');
const resetBtn = document.getElementById('resetBtn');
const resetMealsBtn = document.getElementById('resetMealsBtn');
const progressFill = document.getElementById('progressFill');
const checkedCountEl = document.getElementById('checkedCount');
const totalCountEl = document.getElementById('totalCount');
const progressPercentageEl = document.getElementById('progressPercentage');
const mealProgressFill = document.getElementById('mealProgressFill');
const mealCheckedCountEl = document.getElementById('mealCheckedCount');
const mealTotalCountEl = document.getElementById('mealTotalCount');
const mealProgressPercentageEl = document.getElementById('mealProgressPercentage');
const toastEl = document.getElementById('toast');

// Modal elements
const recipeModal = document.getElementById('recipeModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalIngredients = document.getElementById('modalIngredients');
const modalSteps = document.getElementById('modalSteps');
const modalMealDone = document.getElementById('modalMealDone');

// ========================================
// Navigation Functions
// ========================================
function switchSection(sectionId) {
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });
    
    contentSections.forEach(section => {
        section.classList.toggle('active', section.id === `section-${sectionId}`);
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// Menu Render Functions
// ========================================
function generateMealId(dayIndex, mealIndex) {
    return `meal-${dayIndex}-${mealIndex}`;
}

function renderWeeklyMenu() {
    let html = '';
    
    weeklyMenu.forEach((day, dayIndex) => {
        html += `
            <div class="menu-day">
                <div class="day-header">${day.day}</div>
                ${day.meals.map((meal, mealIndex) => {
                    const mealId = generateMealId(dayIndex, mealIndex);
                    const isCompleted = completedMeals[mealId] || false;
                    const mealTypeLabel = meal.type.charAt(0).toUpperCase() + meal.type.slice(1);
                    
                    return `
                        <div class="meal clickable ${meal.type === 'snack' || meal.type === 'merienda' || meal.type === 'colacion' ? 'snack' : ''} ${isCompleted ? 'completed' : ''}" 
                             data-recipe-id="${meal.recipeId != null ? meal.recipeId : ''}" 
                             data-meal-id="${mealId}">
                            <span class="meal-type">${meal.icon} ${mealTypeLabel}</span>
                            <p>${meal.name}</p>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    });
    
    menuContainer.innerHTML = html;
    
    // Add click listeners
    menuContainer.querySelectorAll('.meal.clickable').forEach(meal => {
        meal.addEventListener('click', () => {
            const recipeId = meal.dataset.recipeId;
            const mealId = meal.dataset.mealId;
            if (!recipeId) {
                toggleMealDoneOnly(mealId);
                return;
            }
            openRecipeModal(recipeId, mealId);
        });
    });
    
    updateMealProgress();
}

function updateMealProgress() {
    const totalMeals = weeklyMenu.reduce((acc, day) => acc + day.meals.length, 0);
    const completedCount = Object.values(completedMeals).filter(Boolean).length;
    const percentage = totalMeals > 0 ? Math.round((completedCount / totalMeals) * 100) : 0;
    
    mealTotalCountEl.textContent = totalMeals;
    mealCheckedCountEl.textContent = completedCount;
    mealProgressFill.style.width = `${percentage}%`;
    mealProgressPercentageEl.textContent = `${percentage}%`;
}

// ========================================
// Modal Functions
// ========================================
function toggleMealDoneOnly(mealId) {
    completedMeals[mealId] = !completedMeals[mealId];
    saveToStorage(MEALS_STORAGE_KEY, completedMeals);
    const mealEl = menuContainer.querySelector(`[data-meal-id="${mealId}"]`);
    if (mealEl) mealEl.classList.toggle('completed', completedMeals[mealId]);
    updateMealProgress();
    showToast(completedMeals[mealId] ? '¡Comida marcada como realizada!' : 'Comida desmarcada', completedMeals[mealId] ? 'success' : 'info');
}

function openRecipeModal(recipeId, mealId) {
    const recipe = recipesData[recipeId];
    if (!recipe) return;
    
    currentMealId = mealId;
    
    modalTitle.textContent = recipe.name;
    modalMeta.innerHTML = `
        <span>⏱️ ${recipe.time}</span>
        <span>👥 ${recipe.portions}</span>
        <span class="carbs">🥬 ${recipe.carbs}</span>
    `;
    
    modalIngredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    modalSteps.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');
    
    modalMealDone.checked = completedMeals[mealId] || false;
    
    recipeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
    recipeModal.classList.remove('active');
    document.body.style.overflow = '';
    currentMealId = null;
}

function handleMealDoneChange() {
    if (!currentMealId) return;
    
    const isCompleted = modalMealDone.checked;
    completedMeals[currentMealId] = isCompleted;
    saveToStorage(MEALS_STORAGE_KEY, completedMeals);
    
    // Update the meal item in the menu
    const mealEl = menuContainer.querySelector(`[data-meal-id="${currentMealId}"]`);
    if (mealEl) {
        mealEl.classList.toggle('completed', isCompleted);
    }
    
    updateMealProgress();
    
    if (isCompleted) {
        showToast('¡Comida marcada como realizada!', 'success');
    }
}

function resetMeals() {
    if (confirm('¿Estás seguro de que querés reiniciar el progreso de comidas de la semana?')) {
        completedMeals = {};
        saveToStorage(MEALS_STORAGE_KEY, completedMeals);
        renderWeeklyMenu();
        showToast('Progreso de comidas reiniciado', 'info');
    }
}

// ========================================
// Shopping List Functions
// ========================================
function generateItemId(categoryId, itemIndex) {
    return `${categoryId}-${itemIndex}`;
}

function renderCategoryPills() {
    const pillsHTML = `
        <button class="pill ${currentCategory === 'all' ? 'active' : ''}" data-category="all">Todas las categorías</button>
        ${shoppingData.map(cat => `
            <button class="pill ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
                ${cat.icon} ${cat.name}
            </button>
        `).join('')}
    `;
    categoryPillsEl.innerHTML = pillsHTML;
    
    categoryPillsEl.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
            currentCategory = pill.dataset.category;
            categoryPillsEl.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderShoppingList();
        });
    });
}

function renderShoppingList() {
    let html = '';
    let visibleCategories = 0;
    
    shoppingData.forEach(category => {
        if (currentCategory !== 'all' && currentCategory !== category.id) {
            return;
        }
        
        const filteredItems = category.items.filter((item, index) => {
            const itemId = generateItemId(category.id, index);
            const isChecked = checkedItems[itemId] || false;
            
            const matchesSearch = searchQuery === '' || 
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.notes.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesFilter = currentFilter === 'all' ||
                (currentFilter === 'completed' && isChecked) ||
                (currentFilter === 'pending' && !isChecked);
            
            return matchesSearch && matchesFilter;
        });
        
        if (filteredItems.length === 0) return;
        
        visibleCategories++;
        
        const checkedInCategory = category.items.filter((_, index) => 
            checkedItems[generateItemId(category.id, index)]
        ).length;
        
        const isComplete = checkedInCategory === category.items.length;
        
        html += `
            <section class="category-section" data-category="${category.id}">
                <div class="category-header">
                    <h2 class="category-title">
                        <span class="category-icon">${category.icon}</span>
                        ${category.name}
                    </h2>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span class="category-count ${isComplete ? 'complete' : ''}">
                            ${checkedInCategory}/${category.items.length}
                        </span>
                        <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m6 9 6 6 6-6"/>
                        </svg>
                    </div>
                </div>
                <div class="category-items">
                    ${filteredItems.map((item, filteredIndex) => {
                        const originalIndex = category.items.indexOf(item);
                        const itemId = generateItemId(category.id, originalIndex);
                        const isChecked = checkedItems[itemId] || false;
                        
                        return `
                            <div class="product-item ${isChecked ? 'checked' : ''}" data-item-id="${itemId}">
                                <label class="checkbox-wrapper">
                                    <input type="checkbox" ${isChecked ? 'checked' : ''} data-id="${itemId}">
                                    <span class="checkmark">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                            <path d="M20 6L9 17l-5-5"/>
                                        </svg>
                                    </span>
                                </label>
                                <div class="product-info">
                                    <div class="product-name">${item.name}</div>
                                    ${item.notes ? `<div class="product-notes">${item.notes}</div>` : ''}
                                </div>
                                <div class="product-quantity">${item.quantity}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
    });
    
    if (visibleCategories === 0) {
        html = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
                <p>No se encontraron productos con los filtros actuales</p>
            </div>
        `;
    }
    
    shoppingListEl.innerHTML = html;
    
    shoppingListEl.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
    
    shoppingListEl.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('collapsed');
        });
    });
    
    updateProgress();
}

function handleCheckboxChange(e) {
    const itemId = e.target.dataset.id;
    const isChecked = e.target.checked;
    
    checkedItems[itemId] = isChecked;
    saveToStorage(STORAGE_KEY, checkedItems);
    
    const productItem = e.target.closest('.product-item');
    productItem.classList.toggle('checked', isChecked);
    
    const categorySection = productItem.closest('.category-section');
    const categoryId = categorySection.dataset.category;
    const category = shoppingData.find(c => c.id === categoryId);
    
    const checkedInCategory = category.items.filter((_, index) => 
        checkedItems[generateItemId(category.id, index)]
    ).length;
    
    const countEl = categorySection.querySelector('.category-count');
    countEl.textContent = `${checkedInCategory}/${category.items.length}`;
    countEl.classList.toggle('complete', checkedInCategory === category.items.length);
    
    updateProgress();
    
    if (checkedInCategory === category.items.length) {
        showToast(`¡${category.name} completado!`, 'success');
    }
}

function updateProgress() {
    const totalItems = shoppingData.reduce((acc, cat) => acc + cat.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;
    
    totalCountEl.textContent = totalItems;
    checkedCountEl.textContent = checkedCount;
    progressFill.style.width = `${percentage}%`;
    progressPercentageEl.textContent = `${percentage}%`;
    
    if (percentage === 100) {
        showToast('🎉 ¡Lista de compras completada!', 'success');
    }
}

// ========================================
// Event Handlers
// ========================================
function handleSearch(e) {
    searchQuery = e.target.value.trim();
    renderShoppingList();
}

function handleClearSearch() {
    searchInput.value = '';
    searchQuery = '';
    renderShoppingList();
}

function handleFilterChange(e) {
    const filter = e.target.dataset.filter;
    if (!filter) return;
    
    currentFilter = filter;
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    renderShoppingList();
}

function handleReset() {
    if (confirm('¿Estás seguro de que querés reiniciar la lista? Se desmarcarán todos los productos.')) {
        checkedItems = {};
        saveToStorage(STORAGE_KEY, checkedItems);
        renderShoppingList();
        showToast('Lista reiniciada', 'info');
    }
}

function showToast(message, type = 'info') {
    toastEl.textContent = message;
    toastEl.className = `toast ${type} show`;
    
    setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3000);
}

// ========================================
// Initialize
// ========================================
function init() {
    // Navigation
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchSection(btn.dataset.section);
        });
    });
    
    // Menu
    renderWeeklyMenu();
    
    // Modal
    modalClose.addEventListener('click', closeRecipeModal);
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) closeRecipeModal();
    });
    modalMealDone.addEventListener('change', handleMealDoneChange);
    resetMealsBtn.addEventListener('click', resetMeals);
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && recipeModal.classList.contains('active')) {
            closeRecipeModal();
        }
    });
    
    // Shopping list
    renderCategoryPills();
    renderShoppingList();
    
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', handleClearSearch);
    filterButtons.forEach(btn => btn.addEventListener('click', handleFilterChange));
    resetBtn.addEventListener('click', handleReset);

}

document.addEventListener('DOMContentLoaded', init);
