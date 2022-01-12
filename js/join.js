function checkedForm(event) {
    if (frm.id.value.length == 0) {
        alert('아이디를 입력하세요.');
        frm.id.focus();
        return;
    }
    if (frm.id.value.length < 6 
            || frm.id.value.length > 15) {
        alert('아이디는 6 ~ 15자리 입니다.');
        frm.id.select();
        return;
    }
    if (frm.passwd.value.length == 0) {
        alert('비밀번호를 입력하세요.');
        frm.passwd.focus();
        return;
    }
    if (frm.passwd.value.length < 8) {
        alert('비밀번호는 최소 8자리 이상입니다.');
        frm.passwd.select();
        return;
    }
    if (!(frm.passwd.value == frm.passwd_correct.value)) {
        alert('비밀번호가 다릅니다.');
        frm.passwd_correct.select();
        return;
    }
    if (frm.gender[0].checked == false 
            && frm.gender[1].checked == false) {
        alert('성별을 선택하세요.');
        return;
    }

    frm.submit();
} //checkedForm()