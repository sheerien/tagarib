$(document).ready(function() {
    var taskInput = $("#task-input");
    // Add
    $('#btn-add').click(function(e) {
        e.preventDefault();
        if (!taskInput.val()) {
            alert("empty")
        } else {
            $(`<li>${taskInput.val()} <div id="btns"><button class="btn-finish">Finish</button> <button class="btn-remove">Remove</button></li></div>`).prependTo('#show')
            taskInput.val('');
        }
        //line-through
        $("#show").on('click', '.btn-finish', function(e) {
            var btn = e.target
            // console.log(btn)
            var parent = $(btn).parentsUntil('ul');
            console.log(parent)
            $(btn).click(function() {
                $(parent).css({
                    'text-decoration': 'line-through',
                    'color': 'red'
                })
            })
        })

        // Remove
        $("#show").on('click', '.btn-remove', function(e) {
            var btn = e.target
            // console.log(btn)
            var parent = $(btn).parentsUntil('ul');
            console.log(parent)
            $(btn).click(function() {
                $(parent).delay(300).hide(500, function() {
                    $(this).remove();
                })
            })
        })
    })
})