const ApiData = [
    {
        id:"1",
        name: 'Ql45 - Nghi Sơn',
        info: 'Đi qua địa phận tỉnh Thanh Hóa',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau khi hoàn chỉnh toàn tuyến sẽ là 120km/h',
        time: '01/07/2021 - 09/2023',
        total: 100,
        lineLength: 100,
    },
    {
        id:"2",
        name: 'nghi sơn - diễn châu',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 200,
        lineLength: 100,
    },
    {
        id:"3",
        name: 'diễn châu - Bãi VỌT ',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 300,
        lineLength: 100,
    },
    {
        id:"4",
        name: 'Bãi vọt - Hàm nghi',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 400,
        lineLength: 100,
    },
    {
        id:"5",
        name: 'Hàm nghi - vũng áng',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 500,
        lineLength: 50,
        status: {
            isComplete: false,
            name: 'hn-va',
        }
    },
    {
        id:"6",
        name: 'vũng áng - Bùng',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 600,
        lineLength: 50,
        status: {
            isComplete: false,
            name: 'va-b',
        }
    },
    {
        id:"7",
        name: 'Bùng -Vạn ninh',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 700,
        lineLength: 80,
        status: {
            isComplete: false,
            name: 'b-vn',
        }
    },
    {
        id:"8",
        name: 'Vạn Ninh - Cam lộ',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'vn-cl',
        }
    },
    {
        id:"9",
        name: 'quảng ngãi - Hoài NHƠN',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 200,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'qn-hn',
        }
    },
    {
        id:"10",
        name: 'Hoài nhơn - Quy nhơn',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 300,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'hn-qn',
        }
    },
    {
        id:"11",
        name: 'Quy nhơn - Chí thạnh',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 400,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'qn-ct',
        }
    },
    {
        id:"12",
        name: 'Chí thạnh - vân phong',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'ct-vp',
        }
    },
    {
        id:"13",
        name: 'vân phong - nha trang',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'vp-nt',
        }
    },
    {
        id:"14",
        name: 'nha trang - cam lâm',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
    },
    //Show Greenline data
    {
        id:"15",
        name: 'cam lâm - vĩnh hảo',
        info: 'Đi qua 3 tỉnh Khánh Hòa, Ninh Thuận, Bình Thuận.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '30/11/2021 - 04/2024',
        total: 100,
        lineLength: 50,
        status: {
            isComplete: false,
            name: 'cl-vh',
        }
    },
    {
        id:"16",
        name: 'vĩnh hảo - phan thiết',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
    },
    {
        id:"17",
        name: 'phan thiết - dầu giây',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
    },
    {
        id:"18",
        name: 'Vũng Tàu - biên hoà ',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
    },
    {
        id:"19",
        name: 'cần thơ - Hậu giang',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'ct-hg',
        }
    },
    {
        id:"20",
        name: 'Hậu giang - cà mau',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'hg-cm',
        }
    },
    {
        id:"21",
        name: 'châu đốc - cần thơ - Sóc trăng',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'cd-ct-st',
        }
    },
    {
        id:"22",
        name: 'Cao Lãnh - an hữu',
        info: 'Đi qua địa phận 2 tỉnh Thanh Hoá và tỉnh Nghệ An.',
        lanes: '4 làn xe, rộng 17 m ',
        lanesInfor:'Sau nâng lên 6 làn, rộng 32 m',
        kmH: '80 km/h',
        kmHinfor: 'Sau nâng lên 100-120 km/h',
        time: '07/2021 - 07/2023',
        total: 100,
        lineLength: 100,
        status: {
            isComplete: false,
            name: 'cl-ah',
        }
    },
]

const rootDiv = document.getElementById('root');

const encodedData = JSON.stringify(ApiData);
rootDiv.setAttribute('data', encodedData);

const retrievedData = rootDiv.getAttribute('data');

const buttonShowEdit = document.getElementById('buttonShowEdit')
if(rootDiv.getAttribute('data-show-edit') == "true") {
    if(buttonShowEdit) {buttonShowEdit.style.display = "block";}
} else {
    if(buttonShowEdit) {buttonShowEdit.style.display = "none";}
}

