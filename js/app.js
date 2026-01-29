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

// Weekly Menu Data
const weeklyMenu = [
    {
        day: "Lunes",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Muffins de huevo con aguacate y tocino", recipeId: "muffins-huevo" },
            { type: "almuerzo", icon: "🍽️", name: "Ensalada de pollo a la parrilla", recipeId: "ensalada-pollo" },
            { type: "cena", icon: "🌙", name: "Fideos de calabacín con albóndigas", recipeId: "zoodles-albondigas" },
            { type: "snack", icon: "🥜", name: "Bastones de queso + almendras", recipeId: "bastones-queso" }
        ]
    },
    {
        day: "Martes",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Tortilla de espinacas y queso feta", recipeId: "tortilla-espinacas" },
            { type: "almuerzo", icon: "🍽️", name: "Roll-ups de lechuga con ensalada de atún", recipeId: "rollups-atun" },
            { type: "cena", icon: "🌙", name: "Salmón al horno con espárragos al limón", recipeId: "salmon-esparragos" },
            { type: "snack", icon: "🥜", name: "Apio con mantequilla de almendra", recipeId: "apio-almendra" }
        ]
    },
    {
        day: "Miércoles",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Pancakes keto de almendra con frutos rojos", recipeId: "pancakes-keto" },
            { type: "almuerzo", icon: "🍽️", name: "Salteado de carne con arroz de coliflor", recipeId: "salteado-carne" },
            { type: "cena", icon: "🌙", name: "Chuletas de cerdo con mantequilla de ajo", recipeId: "chuletas-cerdo" },
            { type: "snack", icon: "🥜", name: "Yogur griego con semillas de chía", recipeId: "yogur-chia" }
        ]
    },
    {
        day: "Jueves",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Pudding de chía con leche de coco", recipeId: "pudding-chia" },
            { type: "almuerzo", icon: "🍽️", name: "Ensalada de pavo y aguacate", recipeId: "ensalada-pavo" },
            { type: "cena", icon: "🌙", name: "Camarones a la parrilla con calabacines", recipeId: "camarones-calabacin" },
            { type: "snack", icon: "🥜", name: "Aceitunas y rodajas de pepperoni", recipeId: "aceitunas-pepperoni" }
        ]
    },
    {
        day: "Viernes",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Huevos revueltos con queso y tomates", recipeId: "huevos-revueltos" },
            { type: "almuerzo", icon: "🍽️", name: "Ensalada Cobb con tocino y queso azul", recipeId: "ensalada-cobb" },
            { type: "cena", icon: "🌙", name: "Curry de pollo con arroz de coliflor", recipeId: "curry-pollo" },
            { type: "snack", icon: "🥜", name: "Mix de nueces y semillas", recipeId: "mix-nueces" }
        ]
    },
    {
        day: "Sábado",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Batido keto de espinaca", recipeId: "batido-keto" },
            { type: "almuerzo", icon: "🍽️", name: "Roll-ups de salmón ahumado", recipeId: "rollups-salmon" },
            { type: "cena", icon: "🌙", name: "Entrecot con mantequilla de ajo y coles", recipeId: "entrecot-coles" },
            { type: "snack", icon: "🥜", name: "Fat bomb de chocolate", recipeId: "fat-bomb" }
        ]
    },
    {
        day: "Domingo",
        meals: [
            { type: "desayuno", icon: "🌅", name: "Café cetogénico + nueces", recipeId: "cafe-cetogenico" },
            { type: "almuerzo", icon: "🍽️", name: "Ensalada de pollo con aderezo de limón", recipeId: "ensalada-pollo-limon" },
            { type: "cena", icon: "🌙", name: "Pollo al horno con crema de champiñones", recipeId: "pollo-champinones" },
            { type: "snack", icon: "🥜", name: "Helado keto o mousse de chocolate", recipeId: "mousse-chocolate" }
        ]
    }
];

