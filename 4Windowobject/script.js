function openNewWindow(url, width, height) {
  const left = (screen.width / 2) - (width / 2);
  const top = (screen.height / 2) - (height / 2);

  window.open(url, '', `width=${width}, height=${height}, left=${left}, top=${top}`);
}

const url = "https://www.example.com";
const width = 800;
const height = 600;

openNewWindow(url, width, height);
