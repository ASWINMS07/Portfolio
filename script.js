// Matrix Rain
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px VT323';
    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 33);

// Draggable Window
let dragOffset = { x: 0, y: 0 };
function dragStart(e) {
    const win = document.getElementById('window');
    dragOffset.x = e.clientX - win.offsetLeft;
    dragOffset.y = e.clientY - win.offsetTop;
    document.onmousemove = (e) => {
        win.style.left = (e.clientX - dragOffset.x) + 'px';
        win.style.top = (e.clientY - dragOffset.y) + 'px';
    };
    document.onmouseup = () => { document.onmousemove = null; };
}

// Open Windows
function openWindow(type) {
    const win = document.getElementById('window');
    const title = document.getElementById('window-title');
    const content = document.getElementById('window-content');
    win.classList.remove('hidden');

    if (type === 'bio') {
        title.textContent = 'About - Aswin M S';
        content.innerHTML = `
            <h2 style="margin-bottom:15px;">Aswin M S</h2>
            <p><strong>2nd Year BE CSE (Cybersecurity)</strong><br>Sri Eshwar College of Engineering, Coimbatore</p>
            <p style="margin:15px 0;">Top 5% in TryHackMe • CTF Player • Red Team Enthusiast</p>
            <hr>
            <p>Cybersecurity Enthusiast exploring offensive & defensive security.</p>
            <p>Hands-on with Kali Linux, penetration testing, vulnerability assessment, and security automation.</p>
            <p>Organized cyber awareness program at Vel International School.</p>
            <p>Currently learning: Penetration Testing • Red Teaming</p>
            <p style="margin-top:20px;font-weight:bold;">Always open to connect & collaborate!</p>
        `;
    } 
    else if (type === 'resume') {
        title.textContent = 'Resume - Aswin M S';
        content.innerHTML = `
            <iframe src="Aswin-Resume.pdf" 
                    width="100%" 
                    height="100%" 
                    style="border:none;"
                    title="Aswin M S Resume">
            </iframe>
        `;
    }
}

function closeWindow() {
    document.getElementById('window').classList.add('hidden');
}

function openLink(url) {
    window.open(url, '_blank');
}

function toggleStartMenu() {
    document.getElementById('start-menu').classList.toggle('hidden');
}