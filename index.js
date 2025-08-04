const arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1',
];

function checkGroups(arrGroups) {
  for (let i = 0; i < arrGroups.length; i++) {
    const group = arrGroups[i];
    let isValid = true;  // вважаємо, що група правильна

    const prefix = group.slice(0, 2).toLowerCase();
    if (prefix !== 'fd' && prefix !== 'fe' && prefix !== 'fm') {
      console.log('Error: ' + group);
      isValid = false;
    }

    const year = group.slice(2, 6);
    if (!year.startsWith('20')) {
      console.log('Error: ' + group);
      isValid = false;
    }

    const yearNumber = Number(year);
    if (isNaN(yearNumber) || yearNumber < 2000 || yearNumber > 2099) {
      console.log('Error: ' + group);
      isValid = false;
    }

    if (isValid) {
      console.log('Success: ' + group);
    }
  }
}
checkGroups(arrGroups);
