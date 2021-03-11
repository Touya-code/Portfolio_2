Vue.component('vue-header', {
    template: `
        <header :class="'header'">
            <div :class="'header-wrapper'">
                <div :class="'top_menu'">
                    <ul>
                        <a :href="'index.html'"><li>スマートフォン</li></a>
                        <a :href="'phone_plan.html'"><li>通信プラン</li></a>
                        <a :href="'phone_campaign.html'"><li>キャンペーン</li></a>
                        <a :href="'phone_plan.html'"><li>動作確認</li></a>
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

  Vue.component('vue-footer',{
    template:`
    <footer :class="'footer'">
        <div :class="'footer-wrapper'">
            <div class="img_origin">
                <p>画像引用元</p>
                <ul>
                    <li>➤Amazon</li>
                    <li>➤ICOOON MONO</li>
                </ul>
            </div>
        </div>
    </footer>
    `
  });

  Vue.component('vue-top_bar',{
    template:`
        <div :class="'top_bar'">
            <img :class="'menu_btn'" :src="'./img/icon/icon_menubar.png'">
        </div>
    `
  });

  Vue.component('vue-capmpaign_info',{
    props:{
        prop_name:"",
        prop_period:"",
        prop_info:"",
    },
    template:`
        <div :class="'campaign_info'">
            <p :class="'heading'">{{prop_name}}</p>
            <div>
                <div :class="'text-container'">
                    <p>・キャンペーン期間</p>
                    <p :class="'text'">{{prop_period}}</p>
                </div>
                <div :class="'text-container'">
                    <p>・キャンペーン内容</p>
                    <p :class="'text'">{{prop_info}}</p>
                </div>
                
            </div>
        </div>
    `
  });
  
  var setVue = new Vue({
    el: '#setVue',
    data: {
        //index.html
        question:["スマートフォンの相場","容量の選び方","CPUとは","バッテリーの選び方","カメラ性能","タッチ決済とは"],
        answer:[
            ["2~3万円➡ローエンドモデル。ライトユーザーであれば十分","4~6万円➡ミドルレンジモデル。日常使いであれば十分","7万円以上➡ハイエンドモデル。ヘビーユーザーやブランド志向の人向き"],
            ["スマートフォンの容量はGBで 表される。","64GB➡ 日常使いであれば十分","128GB➡ 写真を撮ったり、ゲームをする人向け","256GB➡ 写真やゲームをたくさん保存したい人向け"],
            ["スマートフォンの処理速度を決めるチップのこと。本サイトでは、「遅い」「普通」「早い」の三段階で示す。"],
            ["2000~3000mA➡日常使いであれば一日もつ","4000mA以上➡ヘビーユーザーでも一日もつ"],
            ["カメラの性能は、画素という単位で表される。値が大きいほどきれいな写真が撮れる。","参考:iphone11 1200万画素"],
            ["買い物や交通機関の料金をスマートフォンをかざすだけで支払いができる機能"]
        ],

        //phone_plan.html
        receive_id:[],
        plan:[
            {id: "000",copo: "RakutenMobile",plan: "Rakuten UN-LIMIT VI",GB:  "1~3GB" ,price: "980円"},
            {id: "001",copo: "UQmobile,plan",plan: "くりこしプラン" ,GB: "3GB" ,price: "1,480円"},
            {id: "010",copo: "docomo",plan: "ahamo" ,GB: "20GB" ,price: "2,700円"},
            {id: "011",copo: "au",plan: "povo" ,GB: "20GB" ,price: "2,480円"},
            {id: "020",copo: "au",plan: "使いたい放題MAX 5G/4G" ,GB: "無制限",price: "6,580円"},
            {id: "021",copo: "docomo",plan: "ギガホプレミア" ,GB: "60GB" ,price: "7,205円"},
            {id: "100",copo: "mieno",plan: "マイピタ" ,GB: "1~10GB" ,price: "1,180～1,780円"},
            {id: "101",copo: "iijmio",plan: "ギガプラン" ,GB: "2~8GB" ,price: "780~1,380円"},
            {id: "110",copo: "日本通信SIM",plan: "合理的20GBプ ラン" ,GB: "20GB" ,price: "1,980円"},
            {id: "111",copo: "iijmio",plan: "ギガホプラン" ,GB: "15~20GB" ,price: "1,680~1,880円"},
            {id: "120",copo: "RakutenMobile",plan: "Rakuten UN-LIMIT VI",GB: "20GB~ ",price: "2,980円"},
            {id: "121",copo: "UQmobile",plan: "くりこしプラン" ,GB: "25GB" ,price:"3,480円"},
        ],
        display_copo:"",
        display_plan:"",
        display_GB: "",
        display_price:"",

        //phone_campaign.html
        name:["Docomo","au","日本通信sim","RakutenMobile","UQmobile","mineo","iijmio"],
        period:["2020年12月3日～2021年3月26日","au","日本通信sim","RakutenMobile","UQmobile","mineo","iijmio"],
        info:[
                "Docomoのahamoキャンペーンサイトから先行エントリーを行い新料金プラン「ahamo」を契約するとｄポイント3,000ポイントがもらえる。",
                "日本通信sim",
                "RakutenMobile",
                "UQmobile",
                "mineo",
                "iijmio"
            ]
        
    },
    methods: {
        planResult(){
            const receive_id=this.receive_id;
            const plan=this.plan;

            if(receive_id.length === 3){
                
                const id=receive_id.join("");
                console.log(id);
                const judge_plan=plan.find((v)=>v.id === id);
                console.log(judge_plan.copo);
                this.display_copo=judge_plan.copo;
                this.display_plan=judge_plan.plan;
                this.display_GB= judge_plan.GB; 
                this.display_price=judge_plan.price;
            }else{
                
            }
            receive_id.splice(0);
        }
    },
  });