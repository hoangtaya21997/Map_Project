
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
        finished: 100,
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
        finished: 20,
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

ApiData.forEach(item => {
    handleFillSvgMap(item)
    const div = document.getElementById(item.id);
    div?.addEventListener('click', () => {
        handleShowInfo(item);
        handleShowDetailMap(item);
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
    handleSetAnimationline(item.finished*100/item.total)
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
    document.getElementById('content').style.opacity = '1'

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

function handleSetAnimationline(percentage) {
    handleResetAnimation()

    const currentPath = document.querySelector('.map-detai.active .path-line');
    const heightLine =  currentPath.dataset.strokeDasharray;
    const newWidth = ( (heightLine * percentage ) / 100)
    currentPath.style.strokeDasharray = `${heightLine}`;
    currentPath.style.strokeDashoffset = `${heightLine - newWidth}`;
    const startPoint = currentPath.getPointAtLength(0);

    setPoSitionDotArrow(startPoint)
    setTimeout(() => setPoSitionHeadArrow(), 1500);
}


function handleResetAnimation () {
    const currentPathNoactive = document.querySelectorAll('.path-line');
    currentPathNoactive.forEach(function(divElement) {
        const divElement1 =  divElement.dataset.strokeDasharray;
        divElement.style.strokeDashoffset = `${divElement1}`;
    })
}

function setPoSitionDotArrow (startPoint) {
    const image = document.querySelector('.map-detai.active .arrow-dot');
    image.setAttribute('x', startPoint.x - 15); 
    image.setAttribute('y', startPoint.y - 15);
}


function setPoSitionHeadArrow () {
    const originalPath = document.querySelector('.map-detai.active .path-line');
    const totalLength = originalPath.getTotalLength();
    const dashoffset = parseFloat(window.getComputedStyle(originalPath).strokeDashoffset);
    const endPoint1 = originalPath.getPointAtLength(totalLength - dashoffset);

  const image = document.querySelector('.map-detai.active .arrow-head');
  image.setAttribute('x', endPoint1.x - 23); 
  image.setAttribute('y', endPoint1.y - 25);
}