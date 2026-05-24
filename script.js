// script.js - вся логика сайта

function getCarSpecs(name) {
    if (name.includes("Porsche Taycan 2025")) return { power: "625 л.с.", accel: "3.2 с", range: "504 км", drive: "Полный привод" };
    if (name.includes("BMW i7 M70")) return { power: "660 л.с.", accel: "3.7 с", range: "560 км", drive: "Полный привод" };
    if (name.includes("Lamborghini Revuelto")) return { power: "1015 л.с.", accel: "2.5 с", range: "Гибрид", drive: "Полный привод" };
    if (name.includes("Mercedes-AMG EQS 53")) return { power: "762 л.с.", accel: "3.4 с", range: "580 км", drive: "Полный привод" };
    if (name.includes("Audi RS e-tron GT")) return { power: "646 л.с.", accel: "3.3 с", range: "472 км", drive: "Полный привод" };
    if (name.includes("Audi R8 V10")) return { power: "620 л.с.", accel: "3.1 с", range: "10.5 л/100км", drive: "Полный привод" };
    if (name.includes("Porsche 911 Turbo S")) return { power: "650 л.с.", accel: "2.7 с", range: "12.5 л/100км", drive: "Полный привод" };
    if (name.includes("BMW M5 Competition")) return { power: "625 л.с.", accel: "3.3 с", range: "10.8 л/100км", drive: "Полный привод" };
    if (name.includes("Range Rover Sport")) return { power: "350 л.с.", accel: "5.9 с", range: "9.2 л/100км", drive: "Полный привод" };
    if (name.includes("РЕНЖ РОВЕР СПОРТ")) return { power: "525 л.с.", accel: "4.5 с", range: "13.5 л/100км", drive: "Полный привод" };
    if (name.includes("Tesla Model S Plaid")) return { power: "1020 л.с.", accel: "2.1 с", range: "600 км", drive: "Полный привод" };
    if (name.includes("BMW i4 M50")) return { power: "544 л.с.", accel: "3.9 с", range: "520 км", drive: "Полный привод" };
    if (name.includes("Mercedes EQE 500")) return { power: "408 л.с.", accel: "4.9 с", range: "530 км", drive: "Задний привод" };
    if (name.includes("Porsche Taycan 4S")) return { power: "530 л.с.", accel: "4.0 с", range: "463 км", drive: "Полный привод" };
    if (name.includes("Ferrari 296 GTB")) return { power: "830 л.с.", accel: "2.9 с", range: "7.4 л/100км", drive: "Задний привод" };
    if (name.includes("McLaren Perfatto")) return { power: "700 л.с.", accel: "3.0 с", range: "6.8 л/100км", drive: "Задний привод" };
    if (name.includes("BMW XM")) return { power: "653 л.с.", accel: "4.3 с", range: "5.6 л/100км", drive: "Полный привод" };
    return { power: "500+ л.с.", accel: "3.5 с", range: "8-15 л/100км", drive: "Полный привод" };
}

