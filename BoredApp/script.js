
function activityStart(){

    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            document.getElementById('feed-act').textContent = data.activity
        })
}

document.getElementById('btn').addEventListener('click', activityStart)