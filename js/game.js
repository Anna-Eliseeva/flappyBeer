/*Обращаемся к canvas*/
let cvs = document.getElementById('canvas');

/*Указываем что работаем в формате 2D*/
let ctx = cvs.getContext('2d');

/*Обьекты для каждого изображения*/
let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

/*Загрузка изображений*/
bird.src = "img/flappy_bird_bird.png";
bg.src = "img/flappy_bird_bg.png";
fg.src = "img/flappy_bird_fg.png";
pipeUp.src = "img/flappy_bird_pipeUp.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";

/*Создадим переменную в которой будет значение отступа для рисунка*/
let gap = 90;

/*При нажатии на какую-либо кнопку птичка взлетает*/
document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= 20;
}

/*Создание блоков*/
let pipe = [];

pipe[0] = {
  x: cvs.width,
  y:0
};

/*Позиция птички*/
let xPos = 10;
let yPos = 150;
let drav = 1;

/*Нарисуем все обьекты в canvas*/
function draw(){
    ctx.drawImage(bg, 0,0);

    /*Создаем цикл в котором отрисуются все блоки*/
    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        /*Создаем передвижение блоков*/
        pipe[i].x--;

        if(pipe[i].x === 125){
            pipe.push({
                x: 
            })
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird,  xPos, yPos);

    yPos += drav;

    /*Делаем анимацию*/
    requestAnimationFrame(draw);
}

/*Вызываем функцию чтоб все отрисовалось*/
pipeBottom.onload = draw;