// ========================================
// Data - Lista de Compras Keto
// ========================================
const shoppingData = [
    {
        id: "carnes",
        name: "Carnes y Proteínas",
        icon: "🥩",
        items: [
            { name: "Huevos grandes", quantity: "60-72 unidades", notes: "~15-18 por semana" },
            { name: "Pollo (pechugas)", quantity: "2 kg", notes: "Para ensaladas y platos principales" },
            { name: "Pollo (muslos con piel)", quantity: "1.5 kg", notes: "Más grasa, mejor para keto" },
            { name: "Carne molida de res (80-85% magra)", quantity: "2 kg", notes: "Para albóndigas, rellenos" },
            { name: "Bistec/Entrecot", quantity: "1.5 kg", notes: "Cortes para parrilla" },
            { name: "Chuletas de cerdo", quantity: "1.2 kg", notes: "~8-10 chuletas" },
            { name: "Tocino/Panceta", quantity: "800 g", notes: "Sin azúcar agregada" },
            { name: "Salmón fresco", quantity: "1.2 kg", notes: "~8-10 filetes" },
            { name: "Atún enlatado (en agua/aceite)", quantity: "6 latas", notes: "Para ensaladas rápidas" },
            { name: "Camarones", quantity: "800 g", notes: "Frescos o congelados" },
            { name: "Pavo (pechuga en lonjas)", quantity: "500 g", notes: "Para roll-ups" },
            { name: "Salmón ahumado", quantity: "300 g", notes: "Para desayunos" },
            { name: "Pepperoni/Salami", quantity: "250 g", notes: "Snacks" }
        ]
    },
    {
        id: "lacteos",
        name: "Lácteos y Derivados",
        icon: "🧀",
        items: [
            { name: "Queso cheddar", quantity: "600 g", notes: "En bloques o rallado" },
            { name: "Queso mozzarella", quantity: "500 g", notes: "Fresco o rallado" },
            { name: "Queso feta", quantity: "400 g", notes: "Para ensaladas" },
            { name: "Queso azul", quantity: "200 g", notes: "Para aderezos" },
            { name: "Queso crema", quantity: "400 g", notes: "Philadelphia o similar" },
            { name: "Queso parmesano", quantity: "300 g", notes: "Rallado o en bloque" },
            { name: "Mantequilla sin sal", quantity: "750 g", notes: "~3 barras" },
            { name: "Crema para batir (35-40% grasa)", quantity: "1 litro", notes: "Heavy cream" },
            { name: "Yogur griego entero sin azúcar", quantity: "4 envases (500g c/u)", notes: "2 litros total" }
        ]
    },
    {
        id: "verduras",
        name: "Verduras y Vegetales",
        icon: "🥬",
        items: [
            { name: "Espinacas frescas", quantity: "1.5 kg", notes: "Para tortillas, batidos, ensaladas" },
            { name: "Lechuga romana/mixta", quantity: "4-5 cabezas", notes: "Base de ensaladas" },
            { name: "Aguacates", quantity: "16-20 unidades", notes: "~4-5 por semana" },
            { name: "Calabacín", quantity: "2 kg", notes: "Para 'zoodles' y salteados" },
            { name: "Brócoli", quantity: "1.5 kg", notes: "Fresco o congelado" },
            { name: "Coliflor", quantity: "2 kg", notes: "Para 'arroz' de coliflor" },
            { name: "Espárragos", quantity: "1 kg", notes: "~4 manojos" },
            { name: "Judías verdes/Ejotes", quantity: "800 g", notes: "Guarniciones" },
            { name: "Coles de Bruselas", quantity: "600 g", notes: "Para asar" },
            { name: "Champiñones", quantity: "500 g", notes: "Para salsas y salteados" },
            { name: "Tomates cherry", quantity: "500 g", notes: "Con moderación" },
            { name: "Pimientos (rojo, verde, amarillo)", quantity: "6-8 unidades", notes: "Para salteados" },
            { name: "Apio", quantity: "1 atado", notes: "Snacks con mantequilla de nueces" },
            { name: "Pepino", quantity: "4 unidades", notes: "Snacks, ensaladas" },
            { name: "Hojas de kale", quantity: "500 g", notes: "Para chips o ensaladas" }
        ]
    },
    {
        id: "frutos-secos",
        name: "Frutos Secos y Semillas",
        icon: "🥜",
        items: [
            { name: "Almendras crudas", quantity: "400 g", notes: "Snacks" },
            { name: "Nueces de macadamia", quantity: "300 g", notes: "Altas en grasa" },
            { name: "Nueces pecanas", quantity: "300 g", notes: "Para ensaladas" },
            { name: "Nueces de Brasil", quantity: "150 g", notes: "Alto en selenio" },
            { name: "Mix de semillas", quantity: "200 g", notes: "Girasol, calabaza" },
            { name: "Semillas de chía", quantity: "200 g", notes: "Puddings" },
            { name: "Semillas de lino molidas", quantity: "150 g", notes: "Para batidos" },
            { name: "Mantequilla de almendra", quantity: "1 frasco (350g)", notes: "Sin azúcar" },
            { name: "Mantequilla de maní natural", quantity: "1 frasco (350g)", notes: "Sin azúcar añadida" }
        ]
    },
    {
        id: "grasas",
        name: "Grasas y Aceites",
        icon: "🫒",
        items: [
            { name: "Aceite de oliva extra virgen", quantity: "750 ml - 1 litro", notes: "Para cocinar y aderezos" },
            { name: "Aceite de coco", quantity: "500 ml", notes: "Para cocinar" },
            { name: "Aceite MCT", quantity: "250 ml (opcional)", notes: "Para café cetogénico" },
            { name: "Aceite de aguacate", quantity: "250 ml (opcional)", notes: "Alta temperatura" },
            { name: "Aceitunas verdes/negras", quantity: "400 g", notes: "Snacks" }
        ]
    },
    {
        id: "frutas",
        name: "Frutas Bajas en Carbohidratos",
        icon: "🍓",
        items: [
            { name: "Fresas", quantity: "500 g", notes: "Con moderación" },
            { name: "Frambuesas", quantity: "300 g", notes: "Bajas en carbos" },
            { name: "Moras", quantity: "300 g", notes: "Para desayunos" },
            { name: "Arándanos", quantity: "200 g", notes: "Con moderación" },
            { name: "Limones", quantity: "8-10 unidades", notes: "Para aderezos" }
        ]
    },
    {
        id: "condimentos",
        name: "Condimentos y Especias",
        icon: "🧂",
        items: [
            { name: "Sal marina/Himalaya", quantity: "1 paquete", notes: "Electrolitos importantes" },
            { name: "Pimienta negra", quantity: "1 frasco", notes: "" },
            { name: "Ajo fresco", quantity: "2-3 cabezas", notes: "" },
            { name: "Jengibre fresco", quantity: "1 raíz (opcional)", notes: "" },
            { name: "Curry en polvo", quantity: "1 frasco", notes: "Para pollo al curry" },
            { name: "Cúrcuma", quantity: "1 frasco", notes: "Antiinflamatorio" },
            { name: "Comino", quantity: "1 frasco", notes: "" },
            { name: "Orégano seco", quantity: "1 frasco", notes: "" },
            { name: "Albahaca seca", quantity: "1 frasco", notes: "" },
            { name: "Romero", quantity: "1 frasco", notes: "" },
            { name: "Mostaza Dijon", quantity: "1 frasco", notes: "Sin azúcar" },
            { name: "Vinagre de manzana", quantity: "500 ml", notes: "Para aderezos" },
            { name: "Salsa de soja (tamari sin gluten)", quantity: "250 ml", notes: "Baja en carbos" },
            { name: "Mayonesa keto", quantity: "1 frasco (400g)", notes: "Hecha con aceite de aguacate" },
            { name: "Salsa picante/hot sauce", quantity: "1 botella", notes: "Sin azúcar" }
        ]
    },
    {
        id: "despensa",
        name: "Despensa Keto",
        icon: "🍫",
        items: [
            { name: "Harina de almendra", quantity: "500 g", notes: "Para pancakes, panes" },
            { name: "Harina de coco", quantity: "250 g", notes: "Absorbe mucha humedad" },
            { name: "Cacao en polvo sin azúcar", quantity: "200 g", notes: "Para postres" },
            { name: "Chocolate oscuro (85-90%)", quantity: "200 g", notes: "1-2 cuadros al día" },
            { name: "Endulzante eritritol", quantity: "400 g", notes: "O stevia" },
            { name: "Monk fruit", quantity: "1 frasco pequeño (opcional)", notes: "Endulzante natural" },
            { name: "Leche de almendra sin azúcar", quantity: "2 litros", notes: "Para batidos" },
            { name: "Leche de coco entera (lata)", quantity: "4 latas (400ml c/u)", notes: "Para cocinar" },
            { name: "Caldo de huesos", quantity: "2 litros", notes: "O hacer casero" },
            { name: "Salsa marinara sin azúcar", quantity: "2 frascos (500g c/u)", notes: "Revisar etiquetas" },
            { name: "Gelatina sin sabor", quantity: "1 caja", notes: "Para fat bombs" }
        ]
    },
    {
        id: "bebidas",
        name: "Bebidas",
        icon: "☕",
        items: [
            { name: "Café (granos o molido)", quantity: "500 g", notes: "Al gusto" },
            { name: "Té verde/negro", quantity: "1-2 cajas", notes: "Sin azúcar" },
            { name: "Agua mineral con gas", quantity: "A gusto", notes: "Para variedad" },
            { name: "Electrolitos en polvo (keto)", quantity: "1 envase (opcional)", notes: "Prevenir keto-flu" }
        ]
    }
];

// ========================================
// State Management
// ========================================
const STORAGE_KEY = 'keto-shopping-list';
const MEALS_STORAGE_KEY = 'keto-meals-completed';

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
                        <div class="meal clickable ${meal.type === 'snack' ? 'snack' : ''} ${isCompleted ? 'completed' : ''}" 
                             data-recipe-id="${meal.recipeId}" 
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
