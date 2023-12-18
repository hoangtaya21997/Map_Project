const ApiData = [
    {
        id:"1",
        info: 'Đi qua địa phận tỉnh Thanh Hóa',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau khi hoàn chỉnh toàn tuyến sẽ là 120km/h',
        time: '01/07/2021 - 09/2023',
        total: 100,
        finished: 50,
    },
    {
        id:"2",
        km: '50KM',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        finished: 100,
    },

    //Show Greenline data
    {
        id:"15",
        info: 'Đi qua 3 tỉnh Khánh Hòa, Ninh Thuận, Bình Thuận.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '30/11/2021 - 04/2024',
        total: 100,
        finished: 100,
        status: {
            isComplete: true,
            name: 'cl-vh',
        }
    },
]

const km = document.getElementById('km');
const info = document.getElementById('info');
const lanes = document.getElementById('lanes');
const lanesInfor = document.getElementById('lanesInfor');
const kmH = document.getElementById('kmH');
const kmHinfor = document.getElementById('kmHinfor');
const time = document.getElementById('time');
const contentDiv = document.getElementById('content');
let activeItem = 0

ApiData.forEach(item => {
    handleFillSvgMap(item)
    const div = document.getElementById(item.id);
    div?.addEventListener('click', () => {
        //desktop
        if(window.innerWidth > 768) {
            if(activeItem !== item.id) {
                handleShowInfo(item);
                handleShowDetailMap(item);
            }
            activeItem = item.id
        //mobile
        } else {
            document.getElementById('map').classList.remove('show');
            handleShowInfo(item);
            handleShowDetailMap(item);
        }
    });
});

function handleShowDetailMap(item) {
    elements = document.getElementsByClassName('map-detai');
    const elementsActive = document.querySelector(`.map-detail-${item?.id}`)
    if(elementsActive) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
        }
        elementsActive && elementsActive.classList.add('active');
    }
    handleSetAnimationExtendline(item.finished*100/item.total)
}

function handleFillSvgMap(item) {
    if(item?.status?.isComplete) {
        elements = document.getElementsByClassName(item.status.name);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('active');
        }
    };
}

const handleShowInfo = (item) => {
    document.getElementById('content').classList.add('show');
    if(km){km.textContent = item.finished + `KM`; km.classList.add('w3-animate-zoom');};
    if(info){info.textContent = item.info; info.classList.add('w3-animate-zoom')} ;
    if(lanes){lanes.textContent = item.lanes; lanes.classList.add('w3-animate-zoom')};
    if(lanesInfor){lanesInfor.textContent = item.lanesInfor; lanesInfor.classList.add('w3-animate-zoom')};
    if(kmH){kmH.textContent = item.kmH; kmH.classList.add('w3-animate-zoom')};
    if(kmHinfor){kmHinfor.textContent = item.kmHinfor; kmHinfor.classList.add('w3-animate-zoom')};
    if(time){time.textContent = item.time; time.classList.add('w3-animate-zoom')};

    setTimeout(function() {
        km.classList.remove('w3-animate-zoom');
        info.classList.remove('w3-animate-zoom');
        lanes.classList.remove('w3-animate-zoom');
        lanesInfor.classList.remove('w3-animate-zoom');
        kmH.classList.remove('w3-animate-zoom');
        kmHinfor.classList.remove('w3-animate-zoom');
        time.classList.remove('w3-animate-zoom');
    }, 1000);
}

function handleSetAnimationExtendline(percentage) {
    const currentPath = document.querySelector('.map-detai.active .path-line');
    const heightLine =  currentPath.dataset.strokeDasharray;
    const animateMotion = document.querySelector('.map-detai.active animateMotion');
    const animate = document.querySelector('.map-detai.active animate');

    animate.setAttribute('to', `${heightLine - (percentage*heightLine/100)}`);
    animateMotion.setAttribute('keyPoints', `0;${percentage/100}; ${percentage/100}`);
    animateMotion.beginElement();
    animate.beginElement();
}

//Mobile
const buttonShowMap = document.getElementById("show-map");
buttonShowMap.addEventListener("click", function() {
    window.scrollTo(0, 0);
    const map = document.getElementById("map")
    const detaiMap = document.querySelector('.map-detai.active')
    const content = document.getElementById("content")

    map && map.classList.add('show');
    detaiMap && detaiMap.classList.remove('active');
    content && content.classList.remove('show');
});

document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("responsive-js");
    function checkAndScale() {
       if(window.innerWidth > 1440) {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        var divWidth = myDiv.offsetWidth;
        var divHeight = myDiv.offsetHeight;

        console.log(divWidth)

        if (divWidth < windowWidth || divHeight < windowHeight) {
            var scaleX = windowWidth / divWidth;
            var scaleY = windowHeight / divHeight;
            myDiv.style.transform = "scale(" + Math.min(scaleX, scaleY) + ")";
        }
       }
    }
    window.addEventListener("resize", checkAndScale);
    document.addEventListener("DOMContentLoaded", checkAndScale());
});