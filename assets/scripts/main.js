// Calculate and display my age
document.addEventListener('DOMContentLoaded', () => {
  const birthDate = new Date('2002-03-28');
  const age = Math.floor((Date.now() - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

  const ageElement = document.getElementById('dynamic-age');
  if (ageElement) ageElement.textContent = age;
});