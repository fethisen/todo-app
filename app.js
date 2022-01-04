const form = document.querySelector(".add-form");
const lists = document.querySelector(".todos");

// ebeveyni search classı olan input etiketine eriş diyoruz.
const searchInput = document.querySelector('.search input');

function createTemplate(todo){
    let html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"> </i>
    </li>
    `;
    lists.innerHTML += html;
}

form.addEventListener('submit',e=>{
    e.preventDefault(); // varsayılan özellikleri kapatıyoruz
    const todo = form.add.value.trim().toLowerCase(); // trim() sağda ve solda olan boşlukları yok eder. 
    if(todo.length){
        createTemplate(todo);
        form.reset();
    }
});

// silme islemi
lists.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// filtreeleme işlemi
searchInput.addEventListener('keyup',e=>{
    const filter = searchInput.value.trim().toLowerCase();
    createFilter(filter);
}); 

const createFilter=(filter)=>{

    // bu kısım aramaya harfler yazıldıkça uyan görevlerin listede görünmesini sağlıyor.
    Array.from(lists.children).filter((todo) =>{
        console.log(todo.textContent.includes(filter));
        // sağlamayanları verir.
        return !todo.textContent.toLowerCase().includes(filter);
    }).forEach((todo)=>{
        // görünmesini engelliyoruz
        todo.classList.add('filtered')
    })


    // Bu kısım ise aranan kelime silindiğinde bütün listenin yeniden getirilmesini sağlıyor.
    Array.from(lists.children).filter((todo) =>{
        console.log(todo.textContent.includes(filter));
        // sağlamayanları verir.
        return todo.textContent.toLowerCase().includes(filter);
    }).forEach((todo)=>{
        // görünmesini engelliyoruz
        todo.classList.remove('filtered')
    })
}