const categoryCars = {
    new: [
        { name: "Porsche Taycan 2025", price: 125000, img: "https://i.pinimg.com/1200x/ae/f8/c5/aef8c526891d661eeea23a2e5a6a2ff0.jpg", desc: "Электрический седан" },
        { name: "BMW i7 M70", price: 157500, img: "https://i.pinimg.com/originals/1c/c4/75/1cc475eefae9086e338d00296041de01.jpg", desc: "Электромобиль" },
        { name: "Lamborghini Revuelto", price: 625000, img: "https://i.pinimg.com/1200x/43/93/71/4393717fa44953dd2fc44d4439bbf7a0.jpg", desc: "Гибрид V12" },
        { name: "Mercedes-AMG EQS 53", price: 148000, img: "https://i.pinimg.com/originals/73/a8/b1/73a8b11598679757796bafee6d46b0ae.jpg", desc: "Электрический седан" },
        { name: "Audi RS e-tron GT", price: 142000, img: "https://i.pinimg.com/1200x/59/53/b6/5953b675bd8a464c4cf65faac2d65541.jpg", desc: "Электрический спорткар" }
    ],
    used: [
        { name: "Audi R8 V10 (2021)", price: 189000, img: "https://i.pinimg.com/1200x/9c/d9/9d/9cd99df17647e07b14a810a1eae104f6.jpg", desc: "Пробег 15 000 км" },
        { name: "Porsche 911 Turbo S (2022)", price: 195000, img: "https://i.pinimg.com/1200x/54/f5/ba/54f5ba710b8576dc38ee476562f47af9.jpg", desc: "Пробег 8 000 км" },
        { name: "BMW M5 Competition (2021)", price: 105000, img: "https://i.pinimg.com/1200x/3a/7a/d2/3a7ad2a9bb98aeb8f958b573c61ca7ce.jpg", desc: "Пробег 22 000 км" },
        { name: "Range Rover Sport (2022)", price: 89000, img: "https://i.pinimg.com/1200x/17/6c/49/176c497fc2358e54c91b80bf7a2bc348.jpg", desc: "Пробег 18 000 км" }
    ],
    electric: [
        { name: "Tesla Model S Plaid", price: 110000, img: "https://i.pinimg.com/1200x/8a/ad/46/8aad46472c44be08ff9a1199741bf6bf.jpg", desc: "Электрический" },
        { name: "BMW i4 M50", price: 72000, img: "https://w7.pngwing.com/pngs/137/128/png-transparent-bmw-2-series-2018-bmw-m2-bmw-x1-car-bmw-compact-car-sedan-car.png", desc: "Электромобиль" },
        { name: "Mercedes EQE 500", price: 85000, img: "https://w7.pngwing.com/pngs/520/424/png-transparent-white-car-car-white-cars.png", desc: "Электрический седан" },
        { name: "Porsche Taycan 4S", price: 114000, img: "https://i.pinimg.com/1200x/0c/46/4a/0c464ac23df5d4f1a048c18055669613.jpg", desc: "Электрический" }
    ],
    hybrid: [
        { name: "Ferrari 296 GTB", price: 345000, img: "https://i.pinimg.com/1200x/9f/f6/59/9ff6595d141a823f7015988f6c6508f8.jpg", desc: "Гибрид V6" },
        { name: "McLaren Perfatto", price: 235000, img: "https://i.pinimg.com/1200x/1a/f6/c2/1af6c250ed02ad3d5cf1f3e394e8cd82.jpg", desc: "Гибрид V6" },
        { name: "Lamborghini Revuelto", price: 625000, img: "https://i.pinimg.com/1200x/43/93/71/4393717fa44953dd2fc44d4439bbf7a0.jpg", desc: "Гибрид V12" },
        { name: "BMW XM", price: 159000, img: "https://w7.pngwing.com/pngs/137/128/png-transparent-bmw-2-series-2018-bmw-m2-bmw-x1-car-bmw-compact-car-sedan-car.png", desc: "Гибрид V8" }
    ]
};

function renderCategory(cat) {
    const container = document.getElementById('categoryResults');
    const cars = categoryCars[cat];
    if (!cars) return;
    container.innerHTML = '';
    cars.forEach(car => {
        const specs = getCarSpecs(car.name);
        const card = document.createElement('div');
        card.className = 'category-car-card';
        card.innerHTML = `<img src="${car.img}" class="cat-car-img"><h4>${car.name}</h4><div class="price">€${car.price.toLocaleString()}</div><div>${car.desc}</div><button class="info-btn-car">О МАШИНЕ</button><div class="car-details"><p><strong>Мощность:</strong> ${specs.power}</p><p><strong>Разгон 0-100:</strong> ${specs.accel}</p><p><strong>Запас хода / расход:</strong> ${specs.range}</p><p><strong>Привод:</strong> ${specs.drive}</p></div>`;
        card.querySelector('.cat-car-img').addEventListener('click', () => openModal(car.img));
        const btn = card.querySelector('.info-btn-car');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.toggle('expanded');
            btn.textContent = card.classList.contains('expanded') ? "СВЕРНУТЬ" : "О МАШИНЕ";
        });
        container.appendChild(card);
    });
}

