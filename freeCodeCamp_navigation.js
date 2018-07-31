// ==UserScript==
// @name         user_navigation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  User navigation block on freeCodeCamp.org
// @author       Yeugen
// @match        https://learn.freecodecamp.org/
// @grant        none
// ==/UserScript==

(function(){
	// add html div#user_nav where on click element we move to a corresponded topic
	document.body.insertAdjacentHTML('beforeend', '<div id="user_nav"></div>');
	// add css div#user_nav
	document.head.insertAdjacentHTML('beforeend', '<style>#user_nav{top: 38px; width: 300px; max-height: 400px; position: fixed; right: 0px; overflow: auto;}#user_nav a{color: #006400; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; } #user_nav a:hover{text-decoration: none; background-color: #80b280; color: #fff;}</style>');
	// assign let to div#user_nav
	let user_nav = document.getElementById('user_nav');

	// main vars
	let block_open = document.getElementsByClassName('block open'),
		super_block_open = document.getElementsByClassName('superblock open'),
		map_title = document.getElementsByClassName('map-title');

	// close all opened blocks
	function block_close(){

		block_open = document.getElementsByClassName('block open');
		super_block_open = document.getElementsByClassName('superblock open');

		for(let i = block_open.length - 1; i >= 0; i--){
			block_open[i].children[0].click();
		}

		for(let i = super_block_open.length - 1; i >= 0; i--){
			super_block_open[i].children[0].click();
		}

	}

	// open all blocks (.map-title)
	function openList(){

		map_title = document.getElementsByClassName('map-title');

		for(let i = 0; i < map_title.length; i++){
			map_title[i].click();
		}

	}

	// gather data from opened block, add to created div#user_nav as <a href="#user_nav_*">
	function getCompletedLi(){

		block_open = document.getElementsByClassName('block open');

		for(let i = 0, counter = 0; i < block_open.length; i++){

			for(let j = 0; j < block_open[i].children[1].children.length; j++){

				if(block_open[i].children[1].children[j].classList.length > 1){
					counter++;
				}

			}

			// assign #user_nav_* to each title (f.e."Introduction to Basic HTML and HTML5")
			block_open[i].children[0].children[1].id = 'user_nav_' + i;

			// output => <a href="#user_nav_12">[ 0/20 ] - Basic Data Structures</a>
			user_nav.insertAdjacentHTML('beforeend', '<a href="#user_nav_' + i + '">[ ' + counter + '/' + (block_open[i].children[1].children.length - 1) + ' ] - ' + block_open[i].children[0].children[1].innerText + '</a><br />')

			counter = 0;

		}

	}

	// call functions
	setTimeout( () => {
		block_close();
		openList();
		getCompletedLi();
	}, 1e3);

})();