const container = document.querySelector('.bg-cubes');

for (let i = 0; i < 30; i++) {
  const cube = document.createElement('div');
  cube.classList.add('cube');

  const size = 10 + Math.random() * 30;
  cube.style.setProperty('--size', `${size}px`);

  const dx = (Math.random() * 2 - 1) * 80;
  const dy = (Math.random() * 2 - 1) * 80;
  cube.style.setProperty('--dx', `${dx}px`);
  cube.style.setProperty('--dy', `${dy}px`);

  const duration = 5 + Math.random() * 10;
  cube.style.setProperty('--duration', `${duration}s`);

  cube.style.left = `${Math.random() * 100}vw`;
  cube.style.top = `${Math.random() * 100}vh`;

  container.appendChild(cube);
}
