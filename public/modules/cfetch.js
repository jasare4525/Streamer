export const cfetch = ()=>{
    contentful.createClient({
        space: 'g83j5mjjg3ig',
        accessToken: 'guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY'
    }).sync({
        initial: !0
    }).then(e=>{
        e.entries.forEach(e=>{
            const n = e.fields;
            // console.log(e)
            // console.log(!n.hasOwnProperty('videoLink'))
            if (n.hasOwnProperty("background")){

            }
                
          else { if(!n.hasOwnProperty('description') ){
                // console.log(n)
                const e = ` <img src=${n.image['en-US'].fields.file['en-US'].url} alt="">
                <p class="t">${n.title['en-US']}</p>`
                const div = document.createElement('div')
                div.className = 'previews'
                div.innerHTML = e
                document.querySelector(".slide").append(div)
            }
            else{
            
            if (n.hasOwnProperty("videoLink")) {
                const e = `\n            <img src=${n.image["en-US"].fields.file["en-US"].url} alt="">\n           <p class="title" >${n.title["en-US"]}  </p>\n           \n           <p id="description" style="display:none">\n             ${n.description["en-US"]}\n           </p>\n           <video src="${n.videoLink["en-US"]}"  controls style="width: 100%; height: auto; display:none"></video>\n          `
                  , i = `<img src=${n.image["en-US"].fields.file["en-US"].url} alt=""> `
                  , t = document.createElement("div")
                  , s = document.createElement("div");
                s.className = "previews",
                s.innerHTML = i,
                t.className = "movie",
                t.innerHTML = e,
                document.querySelector(".movieContainer").append(t)
                // document.querySelector(".slide").append(s)
            } else {
                const e = `\n             <img src=${n.image["en-US"].fields.file["en-US"].url} alt="">\n            <p class="title" >${n.title["en-US"]}  </p>\n            \n            <p id="description" style="display:none">\n              ${n.description["en-US"]}\n            </p>\n            <video src=""  controls style="width: 100%; height: auto; display:none"></video>\n            `
                  , i = `<img src=${n.image["en-US"].fields.file["en-US"].url} alt=""> `
                  , t = document.createElement("div")
                  , s = document.createElement("div");
                s.className = "previews",
                s.innerHTML = i,
                t.className = "movie",
                t.innerHTML = e,
                document.querySelector(".movieContainer").append(t)
            }
 }       }
}
        )
    }
    )
}
;