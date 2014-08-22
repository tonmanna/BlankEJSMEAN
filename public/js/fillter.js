Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

app.filter('DateTrick',function(){
    return function(input,start)
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
