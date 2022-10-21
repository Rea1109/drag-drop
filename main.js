// drage event
$('#drop-area').on('dragenter dragover',function(e){
    e.preventDefault();
    $(this).addClass('active');
});

$('#drop-area').on({
    drop : function(e){
        dropImageFile(e);
    },
    dragleave : function(e){
        e.preventDefault();
        $(this).removeClass('active');
    }
});

function dropImageFile(e){
    e.preventDefault();
    $('#drop-area').removeClass('active');

    const filelist = e.originalEvent.dataTransfer.files;
    console.log(filelist);
}