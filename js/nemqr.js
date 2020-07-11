jQuery( document ).ready(function($) {
    $('.nemqrcode').each(function(index, element){
        var addr = $(element).data('addr').replace(/-/g,'');
        if (!addr.match(/^[A-Z0-9]{36}$/)) {
            console.log('Address is not valid.');
        }
        var amount = $(element).data('amount');
        if (isNaN(amount)) {
            console.log('Amount is not a number.');
            amount = 0;
        }
        var imgsize = $(element).data('imgsize');
        if (isNaN(imgsize)) {
            console.log('Image size is not a number.');
            imgsize = 200;
        }

        var qrobj = {
            "v" : 2,
            "type" : 2,
            "data" : {
                "addr" :addr,
                "amount" : 1000000 * amount,
                "msg" : '',
                "name" : 'ounziwnemqr',
            }
        };
        var json_text = JSON.stringify(qrobj);
        var gurl = 'https://chart.apis.google.com/chart?cht=qr&chs=' + imgsize + 'x' + imgsize + '&chl=' + encodeURIComponent( json_text);
        $(element).append($('<img>',{src:gurl}));
    });
});