<<<<<<< HEAD
$(document).ready(function () {
  $('.datepicker').datepicker({
=======
let dateSelect, timeSelect;
$(document).ready(function () {
  $('.datepicker').datepicker({
    showDaysInNextAndPreviousMonths: true,
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
    showMonthAfterYear: false,
    format: 'dddd, dd mmmm yyyy',
    disableDayFn: (date) => {
      let newDate = new Date(date);
      if (newDate.getDay() === 1 || newDate.getDay() === 0 || newDate.getDay() === 6) {
        return true;
      }

      return false;
    },
    selectMonths: true,
    selectYears: 15,
    i18n: {
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      cancel: 'Cancelar',
      close: 'Fechar',
    },
<<<<<<< HEAD
    // Formato da data que aparece no input
    onClose: function () {
      $(document.activeElement).blur()
    }
  });
});
=======
    onSelect: function (date) {
      dateSelect = date;
    },
    onClose: function () {
      console.log(dateSelect);
      $(document.activeElement).blur()
    }
  });

  WORK_TIMES.forEach(time => {
    $('.select__timer').append(`<option class="input__time" value=${time}>${time}</option>`)
  })
  $('.select__timer').formSelect();
  $('.select__dentist').formSelect();

  // $('.select__timer').on('change', () => {
  //   timeSelect = $('select').val();
  // });
});
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
