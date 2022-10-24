let timer;

// drag event , container
$('.container').on({
    dragenter : function(e){
        e.preventDefault();
        $('#drop-area').addClass('active');
        console.log('enter!');
    },
    dragover : function(e){
        e.preventDefault();
        if(!timer){
            timer = setTimeout(()=>{
                $('img').css('opacity','0.5');
                $('#drop-area').addClass('active');
                console.log('over!');
                clearTimeout(timer);
            },2000)
        }
    },
    drop : function(e){
        e.preventDefault();
        $('#drop-area').removeClass('active');
        $('img').css('opacity','1');
        const filelist = e.originalEvent.dataTransfer.files;
        console.log('drop!');
        console.log(filelist);
    },
    dragleave : function(e){
        e.preventDefault();
        console.log('dragleave!');
        $(this).removeClass('active');
    }
});

// drag event , target area
// $('#drop-area').on({
//     dragenter : function(e){
//         e.preventDefault();
//         $('#drop-area').addClass('active');
//         console.log('enter!');
//     },
//     dragover : function(e){
//         e.preventDefault();
//         $('#drop-area').addClass('active');
//         console.log('over!');
//     },
//     drop : function(e){
//         e.preventDefault();
//         $('#drop-area').removeClass('active');
//         const filelist = e.originalEvent.dataTransfer.files;
//         console.log('drop!');
//         console.log(filelist);
//     },
//     dragleave : function(e){
//         e.preventDefault();
//         console.log('dragleave!');
//         $(this).removeClass('active');
//     }
// });