// Sidebar
let sideBarItem = document.querySelectorAll('.sidebar__item')
const notifiItem = document.getElementById('notifications')
const messageItem = document.getElementById('message-item')
// Search bar
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const searchMessageBar = document.getElementById('search-bar');
// Theme
const cusTomTheme = document.querySelector('.custom-theme')
const themeItem = document.getElementById('theme-item')
const listFontSize = document.querySelectorAll('.choose-size span')
const listColor = document.querySelectorAll('.choose-color span')
const root = document.querySelector(':root');
const chooseBg = document.querySelectorAll('.choose-background div');
console.log(chooseBg)
// Remove active class from sidebar item
const changeActiveItem = () => {
    sideBarItem.forEach((item) => {
        item.classList.remove('active');
    })
}

sideBarItem.forEach((item) => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup')
            .style.display = 'none';
        } else {
            document.querySelector('.notifications-popup')
            .style.display = 'block';
            document.querySelector('.notifi-num')
            .style.display = 'none';
        }
    })
})

messageItem.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageItem.querySelector('.message-num').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})
// Search message

const searchMessage = () =>{
    const value = searchMessageBar.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('.message-name').textContent.toLowerCase();
        console.log(name);
        console.log(name.indexOf(value))
       if(name.indexOf(value) != -1) {
        chat.style.display = 'flex';
       } else {
        chat.style.display = 'none';
       }
    })
}
searchMessageBar.addEventListener('keyup', searchMessage);

// Open and close Theme

function openTheme() {
    cusTomTheme.style.display = 'grid';
}
themeItem.addEventListener('click', openTheme);

function closeTheme(e) {
    if(e.target.classList.contains('custom-theme')) {
        cusTomTheme.style.display = 'none';
        changeActiveItem();
    }
}
cusTomTheme.addEventListener('click', closeTheme)

const changeActiveFontSize = () => {
    listFontSize.forEach((font) => {
        font.classList.remove('active');
    })
}
listFontSize.forEach((item) => {
    item.addEventListener('click', () => {
        let fonSize;
        changeActiveFontSize();
        item.classList.add('active');
        if(item.classList.contains('font-size1')) {
            fonSize = '8px';
            root.style.setProperty('--sticky-top-left', '10rem');
            root.style.setProperty('--sticky-top-right', '10rem');
        } else if(item.classList.contains('font-size2')) {
            fonSize = '11px';
            root.style.setProperty('--sticky-top-left', '10rem');
            root.style.setProperty('--sticky-top-right', '10rem');
        }
        else if(item.classList.contains('font-size3')) {
            fonSize = '14px';
            root.style.setProperty('--sticky-top-left', '10rem');
            root.style.setProperty('--sticky-top-right', '10rem');
        }   
        // Change font the root element
        document.querySelector('html').style.fontSize = fonSize;
    })
})

// Remove active class from color
const changeActiveColor = () => {
    listColor.forEach((color) => {
        color.classList.remove('active');
    })
}

// Change color Theme
listColor.forEach((item) => {
    item.addEventListener('click', () => {
        let primaryHue;
        console.log(item);
        changeActiveColor();
        item.classList.add('active');
        if(item.classList.contains('color-1')) {
            primaryHue = 12;
        } else if(item.classList.contains('color-2')) {
            primaryHue = 252;
        } else if(item.classList.contains('color-3')) {
            primaryHue = 120;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// Change Background theme
const changeActiveBg = () => {
    chooseBg.forEach((item) => {
        item.classList.remove('active');
    })
}

chooseBg.forEach(bg  => {
    bg.addEventListener('click', () => {
        changeActiveBg();
        bg.classList.add('active');
        if(bg.classList.contains('bg-2')) {
            document.body.classList.add('color')
        } else {
            document.body.classList.remove('color')
        }
    })
})

