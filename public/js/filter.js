app.filter('DateTrick',function(){
    return function(input)
    {
        if(input !== null)
        {
            var DateCal = new Date(input).addHours(7);
            var n = DateCal.toString(); // Remark if you need to change Date Format
            return n;
        }else
        {
            return {};
        }
    }
});
