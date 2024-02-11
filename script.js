const modules = {html:['intro', 'structure', 'structure_Defination',
'paragraph', 'button', 'heading','lineBreak', 'textFormating', 'block Vs inline',
'list', 'anchor', 'image', 'table','navigation', 'megaMenu', 'form','html vs html5', 
], 
css:[
   'intro', 'selector','display','selector','pseudo-class', 'layout',  'responsive layout', 'Grid vs Flexbox',
'rules', 'css -3 Features', 'transform', 'animation','resources'
],
git:[],
Javascript:[ 'javascript basic', 'javascript conditional', 'javascript array', 'javascript loop', 'javascript string methods', 'javascript object', 'javascript function', 'Some BultIn Objects', 'javascript dom'],
nodeJs:[ 'nodejs intro',],
MongoDb:['mongoDb intro']


}

const module = Object.keys(modules);

let topics = `<button class="menu-btn md:hidden text-base text-white uppercase py-1 px-4 hover:bg-black"><i class="fa-solid fa-bars"></i></button>
<ul class= "mainMenu flex justify-center bg-[#282A35]  ">  `

module.forEach((topic)=>{
    topics = `${topics} <li class= "topic text-base text-white uppercase py-1 px-4 hover:bg-black">${topic} </li>`
});

topics = `${topics}  </ul>`
document.getElementById("navbar").innerHTML= topics;
let moduleCounter = 0;


document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`home.html`)
    .then(response=> response.text())
    .then(data=> document.getElementById("main").innerHTML = data);
});


const topicItems = document.querySelectorAll(".topic");
let listItem;
topicItems.forEach((item) => {
    item.addEventListener('click', () => {
        moduleCounter = 0;    

        topicItems.forEach((item)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }

        })
        item.classList.add("active") 
       const topicName = item.innerHTML.replace(/\s/g, '');
        fetch(`content.html`)
            .then(response => response.text())
            .then( function (data) {
                document.getElementById("main").innerHTML = data;
                if(modules[topicName]){
                    item.classList.add("active");
                    let navList = "";
                    modules[topicName].forEach(function(list)  {
                        navList = `${navList}<li class="listItem uppercase">${list}</li> `;
                    });
                    document.getElementById("navList").innerHTML = navList;
                }        
            })
            .then(function(){
                listItem = document.querySelectorAll(".listItem");
                listItem.forEach((list)=>{
                    if(list.classList.contains("active")){
                        list.classList.remove("active");
                    }
                    
                })
                listItem[0].classList.add("active");
                fetch(`${topicName}\\${modules[topicName][0]}.html`)
                .then(response => response.text())
                .then(function(data){
                document.getElementById('contentArea').innerHTML = data; 
                document.querySelectorAll(".prevBtn").forEach((btn)=>{
                    if(moduleCounter<=0){
                        btn.innerHTML="Home"
                    }
                    else{
                        btn.innerHTML="Previous"
                    }
                }) 
                })

            })
            .then(function(){
                 
                listItem.forEach((list, key)=>{
                    list.addEventListener('click',function(){
                        listItem.forEach((list)=>{
                            if(list.classList.contains("active")){
                                list.classList.remove("active");
                            }
                        })
                        list.classList.add("active");
                        moduleCounter=key;
                        document.querySelectorAll(".prevBtn").forEach((btn)=>{
                            document.querySelectorAll(".prevBtn").forEach((btn)=>{
                                if(moduleCounter<=0){
                                    btn.innerHTML="Home"
                                }
                                else{
                                    btn.innerHTML="Previous"
                                }
                            })
                        })
                        const listData = list.innerHTML;
                        fetch(`${topicName}\\${listData}.html`)
                        .then(response => response.text())
                        .then(function(data){
                        document.getElementById('contentArea').innerHTML = data; 
                        })
                    })
                }) 
            })
            .then(function(){

                document.querySelectorAll(".nextBtn").forEach((btn)=>{
                    btn.addEventListener('click',function(){
                        
                        listItem.forEach((list)=>{
                            if(list.classList.contains("active")){
                                list.classList.remove("active");
                            }

                        })
                        
                    if(moduleCounter<modules[topicName].length-1){
                        moduleCounter++;
                        listItem[moduleCounter].classList.add("active");
                        fetch(`${topicName}\\${modules[topicName][moduleCounter]}.html`)
                        .then(response => response.text())
                        .then(function(data){
                            document.getElementById('contentArea').innerHTML = data;
                            document.querySelectorAll(".prevBtn").forEach((btn)=>{
                                if(moduleCounter<=0){
                                    btn.innerHTML="Home"
                                }
                                else{
                                    btn.innerHTML="Previous"
                                }
                            })
                             
                        })


                        
                    }
                      
                      //alert(moduleCounter)
                    })
                }) 
            })
            .then(function(){
                document.querySelectorAll(".prevBtn").forEach((btn)=>{
                    btn.addEventListener('click',function(){
                        listItem.forEach((list)=>{
                            list.classList.remove("active");

                        })
                    if(moduleCounter>=1){
                        moduleCounter--;
                        listItem[moduleCounter].classList.add("active");
                        fetch(`${topicName}\\${modules[topicName][moduleCounter]}.html`)
                        .then(response => response.text())
                        .then(function(data){
                            document.getElementById('contentArea').innerHTML = data;
                             
                        }) 
                        document.querySelectorAll(".prevBtn").forEach((btn)=>{
                            if(moduleCounter<=0){
                                btn.innerHTML="Home"
                            }
                            else{
                                btn.innerHTML="Previous"
                            }
                        })
                    }

                    else {
                        fetch(`home.html`)
                        .then(response=> response.text())
                        .then(data=> document.getElementById("main").innerHTML = data);
                    }
                      
                    })
                }) 
            })
            .then(function(){
               const contentArea= document.getElementById('contentArea');
               contentArea.addEventListener("click", function(){
                // alert("This is content area");
                const sideNav= document.getElementById("sideNav");
                if(!(sideNav.classList.contains('hidden'))){
                    sideNav.classList.add('hidden')
                }

               })
               contentArea.addEventListener("wheel", function(){
                // alert("This is content area");
                const sideNav= document.getElementById("sideNav");
                if(!(sideNav.classList.contains('hidden'))){
                    sideNav.classList.add('hidden')
                }

               })

            })
            .catch(error => console.error('Error fetching content:', error));        
    });
});



const menuBtn= document.querySelectorAll(".menu-btn")[0];

menuBtn.addEventListener("click", ()=>{
    const sideNav= document.getElementById("sideNav");
    if(sideNav.classList.contains('hidden')){
        sideNav.classList.remove('hidden');
    }
    else{
        sideNav.classList.add('hidden')
    }
})