// Данные для страницы оформления
const designStagesData = [
    { title: "1. ПОДБОР ИЛИ ВЫБОР АВТОМОБИЛЯ", content: "<p><strong>Каталог на сайте:</strong> Изучите наш актуальный ассортимент авто в наличии и в пути. Используйте удобные фильтры по марке, году выпуска, типу двигателя и бюджету.</p><p><strong>Подробные спецификации:</strong> Нажмите кнопку «О МАШИНЕ», чтобы открыть полную карту автомобиля: реальный пробег, комплектацию, результаты компьютерной диагностики и детальный фотоотчет.</p><p><strong>Индивидуальный заказ:</strong> Если нужной модели нет в каталоге, мы найдем её для вас на закрытых аукционах и у официальных дилеров в Европе по вашим точным критериям.</p>" },
    { title: "2. ПОДАЧА ЗАЯВКИ И КОНСУЛЬТАЦИЯ", content: "<p><strong>Быстрая связь:</strong> Нажмите кнопку «ЗВОНОК» для заказа обратного звонка или свяжитесь с нами напрямую по телефону: <strong>+7 (909) 777-07-07</strong>.</p><p><strong>Закрепление менеджера:</strong> За вами закрепляется персональный эксперт. Он ответит на все вопросы, рассчитает полную стоимость автомобиля с учетом доставки и растаможки, а также зафиксирует за вами бронь на выбранный автомобиль.</p>" },
    { title: "3. ЗАКЛЮЧЕНИЕ ОФИЦИАЛЬНОГО ДОГОВОРА", content: "<p><strong>Юридическая чистота:</strong> Мы подготавливаем официальный договор купли-продажи и поставки автомобиля. В нем четко прописываются: итоговая цена, техническое состояние, VIN-номер и точные сроки доставки. Цена фиксируется в договоре и не меняется в процессе.</p><p><strong>Формат подписания:</strong> Вы можете приехать к нам лично в московский офис для подписания документов и чашки кофе или оформить сделку удаленно (через электронный документооборот с отправкой оригиналов курьером).</p>" },
    { title: "4. ОПЛАТА И БЕЗОПАСНАЯ ДОСТАВКА", content: "<p><strong>Удобная оплата:</strong> Оплата производится официально по реквизитам компании через безналичный банковский перевод. Возможно разделение платежа (инвойс за авто + логистика).</p><p><strong>Контролируемая логистика:</strong> Доставка из Европы в Москву занимает от 7 до 14 дней. Автомобиль перевозится на нашем собственном автовозе с полным страхованием на рыночную стоимость.</p><p><strong>Таможня под ключ:</strong> Мы берем на себя прохождение таможни, оплату пошлин, утильсбора, а также оформление СБКТС и ЭПТС. Вы получаете машину, полностью готовую к учету.</p>" },
    { title: "5. ПРИЕМКА АВТОМОБИЛЯ И ГАРАНТИЯ", content: "<p><strong>Финальный осмотр:</strong> Вы забираете чистый автомобиль на нашей площадке в Москве или мы привозим его эвакуатором к вашему дому. Вместе с менеджером вы сверяете состояние авто с картой осмотра.</p><p><strong>Акт приема-передачи:</strong> После вашей полной удовлетворенности автомобилем подписывается двусторонний акт приема-передачи.</p><p><strong>Постановка на учет:</strong> Мы передаем вам полный пакет документов (ЭПТС, ТПО, СБКТС, договор) для моментальной регистрации в ГИБДД.</p><p><strong>Техническая поддержка:</strong> На каждый привезенный автомобиль AutoExpress EU предоставляет официальную гарантию 12 месяцев на ключевые узлы и агрегаты (двигатель и коробку передач).</p>" }
];

function renderDesignStages() {
    const container = document.getElementById('designStages');
    if (!container) return;
    container.innerHTML = '';
    designStagesData.forEach((stage, index) => {
        const stageDiv = document.createElement('div');
        stageDiv.className = 'design-stage';
        stageDiv.innerHTML = `
            <div class="stage-title"><span>${stage.title}</span><span>▼</span></div>
            <div class="stage-detail-new">${stage.content}</div>
        `;
        const titleDiv = stageDiv.querySelector('.stage-title');
        titleDiv.addEventListener('click', () => {
            stageDiv.classList.toggle('active');
            const arrow = titleDiv.querySelector('span:last-child');
            arrow.textContent = stageDiv.classList.contains('active') ? '▲' : '▼';
        });
        container.appendChild(stageDiv);
    });
}

// Данные для Авто-Заказа (бренды)
const brandKeys = ["Toyota","Range Rover","Porsche","BMW","Audi","Pagani","Lamborghini","Ferrari","McLaren"];
const brandImages = {
    "Toyota": "https://i.pinimg.com/1200x/c1/6d/0b/c16d0b022242f0254ad429d74e3f26d0.jpg",
    "Range Rover": "https://i.pinimg.com/1200x/69/1b/98/691b9880663edd88f61a0a72e986f721.jpg",
    "Porsche": "https://i.pinimg.com/1200x/54/f5/ba/54f5ba710b8576dc38ee476562f47af9.jpg",
    "BMW": "https://i.pinimg.com/1200x/07/91/97/079197f4d399b83687019efd8d3cd71a.jpg",
    "Audi": "https://i.pinimg.com/originals/40/cc/30/40cc3052a5466b4233a4696ef4a4eb8b.jpg",
    "Pagani": "https://i.pinimg.com/1200x/df/f9/84/dff984b317d82b7c4e7a373783881076.jpg",
    "Lamborghini": "https://i.pinimg.com/1200x/43/93/71/4393717fa44953dd2fc44d4439bbf7a0.jpg",
    "Ferrari": "https://i.pinimg.com/1200x/65/95/77/659577739d6626f248db34469539f8f7.jpg",
    "McLaren": "https://i.pinimg.com/1200x/1a/f6/c2/1af6c250ed02ad3d5cf1f3e394e8cd82.jpg"
};

