const search=document.getElementById('search');

search.onclick=()=>{
    const select_maker = document.getElementById('select_maker');
    const str=select_maker.value;
    const slect_speck = document.getElementById('select_speck');
    const str2=slect_speck.value;
    var idx = slect_speck.selectedIndex;       
    var str3  = slect_speck.options[idx].text;

    if (str === '' && str2 === '') {
        
    }else if(str3 === '性能を選択'){
        var url = new URL(location);
        url.searchParams.set('maker',str);
        url.searchParams.set('speck',str2);
        url.searchParams.set('speck_text','');
        location.href = url.toString();
    }else{
        var url = new URL(location);
        url.searchParams.set('maker',str);
        url.searchParams.set('speck',str2);
        url.searchParams.set('speck_text',str3);
        location.href = url.toString();
    }
};