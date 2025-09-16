export const renderTopbar = (container) => {
    const topbar = document.createElement('div');
    topbar.className = 'topbar';

    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger-btn';
    hamburgerBtn.innerHTML = '<span></span><span></span><span></span>';

    const title = document.createElement('p');
    title.className = 'topbar-title';
    title.textContent = 'Dashboard';

    topbar.append(hamburgerBtn, title);
    container.append(topbar);
}