// Данные автомобилей для каталога
const carsData = {
    "Toyota": [
        { model: "SUPRA GR", price: 56500, year: 2024, engine: "3.0L B58", img: "https://i.pinimg.com/1200x/db/37/64/db37646202fc616f005db48c26176c72.jpg" },
        { model: "Supra AE80", price: 38500, year: 2023, engine: "3.5L V6", img: "https://i.pinimg.com/1200x/10/02/e5/1002e565eb2fe667f719d8a81090f631.jpg" },
        { model: "LAND CRUISER 300", price: 89500, year: 2024, engine: "3.5L TWIN TURBO", img: "https://i.pinimg.com/1200x/3a/e3/9a/3ae39a55af1dba03bba38c6194db755d.jpg" }
    ],
    "Range Rover": [
        { model: "VELAR P400", price: 79500, year: 2024, engine: "3.0L MILD HYBRID", img: "https://i.pinimg.com/1200x/69/1b/98/691b9880663edd88f61a0a72e986f721.jpg" },
        { model: "РЕНЖ РОВЕР СПОРТ", price: 105500, year: 2024, engine: "4.4L V8", img: "https://i.pinimg.com/1200x/87/5d/d9/875dd94c01a373879403376e16923d64.jpg" }
    ],
    "Porsche": [
        { model: "911 TURBO S", price: 199500, year: 2024, engine: "3.7L H6", img: "https://i.pinimg.com/1200x/54/f5/ba/54f5ba710b8576dc38ee476562f47af9.jpg" },
        { model: "CAYENNE TURBO GT", price: 168800, year: 2024, engine: "4.0L V8", img: "https://i.pinimg.com/1200x/81/59/b5/8159b5c5d1858bbbb4eb1c2ac39df1df.jpg" }
    ],
    "BMW": [
        { model: "M4 CSL", price: 119500, year: 2024, engine: "3.0L TWINPOWER", img: "https://i.pinimg.com/1200x/07/91/97/079197f4d399b83687019efd8d3cd71a.jpg" },
        { model: "X5 M COMPETITION", price: 112500, year: 2024, engine: "4.4L V8", img: "https://i.pinimg.com/1200x/56/8f/3c/568f3c884dd787cbb6d83573c8c0c536.jpg" }
    ],
    "Audi": [
        { model: "RS7 PERFORMANCE", price: 136500, year: 2024, engine: "4.0L V8", img: "https://i.pinimg.com/originals/40/cc/30/40cc3052a5466b4233a4696ef4a4eb8b.jpg" },
        { model: "R8 V10 GT", price: 225500, year: 2023, engine: "5.2L V10", img: "https://i.pinimg.com/1200x/9c/d9/9d/9cd99df17647e07b14a810a1eae104f6.jpg" }
    ],
    "Pagani": [
        { model: "HUAYRA R", price: 3100000, year: 2023, engine: "6.0L V12", img: "https://i.pinimg.com/1200x/df/f9/84/dff984b317d82b7c4e7a373783881076.jpg" }
    ],
    "Lamborghini": [
        { model: "REVUELTO", price: 625000, year: 2024, engine: "6.5L V12 HYBRID", img: "https://i.pinimg.com/1200x/43/93/71/4393717fa44953dd2fc44d4439bbf7a0.jpg" },
        { model: "HURACÁN STERRATO", price: 285000, year: 2023, engine: "5.2L V10", img: "https://i.pinimg.com/1200x/9c/88/e6/9c88e6908a5a93a1c81287ece08082b0.jpg" }
    ],
    "Ferrari": [
        { model: "SF90 STRADALE", price: 525000, year: 2024, engine: "4.0L V8 HYBRID", img: "https://i.pinimg.com/1200x/65/95/77/659577739d6626f248db34469539f8f7.jpg" }
    ],
    "McLaren": [
        { model: "PERFATTO", price: 235000, year: 2024, engine: "3.0L V6 HYBRID", img: "https://i.pinimg.com/1200x/1a/f6/c2/1af6c250ed02ad3d5cf1f3e394e8cd82.jpg" }
    ]
};

// Функции навигации
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    document.getElementById(id + 'Page').classList.add('active-page');
    window.scrollTo(0,0);
}

