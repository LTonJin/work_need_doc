const container = document.createElement('div');
container.classList.add('container');

const frament = document.createDocumentFragment();
for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    const inner = document.createElement('div');
    div.classList.add('box');
    inner.classList.add("inner");
    div.appendChild(inner);
    frament.appendChild(div);
}

container.appendChild(frament);
container.addEventListener('mousemove', function (e) {
    container.childNodes.forEach(node => {
        const rect = node.getBoundingClientRect();
        const x = e.clientX - rect.right + rect.width / 2;
        const y = e.clientY - rect.bottom + rect.height / 2;
        node.style.setProperty('--x', `${x}px`);
        node.style.setProperty('--y', `${y}px`);
    })
})

const style = document.createElement('style');
style.innerHTML = `
    body {
        background: #5e5e5e;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        width: 930px;
    }
    .box {
        height: 300px;
        width: 300px;
        background: #727272;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        margin: 5px;
    }
    .box::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        inset: 5px;
        z-index:2;
        background: radial-gradient(closest-side circle, rgba(255,255,255, .6) 0%, transparent);
        transform: translate(var(--x, 1000px), var(--y, 1000px));
        border-radius: inherit;
    }
    .inner {
        position: absolute;
        inset: 2px;
        z-index:3;
        background: #222;
        border-radius: inherit;
    }
`;

document.head.appendChild(style);
document.body.appendChild(container);