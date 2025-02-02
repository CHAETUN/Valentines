const wrapper=document.querySelector(".wrapper");
const question=document.querySelector(".question");
const yesBtn=document.querySelector(".yes-btn");
const noBtn=document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()=>{
		question.innerHTML="YES I LOVE YOU";
});

noBtn.addEventListener("mouseover",()=>{
		const noBtnRect=noBtn.getBoundingClientRect();
		const maxX=window.innerWidth-noBtnRect.wdith;
		const maxY=window.innerHeight-noBtnRect.height;
		
		const randomX=Math.floor(Math.random()*maxX);
		const randomY=Math.floor(Math.random()*maxY);
		
		noBtn.style.left=randomX+"px";
		noBtn.style.top=randomY+"px";
});
