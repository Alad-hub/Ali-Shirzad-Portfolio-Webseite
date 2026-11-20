function openLinkedSkill() {
  const skills = document.querySelectorAll('.cv-skills > details');
  const target = Array.from(skills).find((skill) => '#' + skill.id === window.location.hash);
  if (!target) return;

  target.open = true;
  requestAnimationFrame(() => {
    target.scrollIntoView({ block: 'center' });
    target.querySelector('summary').focus({ preventScroll: true });
  });
}

window.addEventListener('hashchange', openLinkedSkill);
openLinkedSkill();
