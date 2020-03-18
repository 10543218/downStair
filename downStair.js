let nowPositionX = 144;
let isInScreenLeft = false;
let isInScreenRight = false;

const moveDistance = 16;


// �ʴ��ϥΪ̫��U37�άO39�A�åB�M�wx����m
document.onkeydown = () => {
	let keycode = event.which || event.keyCode;
	
	const player = document.getElementById("player");
	
	checkInScreen();
		if(keycode == 37 && !isInScreenLeft){
			nowPositionX -= moveDistance;
			isInScreenRight = false;
		}
		if(keycode == 39 && !isInScreenRight){
			nowPositionX += moveDistance;
			isInScreenLeft = false;
		}
	player.style.left = ` ${nowPositionX}px `;
}

// �ʴ��O�_���W�X�e��
let checkInScreen = () => {
	// console.log(nowPositionX);
	
	if(nowPositionX <= 0){
		isInScreenLeft = true;
	}
	if(nowPositionX >= 265){
		isInScreenRight = true;
	}
} 







// $(document).ready(function(){
	// setStairPositionY();
// })

// �}�l��@�ӱ�
let stairPositionY = [];
let stairPositionX = [];
const st1 = document.getElementById("st1");
const st2 = document.getElementById("st2");
const st3 = document.getElementById("st3");
const st4 = document.getElementById("st4");
const st5 = document.getElementById("st5");

const setStairPositionY = () => {
	for(let i=0; i<5; i++){
		stairPositionX[i] = Math.ceil(Math.random() * 150) + 20;
		stairPositionY[i] = Math.ceil(Math.random() * (15*(i+1)))  + 60*(i+1);
		console.log(`${stairPositionY[i]}`)
	}
	
	
	// ���׬O500   ���Z   �_�l��

	
	
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
