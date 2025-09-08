import sidebarLogoImg from './media/images/sidebarLogo.png';
const container = document.getElementById('app');

export function renderUI() {
    
}

const renderSidebar = () => {
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');
    
    sidebar.append(
    renderSidebarLogo(),
    renderSideBarMenu(),
    renderSideBarAccount()
    );

    container.appendChild(sidebar);
}

const renderSidebarLogo = (container) => {
    const sidebarLogoContainer = document.createElement('div');
    sidebarLogoContainer.classList.add('sidebar-logo-container');

    const sidebarLogo = new Image();
    sidebarLogo.classList.add('sidebar-logo');
    sidebarLogo.src = sidebarLogoImg;

    sidebarLogoContainer.append(sidebarLogo);

    return sidebarLogoContainer;
}

const renderSideBarMenu = (container) => {
    const sidebarMenuContainer = document.createElement('div');
    sidebarMenuContainer.classList.add('sidebar-menu-container');

    return sidebarMenuContainer;
}

const renderSideBarAccount = (container) => {
    const sidebarAccountContainer = document.createElement('div');
    sidebarAccountContainer.classList.add('sidebar-account-container');

    return sidebarAccountContainer;
}