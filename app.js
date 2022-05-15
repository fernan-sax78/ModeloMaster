(function(){

    // PopOver & ToolTip
    $(document).ready(function(){

        $('.boton').popover({
            title:"HELLO",
            content : "We are trying",
            placement : "right"
        }); 
        
        $('p').tooltip({
            title:"Over the Text",
            content : "Hello World",
            placement : "right",
            trigger : "hover"
        }); 
        
    });

document.querySelector('.boton').addEventListener('click', ()=>{
    document.getElementById('texto').innerHTML = "This is a text after click...."
})


}());