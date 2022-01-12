function checkedForm(event) {
    if (frm.id.value.length == 0) {
        alert('아이디를 입력하세요.');
        frm.id.focus();
        return false;
    }
    if (frm.id.value.length < 6 
            || frm.id.value.length > 15) {
        alert('아이디는 6 ~ 15자리 입니다.')
        frm.id.select();
        return false;
    }
    if (frm.passwd.value.length == 0) {
        alert('비밀번호를 입력하세요.')
        frm.passwd.focus();
        return false;
    }
    if (frm.passwd.value.length < 8) {
        alert('비밀번호는 최소 8자리 이상입니다.')
        frm.passwd.select();
        return false;
    }
    return true;
} //checkedForm()


let form = document.querySelector('form');  
form.addEventListener('submit', function(event) {

    if (checkedForm(event) == false) { 
        event.preventDefault();
    }
})