// KHÔNG MUỐN ĐỂ CODE JS CHUNG TRONG FILE .HTML THÌ TẠO BÊN ĐÂY XONG IMPORT VÔ
// KHÔNG MUỐN ĐỂ CODE JS CHUNG TRONG FILE .HTML THÌ TẠO BÊN ĐÂY XONG IMPORT VÔ
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
            if($(this).hasClass('open')){
                $(this).prev().attr('type', 'password');
            }else{
                $(this).prev().attr('type', 'text');
            }
    });
});