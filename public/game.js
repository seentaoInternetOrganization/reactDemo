$(document).ready(function(){
//标签切换
    $(".common_close").click(function(){
        $(".common_authentication").hide();
    
    });
    $(".label li").click(function(){ 
        $(".label li").removeClass("common_label_selected");
        $(this).addClass("common_label_selected")
    });
    
    $("#iso").hide();
    $("#zz").hide();
    $("#gj").hide(); 
    
    $("#sc_bq").click(function(){//市场准入切换
        $("#iso").hide();
        $("#zz").hide(); 
        $("#gj").hide(); 
        $("#sc").show()
    });
    $("#iso_bq").click(function(){//iso认证切换
        $("#sc").hide();
        $("#zz").hide(); 
        $("#gj").hide(); 
        $("#iso").show();
    });
    
    $("#zz_bq").click(function(){//产品资质切换
        $("#iso").hide();
        $("#sc").hide(); 
        $("#gj").hide(); 
        $("#zz").show();
    });
    $("#zz_bq").click(function(){//国际市场切换
        $("#iso").hide();
        $("#sc").hide(); 
        $("#zz").hide();
        $("#gj").show();
    });
    
//common_label_content 宽度计算
    var sc_content = $("#sc div.common_label_content_00").length;
    var iso_content = $("#iso div.common_label_content_00").length;
    var zz_content = $("#zz div.common_label_content_00").length;
    var gj_content = $("#zz div.common_label_content_00").length;
    var sc_width = 277 * sc_content;
    var iso_width = 277 * iso_content;
    var zz_width = 277 * zz_content;
    var gj_width = 277 * zz_content;
    $("#sc").width(sc_width);
    $("#iso").width(iso_width);
    $("#zz").width(zz_width);
    $("#gj").width(gj_width);
});

