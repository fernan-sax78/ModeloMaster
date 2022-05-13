(function(){
    $(document).ready(function(){

        $('.btn').popover({
            title:"HELLO",
            content : "We are trying",
            placement : "bottom"
        }); 
        
        $('.title').tooltip({
            title:"Over the Text",
            content : "Hello World",
            placement : "right",
            trigger : "hover"
        }); 
        
    });
}());