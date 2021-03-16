<?php
$pdo=new PDO('sqlite:./SQLite/phoneDB.db');
$query=$pdo->query("SELECT * FROM phoneDB");
$option1="";
$option2="";

if(isset($_GET["maker"])){
    
    $maker=$_GET["maker"];
    $speck=$_GET["speck"];
    $speck_text=$_GET["speck_text"];

    if ($maker === "") {
        $query=$pdo->query("SELECT * FROM phoneDB ORDER BY $speck");
    }
    else if($speck === "" && $_GET["maker"] != "全て"){
        $query=$pdo->query("SELECT * FROM phoneDB WHERE maker='$maker'");
    }
    else if($maker === "全て" && $speck != "") {
        $query=$pdo->query("SELECT * FROM phoneDB ORDER BY $speck");
    }
    else if($maker === "全て"){
        $query=$pdo->query("SELECT * FROM phoneDB");
    }
    else{
        $query=$pdo->query("SELECT * FROM phoneDB WHERE maker='$maker' ORDER BY $speck");
    }
    
    $option1=$maker;
    $option2=$speck_text;
}
?>


<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</head>
<body>
    <div class="container" id="setVue">
        <vue-header></vue-header>
        <vue-aside></vue-aside>
        <vue-aside2></vue-aside2>
        <vue-top_bar></vue-top_bar>

        <main class="main">
            <div class="main-wrapper">
                <div class="search_bar-wrapper">
                    <div class="search_bar-container">
                        <div class="search_bar">
                            <select class="select_maker" id="select_maker">
                                <option value="" hidden>メーカーを選択</option>
                                <option value="全て" id="all2">全て</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="OPPO">OPPO</option>
                                <option value="Google">Google</option>
                            </select>
                        </div>
                        <div class="search_bar">
                            <select class="select_speck" id="select_speck">
                                <option value="" hidden>性能を選択</option>
                                <option value="pprice DESC">価格(昇順)</option>
                                <option value="pprice ASC">価格(降順)</option>
                                <option value="CPU DESC">CPU(昇順)</option>
                                <option value="Camera DESC">カメラ(昇順)</option>
                                <option value="Battery DESC">バッテリー(昇順)</option>
                                <option value="felica='✕'">タッチ決済</option>
                            </select>
                        </div>
                        <div>
                            <button id="search">検索</button>  
                        </div>        
                    </div>
                    <div class="condition">
                        <span id="option1">検索条件:<?="$option1"?></span>
                        <span id="option2"><?="$option2"?></span>
                    </div>
                </div>
                <div class="phone_data-wrapper">
                    <?php foreach($query as $querys): ?>
                        <div class="phone_data-container">
                            <div class="phone_data">
                                <img class="phone" src="<?= "$querys[imgSrc]"?>" alt="" srcset="">
                                <div>
                                    <table>
                                        <tr>
                                            <td colspan="2" align="center"><?= "$querys[name]"?></td>
                                        </tr>
                                        <tr>
                                            <td><img class="logo" src="./img/icon/コインタイプの円アイコン.png"></td><td><?= "$querys[pprice]円"?></td>
                                        </tr>
                                        <tr>                    
                                            <td><img class="logo" src="./img/icon/電池のアイコン素材 その2.png"></td><td><?= "$querys[storage]GB"?></td>
                                        </tr>
                                        <tr>
                                            <td><img class="logo" src="./img/icon/CPUのフリーアイコン4.png"></td><td><?= "$querys[cpu]"?></td>
                                        </tr>
                                        <tr>                    
                                            <td><img class="logo" src="./img/icon/カメラのアイコン素材 7.png"></td><td><?= "$querys[camera]万画素"?></td>
                                        </tr>
                                        <tr>                    
                                            <td><img class="logo" src="./img/icon/電池のアイコン素材 その2.png"></td><td><?= "$querys[battery]mAh"?></td>
                                        </tr>
                                       
                                        <tr>                    
                                            <td><img class="logo" src="./img/icon/シェイクアイコン2.png"></td><td><?= "$querys[felica]"?></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div> 
                    <?php endforeach;?>
                </div>
            </div>
        </main>
        <vue-footer></vue-footer>
    </div>
    
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="./js/Vue.js"></script>
<script src="./js/JQuery.js"></script>
<script src="./js/phone_search.js"></script>
</body>
</html>