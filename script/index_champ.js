fetch('./data/champ.json')
     .then(res => res.json())
    .then(res => {
        console.log(res);
        let sortData = [];
        let imgData = [];
        for(champ in res) {
            sortData.push(res[champ].target);
            imgData.push(res[champ].image.full)
            // sortData.sort();
        }
        // console.log(sortData,imgData)
        const result = sortData.reduce((acc,curr,idx)=>{
            acc[curr] = imgData[idx];
            return acc;
        }, new Object);

        const out = Object.fromEntries(
            Object.entries(result).sort(([a],[b])=>a<b? -1 :1)
        );
        // let champImgs = Object.values(out);
        // let champNames = Object.keys(out);
        // champImgs.forEach(champImg=>{
        //     let doms = '';
        //     const imgTag = `<div class='champ-img'><img src="http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champImg}" alt=""></div>`
        //     doms += imgTag;
        //     console.log(doms)
        //     document.querySelector('.champ-box').innerHTML += doms;
        // })
        let num = 0;
        for(key in out){
            let champImg = Object.values(out);
            let champName = Object.keys(out);
            let doms = '';
            const imgTag = `<div class='champ-wrap'><div class='champ-img'><img src="http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champImg[num]}" alt=""></div><span class='champ-name'>${champName[num]}</span><div>`
            doms += imgTag;
            console.log(doms)
            document.querySelector('.champ-box').innerHTML += doms;
            num ++;
        }
})
