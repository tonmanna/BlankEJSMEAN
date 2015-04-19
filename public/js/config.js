Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
var toastr = {};
var spinner = {};
var token = "XXX";
define(['toastr','spin','blockui','jquery'],function(toastrObj,Spinner) {
    toastr = toastrObj; // fix requireJS in toastr JS
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    var optSpinerModal = {
        lines: 11, // The number of lines to draw
        length: 23, // The length of each line
        width: 8, // The line thickness
        radius: 40, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 9, // The rotation offset
        color: '#FFF', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 50, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        //className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent in px
        left: '50%' // Left position relative to parent in px
    };

    var spinnerObj = null;
    spinner.show = function () {
        var spinner_div = document.getElementById('spinner');
        if (spinnerObj == null) {
            spinnerObj = new Spinner(optSpinerModal).spin(spinner_div);
        } else {
            spinnerObj.spin(spinner_div);
        }
        $.blockUI({message: null, overlayCSS: {backgroundColor: '#5c5c5c'}});
    }

    spinner.hide = function () {
            var spinner_div = document.getElementById('spinner');
            spinnerObj.stop(spinner_div);
            $.unblockUI();
    }
});