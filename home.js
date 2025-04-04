let slideIndex = 0;
const slides = document.getElementsByClassName("wgSlides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length - 1) { slideIndex = 0; }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 7000);
}

showSlides();

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');


let data = [
    {
        'id': 'a1',
        'title': "DW's Wacky Gauntlet",
        'name': 'dw-wg.mp4',
        'duration': '00:52',
    },
    {
        'id': 'a2',
        'title': 'Capo Rocks',
        'name': 'capo.mp4',
        'duration': '5:07',
    },
];

data.forEach((video, i) => {
    let video_element = `
       <div class="video" data-id="${video.id}">
            <img src="buttons/play_button.jpg" alt="">
            <p>${i + 1 > 9 ? i + 1 : '0' + (i +1)}. </p>
            <h3 class="title">${video.title}</h3>
            <p class="time">${video.duration}</p>
        </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'buttons/pause.jpg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'buttons/play_button.jpg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'buttons/pause.jpg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
