;(function() {
  var input = document.querySelector('[data-js="todoInput"]');
  var list = document.querySelector('[data-js="todoItems"]');
  var index = 0;

  var createItem = function(text) {
    index += 1;
    id = "c" + index;

    var item = document.createElement("li");
    item.className += "todo__item";

    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;

    var content = document.createElement("label");
    content.setAttribute("for", id);
    content.innerHTML = text;

    var button = document.createElement("button");
    button.className += "todo__itemRemove";
    button.innerHTML = "&#x2717;";
    button.addEventListener('click', function(event) {
      event.preventDefault();
      deleteItem(event.target.parentNode);
    });

    item.appendChild(input);
    item.appendChild(content);
    item.appendChild(button);

    list.insertBefore(item, list.childNodes[0]);
  };

  var deleteItem = function(item) {
    item.remove();
    toggleMessage();
  };

  var toggleMessage = function() {
    msg = document.querySelector('[data-js="default_msg"]');
    console.log(document.getElementsByClassName("todo__item").length);
    if (document.getElementsByClassName("todo__item").length === 0) {
      msg.className = "todo__empty";
    } else {
      console.log(msg);
      msg.className = "todo__notEmpty";
    };
  };

  input.addEventListener('keypress', function(event) {
    if (event.charCode === 13) {
      event.preventDefault();
      if (input.value !== "") {
        createItem(input.value);
        input.value = "";
        toggleMessage();
      };
    };
  });

})();