const dataMap = JSON.parse(retrievedData);

window.MapEdit = {
    onUpdateMap: (data, callback) => {
        submitEdit(data, callback);
    }
}

if(dataMap) {
const km = document.getElementById('km');
const info = document.getElementById('info');
const lanes = document.getElementById('lanes');
const lanesInfor = document.getElementById('lanesInfor');
const kmH = document.getElementById('kmH');
const kmHinfor = document.getElementById('kmHinfor');
const time = document.getElementById('time');
const contentDiv = document.getElementById('content');
let activeItem = 1;
let intervalResetAnimationLine;

dataMap?.forEach(item => {
    handleFillSvgMap(item)
    const div = document.getElementById(item.id);
    div?.addEventListener('click', () => {
        //desktop
        if(window.innerWidth > 768) {
            if(activeItem !== item.id) {
                handleActiveButtonMap(item);
                handleShowInfo(item);
                handleShowDetailMap(item);
            }
            activeItem = item.id
        //mobile
        } else {
            document.getElementById('list-detail-map').classList.add('show');
            document.getElementById('content').classList.add('show');
            document.getElementById('map').classList.remove('show');
            handleShowInfo(item);
            handleShowDetailMap(item);
        }
    });
});

function handleActiveButtonMap(item) {
    window.location.hash = `${item.id}`;
    const listButton = document.querySelectorAll('.button');
    listButton.forEach(button => {
        button.classList.remove('clicking');
    });
    document.getElementById(`${item.id}`).classList.add('clicking');
}

function handleShowDetailMap(item) {
    elements = document.getElementsByClassName('map-detai');
    const elementsActive = document.querySelector(`.map-detail-${item?.id}`)
    if(elementsActive) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
        }
        elementsActive && elementsActive.classList.add('active');
    }
    handleSetAnimationExtendline(Number(item.lineLength))
}

function handleFillSvgMap(item) {
    if(item?.status) {
        elements = document.getElementsByClassName(item.status.name);
        for (var i = 0; i < elements.length; i++) {
            if (item?.status?.isComplete) {
                elements[i].classList.add('active');
              } else {
                elements[i].classList.remove('active');
            }
        }
    };
}

const handleShowInfo = (item) => {
    console.log(item)
    if(km){km.textContent = item.total + `KM`; km.classList.add('animate__animated', 'animate__pulse');};
    if(info){info.textContent = item.info; info.classList.add('animate__animated', 'animate__pulse')} ;
    if(lanes){lanes.textContent = item.lanes; lanes.classList.add('animate__animated', 'animate__pulse')};
    if(lanesInfor){lanesInfor.textContent = item.lanesInfor; lanesInfor.classList.add('animate__animated', 'animate__pulse')};
    if(kmH){kmH.textContent = item.kmH; kmH.classList.add('animate__animated', 'animate__pulse')};
    if(kmHinfor){kmHinfor.textContent = item.kmHinfor; kmHinfor.classList.add('animate__animated', 'animate__pulse')};
    if(time){time.textContent = item.time; time.classList.add('animate__animated', 'animate__pulse')};

    setTimeout(function() {
        km.classList.remove('animate__pulse');
        info.classList.remove('animate__pulse');
        lanes.classList.remove('animate__pulse');
        lanesInfor.classList.remove('animate__pulse');
        kmH.classList.remove('animate__pulse');
        kmHinfor.classList.remove('animate__pulse');
        time.classList.remove('animate__pulse');
    }, 1000);
}

