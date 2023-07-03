//open Modal
function openModal(modalname) {
    $("." + modalname).addClass('show')
    setTimeout(function () {
        $("." + modalname).addClass('fade')
    }, 200);
}
// close Modal
function closeModal() {
    let modals = $('.modal')
    let closeBtn = $('._modal_close_btn')
    closeBtn.on('click',function(){
        modals.removeClass('fade')
        setTimeout(function () {
            modals.removeClass('show')
        }, 200);
    })
}
// close dim
function dimModal() {
    let modals = $('.modal')
    modals.on('click', function (e) {
        if (e.target == this) {
            modals.removeClass('fade')
            setTimeout(function () {
                modals.removeClass('show')
            }, 200)
        }
    })
}


//전화번호 hyphen
function formatPhoneNumber() {
    $('._input_phone').on('input', function () {
        this.value = this.value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    })
}

// header 버튼
function toggleAccountInfo() {
    $('._ico_account_btn').on('click', function () {
        $('._header__account_info').toggle()
    })
}


// 실행
$(document).ready(function () {
    formatPhoneNumber();
    toggleAccountInfo();
    closeModal();
    dimModal();


})