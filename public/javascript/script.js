var options = {
    valueNames: [ 'id', 'schedule', 'name', 'informations' ]
  };
  
  // Init list
  var contactList = new List('contacts', options);
  
  var idField = $('#id-field'),
      scheduleField = $('#schedule-field'),
      nameField = $('#name-field'),
      informationsField = $('#informations-field'),
      addBtn = $('#add-btn'),
      editBtn = $('#edit-btn').hide(),
      removeBtns = $('.remove-item-btn'),
      editBtns = $('.edit-item-btn');
  
  // Sets callbacks to the buttons in the list
  refreshCallbacks();
  
  addBtn.click(function() {
    contactList.add({
      id: Math.floor(Math.random()*110000),
      schedule: scheduleField.val(),
      name: nameField.val(),
      informations: informationsField.val()
    });
    clearFields();
    refreshCallbacks();
  });
  
  editBtn.click(function() {
    var item = contactList.get('id', idField.val())[0];
    item.values({
      id:idField.val(),
      schedule: scheduleField.val(),
      name: nameField.val(),
      informations: informationsField.val()
    });
    clearFields();
    editBtn.hide();
    addBtn.show();
  });
  
  function refreshCallbacks() {
    // Needed to add new buttons to jQuery-extended object
    removeBtns = $(removeBtns.selector);
    editBtns = $(editBtns.selector);
    
    removeBtns.click(function() {
      var itemId = $(this).closest('tr').find('.id').text();
      contactList.remove('id', itemId);
    });
    
    editBtns.click(function() {
      var itemId = $(this).closest('tr').find('.id').text();
      var itemValues = contactList.get('id', itemId)[0].values();
      idField.val(itemValues.id);
      scheduleField.val(itemValues.schedule);
      nameField.val(itemValues.name);
      informationsField.val(itemValues.informations);
      
      editBtn.show();
      addBtn.hide();
    });
  }
  
  function clearFields() {
    scheduleField.val('');
    nameField.val('');
    informationsField.val('');
  }