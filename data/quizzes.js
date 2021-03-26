const quizzes = [
  {
    // 1
    quantity: 5,
    name: 'Quiz de Historia', // Hay A&Q
    description:
      '¿Cuánto sabes de historia? Ponte a prueba con este quiz de preguntas que todos deberían saber responder.',
    modifiedBy: 1,
    createdBy: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    logo: 'https://i.ibb.co/rkkp0c8/cuento-piratas-1051-554.jpg',
    SubjectId: 4,
  },
  {
    // 2
    quantity: 5,
    name: 'Quiz de Química',
    description:
      'Cuestionario de evaluación de conocimiento sobre química general.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    SubjectId: 3,
    logo: 'https://i.ibb.co/WpFfddM/1085095.jpg',
  },
  {
    // 3
    quantity: 5,
    name: 'Quiz de Informática', // Hay A&Q
    description:
      'Con este curso podrás afianzar tus competencias digitales, que son necesarias para desarrollar funciones que impliquen el uso de tecnologías computacionales.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo: 'https://i.ibb.co/GCV3cq9/kkkk.png',
  },
  {
    // 4
    quantity: 5,
    name: 'Quiz de CSS',
    description:
      'Este curso evaluará tus competencias en el área de diseño web con lenguaje CSS.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/JHLrnBR/Css-and-HTML-programming-languages-Computer-programming-coding-IT-Female-programmer-cartoon-characte.jpg',
  },
  {
    // 5
    quantity: 5,
    name: 'Quiz de Matemáticas I',
    description: 'Simple quiz sobre Matemáticas, el inicio de todo.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    SubjectId: 2,
    logo: 'https://i.ibb.co/g3wPJ83/ORFF360.jpg',
  },
  {
    // 6
    quantity: 5,
    name: 'Quiz de HTML I', // Hay A&Q
    description:
      'Pondrás a prueba tus conocimientos sobre definiciones que debes saber antes de ponerte a trabajar con HTML. Por algún lugar hay que comenzar.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo: 'https://i.ibb.co/cr8f3C9/OJ91BD0.jpg',
  },
  {
    // 7
    quantity: 5,
    name: 'Quiz de JavaScript',
    description: 'Empezaremos viendo los conceptos básicos de la programación.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/7Yn1Kmn/Programmers-using-Java-Script-programming-language-on-computer-tiny-people-Java-Script-language-Java.jpg',
  },
  {
    // 8
    quantity: 5,
    name: 'Quiz de Anatomía', // Hay A&Q
    description:
      'Este cuestionario es de anatomía enfocado en huesos/esqueleto.',
    modifiedBy: 1,
    createdBy: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 2,
    SubjectId: 6,
    logo: 'https://i.ibb.co/9nXykYH/conjunto-iconos-anatomia-98292-1553.jpg',
  },
  {
    // 9
    quantity: 5,
    name: 'Quiz de La Liga Española de fútbol', // Hay A&Q
    description:
      '¿Crees que eres un experto sobre la Liga Española de fútbol? Demuéstralo.',
    modifiedBy: 1,
    createdBy: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    logo:
      'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/22/15691844156647.jpg',
    SchoolId: 3,
    SubjectId: 7,
  },
  {
    // 10
    quantity: 5,
    name: 'Quiz de Mundiales de fútbol', // Hay A&Q
    description: '¿Crees que eres un experto sobre fútbol? Demuéstralo.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 3,
    SubjectId: 7,
    logo:
      'https://img.fifa.com/image/upload/t_s3/v1598884130/wmfiqewv29ocq7jo9baz.jpg',
  },
  {
    // 11
    quantity: 5,
    name: 'Quiz de Disney', // Hay A&Q
    description:
      '¿Cuánto sabes sobre Disney? Prueba tu conocimiento sobre una de las empresas más grandes del mundo con este cuestionario.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 3,
    SubjectId: 8,
    logo:
      'https://yt3.ggpht.com/ytc/AAUvwnhHYZztm_R3VjyZOEwcA-PTR-8TFXTXJ33ljKBuLA=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    // 12
    quantity: 5,
    name: 'Quiz de CSS II',
    description: 'En este curso analizaremos conceptos más profundos de CSS.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/JHLrnBR/Css-and-HTML-programming-languages-Computer-programming-coding-IT-Female-programmer-cartoon-characte.jpg',
  },
  {
    // 13
    quantity: 5,
    name: 'Quiz de Matemáticas III',
    description:
      'En este cuestionario repasaremos conceptos básicos de matemáticas para que tengas una base fuerte y puedas seguir avanzando a temas más complejos como álgebra o estadística.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    SubjectId: 2,
    logo: 'https://i.ibb.co/g3wPJ83/ORFF360.jpg',
  },
  {
    // 14
    quantity: 5,
    name: 'Quiz de HTML II',
    description:
      'Ahora que ya conoces los conceptos es momento de demostrar que sabes cómo se hace.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo: 'https://i.ibb.co/cr8f3C9/OJ91BD0.jpg',
  },
  {
    // 15
    quantity: 5,
    name: 'Quiz de JavaScript II',
    description:
      'Es hora de empezar a entender la lógica de JavaScript y mejor aún...aplicarla!',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/7Yn1Kmn/Programmers-using-Java-Script-programming-language-on-computer-tiny-people-Java-Script-language-Java.jpg',
  },
  {
    // 16
    quantity: 5,
    name: 'Quiz de Anatomía',
    description:
      'Este cuestionario es de anatomía enfocado en huesos/esqueleto.',
    modifiedBy: 1,
    createdBy: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 2,
    SubjectId: 6,
    logo: 'https://i.ibb.co/9nXykYH/conjunto-iconos-anatomia-98292-1553.jpg',
  },
  {
    // 17
    quantity: 5,
    name: 'Quiz de Matemáticas IV',
    description:
      'Abordaremos conceptos más profundos y seguiremos repasando conceptos básicos para que puedas ir afianzandolos.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    SubjectId: 2,
    logo: 'https://i.ibb.co/g3wPJ83/ORFF360.jpg',
  },
  {
    // 18
    quantity: 5,
    name: 'Quiz de HTML III',
    description:
      'Si ingresas a este cuestionario significa que ya conocés muy bien el mundo de HTML.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo: 'https://i.ibb.co/cr8f3C9/OJ91BD0.jpg',
  },
  {
    // 19
    quantity: 5,
    name: 'Quiz de JavaScript III',
    description:
      'Y ahora qué? Seguiremos repasando los conceptos necesarios de JavaScript.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/7Yn1Kmn/Programmers-using-Java-Script-programming-language-on-computer-tiny-people-Java-Script-language-Java.jpg',
  },
  {
    // 20
    quantity: 5,
    name: 'Quiz de Química',
    description:
      'Cuestionario de evaluación de conocimiento sobre química general.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    SubjectId: 3,
    logo: 'https://i.ibb.co/WpFfddM/1085095.jpg',
  },
  {
    // 21
    quantity: 5,
    name: 'Quiz de Informática',
    description:
      'Con este curso podrás afianzar tus competencias digitales, que son necesarias para desarrollar funciones que impliquen el uso de tecnologías computacionales.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo: 'https://i.ibb.co/GCV3cq9/kkkk.png',
  },
  {
    // 22
    quantity: 5,
    name: 'Quiz de CSS III',
    description: 'Este es el curso de finalización de la trilogía de CSS.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/JHLrnBR/Css-and-HTML-programming-languages-Computer-programming-coding-IT-Female-programmer-cartoon-characte.jpg',
  },
  {
    // 23
    quantity: 5,
    name: 'Quiz de Matemáticas II',
    description:
      'Este cuestionario es el inicio de la materia. Repasaremos suma, división, fracciones, entre muchos otros. Empieza ahora!',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    SubjectId: 2,
    logo: 'https://i.ibb.co/g3wPJ83/ORFF360.jpg',
  },
  {
    // 24
    quantity: 5,
    name: 'Quiz de HTML IV',
    description:
      'Abordaremos todos los conceptos anteriormente vistos y los aplicaremos a casos reales.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo: 'https://i.ibb.co/cr8f3C9/OJ91BD0.jpg',
  },
  {
    // 25
    quantity: 5,
    name: 'Quiz de JavaScript IV',
    description: 'Repasa conceptos fundamentales con este cuestionario.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/7Yn1Kmn/Programmers-using-Java-Script-programming-language-on-computer-tiny-people-Java-Script-language-Java.jpg',
  },
  {
    // 26
    quantity: 5,
    name: 'Quiz de Anatomía',
    description:
      'Este cuestionario es de anatomía enfocado en huesos/esqueleto.',
    modifiedBy: 1,
    createdBy: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 2,
    SubjectId: 6,
    logo: 'https://i.ibb.co/9nXykYH/conjunto-iconos-anatomia-98292-1553.jpg',
  },
  {
    // 27
    quantity: 5,
    name: 'Quiz de Matemáticas V',
    description:
      'En este cuestionario encontrarás un mix de todo lo visto en cuestionarios anteriores y te ayudará a saber si hay conceptos que debes repasar.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 1,
    SubjectId: 2,
    logo: 'https://i.ibb.co/g3wPJ83/ORFF360.jpg',
  },
  {
    // 28
    quantity: 5,
    name: 'Quiz de HTML experto',
    description:
      'Si apruebas este cuestionario demostrarás que eres el rey del HTML. Demuéstralo.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo: 'https://i.ibb.co/cr8f3C9/OJ91BD0.jpg',
  },
  {
    // 29
    quantity: 5,
    name: 'Quiz de JavaScript V',
    description: '¿Eres un experto en JavaScript? Demuéstralo.',
    modifiedBy: 2,
    createdBy: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    SchoolId: 4,
    SubjectId: 1,
    logo:
      'https://i.ibb.co/7Yn1Kmn/Programmers-using-Java-Script-programming-language-on-computer-tiny-people-Java-Script-language-Java.jpg',
  },
];

module.exports = quizzes;
