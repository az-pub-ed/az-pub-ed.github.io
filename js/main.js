const lang = navigator.language.substring(0, 2);
const localizedStrings = {
  main_title: {
    'en': 'AZ Community For Public Education',
    'es': 'Arizona Comunidad Para La Educacion Pública'
  },
  join_title: {
    'en': 'Join Us',
    'es': 'Ùnete a nosotros'
  },
  whoWeAre_title: {
    'en': 'Who We Are',
    'es': 'Quienes Somos?'
  },
  whoWeAre_description: {
    'en': 'We are a community driven group dedicated to addressing the systemic inequalities and strategic underfunding of public education in the state of Arizona. Consisting of educators, parents, and community leaders, we have gathered to address the dire state of public education in Arizona.',
    'es': 'Somos un grupo comunitario dedicado a encarar las igualdades y la escasez crónica de financiación de nuestras escuelas públicas en el estado de Arizona. Consistimos de maestros, miembros de las escuelas, familias, y líderes de la comunidad, juntándonos para mejorar el estado de la educación pública en Arizona.',
  },
  demands_title: {
    'en': 'Our Demands',
    'es': 'Nuestras Demandas'
  },
  demands_li_1: {
    'en': 'The state legislature must increase the Aggregate Expenditure Spending Limit in order to increase current school funding to functional levels.',
    'es': 'La legislatura estatal debe aumentar el Límite de Gasto Agregado para aumentar la financiación escolar actual a niveles funcionales.'
  },
  demands_li_2: {
    'en': 'Increase the per student spending in the state of Arizona by $15,000, increasing to $25,000 in per pupil spending.',
    'es': 'Aumentar el gasto por estudiante en el estado de Arizona en $15,000 dólares, aumentando a $25,000 dólares el gasto por alumno.'
  },
  demands_li_3: {
    'en': 'Eliminate the voucher system that pulls money from public education funds, as the school choice movement has been historically created by “white flight” due to the re-integration of public schools.',
    'es': 'Eliminar el sistema de vales que saca dinero de los fondos de la educación pública, ya que el movimiento de elección de escuela ha sido creado históricamente por la "huida de los blancos" debido a la reintegración de las escuelas públicas.'
  },
  demands_li_4: {
    'en': 'Increase teacher salaries by 30% so that we may recruit qualified, anti-bias, anti-racist teachers to the state of Arizona.',
    'es': 'Aumentar los sueldos de los maestros en un 30% para que podamos reclutar maestros calificados, anti prejuicios y antirracistas en el estado de Arizona.'
  },
  demands_li_5: {
    'en': 'Mandate that every public school employee is salaried and fully benefitted, from our classroom sweepers, to our food service workers, to our playground monitors. This will ensure that top quality candidates work with Arizona youth and will provide quality jobs in the community.',
    'es': 'Ordenar que todos los empleados de las escuelas públicas sean asalariados y reciban beneficios completos, desde los barrenderos de las aulas hasta los trabajadores del servicio de comidas y los monitores de los patios de recreo. Esto garantizará que los candidatos de mayor calidad trabajen con los jóvenes de Arizona y proporcionará empleos de calidad en la comunidad.'
  },
  demands_li_6: {
    'en': 'Eliminate the use of standardized testing as a method of allocating funding, as this system has proven to be inequitable and harmful to public schools.',
    'es': 'Eliminar el uso de pruebas estandarizadas como método de asignación de fondos, ya que este sistema ha demostrado ser inequitativo y perjudicial para las escuelas públicas.'
  },
  demands_li_7: {
    'en': 'End the two hour block for ESL students, as the “English Only” model of language instruction is a modern day form of segregation.',
    'es': 'Acabar con el bloque de dos horas para los estudiantes de ESL, ya que el modelo de enseñanza del idioma "Sólo Inglés" es una forma moderna de segregación.'
  },
  demands_li_8: {
    'en': 'Fund instruction and curriculum that centers the identities of our students and empowers them to be critical thinkers of the world around them, not conditioning our students to be compliant workers for massive corporations.',
    'es': 'Financiar la instrucción y el plan de estudios que se centra en las identidades de nuestros estudiantes y los capacita para ser pensadores críticos del mundo que les rodea, no condicionando a nuestros estudiantes a ser trabajadores obedientes para las corporaciones masivas.'
  }
}
document.querySelector('.demands-list').querySelectorAll(':scope > li').forEach((el, i) => el.dataset.i18n = `demands_li_${i + 1}`);

for (const [key, value] of Object.entries(localizedStrings)) {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => el.innerText = value[lang]);
}

feather.replace();
