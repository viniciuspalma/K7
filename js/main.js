(function(){
	var btnPlay = document.querySelector('.button.play'),
		btnPause = document.querySelector('.button.pause'),
		btnStop = document.querySelector('.button.stop'),
		btnPrev = document.querySelector('.button.prev'),
		btnNext = document.querySelector('.button.next'),
		roda1 = document.querySelector('#roda1'),
		roda2 = document.querySelector('#roda2'),
		audio = document.querySelector('#audio'),
		title = document.querySelector('.up-title h5'),
		src = document.querySelector('#audio1'),
		imgFundo = document.querySelector('.imgFundo'),
		imgSrc = document.querySelector('#first-img');
		volMore = document.querySelector('.button.more'),
		volLess = document.querySelector('.button.less'),
		indexMusic = 0,
		musics = [],
		nomes = [],
		url = window.location,
		musicas = '{"musicas":[' +
				  '{"file":"elpaso.mp3","nome":"El Paso - Felina" },' +
				  '{"file":"wake.mp3","nome":"Wake me up - avicci" },' +
			      '{"file":"rapgod.mp3","nome":"Eminem - Rap God (Explicit)" }]}',
			      
		objMusic = eval("(" + musicas + ")");

		console.log(objMusic.musicas.length);

	function playMusic(music){
		music.play();
		roda1.classList.add('def-rod-anima');
		roda2.classList.add('def-rod-anima');
		imgFundo.classList.add('imgAni');
		title.innerHTML = src.getAttribute('alt');
	}
	function pauseMusic(music){
		roda1.classList.remove('def-rod-anima');
 		roda2.classList.remove('def-rod-anima');
 		imgFundo.classList.remove('imgAni');
 		music.pause();
 		title.innerHTML += " Pause"
	}
	function stopMusic(music){
		roda1.classList.remove('def-rod-anima');
 		roda2.classList.remove('def-rod-anima');
 		imgFundo.classList.remove('imgAni');
 		music.load();
 		title.innerHTML = "Click em Play para retomar";
	}
	function nextMusic(music){
		if (indexMusic + 1 < objMusic.musicas.length) {indexMusic++;}
 		else{indexMusic = 0};

 		src.setAttribute('src', url + "/musicas/" + objMusic.musicas[indexMusic].file);
 		src.setAttribute('alt', objMusic.musicas[indexMusic].nome)
 		music.load();
 		playMusic(music);
	}
	function prevMusic(music){
		if (indexMusic > 0) {indexMusic--;}
 		else{indexMusic = objMusic.musicas.length - 1};

 		src.setAttribute('src', url + "/musicas/" + objMusic.musicas[indexMusic].file);
 		src.setAttribute('alt', objMusic.musicas[indexMusic].nome)
 		audio.load();
 		playMusic(music);
	}
	btnPlay.addEventListener('click', function(e) {
		playMusic(audio);	
 	});

 	btnPause.addEventListener('click', function(e) { 		
 		pauseMusic(audio);
 	});

 	btnStop.addEventListener('click', function(e) {
 		stopMusic(audio);
 	});

 	btnNext.addEventListener('click', function(e) {
 		nextMusic(audio);
 	});

 	btnPrev.addEventListener('click', function(e) {
 		prevMusic(audio);
 	});

 	volLess.addEventListener('click', function(e) {
 		if(audio.volume >= 0.1){audio.volume -= 0.1;};
 	});

 	volMore.addEventListener('click', function(e) {
 		if(audio.volume <= 0.9){audio.volume += 0.1;};
 	});
})();