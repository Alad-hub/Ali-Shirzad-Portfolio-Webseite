function openLinkedProject() {
  const projects = document.querySelectorAll('.project_summary > details[id]');
  const target = Array.from(projects).find((project) => '#' + project.id === window.location.hash);
  if (!target) return;

  target.open = true;
  requestAnimationFrame(() => {
    target.scrollIntoView({ block: 'start' });
    target.querySelector('summary').focus({ preventScroll: true });
  });
}

window.addEventListener('hashchange', openLinkedProject);
openLinkedProject();