function openBrandCatalog(brand) {
    let cars = carsData[brand];
    if (!cars) return;
    document.getElementById('brandTitle').innerHTML = `АВТОМОБИЛИ МАРКИ ${brand.toUpperCase()}`;
    let container = document.getElementById('carsContainer');
    container.innerHTML = '';
    cars.forEach(car => {
        let card = document.createElement('div'); card.className = 'car-card';
        card.innerHTML = `<img src="${car.img}" class="car-img-click"><h3>${car.model}</h3><div class="car-price">€${car.price.toLocaleString()}</div><div class="car-specs">ГОД: ${car.year} | ДВИГАТЕЛЬ: ${car.engine}</div><div class="card-buttons"><button class="order-btn">ЗАКАЗАТЬ</button><button class="call-btn">ЗВОНОК</button></div>`;
        card.querySelector('.order-btn').onclick = () => alert(`ЗАКАЗ ${car.model} ОФОРМЛЕН! МЕНЕДЖЕР СВЯЖЕТСЯ.`);
        card.querySelector('.call-btn').onclick = () => alert(`ЗВОНОК ПО НОМЕРУ +7 909 777-07-07`);
        card.querySelector('.car-img-click').onclick = () => openModal(car.img);
        container.appendChild(card);
    });
    showPage('catalog');
}

// Инициализация брендов
function initBrands() {
    const brandContainer = document.getElementById("brandListMain");
    if (!brandContainer) return;
    brandContainer.innerHTML = "";
    brandKeys.forEach(brand => {
        let div = document.createElement("div");
        div.className = "brand-item";
        div.innerHTML = `
            <img class="brand-img" src="${brandImages[brand]}" alt="${brand}">
            <div class="brand-info">
                <h4>${brand.toUpperCase()}</h4>
                <button class="brand-btn" data-brand="${brand}">ЗАКАЗАТЬ</button>
            </div>
        `;
        brandContainer.appendChild(div);
    });
}

// Аккордеон для стран
function initCountryAccordion() {
    const countryCards = document.querySelectorAll('.country-card');
    countryCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });
}

// Модальное окно
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'flex';
    modalImg.src = src;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Рендер категорий
    renderCategory('new');
    document.querySelectorAll('.cat-btn').forEach(btn => btn.addEventListener('click', (e) => renderCategory(e.target.getAttribute('data-cat'))));
    
    // Рендер страницы оформления
    renderDesignStages();
    
    // Инициализация брендов
    initBrands();
    
    // Навигация
    document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.page)));
    document.getElementById('logoHome').addEventListener('click', () => showPage('main'));
    document.getElementById('backToMain')?.addEventListener('click', () => showPage('main'));
    document.getElementById('backFromDesign')?.addEventListener('click', () => showPage('main'));
    
    // Обработчики для Авто-Заказа
    document.body.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('brand-btn')) {
            openBrandCatalog(e.target.dataset.brand);
        }
    });
    
    // Кнопки быстрой навигации
    document.querySelectorAll('.big-info-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let t = btn.getAttribute('data-info');
            if (t === 'requisites') showPage('requisites');
            else if (t === 'company') showPage('about');
            else if (t === 'design') showPage('design');
        });
    });
    document.getElementById('infoBtn')?.addEventListener('click', () => {
        const infoSection = document.getElementById('infoSection');
        infoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    // Аккордеон для стран
    initCountryAccordion();
    
    // Онлайн-счётчик
    let online = Math.floor(Math.random() * (2500 - 800 + 1) + 800);
    document.getElementById('onlineCounter').innerText = online;
    setInterval(() => { 
        let delta = Math.floor(Math.random() * 21) - 10; 
        let newVal = online + delta; 
        if (newVal < 400) newVal = 400; 
        if (newVal > 3500) newVal = 3500; 
        online = newVal; 
        document.getElementById('onlineCounter').innerText = online; 
    }, 15000);
    
    // Часы и дата
    function updateDateTime() { 
        let n = new Date(); 
        document.getElementById('currentDate').innerText = n.toLocaleDateString('ru-RU'); 
        document.getElementById('liveClock').innerText = n.toLocaleTimeString('ru-RU'); 
    }
    setInterval(updateDateTime, 1000); 
    updateDateTime();
    
    // Прозрачность Porsche при скролле
    let porscheImg = document.getElementById('mainPorscheImg');
    if(porscheImg) { 
        window.addEventListener('scroll', () => { 
            let opacity = 1 - Math.min(0.2, window.scrollY / 800); 
            porscheImg.style.opacity = opacity; 
        }); 
    }
    
    // Модальное окно
    let modal = document.getElementById('imageModal'); 
    let modalImg = document.getElementById('modalImg');
    document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    window.openModal = openModal;
});