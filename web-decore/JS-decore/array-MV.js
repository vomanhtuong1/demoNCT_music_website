const myarray3 = [
    /*{
        name: 'Tan vào nhau',
        nguon: '/web-decore/MV-hot/MV-hot-1.jpg',
        view: '1274',
        time: '02:53',
        singer: 'MiQ,Catcheller,Larria',
    },
    {
        name: 'Rockstar',
        nguon: '/web-decore/MV-hot/MV-hot-2.jpg',
        view: '724',
        time: '02:48',
        singer: 'LISA',
    },*/
    {
        name: 'Ngày đẹp trời để nói chia tay',
        nguon: '/web-decore/MV-hot/MV-hot-3.jpg',
        view: '6790',
        time: '03:50',
        singer: 'Lou Hoàng',
    },
    {
        name: 'ABCD',
        nguon: '/web-decore/MV-hot/MV-hot-4.jpg',
        view: '2131',
        time: '03:41',
        singer: 'Nayeon',
    },
    {
        name: 'Điều vô tri nhất',
        nguon: '/web-decore/MV-hot/MV-hot-5.jpg',
        view: '1248',
        time: '03:58',
        singer: 'KAI Đinh, MIN, Hoàng Dũng',
    },
    {
        name: 'Ballon in love',
        nguon: '/web-decore/MV-hot/MV-hot-6.jpg',
        view: '2458',
        time: '03:20',
        singer: 'SUMNI',
    },
    {
        name: 'Yên bình có quá đắt không',
        nguon: '/web-decore/MV-hot/MV-hot-7.jpg',
        view: '1247',
        time: '04:10',
        singer: 'Khiem',
    },
    {
        name: 'anh duong (feat Ninh Dương story) - Lâm Phúc',
        nguon: '/web-decore/MV-hot/MV-hot-8.jpg',
        view: '1233',
        time: '03:07',
        singer: 'Lâm Phúc',
    },
    {
        name: 'Anh chẳng thoát được đâu',
        nguon: '/web-decore/MV-hot/MV-hot-9.jpg',
        view: '1834',
        time: '03:10',
        singer: 'Mỹ Mỹ, Hứa Kim Tuyền, WOKEUP',
    },
    {
        name: 'Lựa chọn của em',
        nguon: '/web-decore/MV-hot/MV-hot-10.jpg',
        view: '2134',
        time: '04:38',
        singer: 'Bùi Trương Linh, Vũ Phụng Tiên',
    }
]

for (const my of myarray3){
    const listalbum1 = document.querySelector(".list-album-content-ul-5");
    const lismall = document.createElement("li");/*1*/
    const divbox = document.createElement("div");/*2*/
    const adiv = document.createElement("a");/*5,7.1.1;7.2.1,.2,.3;8*/
    const spanview = document.createElement("span");/*3*/
    const spaniconview = document.createElement("span");/*3.1*/
    const iconview = document.createElement("i");/*3.1.1*/
    const spanid = document.createElement("span");/*3.2*/
    const spaniconplay = document.createElement("span");/*5.1*/
    const iconplay = document.createElement("i");/*5.1.1*/
    const img = document.createElement("img");/*5.2*/
    const spantime = document.createElement("span");/*6*/
    const h3 = document.createElement("h3");/*7.1*/
    const h4 = document.createElement("h4");/*7.2*/
    const ah3 = document.createElement("a");/*5,7.1.1;7.2.1,.2,.3;8*/
    const ah4 = document.createElement("a");/*5,7.1.1;7.2.1,.2,.3;8*/
    const divbg = document.createElement("div");

    /*const spantab = document.createElement("span");*/
    /*const aspan = document.createElement("a");/*5,7.1.1;7.2.1,.2,.3;8
    /*2
    const divname = document.createElement("div");/*7
    const spanbg = document.createElement("span");/*8*/

    lismall.className = 'list-album-content-li-small';/*1*/
    divbox.className = 'box-absolute-mv-hot-small';/*2*/
    spanview.className = 'view-mv-small';/*3*/
    spaniconview.className = 'view-icon-small';/*3.1*/
    iconview.className = 'myiconeye fa-solid fa-eye';/*3.1.1*/
    spanid.className = 'view-count-small';/*3.2*/
    /*spantab.className = 'tab-table';/*4*/
    spaniconplay.className = 'icon-play-small';/*5.1*/
    iconplay.className = 'myiconplay fa-regular fa-circle-play fa-2x';/*5.1.1*/
    img.className = 'avatar-small';/*5.2*/
    spantime.className = 'time-small';/*6*/
    /*divname.className = 'nam-video-big';/*7*/
    /*spanbg.className = 'item-mask-bg';/*8*/
    adiv.className = 'box-absolute-mv-hot-a-small'
    divbg.className = 'back-ground-small'
    iconview.style.color = 'rgb(169, 173, 176)'
    /*a.className = 'box-absolute';
    divbg.className = 'bg-action-info';
    icon.className = 'myicon fa-regular fa-circle-play fa-2x';*/

    img.src = my.nguon
    img.title = my.name
    ah3.innerHTML = my.name
    ah3.title = my.name
    ah4.innerHTML = my.singer
    ah4.title = my.singer
    spantime.textContent = my.time
    spanid.textContent = my.view

    /*aspan.appendChild(spanbg)*/
    divbox.appendChild(adiv)
    divbox.appendChild(spantime)
    h4.appendChild(ah4)
    h3.appendChild(ah3)
    spaniconview.appendChild(iconview);
    spanview.appendChild(spaniconview);
    spanview.appendChild(spanid);
    adiv.appendChild(spanview);
    spaniconplay.appendChild(iconplay)
    adiv.appendChild(spaniconplay)
    divbg.appendChild(img)
    adiv.appendChild(divbg)

    lismall.appendChild(divbox);
    lismall.appendChild(h3)
    lismall.appendChild(h4)
    listalbum1.appendChild(lismall);
}




