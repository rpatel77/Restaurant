export function createHome() {
    const div = document.createElement('div');
    div.textContent = "HOME PAGE!";
    div.style.backgroundColor = "green";
    div.style.padding = '20px';
    div.style.borderRadius = '5px';
    return div;
}