//Mobile
const buttonShowMap = document.getElementById("show-map");
buttonShowMap?.addEventListener("click", function() {
    window.scrollTo(0, 0);
    const map = document.getElementById("map")
    const detaiMap = document.querySelector('.map-detai.active')
    const content = document.getElementById("content")

    map && map.classList.add('show');
    detaiMap && detaiMap.classList.remove('active');
    content && content.classList.remove('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.getElementById("responsive-js");
    function checkAndScale() {
       if(window.innerWidth > 820) {
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const divWidth = myDiv?.offsetWidth;
        const divHeight = myDiv?.offsetHeight;
        if (divWidth < windowWidth || divHeight < windowHeight) {
            const scaleX = windowWidth / divWidth;
            const scaleY = windowHeight / divHeight;
            myDiv.style.transform = "scale(" + Math.min(scaleX, scaleY) + ")";
        }
       }
       else {
        myDiv.style.transform = "scale(1)";
       }
    }
    window.addEventListener("resize", checkAndScale);
    document.addEventListener("DOMContentLoaded", checkAndScale());
});

document.addEventListener("DOMContentLoaded", function() {
    setDefaultData()
});

function setDefaultData () {
    const hashNumber = parseInt(window.location.hash.replace("#", ""))
    let dedaultData;
    
    if(hashNumber && dataMap.length >= hashNumber){
        dedaultData = dataMap[hashNumber - 1]
    }else {
        dedaultData = dataMap[0]
    }
    if(window.innerWidth > 820 && dedaultData) {
        document.getElementById(dedaultData.id)?.classList.add('clicking');
        document.querySelector(`.map-detai.map-detail-${dedaultData.id}`)?.classList.add('active');
        if(km){km.textContent = dedaultData.total + `KM`; km.classList.add('animate__animated', 'animate__pulse');};
        if(info){info.textContent = dedaultData.info; info.classList.add('animate__animated', 'animate__pulse')} ;
        if(lanes){lanes.textContent = dedaultData.lanes; lanes.classList.add('animate__animated', 'animate__pulse')};
        if(lanesInfor){lanesInfor.textContent = dedaultData.lanesInfor; lanesInfor.classList.add('animate__animated', 'animate__pulse')};
        if(kmH){kmH.textContent = dedaultData.kmH; kmH.classList.add('animate__animated', 'animate__pulse')};
        if(kmHinfor){kmHinfor.textContent = dedaultData.kmHinfor; kmHinfor.classList.add('animate__animated', 'animate__pulse')};
        if(time){time.textContent = dedaultData.time; time.classList.add('animate__animated', 'animate__pulse')};
    } else {
        document.getElementById(dedaultData.id)?.classList.remove('clicking');
    }
}

function handleSetAnimationExtendline(percentage) {
    clearInterval(intervalResetAnimationLine);
    const currentPath = document.querySelector('.map-detai.active .path-line');
    const heightLine =  currentPath?.dataset?.strokeDasharray;
    const animateMotion = document.querySelector('.map-detai.active animateMotion');
    const animate = document.querySelector('.map-detai.active animate');
    animate?.setAttribute('to', `${heightLine - (percentage*heightLine/100)}`);
    animateMotion?.setAttribute('keyPoints', `0.05;${percentage/100}; ${percentage/100}`);
    animateMotion?.beginElement();
    animate?.beginElement();
    resertAnimation();
}

function resertAnimation () {
    const animateMotion = document.querySelector('.map-detai.active animateMotion');
    const animate = document.querySelector('.map-detai.active animate');
    intervalResetAnimationLine =  setInterval(() => {
        animateMotion &&  animateMotion.beginElement();
        animate && animate.beginElement();
    }, 3000);
}

function setAnimationWhenHaveHash () {
    const hashId = window.location.hash.replace("#", "")
    const selectedItem = dataMap.find(item => item.id === hashId);
    hashId && selectedItem && handleSetAnimationExtendline(Number(selectedItem.lineLength))
}

document.addEventListener("DOMContentLoaded", function() {
    const animate = document.querySelector('.map-detai.active animate');
    animate && animate.addEventListener("repeatEvent", resertAnimation());
    setAnimationWhenHaveHash();
});


let newDataChange = {}
function showFormEditData() {
    const name = document.getElementById("name");
    const kmTotalInput = document.getElementById("kmTotalInput");
    const kmInput = document.getElementById("kmInput");
    const infoInput = document.getElementById("infoInput");
    const lanesInput = document.getElementById("lanesInput");
    const lanesInforInput = document.getElementById("lanesInforInput");
    const kmHInput = document.getElementById("kmHInput");
    const kmHinforInput = document.getElementById("kmHinforInput");
    const timeInput = document.getElementById("timeInput");
    const isComplete = document.getElementById("statusButton");
    const checkboxButton = document.getElementById("checkboxActiveButton");
    const hashId = window.location.hash.replace("#", "") || "1";
    const selectedItem = dataMap.find(item => item.id === hashId);
    if (selectedItem) {
        name.textContent = selectedItem.name;
        kmTotalInput.value = selectedItem.total;
        kmInput.value = selectedItem.lineLength;
        infoInput.value = selectedItem.info;
        lanesInput.value = selectedItem.lanes ;
        lanesInforInput.value = selectedItem.lanesInfor;
        kmHInput.value = selectedItem.kmH;
        kmHinforInput.value = selectedItem.kmHinfor;
        timeInput.value = selectedItem.time;
        if(selectedItem.status){
            checkboxButton.style.display = "flex"
            isComplete.checked = selectedItem.status.isComplete;
        } else {
            checkboxButton.style.display = "none"
        }
        document.getElementById("popup-edit").style.display = 'flex';
    }
}

function handleClosePopUp () {
    document.getElementById("popup-edit").style.display = 'none'
}
function updateData(property, value) {
    // Lấy dữ liệu từ mảng data theo id
    const hashId = window.location.hash.replace("#", "") || "1";
    
    const result = dataMap.find(item => item.id === hashId);
    if (result) {
        result[property] = value;
        newDataChange = result;
    }
}

function toggleActiveButton(property, value) {
    const hashId = window.location.hash.replace("#", "") || "1";
    const result = dataMap.find(item => item.id === hashId);
    result.status[property] = value;
    newDataChange = result;
}

function handleUpdateUIWhithNewData (data) {
    handleFillSvgMap(data);
    if(Number(data.lineLength)){handleSetAnimationExtendline(Number(data.lineLength))}
    if(km){km.textContent = data.total + `KM`; km.classList?.add('animate__animated', 'animate__pulse');};
    if(info){info.textContent = data.info; info.classList?.add('animate__animated', 'animate__pulse')} ;
    if(lanes){lanes.textContent = data.lanes; lanes.classList?.add('animate__animated', 'animate__pulse')};
    if(lanesInfor){lanesInfor.textContent = data.lanesInfor; lanesInfor.classList?.add('animate__animated', 'animate__pulse')};
    if(kmH){kmH.textContent = data.kmH; kmH.classList?.add('animate__animated', 'animate__pulse')};
    if(kmHinfor){kmHinfor.textContent = data.kmHinfor; kmHinfor.classList?.add('animate__animated', 'animate__pulse')};
    if(time){time.textContent = data.time; time.classList?.add('animate__animated', 'animate__pulse')};
    setTimeout(function() {
        km.classList?.remove('animate__pulse');
        info.classList?.remove('animate__pulse');
        lanes.classList?.remove('animate__pulse');
        lanesInfor.classList.remove('animate__pulse');
        kmH.classList?.remove('animate__pulse');
        kmHinfor.classList?.remove('animate__pulse');
        time.classList?.remove('animate__pulse');
    }, 1000);
}



function submitEdit(data, callback) {
    const hashId = window.location.hash.replace("#", "") || "1";

    const encodedData = JSON.stringify(dataMap);
    const rootDiv = document.getElementById('root');
    rootDiv.setAttribute('data', encodedData);

    if(Object.keys(data).length !== 0 && hashId === data.id){ 
        handleUpdateUIWhithNewData(data)
    }
    document.getElementById("popup-edit").style.display = 'none'
    if (callback) {
      callback();
    }
}

function handleOnclickButtonSubmit (){
    window.MapEdit.onUpdateMap(newDataChange, function() {
        console.log("Update completed!");
    });
}
}