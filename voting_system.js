function showHB_info(){
    var x =document.getElementById('contestants_info_container');
    x.style.visibility = 'visible';
    var y =document.getElementById('whoAmI_HB');
    y.style.color ='white';
    y.style.backgroundColor ='brown';
}

// Footer helpers: set current year, manage comments, back-to-top
document.addEventListener('DOMContentLoaded', function(){
    // set current year
    var yearEl = document.getElementById('currentYear');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // comments
    var submitBtn = document.getElementById('submitComment');
    var clearBtn = document.getElementById('clearComments');
    var input = document.getElementById('commentInput');
    var list = document.getElementById('commentsDisplay');

    if(submitBtn && input && list){
        submitBtn.addEventListener('click', function(){
            var text = input.value.trim();
            if(!text) return;
            var item = document.createElement('div');
            item.className = 'comment-item';
            item.textContent = text;
            list.insertBefore(item, list.firstChild);
            input.value = '';
            input.focus();
        });
    }
    if(clearBtn && list){
        clearBtn.addEventListener('click', function(){
            list.innerHTML = '';
            input && input.focus();
        });
    }

    // smooth back to top
    var back = document.getElementById('backToTop');
    if(back){
        back.addEventListener('click', function(e){
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});