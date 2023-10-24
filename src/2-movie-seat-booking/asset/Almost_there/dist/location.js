// console.log(location.href);
// localStorage.setItem("location", location.href);

const image = document.querySelector("img"),
    api = `https://api.qrserver.com/v1/`,
    api2 = `create-qr-code/?size=150x150&data=`,
    input = [
        ["https://youtu.be/COv52Qyctws?si=0XlKEC8GdDuhSNRC"], //Jawan Trailer
        ["https://youtu.be/t3PzUo4P21c?si=mIh-8SvPzP8U1pJ7?t=0m02s"], //Saw X
        ["https://youtu.be/HeDdkMIyhoQ?si=cY9-IKOqdi_H1Xzp"], //Fukrey 3
        ["https://youtu.be/QF-oyCwaArU?si=2cA3jsNJNs3-hBZd?t=0m13s"], //Nun II
        ["https://youtu.be/Y-ULaz6I9oY?si=wIZxMYW-CtSHQXfM"] //The Vaccine - War
    ];

if (localStorage.getItem("text").includes('Jawan')) {
    image.src = `${api}${api2}${input[0]}`;
}

else if (localStorage.getItem("text").includes('Saw X')) {
    image.src = `${api}${api2}${input[1]}`;
}

else if (localStorage.getItem("text").includes('Fukrey 3')) {
    image.src = `${api}${api2}${input[2]}`;
}

else if (localStorage.getItem("text").includes('Nun II')) {
    image.src = `${api}${api2}${input[3]}`;
}

else if (localStorage.getItem("text").includes('Vacine - War')) {
    image.src = `${api}${api2}${input[4]}`;
}
