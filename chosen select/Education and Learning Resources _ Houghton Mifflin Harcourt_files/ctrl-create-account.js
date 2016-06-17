// Javascript for CreateAccount.ascx
$(document).ready(function () {

    $('#lbtncreateaccount').click(function (e) {
        e.preventDefault();
        xRf.pageIsValid = $('#form_personal_account').valid();
        if (xRf.pageIsValid) {
            CreateAccountIfValid();
        }
        return false;
    });

    // following code uses the jquery.placeholder plugin!
    $('input').placeholder();

    loadUserTypes();

});

function loadUserTypes() {
    $.ajax({
        type: "POST",
        url: "/Sites/HMH/Handlers/ajax-methods.aspx/GetUserTypeDetails",
        contentType: "application/json",
        dataType: "JSON",
        async: true,
        success: function (response) {
            LoadUserType(response.d, 'cbPersona');
        }
    });
}

function LoadUserType(data, controlName) {
    var data2 = $.parseJSON(data);
    if (data2 != 'undefined' && data2 != '') {
        var lblcontrol = $('#' + ('lbl' + controlName) + '');
        lblcontrol.text(data2.GetAllAttributeValuesResult[0].AttributeDescription);
        lblcontrol.attr("data-attributeid", data2.GetAllAttributeValuesResult[0].AttributeId);
        lblcontrol.attr("data-attributename", data2.GetAllAttributeValuesResult[0].AttributeName);

        var control = $('#' + controlName + '');
        control.empty();
        control.append('<option value="" selected="selected" disabled="disabled">Choose a persona</option>');
        var data = data2.GetAllAttributeValuesResult[0].AttributeValues;
        $.each(data, function () {
            var newOption = $('<option>');
            newOption.attr('value', this.AttributeValueId).text(this.AttributeValueName);
            control.append(newOption);
        })
        control.trigger("chosen:updated");
    }
}

function CreateAccountIfValid() {

    if (xRf.recaptchaIsUsed) {
        ValidateRecaptcha();
    }
    var nu = {};
    nu.Email = $('#txtemail').val();
    nu.EmailCnfrm = $('#txtemail').val();
    nu.Password = $('#pwpassword').val();
    nu.PasswordCnfrm = $('#pwpasswordcnfrm').val();
    nu.FirstName = $('#txtfirstname').val();
    nu.LastName = $('#txtlastname').val();
    nu.BirthMonth = "9";
    nu.BirthYear = "1800";
    nu.CountryCode = "US";
    nu.ZipCode = "00000";
    nu.CanReceive = $('#cbreceiveupdates').is(':checked');
    nu.FacebookId = "";
    nu.Website = "Hmh";
    nu.SapCustomerId = $('#hidSapCustomerId').val();

    nu.AttributeId = $('#lblcbPersona').attr("data-attributeid");
    nu.AttributeName = $('#lblcbPersona').attr("data-attributename");
    nu.ApplicationProfileAttributeValueId = $('#cbPersona').val();
    nu.UserAttributeActualValue = $('#cbPersona :selected').text();

    xRf.DTO = { 'NewUser': nu };

    $('.error').hide();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Sites/HMH/Handlers/ajax-methods.aspx/CreateAccount",
        data: JSON.stringify(xRf.DTO),
        dataType: "json",
        beforeSend: function () {
            $('#spinnerModal').reveal({
                closeOnBackgroundClick: false
            });
            $("#spinnerModal").css({ 'visibility': 'visible', 'top': '50%' });
            $(".reveal-modal-bg").css('visibility', 'visible');
        },
        success: function (data) {
            $(".userMessage").removeClass('hide');
            $("#UserAlreadyExists").addClass('hide');
            $(".server-error").addClass("hide");
            if (data && data.d) {
                $("#UserAlreadyExists").addClass('hide');
                var redirectUrl = "thankyou" + xRf.createAccountSuccessNextUrl + "&role=User&persona=AtHome";
                if (data.d == 'Success' && redirectUrl) {

                    if (typeof Om_SignUp == 'function') {
                        Om_SignUp('Individual');
                    }

                    $("#bdyMaster").removeClass("neutral")
                                   .addClass("athome");

                    location.href = redirectUrl;
                }
                else if (data.d == 'UserAlreadyExists') {
                    $("#UserAlreadyExists").removeClass('hide');
                    $("#spinnerModal").trigger("reveal:close");
                    $("#spinnerModal").css('visibility', 'hidden');
                    $(".reveal-modal-bg").css('visibility', 'hidden');
                }
                else {
                    $("#" + data.d).removeClass("hide");
                    $("#spinnerModal").trigger("reveal:close");
                    $("#spinnerModal").css('visibility', 'hidden');
                    $(".reveal-modal-bg").css('visibility', 'hidden');
                }
            }
        },
        error: function (e1, e2, e3) {
        }
    });
}








