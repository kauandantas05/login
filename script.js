$(document).ready(function () {
    $('#myTab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.password-toggle').click(function () {
        const inputField = $(this).siblings('input'); // Seleciona o campo de entrada relacionado
        const isPasswordVisible = inputField.attr('type') === 'text'; // Verifica se a senha está visível

        if (isPasswordVisible) {
            // Se a senha está visível, oculta-a
            inputField.attr('type', 'password');
            $(this).find('.open').show();
            $(this).find('.close').hide();
        } else {
            // Se a senha está oculta, exibe-a
            inputField.attr('type', 'text');
            $(this).find('.open').hide();
            $(this).find('.close').show();
        }
    });
});