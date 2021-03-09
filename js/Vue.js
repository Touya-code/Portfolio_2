Vue.component('vue-header', {
    template: `
        <header :class="'header'">
            <div :class="'header-wrapper'">
                <div :class="'top_menu'">
                    <ul>
                        <a><li>スマートフォン</li></a>
                        <a><li>通信プラン</li></a>
                        <a><li>ニュース</li></a>
                        <a><li>動作確認</li></a>
                    </ul>
                </div>
            </div>
        </header>
    `
  });

  Vue.component('vue-aside',{
    template:`
        <aside :class="'aside'">
            <div :class="'aside-wrapper'">
                <ul>
                    <a><li>Apple</li></a>
                    <a><li>Samsung</li></a>
                    <a><li>OPPO</li></a>
                    <a><li>Xiaomi</li></a>
                    <a><li>Google</li></a>
                </ul>
            </div>
        </aside>
    `
  });

  Vue.component('vue-aside2',{
    template:`
        <aside :class="'aside2'">
            <div :class="'aside-wrapper'">
                <ul>
                    <a><li>Apple</li></a>
                    <a><li>Samsung</li></a>
                    <a><li>OPPO</li></a>
                    <a><li>Xiaomi</li></a>
                    <a><li>Google</li></a>
                </ul>
            </div>
        </aside>
    `
  });

  Vue.component('vue-top_bar',{
    template:`
        <div :class="'top_bar'">
            <img :class="'menu_btn'" :src="'./img/icon/icon_menubar.png'">
        </div>
    `
  });
  
  var setVue = new Vue({
    el: '#setVue',
    data: {
        question:["スマートフォンの相場","容量の選び方","CPUとは","バッテリーの選び方","カメラ性能","タッチ決済とは"],
        answer:[
            ["2~3万円➡ローエンドモデル。ライトユーザーであれば十分","4~6万円➡ミドルレンジモデル。日常使いであれば十分","7万円以上➡ハイエンドモデル。ヘビーユーザーやブランド志向の人向き"],
            ["スマートフォンの容量はGBで表される。","64GB➡日常使いであれば十分","128GB➡写真を撮ったり、ゲームをする人向け","256GB➡写真やゲームをたくさん保存したい人向け"],
            ["スマートフォンの処理速度を決めるチップのこと。本サイトでは、「遅い」「普通」「早い」の三段階で示す。"],
            ["2000~3000mA➡日常使いであれば一日もつ","4000mA以上➡ヘビーユーザーでも一日もつ"],
            ["カメラの性能は、画素という単位で表される。値が大きいほどきれいな写真が撮れる。","参考:iphone11 1200万画素"],
            ["買い物や交通機関の支払いを設置されている端末にかざすだけで行える機能"]
        ]
    },
  });