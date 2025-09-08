document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());
document.addEventListener('drop', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('paste', e => e.preventDefault());
document.addEventListener('keydown', function(e) {
    if(
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ['U', 'S'].includes(e.key.toUpperCase()))
    ){
        e.preventDefault();
    }
    if (e.ctrlKey && ['A', 'C', 'X', 'V', 'P'].includes(e.key.toUpperCase())) {
        e.preventDefault();
    }
});