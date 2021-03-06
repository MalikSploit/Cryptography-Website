const x = {
    index: 0,
    id: "img1",
    images: [
        "../images/29.svg",
        "../images/30.svg",
        "../images/31.svg"
    ]
};

const y = {
    index: 0,
    id: "img2",
    images: [
        "../images/48.svg",
        "../images/49.svg",
        "../images/50.svg",
        "../images/51.svg",
    ]
};

const z = {
    index: 0,
    id: "img3",
    images: [
        "../images/53.svg",
        "../images/54.svg",
        "../images/55.svg",
        "../images/56.svg",
        "../images/57.svg",
        "../images/58.svg",
        "../images/59.svg",
        "../images/60.svg",
        "../images/61.svg",
        "../images/62.svg",
        "../images/63.svg",
        "../images/64.svg",
        "../images/65.svg",
        "../images/66.svg",
        "../images/67.svg",
        "../images/68.svg",
        "../images/69.svg",
        "../images/70.svg",
        "../images/71.svg",
        "../images/72.svg",
        "../images/73.svg",
        "../images/74.svg",
        "../images/75.svg",
        "../images/76.svg",
        "../images/77.svg",
        "../images/78.svg",
        "../images/79.svg",
        "../images/80.svg",
        "../images/81.svg",
        "../images/82.svg",
        "../images/83.svg",
        "../images/84.svg",
        "../images/85.svg",
        "../images/86.svg",
        "../images/87.svg",
        "../images/88.svg"
    ]
};

function displayNextImage(imgs)
{
    imgs.index++;
    document.getElementById(imgs.id).src = imgs.images[imgs.index % imgs.images.length];
}

function displayPreviousImage(imgs)
{
    imgs.index--;
    document.getElementById(imgs.id).src = imgs.images[imgs.index % imgs.images.length];
}

function startTimer()
{
    setInterval(function () 
    {
        displayNextImage(x);
        displayNextImage(y);
    }, 3000);
    
    setInterval(function () 
    {
        displayNextImage(z);
    }, 7000);
}
