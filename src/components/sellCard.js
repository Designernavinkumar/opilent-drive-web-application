const carDetails= [
    { 
        imgUrl: '/src/img/car-1.png', 
        carName : '2020 Rolls Royce - Ghost',
        regNo : '2018',
        kmsDriven : '8,921',
        fuel : 'Petrol',
        inr : ' 7,98,10,000 /-',
        emiStartingFrom : 'INR 5,73,657 /-',
    },
    { 
        imgUrl: '/src/img/car-2.png', 
        carName : '2019 Bentley  Bentayga W12',
        regNo : '2018',
        kmsDriven : '5,015',
        fuel : 'Petrol',
        inr : '4,99,90,000 /-',
        emiStartingFrom : 'INR 3,63,497 /-',
    },
    { 
        imgUrl: '/src/img/car-3.png', 
        carName : '2019 Lamborghini Revuelto',
        regNo : '2018',
        kmsDriven : '7,900',
        fuel : 'Petrol',
        inr : '6,99,90,000 /-',
        emiStartingFrom : ' INR 6,30,900 /-',
    },
    { 
        imgUrl: '/src/img/car-4.png', 
        carName : '2017 Ferrari FS90 Stradale',
        regNo : '2018',
        kmsDriven : '9,045',
        fuel : 'Petrol',
        inr : '6,15,80,000/-',
        emiStartingFrom : 'INR 7,63,497 /-',
    },
    { 
        imgUrl: '/src/img/car-5.png', 
        carName : '2023 Koenigsegg Agera 5.0',
        regNo : '2023',
        kmsDriven : '3,990',
        fuel : 'Petrol',
        inr : '10,78,400 /-',
        emiStartingFrom : 'INR 6,78,410 /-',
    },
    { 
        imgUrl: '/src/img/car-6.png', 
        carName : '2023 BMW XM (Hybrid)',
        regNo : '2023',
        kmsDriven : '3,650',
        fuel : 'Petrol',
        inr : '2,65,00,000 /-',
        emiStartingFrom : 'INR 5,63,900 /-',
    },
  ];
  
  carDetails.map((e) => {
    document.write(`
        <div class="min-h-[460px] border-[1px] border-Gray-3 min-w-[320px] max-w-[552px] lg:rounded-2xl md:rounded-xl sm:rounded-lg rounded-md overflow-hidden">
                <div class="h-3/5 flex justify-center items-center bg-Gray-2"><img src="${e.imgUrl}" alt="${e.carName}"></div>
                <div class="h-2/5 lg:p-3 md:p-3 p-3 flex flex-col lg:gap-4 md:gap-3 gap-2 justify-between">
                    <h6 class="lg:text-xl md:text-xl sm:text-2xl text-2xl font-semibold">${e.carName}</h6>
                    <div class="flex flex-row lg:gap-10 md:gap-8 gap-4 lg:text-sm md:text-base sm:text-lg text-xs">
                        <div class="flex flex-col lg:gap-2 gap-1"><label class="text-Gray-5">Reg. Year</label><p class="font-medium">${e.regNo}</p></div>
                        <div class="flex flex-col lg:gap-2 gap-1"><label class="text-Gray-5">Kms Driven</label><p class="font-medium">${e.kmsDriven}</p></div>
                        <div class="flex flex-col lg:gap-2 gap-1"><label class="text-Gray-5">Fuel</label><p class="font-medium">${e.fuel}</p></div>
                    </div>
                    <div class="flex flex-row font-medium lg:gap-3 gap-2 md:text-base sm:text-lg text-sm">
                        <p>INR <span class="text-primary-1">${e.inr}</span></p>
                        <p>EMI starting from <span class="text-primary-1">${e.emiStartingFrom}</span></p>
                    </div>
                </div>
            </div>
        `);
  });
  