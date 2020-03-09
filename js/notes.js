$(document).ready(function () {
    // Toaster Settings
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "200",
        "hideDuration": "1000",
        "timeOut": "2400",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    // Array Initialization
    var data = [];
    // data = JSON.parse(localStorage.getItem("taskObject"));
    // if (data == undefined) {
    //     data = [];
    // }

    // Loading data from local storage to Page
    function loadData() {
        var retrievedObject = JSON.parse(localStorage.getItem("taskObject"));
        var bodyString = '';
        for (var i = 0; i < retrievedObject.length; i++) {
            bodyString +=
                '<tr id=\'row-' + i + '\'><td> <button id=' + i + ' class=\'editRow\'><i class="fa fa-edit" style="font-size:14px"></i></button>' +
                '</td><td>'
                + retrievedObject[i].subject +
                '</td><td>'
                + retrievedObject[i].notes +
                '</td><td> <button id=' + i + ' class=\'deleteRow\'><i class="fa fa-trash" style="font-size:14px"></i></button>' +
                '</td></tr>';
        }
        $('.elements tbody').html(bodyString);

        $(".deleteRow").click(function () {
            var id = this.id;
            var retrievedObject = JSON.parse(localStorage.getItem("taskObject"));
            retrievedObject.splice(id, 1);
            //$("#row-" + id).remove();
            localStorage.setItem("taskObject", JSON.stringify(retrievedObject));
            toastr["success"]("Record has been deleted", "Success!");
            loadData();
        });
        // Open the Form in Edit mode
        $(".editRow").click(function () {
            $('.elements').hide();
            $('.open-button').hide();
            $('#formnotes').show();
            var id = this.id;
            data = JSON.parse(localStorage.getItem("taskObject"));
            if (data == undefined) {
                data = [];
            }
            if (id != undefined) {
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    if (parseInt(id) == index) {
                        $("#id").val(index);
                        $("#subject").val(element.subject);
                        $("#notes").val(element.notes);
                    }
                }
            }
        });
    }

    // Call the loadData Function
    loadData();

    // Save Button Functionality
    $("#submit").click(function () {
        var isValid = validateNotes()
        if (isValid == true) {
            saveData();
            $('#formnotes').hide();
            $('.open-button').show();
            $('.elements').show();
            loadData();
        }
    });

    // Clear Button Functionality
    $("#reset").click(function () {
        clear();
    });

    // Updating the local storage 
    function saveData() {
        data = JSON.parse(localStorage.getItem("taskObject"));
        if (data == undefined) {
            data = [];
        }
        var id = $("#id").val();
        if (id != "") {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (id == index) {
                    element.subject = $("#subject").val();
                    element.notes = $("#notes").val();
                    data[index] = element;
                }
                toastr["success"]("Record has been updated", "Success!");
            }
        }
        else {
            // Get User Input
            var taskObject = {
                "subject": $("#subject").val(),
                "notes": $("#notes").val()
            };
            // Store data
            data.push(taskObject)
            toastr["success"]("Record has been stored", "Success!");
        }
        localStorage.setItem("taskObject", JSON.stringify(data));
    }

    // Clear the form controls value
    function clear() {
        $("#id").val("");
        $("#subject").val("");
        $("#notes").val("");
    }

    // Validation
    function validateNotes() {
        var isValid = true
        var subject = $("#subject").val();
        if (subject == "") {
            toastr["warning"]("Enter the subject", "Alert!")
            return false
        }
        var notes = $("#notes").val();
        if (notes == "") {
            toastr["warning"]("Enter the notes", "Alert!")
            return false
        }
        return true
    }
});

//Open the form in Create mode
function openAddForm() {
    $('.elements').hide();
    $('.open-button').hide();
    $('#formnotes').show();
    $("#id").val("");
    $("#subject").val("");
    $("#notes").val("");
}

// Close the Form
function closeAddForm() {
    $('#formnotes').hide();
    $('.open-button').show();
    $('.elements').show();
}