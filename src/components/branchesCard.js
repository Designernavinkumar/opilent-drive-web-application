const branchesDetailes = [
    {
        branchName : "SALEM",
        imgUrl : "/src/img/1-salem-banner.png",
    },
    {
        branchName : "CHENNAI",
        imgUrl : "/src/img/2-chennai-banner.png",
    },
    {
        branchName : "BANGLORE",
        imgUrl : "/src/img/3-bangalore-banner.png",
    },
];

branchesDetailes.map((e) => {
    document.write(`
             <div class="relative text-white rounded-xl overflow-hidden lg:h-80 md:h-60 h-40">
                <img src="${e.imgUrl}" alt="${e.branchName}" class="absolute w-full z-0">
                <div class="z-10">
                    <h2 class=" text-base">${e.branchName}</h2>
                    <div class="flex flex-row gap-4">
                        <p class="py-2 px-4">GET DIRECTION</p>
                        <p class="py-2 px-4">BOOL A VISIT</p>
                    </div>
                </div>
            </div>
        `)
})