<?php 
function JSON($arr = array()){
    return @json_encode($arr,128);
}

function apiError($msg){
    echo JSON(array('error'=>true , 'reason'=>$msg));
}
?>