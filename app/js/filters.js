define(function () {
    return{
        case: [function () {
            return function (text, toUppercase) {
                if (text === undefined || !text)
                    return '';

                return toUppercase ? text.toUpperCase() : text.toLowerCase();
            };
        }]
    }
});