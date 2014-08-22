app.directive('calendar',function()
{
    return {
        restrict : 'A',
        replace : true,
        require : 'ngModel',
        scope : {lang:"="},
        link : function(scope,element,attr,ngModel)
        {
            if(!ngModel) return;
            var options = angular.extend({
                calendar: $.calendars.instance('thai','th'),
                onClose: function (dates) {
                    scope.$apply(function () {
                        var daysplit = String(dates).split("-");
                        var dateSet = new Date();
                        dateSet.setDate(daysplit[2]);
                        dateSet.setMonth(daysplit[1] - 1);
                        dateSet.setYear(daysplit[0] - 543);
                        dateSet.setHours(+7); //+ 7 GMT
                        dateSet.setMinutes(0);
                        dateSet.setSeconds(0);
                        dateSet.setMilliseconds(0);
                        console.log(dateSet);
                        ngModel.$setViewValue(dateSet);
                    });
                }
            },scope.$eval(attr.options));

            element.calendarsPicker(options);
            ngModel.$render = function(){

                var dates =  ngModel.$viewValue || '';
                var day = dates.getDate();
                var month = +Number(dates.getMonth())+1
                var year = dates.getFullYear()+543;
                var dateData  = day+ "/" +month + "/" +year;
                element.calendarsPicker('setDate', dateData);
            };

        }
    }
});