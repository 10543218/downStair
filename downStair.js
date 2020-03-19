let nowPositionX = 144;
let isInScreenLeft = false;
let isInScreenRight = false;


const moveDistance = 16;


// 監測使用者按下37或是39，並且決定x的位置
document.onkeydown = () => {
	let keycode = event.which || event.keyCode;
	
	const player = document.getElementById("player");
	
	checkInScreen();
		if(keycode == 37 && !isInScreenLeft){
			player.innerHTML = "←";
			nowPositionX -= moveDistance;
			isInScreenRight = false;
		}
		if(keycode == 39 && !isInScreenRight){
			player.innerHTML = "→";
			nowPositionX += moveDistance;
			isInScreenLeft = false;
		}
	player.style.left = ` ${nowPositionX}px `;
}

// 監測是否有超出畫面
let checkInScreen = () => {
	// console.log(nowPositionX);
	
	if(nowPositionX <= 0){
		isInScreenLeft = true;
	}
	if(nowPositionX >= 265){
		isInScreenRight = true;
	}
}


// 開始實作樓梯
let stairPositionY = [];
let stairPositionX = [];
const st1 = document.getElementById("st1");
const st2 = document.getElementById("st2");
const st3 = document.getElementById("st3");
const st4 = document.getElementById("st4");
const st5 = document.getElementById("st5");

let setStairPositionY = () => {
	for(let i=0; i<5; i++){
		stairPositionX[i] = Math.ceil(Math.random() * 150) + 20;
		stairPositionY[i] = Math.ceil(84*(i+1));
		console.log(`${stairPositionY[i]}`)
	}
	
	st1.style.top = `${stairPositionY[0]}px`;
	st2.style.top = `${stairPositionY[1]}px`;
	st3.style.top = `${stairPositionY[2]}px`;
	st4.style.top = `${stairPositionY[3]}px`;
	st5.style.top = `${stairPositionY[4]}px`;
	st1.style.left = `${stairPositionX[0]}px`;
	st2.style.left = `${stairPositionX[1]}px`;
	st3.style.left = `${stairPositionX[2]}px`;
	st4.style.left = `${stairPositionX[3]}px`;
	st5.style.left = `${stairPositionX[4]}px`;
}
setStairPositionY();
setStairPositionY = null;


const stairUp = () => {
	setInterval( () => {
		for(let i = 0; i<5; i++){
			stairPositionY[i] -= 12;
			
			let playerPositionY = player.offsetTop;
			let playerPositionX = player.offsetLeft;
			
			if(stairPositionY[i] === player.offsetTop){
				const player = document.getElementById("player");
				playerPositionY -= 12;
				player.style.top = `${playerPositionY}px`;
				
			}
			
			if(stairPositionY[i] < 0){
				stairPositionY[i] = 540;
				stairPositionX[i] = Math.ceil(Math.random() * 150) + 20;
			}
			
		}
		
		st1.style.top = `${stairPositionY[0]}px`;
		st2.style.top = `${stairPositionY[1]}px`;
		st3.style.top = `${stairPositionY[2]}px`;
		st4.style.top = `${stairPositionY[3]}px`;
		st5.style.top = `${stairPositionY[4]}px`;
		st1.style.left = `${stairPositionX[0]}px`;
		st2.style.left = `${stairPositionX[1]}px`;
		st3.style.left = `${stairPositionX[2]}px`;
		st4.style.left = `${stairPositionX[3]}px`;
		st5.style.left = `${stairPositionX[4]}px`; 
	}, 200)
}

stairUp();
