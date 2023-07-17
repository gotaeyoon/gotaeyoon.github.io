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
    closeBtn.on('click', function () {
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
    let accountInfo = $('._header__account_info')
    let accountBtn = $('._ico_account_btn')

    accountBtn.on('click', function () {
        accountInfo.toggleClass('show')
    })

}

//selectbox 공통
function selectBox() {
    let selectBox = $('._select_box')
    selectBox.on('click', function () {
        $(this).toggleClass('active');
    })
    selectBox.find('.option').on('click', function () {
        let text = $(this).text();
        $(this).parent().parent().find('.select_value').text(text).css({'color': '#1F1F1F'});
    });
}


//입점불가 텍스트
function HoverTextnotAllow(){
    $('._result').on('mouseenter',function(){
        $(this).parent().siblings('._hover_text_not_allowed').css({'display':'block'})
    })
    $('._result').on('mouseleave',function(){
        $(this).parent().siblings('._hover_text_not_allowed').css({'display':'none'})
    })
}

//서비스 작성중 텍스트
function HoverTextService(){
    $('._service').on('mouseenter',function(){
        $(this).parent().siblings('._hover_text_service').css({'display':'block'})
    })
    $('._service').on('mouseleave',function(){
        $(this).parent().siblings('._hover_text_service').css({'display':'none'})
    })
}

//서비스 정지
function HoverStopService(){
    $('._stop').on('mouseenter',function(){
        $(this).parent().siblings('._hover_stop_service').css({'display':'block'})
    })
    $('._stop').on('mouseleave',function(){
        $(this).parent().siblings('._hover_stop_service').css({'display':'none'})
    })
}


function checkAll() {
    $('._check_all').on('click',function(){
        // if($("#cbx_chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
        // else $("input[name=chk]").prop("checked", false);

        if($("._check_all").is(":checked")){
            $("input[name=chk]").prop("checked", true);
        }else{
            $("input[name=chk]").prop("checked", false);
        }

    })
    $("input[name=chk]").click(function() {
        let total = $("input[name=chk]").length;
        let checked = $("input[name=chk]:checked").length;

        if(total != checked) $("#cbx_chkAll").prop("checked", false);
        else $("._check_all").prop("checked", true);
    });
}

// 실행
$(document).ready(function () {
    formatPhoneNumber();
    toggleAccountInfo();
    closeModal();
    dimModal();
    selectBox();
    HoverTextnotAllow();
    HoverTextService();
    HoverStopService();
    checkAll();


})