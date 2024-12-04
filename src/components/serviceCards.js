const serviceDetails = [
    { 
        imgUrl : "/src/img/buy-banner.png",
        serviceName :"BUY",
    },
    { 
        imgUrl : "/src/img/shell-banner.png",
        serviceName :"SERVICE",
    },
    { 
        imgUrl : "/src/img/sell-banner.png",
        serviceName :"SELL",
    },
    { 
        imgUrl : "/src/img/carcare-banner.png",
        serviceName :"CAR CARE",
    },
    { 
        imgUrl : "/src/img/service-package-banner.png",
        serviceName :"SERVICE PACKAGE",
    },
    { 
        imgUrl : "/src/img/warrenty-banner.png",
        serviceName :"WARRANTY",
    },
    { 
        imgUrl : "/src/img/car-insurence-banner.png",
        serviceName :"CAR INSURANCE",
    },
    { 
        imgUrl : "/src/img/carloan-banner.png",
        serviceName :"CAR LOAN",
    },
];
 
serviceDetails.map((e) => {
    document.write(`
        <div class=" relative h-[200px] min-w-[310px] max-w-[310px] lg:p-4 p-3 flex items-end overflow-hidden rounded-2xl flex-grow">
        <img class="absolute z-0 inset-0 h-full" src="${e.imgUrl}" alt="${e.serviceName}"> 
        <h6 class="font-semibold lg:text-base text-sm z-10 text-white">${e.serviceName}</h6>
        </div>
        `)
})
