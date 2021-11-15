const data = {
    img: 'https://sharp-shockley-65c48a.netlify.app/build/img/Rafael-Correa.webp',
    name: 'Rafael Correa',
    professions: ['Economista','Programador','Científico de Datos'],
    profile: 'Soy un Joven graduado en Economía, con conocimientos avanzados en programación y cursando estudios como Científico de Datos. Creo en la innovación como base del desarrollo de proyectos de emprendimiento y empresas que busquen responder a una necesidad, y estoy interesado en formar parte de alguno de ellos para poner mis habilidades al servicio del desarrollo, tanto del mismo como de mi experiencia en el área.',
    email: 'rafaelc3127@gmail.com',
    phone: '+58 412 5585804',
    linksSN: [
        {link:"https://www.linkedin.com/in/rafael-correa-06b899177/",
        icon: ["fab","linkedin"]},
        {link:"https://api.whatsapp.com/send?phone=584125585804&text=Hola!%20he%20visto%20tu%20CV",
        icon: ["fab","whatsapp"]},
        {link:"https://github.com/rafa3127",
        icon: ["fab","github"]},
    ],
    cvLink: "Aún no hay Link",
    sections: [
        {
            icon: ["fas", "user-graduate"],
            title: "Educación",
            items:[
                {
                    title: "ESTUDIANTE DE MÁSTER EN DATA SCIENCE Y BUSINESS ANALYTICS",
                    institution: "UNIVERSIDAD NEBRIJA",
                    location: "Madrid - España",
                    date: "2021-ACT",
                    subItems: []
                },{
                    title: "ECONOMISTA EMPRESARIAL",
                    institution: "Universidad Metropolitana",
                    location: "Caracas - Venezuela",
                    date: "2016-2020",
                    subItems: [
                        "Beneficiario de Matrícula de Honor de la Universidad Metropolitana por la obtención de un puntaje de entre 90/100 y 95/100 aciertos en prueba de admisión (MAY 2016).",

                        `Obtención de Mención Honorífica y Publicación de Trabajo de Grado Titulado "Efecto del Consumo de Energías Renovables sobre el Crecimiento de 118 Países Seleccionados para el Periodo de 1990-2015" (Correa & Loyo, 2020).`
                    ]
                },{
                    title: "bachiller en ciencias",
                    institution: `U.E. Colegio Agustiniano "Cristo Rey"`,
                    location: "Caracas - Venezuela",
                    date: "2011 - 2016",
                    subItems: []
                }
            ]
        },{
            icon: ["fas","book-reader"],
            title: "Actividades y Reconocimientos Estudiantiles",
            items: [
                {
                    title:"MetroMUN-la",
                    institution: "universidad metropolitana",
                    location: "Caracas - Venezuela",
                    date: "2017 - 2020",
                    subItems: [
                        "Desarrollo de habilidades en oratoria, negociación y resolución proactiva de problematicas, con el fin de asistir al Modelo de Naciones Unidas de la Universidad de los Andes (Bogotá, Colombia).",
                        "Reconocimiento de Mejor Delegación en las conferencias de 2018 y 2019 del Modelo de Naciones Unidas de la Universidad de los Andes (Bogotá, Colombia)"
                    ] 
                },{
                    title: "Lista de honor",
                    institution: "universidad metropolitana",
                    location: "Caracas - Venezuela",
                    date: "2019",
                    subItems: ["Reconocimiento otorgado a Estudiantes que, con su participación en actividades extra-cátedra, resaltan la imagen de la Universidad Metropolitana y dejan en alto su nombre a nivel nacional e internacional."]
                },{
                    title: "servicio comunitario sobresaliente",
                    institution: "universidad metropolitana",
                    location: "Caracas - Venezuela",
                    date: "2019",
                    subItems:[
                        `Reconocimiento a la participación y compromiso sobresaliente en el Servicio Comunitario "Redes e Infraestructuas".`,
                        "Colaboración del grupo en el informe entregado por la Asociación Civil Palmeros de Chacao a la UNESCO para ser reconocidos como Patrimonio Cultural de la Humanidad."
                    ]
                }
            ]
        },{
            icon: ["fas","user-tie"],
            title: "trabajo",
            items: [
                {
                    title: "GESTIÓN DE PROYECTOS, DESARROLLO DE HERRAMIENTAS Y Q.A. TESTER",
                    institution: "LoreBI C.A.",
                    location: "Caracas - Venezuela",
                    date: "2021",
                    subItems: [
                        "Creación de procesos de diseño y aplicación de pruebas de aseguramiento de calidad de software.",
                        "Desarrollo de aplicaciones de Gestión.",
                        "Gestión de manejo de actividades y asignación de recursos a proyectos de Desarrollo de Software (Proyectos relacionados a IoT y FINTECH)"
                    ]
                },{
                    title: "DIRECTOR DE NEGOCIOS",
                    institution: "Araguato Media",
                    location: "Caracas - Venezuela",
                    date: "ENE-MAR 2021",
                    subItems: [
                        "Desarrollo de estrategias iniciales de captación de clientes."
                    ]
                },{
                    title: "socio-gerente y desarrollador",
                    institution: "www.papagayo.shop",
                    location: "Caracas - Venezuela",
                    date: "2018 - 2020",
                    subItems: [
                        "Tienda por Departamento en línea en Venezuela que apuesta por el desarrollo del E-commerce en el país. Basado en un sistema de compra-venta de Dropshipping.",
                        "Desarrollo del concepto, plan de negocios y experiencia de usuario de la tienda en línea.",
                        "Desarrollo de Software y Arquitectura de aplicación web www.papagayo.shop.",
                        "Creación de sistemas logísticos para llevar a cabo el proceso de compra-venta de la tienda en línea.",
                        "Optimización de recursos en estrategias de mercadeo digital. Manejo de indicadores KPI's.",
                        "Desarrollo de herramientas y software que contribuyen con el proceso administrativo y la experiencia de usuario de la tienda en línea."
                    ]
                }
            ]
        },{
            icon: ["fas","book"],
            title: "Otros estudios y cursos",
            items:[
                {
                    title: "LA WEB EMPIEZA AQUÍ: TYPESCRIPT, ANGULAR, STORAGE, FIREBASE",
                    institution: "UDEMY",
                    date: "2021",
                    subItems: [
                        "Fundamentos de Typescript.",
                        "Herramientas de Angular Framework.",
                        "Manejo de Bases de datos Firebase."
                    ]
                },{
                    title: "BOOTCAMP DE 0 A 100 Q.A. TESTING",
                    institution: "UDEMY",
                    date: "2021",
                    subItems: [
                        "Conceptos básicos y Fundamentos del Testing de software.",
                        "Herramientas para hacer pruebas de software.",
                        "Integración del proceso de Testing como parte de las metodologías ágiles.",
                        "Automatización del proceso de Testing."
                    ]
                },{
                    title:"INICIACIÓN A LA PROGRAMACIÓN CON JAVASCRIPT",
                    institution: "UDEMY",
                    date:"2021",
                    subItems: [
                        "Conceptos básicos y Fundamentos de JavaScript.",
                        "Conceptos básicos y Fundamentos de la librería JQuery."
                    ]
                },{
                    title: "DISEÑO UX",
                    institution: "UDEMY",
                    date: "2021",
                    subItems: [
                        "Desarrollo y conceptualización de productos y negocios basados en la experiencia de usuario."
                    ]
                },{
                    title: ">DESARROLLO WEB COMPLETO CON HTML, CSS, JS, AJAX, PHP Y MYSQL",
                    institution: "UDEMY",
                    date: "2021",
                    subItems: [
                        "Desarrollo de aplicaciones web con la integración de tecnologías para la programación web."
                    ]
                },{
                    title: "FUNDAMENTOS DE PROGRAMACIÓN WEB",
                    institution: "UDEMY",
                    date:"2020",
                    subItems: [
                        "Introducción a los fundamentos de los lenguajes utilizados en la programación de aplicaciones web."
                    ]
                },{
                    title: "INTRODUCCIÓN AL DESARROLLO WEB: HTML Y CSS",
                    institution: "Google Activate/Universidad de Alicante",
                    location: "España",
                    date: "2020",
                    subItems: [
                        "Introducción a los fundamentos, aspectos básicos e historia de las tecnologías de Desarrollo Web, especialmente HTML y CSS."
                    ]
                },{
                    title: "CLOUD COMPUTING",
                    institution: "Google Activate/Escuela de Organización Industrial y Desarrollo",
                    location: "España",
                    date: "2020",
                    subItems: [
                        "Fundamentos y conceptos básicos sobre las tecnologías de computación en la nube."
                    ]
                },{
                    title: "DOMINA LA BOLSA",
                    institution: "JF PARTNERS",
                    location: "Madrid - España",
                    date: "2019",
                    subItems: [
                        "Desarrollo de estrategias de inversión bursátil, especialmente de largo plazo, basado en la evaluación de estados financieros, análisis fundamental y técnico."
                    ]
                }
            ]
        }
    ],
    languages: [
        {language: "Español",level:"Nativo"},
        {language: "Inglés",level:"Intermedio"},
        {language: "Portugués",level:"Básico"}
    ],
    groups: [
        {
            title: "Ofimática",
            items:[
                {title: "Excel", level: "Avanzado", subItems: []},
                {title: "Paquete Office", level: "Intermedio", subItems: []},
                {title: "Google WorkSpace", level: "Avanzado", subItems: []}
            ]
        },{
            title: " Marketing",
            items: [
                {title: "Google Anlalytics",level:"Intermedio",subItems:[]},
                {title: "Facebook Business",level:"Básico",subItems:[]}
            ]
        },{
            title:"Diseño",
            items: [
                {title: "Corel Draw",level:"",subItems:[]}
            ]
        },{
            title: "Web",
            items: [
                {title:"HTML",level:"",subItems:[]},
                {title:"CSS | SASS",level:"",subItems:["Bootstrap"]}
            ]
        },{
            title: "Lenguajes de Programación",
            items: [
                {title:"JavaScript",level:"",subItems:[
                    "JQuery","Angular","React","Ionic","Google Apps Script"
                ]},{
                    title:"SQL",level:"",subItems:[
                        "MySQL"
                    ]
                },{
                    title: "Python",level:"",subItems:[
                        "Django","Flask","Sanic"
                    ]
                },{
                    title: "NoSQL DB",level:"",subItems:[
                        "MongoDB","Firebase Firestore"
                    ]
                },{
                    title:"PHP",level:"",subItems:[
                        "Laravel"
                    ]
                }
            ]
        }
    ]

}

export default data