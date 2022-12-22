let ufo = document.querySelector('body');
ufo.addEventListener('mousemove', (m) => {
  const eyes = document.querySelector('.f-eye');
  const rect = eyes.getBoundingClientRect();
  const eyeX = (rect.left + rect.right) / 2;
  const eyeY = (rect.top + rect.bottom) / 2;
    
  let radianDegrees = - Math.atan2(eyeX - m.pageX, eyeY - m.pageY);
  eyes.style.transform = `rotate(${radianDegrees}rad)`;
});

ufo.addEventListener('mousemove', (m) => {
  const eyes = document.querySelector('.s-eye');
  const rect = eyes.getBoundingClientRect();
  const eyeX = (rect.left + rect.right) / 2;
  const eyeY = (rect.top + rect.bottom) / 2;
    
  let radianDegrees = - Math.atan2(eyeX - m.pageX, eyeY - m.pageY);
  eyes.style.transform = `rotate(${radianDegrees}rad)`;
});

ufo.addEventListener('mousemove', (m) => {
  const eyes = document.querySelector('.a-eye');
  const rect = eyes.getBoundingClientRect();
  const eyeX = (rect.left + rect.right) / 2;
  const eyeY = (rect.top + rect.bottom) / 2;
    
  let radianDegrees = - Math.atan2(eyeX - m.pageX, eyeY - m.pageY);
  eyes.style.transform = `rotate(${radianDegrees}rad)`;
});

ufo.addEventListener('mousemove', (m) => {
  const eyes = document.querySelector('.r-eye');
  const rect = eyes.getBoundingClientRect();
  const eyeX = (rect.left + rect.right) / 2;
  const eyeY = (rect.top + rect.bottom) / 2;
    
  let radianDegrees = - Math.atan2(eyeX - m.pageX, eyeY - m.pageY);
  eyes.style.transform = `rotate(${radianDegrees}rad)`;
});

ufo.addEventListener('mousemove', (m) => {
  const eyes = document.querySelector('.u-eye');
  const rect = eyes.getBoundingClientRect();
  const eyeX = (rect.left + rect.right) / 2;
  const eyeY = (rect.top + rect.bottom) / 2;
    
  let radianDegrees = - Math.atan2(eyeX - m.pageX, eyeY - m.pageY);
  eyes.style.transform = `rotate(${radianDegrees}rad)`;
});

ufo.addEventListener('mousemove', (m) => {
  const eyes = document.querySelector('.p-eye');
  const rect = eyes.getBoundingClientRect();
  const eyeX = (rect.left + rect.right) / 2;
  const eyeY = (rect.top + rect.bottom) / 2;
    
  let radianDegrees = - Math.atan2(eyeX - m.pageX, eyeY - m.pageY);
  eyes.style.transform = `rotate(${radianDegrees}rad)`;
});