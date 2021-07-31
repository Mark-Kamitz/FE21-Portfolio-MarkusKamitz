let mydata = JSON.parse(frontend);
let x = 2;

/* ---- frontend cloop ---- */

for (let val of mydata) {
    if(x % 2 === 0) {
        document.getElementById("frontend").innerHTML += ` <div class="row mb-sm-4 mb-md-5">
            <div class="col-6 col-sm-3 col-md-2 offset-3  offset-sm-0  order-1 order-md-2 ">
                <a href="${ val.link }" target="_blank"><img src="${ val.image }" class=" reviews-image img-fluid rounded-circle mt-3 mt-sm-0 mb-5 mb-sm-0" alt="..."></a>
            </div>
            <div class="col-12 col-sm-9 col-md-5 order-2 order-md-1"> 
                <h5 class="h6 text-center text-sm-start text-md-end text-primary mb-1">${val.date}</h5>
                <h6 class="text-center text-sm-start text-md-end fw-bolder">${ val.name }</h6>
                <p  class="text-center text-sm-start text-md-end m-0 font-monospace fw-light">${val.technology} </p>
                <p  class="text-center text-sm-start text-md-end  fw-light m-0">${ val.description } </p>
                <div class="text-center text-sm-start text-md-end mb-3"><a href="${ val.gitLink }"><img src="${val.git}" alt="github icon"></a></div>
            </div>  
        </div> ` 
    }
    else {
        document.getElementById("frontend").innerHTML += ` <div class="row mb-sm-4 mb-md-5">
            <div class="col-6 col-sm-3 col-md-2 offset-3  offset-sm-0  order-1 order-sm-2 order-md-1 offset-md-5 ">
            <a href="${ val.link }" target="_blank"><img src="${ val.image }" class="reviews-image img-fluid rounded-circle mt-3 mt-sm-0 mb-5 mb-sm-0" alt="..."></a>
            </div>
            <div class="col-12 col-sm-9 col-md-5 order-2 order-sm-1 order-md-2"> 
                <h5 class="h6 text-center text-sm-end text-md-start  text-primary mb-1">${ val.date }</h5>
                <h6 class="text-center text-sm-end text-md-start fw-bolder">${ val.name }</h6>
                <p  class="text-center text-sm-end text-md-start  m-0 font-monospace fw-light">${ val.technology }</p>
                <p  class="text-center text-sm-end text-md-start  fw-light m-0">${ val.description }</p>
                <div class="text-center text-sm-end text-md-start mb-3"><a href="${ val.gitLink }""><img src="${ val.git }" alt="github icon"></a></div>
            </div>  
        </div> ` 
    }
    x++;
}