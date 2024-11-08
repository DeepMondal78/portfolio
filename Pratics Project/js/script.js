//----------------navigationber animetion-------------------

var menuBtn = document.querySelector("#menu-btn")
var closeBtn = document.querySelector("#close-btn")
var resNav = document.querySelector(".mob-nav")

menuBtn.addEventListener('click',()=>{
    resNav.style.top = '0px'; 
    menuBtn.style.display = 'none'
})
closeBtn.addEventListener('click',()=>{
    menuBtn.style.display = 'block'
    resNav.style.top = '-70vh'; 
})

// ----------------active send call buttons------------------

const tel = document.querySelector(`#btn-1`);

tel.addEventListener('click', ()  => {
  console.log(`calling ...`);
  window.open('btn-1:7872460675');
});

// ----------------switch between about buttons ----------------

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// ------------------------use Tecnologis section animetion----------------------

const animatedEls = document.querySelectorAll("[data-animation]");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const animation = entry.target.getAttribute("data-animation");

		if (entry.isIntersecting) {
			entry.target.classList.add("animated", `${animation}`);
		} else {
			entry.target.classList.remove("animated", `${animation}`);
		}
	});
});
animatedEls.forEach((el) => observer.observe(el));


// ------------------------Massege input section---------------------

// document.classList('btn').addEventListener('click',function() {
//   var message = document.classList('input-box').value;
//   if (message) {
//     document.classList('btn').innerText = + message;
//     document.getElementById('input-box').value = '';
//   }else {
//     alert('Please feel this input fild')
//   }
// })

/* ==================== Contact section css code & Skills section css code ============================ */

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");
window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})
function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}
function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}
let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}
