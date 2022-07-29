let alreadyProgressing = false

$(document).ready(function(){
	window.addEventListener('message', function(event) {
		let data = event.data
		if (data.action == 'run') {
			progress(data)
		} else if (data.action == 'stop') {
            		stopProgress()
        	}
	});
});

function stopProgress() {
    if (alreadyProgressing) {
        $('#progress').addClass('hidden');
        alreadyProgressing = false;
        $('#progress-value').css("animation",'');
        $('#progress').css("animation",'');
    }
}

function progress(data) {
    if (!alreadyProgressing) {
        alreadyProgressing = true;
        $('#progress').removeClass('hidden');
        $('#progress-text').text(data.text);
        setTimeout(() => {
            $('#progress').addClass('hidden');
            alreadyProgressing = false;
            $('#progress-value').css("animation",'');
            $('#progress').css("animation",'');
        }, data.time * 1000);
        $('#progress-value').css("animation",`load ${data.time}s normal forwards`);
        $('#progress').css("animation",`glow ${data.time}s normal forwards`);
        let bodyStyles = window.getComputedStyle(document.body);
        let mainColor = bodyStyles.getPropertyValue('--mainColor');
        // console.log(mainColor)
        document.body.style.setProperty('--mainColor', data.color);
        mainColor = bodyStyles.getPropertyValue('--mainColor');
        // console.log(mainColor)
    } else {
        $.post('https://an_progBar/notif', JSON.stringify({ text: "Already doing an action." }))
        return
    }
}
