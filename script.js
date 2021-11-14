const table = document.getElementById('table');

const generateCalander = (year = new Date().getFullYear(), month) => {
  const monthNumber = month ? month - 1 : new Date().getMonth();
  const days = ['sun', 'mon', 'tues', 'wed', 'thus', 'fri', 'sat'];
  const monthDays = [
    31,
    new Date(year, 1, 29).getMonth() === 1 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const tr = document.createElement('tr');
  days.forEach((item) => {
    const th = document.createElement('th');
    th.textContent = item.toUpperCase();
    tr.appendChild(th);
  });
  table.appendChild(tr);

  const firstDayPosition = days.indexOf(
    new Date(year, monthNumber, 1)
      .toLocaleString('en-us', { weekday: 'short' })
      .toLowerCase()
  );

  const totalDays = monthDays[monthNumber];
  let count = 0;
  for (let i = 0; i < (totalDays + firstDayPosition) / 7; i++) {
    const tempTr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      count += 1;
      const tempTd = document.createElement('td');
      tempTd.textContent =
        count > firstDayPosition && count <= totalDays + firstDayPosition
          ? count - firstDayPosition
          : '';
      tempTr.appendChild(tempTd);
    }
    table.appendChild(tempTr);
  }
};

generateCalander(2021, 11);
