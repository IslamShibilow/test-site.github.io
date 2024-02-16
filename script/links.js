let link_1 = document.querySelector('#submit_5'),
    link_2 = document.querySelector('#submit_6'),
    link_3 = document.querySelector('#submit_7'),
    link_4 = document.querySelector('#submit_8'),
    link_5 = document.querySelector('#submit_9'),
    link_6 = document.querySelector('#submit_10'),
    link_7 = document.querySelector('#submit_11'),
    link_8 = document.querySelector('#submit_12');

let button = document.querySelector('.show_more')

document.querySelector('.show_more').onclick = function(){
	link_submit_5.classList.remove('d-none')
	link_submit_6.classList.remove('d-none')
	link_submit_7.classList.remove('d-none')
	link_submit_8.classList.remove('d-none')
	link_submit_9.classList.remove('d-none')
	link_submit_10.classList.remove('d-none')
	link_submit_11.classList.remove('d-none')
	link_submit_12.classList.remove('d-none')
	button.classList.add('d-none')
}