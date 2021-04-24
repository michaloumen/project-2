$(document).ready(function () {
  $('.datepicker').datepicker({
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
    // Formato da data que aparece no input
    onClose: function () {
      $(document.activeElement).blur()
    }
  });
});