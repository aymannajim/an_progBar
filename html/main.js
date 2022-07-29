let alreadyProgressing = false
let currID = 0
let activeBars = []

$(document).ready(function(){
	window.addEventListener('message', function(event) {
		let data = event.data
		if (data.action == 'run') {
            data.id = currID
			progress(data)
		} else if (data.action == 'stop') {
            stopProgress()
        }
	});
});

function stopProgress(id) {
    // if (alreadyProgressing) {
        if (id == undefined ) {
            // console.log("^1force stopping current progress bar")
            $('#progress').addClass('hidden');
            alreadyProgressing = false;
            $('#progress-value').css("animation",'');
            $('#progress').css("animation",'');
            var index = activeBars.indexOf(currID);
            if (index !== -1) {
                activeBars.splice(index, 1);
            }
            currID = currID + 1
        } else {
            // console.log("trynna stop " + id)
            if (activeBars.includes(id)) {
                // console.log("stopping " + id)
                var index = activeBars.indexOf(id);
                if (index !== -1) {
                    activeBars.splice(index, 1);
                }
                $('#progress').addClass('hidden');
                alreadyProgressing = false;
                $('#progress-value').css("animation",'');
                $('#progress').css("animation",'');
                currID = currID + 1
            }
        }
    // }
}

function progress(data) {
    if (!alreadyProgressing) {
//         console.log(data.id)
        activeBars.push(data.id);
        alreadyProgressing = true;
        $('#progress').removeClass('hidden');
        $('#progress-text').text(data.text);
        setTimeout(function() {
            stopProgress(data.id);
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
        $.post(`https://${GetParentResourceName()}/notif`, JSON.stringify({ text: "Already doing an action." }))
        return
    }
}
