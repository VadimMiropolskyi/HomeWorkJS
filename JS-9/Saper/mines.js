window.onload = () => {
    
    startGame(8, 8, 10);
    //функция запуска игры
    function startGame(width, height, bombs_count) {
        //создаем поле
        const field = document.querySelector('.field');
        const cellsCount = width * height;
        field.innerHTML = '<button></button>'.repeat(cellsCount);
        const cells = [...field.children];
        let closedCount = cellsCount;
        //счетчик флагов
        let fc = 0;
        //создаем бомбы и рандом
        const bombs = [...Array(cellsCount).keys()]
            .sort(() => Math.random() - 0.5)
            .slice(0, bombs_count);
        //при клике левой кнопкой мыши
        field.addEventListener('click', (event) => {
            //если не кнопка, не реагируем
            if (event.target.tagName !== 'BUTTON') {
                return;
            }
            //функция новая игра
            newGame();
            //вычисляем выбранную кнопку
            const index = cells.indexOf(event.target);
            const column = index % width;
            const row = Math.floor(index / width);
            open(row, column);
        });
        //создаем флаги по клику правой кнопки мышки
        field.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            const el = e.target;
            let ind = cells.indexOf(el);
            //функция новая игра
            newGame();
            // если не кнопка, не реагируем
            if (e.target.tagName !== 'BUTTON') {
                return;
            }
            //если уже нажимали, не реагируем
            if (el.disabled === true) { return; };
            //если был флаг, убираем флаг
            if (el.classList.contains("flag")) {
                el.classList.remove("flag"); 
                fc--;
            } 
            // в других случаях, ставим флаг
            else { 
                el.classList.add("flag");
                fc++;
            }
            // создаем счетчик флагов и мин          
            const schet = document.querySelector(".flag_count");
            schet.innerHTML = `Флаги: ${fc} / Бомбы: ${bombs_count}`;
            e.stopPropagation();
        });
        //проверяем достоверность
        function isValid(row, column) {
            return row >= 0
                && row < height
                && column >= 0
                && column < width;
        }
        //функция захвата рядом кнопок
        function getCount(row, column) {
            let count = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (isBomb(row + y, column + x)) {
                        count++;
                    }
                }
            }
            return count;
        }
        //функция реакции на клик левой мышки
        function open(row, column) {
    
            if (!isValid(row, column)) return;
            //вычисляем индекс
            const index = row * width + column;
            const cell = cells[index];
            //если нажимали или на кнопке флаг, не реагируем
            if (cell.disabled === true) return;
            if (cell.classList.contains("flag") === true) return;
            //кнопка нажата и уже не реагирует на клики
            cell.disabled = true;
            //если бомба
            if (isBomb(row, column)) {
                cell.classList.add("bomb");
                cells.forEach(e => {
                    //ищем все бомбы и показываем, так же деактивируем все кнопки
                    let ind = cells.indexOf(e);
                    cells[ind].disabled = true;
                    if (bombs.includes(ind)) {
                        cells[ind].classList.add("bomb");
                    }
                })
                alert('К сожалению, вы проиграли!');
                return;
            };
            //уменьшает количество ненажатых кнопок
            closedCount--;
            //если кол-во открытых ячеек меньше или равно кол-ву бомб, вы победили
            if (closedCount <= bombs_count) {
                alert('Отлично, вы победили!');
            }
            //открываем рядом кнопки если кнопка = 0
            const count = getCount(row, column);
            if (count !== 0) {
                cell.innerHTML = count;
                return;
            }
            //открываем рядом кнопки
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    open(row + y, column + x);
                }
            }
        };
        //функция индекса бомб
        function isBomb(row, column) {
            if (!isValid(row, column)) return false;
            const index = row * width + column;
    
            return bombs.includes(index);
        };
    };
    //функция новая игра
    function newGame() {
        const newG = document.querySelector(".newGame");;
        newG.innerHTML = `Новая Игра`;
        newG.addEventListener('click', (event) => {
            location.reload();
        });
    }
    }
    