let size;

const container = document.querySelector('.container');
const controlPanel = document.createElement('div');
const sizeButton = document.createElement('button');
const body = document.querySelector('body');

controlPanel.className = "panel";
body.appendChild(controlPanel);
sizeButton.textContent = "How big do you want this time to be? (Number input will represent each side of the perimeter, i.e. 10 would make 100 squares)"
controlPanel.appendChild(sizeButton);

size = parseInt(prompt("How many squares?", "16"));
    if (size > 100) {
        window.alert("Whoa there, friend! You might need to slow down. Doing anything bigger than a 100 x 100 square would really take a toll on your computer.");
    }

    else {
        for (i = 0; i < size * size; i++) {
            const box = document.createElement('div');
            box.className = "box";
            container.appendChild(box);
            box.addEventListener('mouseover', function(e) {
                box.classList.add('hover');
                box.classList.remove('leave');
            });
            box.addEventListener('mouseleave', function(e) {
                box.classList.add('leave');
                box.classList.remove('hover');
            })
            box.addEventListener('click', function(e) {
                box.classList.remove('leave');
                box.classList.remove('hover');
                box.classList.add('dark');
            }, {once: true});
            box.style.height = `${800/size}px`;
            box.style.width = `${800/size}px`;
            }
        }

sizeButton.addEventListener('click', function() {
    location.reload();
});