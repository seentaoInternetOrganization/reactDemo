// 第一步请求
function stepOneRequest(callback) {  
    console.log('begin step 1 request');
    $.ajax({url: 'api/getBankLoans', 
        type: 'POST'
    }).done(data => {
        console.log('step 1 request finished data = ' + data);
        callback(null, data);
    }).fail(jqXhr => {
        callback(jqXhr.responseJSON.message, null);
    });
}
//第二步请求
function stepTwoRequest(dataFromStep1, callback) {
    console.log('receive data from step 1 = ' + dataFromStep1);
    console.log('now begin next AJAX request');

    $.ajax({url: 'api/getBankLoans', 
        type: 'POST',
        data: dataFromStep1
    }).done(data => {
        callback(null, data);
    }).fail(jqXhr => {
        callback(jqXhr.responseJSON.message, null);
    });
}
//第三步请求
function stepThreeRequest(dataFromStep2, callback) {
    console.log('receive data from step 2 = ' + dataFromStep2);

    $.ajax({url: 'api/getBankLoans', 
        type: 'POST',
        data: dataFromStep2
    }).done(data => {
        callback(null, data);
    }).fail(jqXhr => {
        callback(jqXhr.responseJSON.message, null);
    });
}

export default stepOneRequest;
export default stepTwoRequest;
export default stepThreeRequest;
