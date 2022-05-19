const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

function filterPeople(people) {
  people.forEach(({name, bornIn, nationality}) => {
    if (bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian') {
      console.log(`${name} é um australiano(a) nascido(a) no século 20.`);
    }
  });
}

filterPeople(people);
