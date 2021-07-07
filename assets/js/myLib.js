(function() {
    // creation
    const todoList = (function() {
        //select item 
        function select(selector) {
            return document.querySelector(selector);
        }

        function selects(selector) {
            return [...document.querySelectorAll(selector)];
        }

        function setItem() {

        }

        return {
            select,
            selects
        }
    })();

    // registration
    if (!window.todoList) {
        window.todoList = window.tdLib = window.tdList = todoList;
    }

})();