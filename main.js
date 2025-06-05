document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('projects-container');

  if (!container) {
    console.error("Element with id 'projects-container' not found.");
    return;
  }

  const allDetails = [];

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    projectElement.innerHTML = `
      <h2 class="project-title" style="cursor: pointer;">
        ${project.title}
        <span class="arrow"></span>
      </h2>
      <div class="project-details">
        <div class="project-info">
            <img src="${project.thumbnail}" alt="${project.title}" class="img">
            <p class="txt">${project.description}</p>
        </div>
        <a href="${project.liveLink}" target="_blank">Deployed Page</a><br>
        <a href="${project.repoLink}" target="_blank">GitHub Repo</a>
      </div>
    `;

    const title = projectElement.querySelector('.project-title');
    const details = projectElement.querySelector('.project-details');
    const arrow = projectElement.querySelector('.arrow');

    allDetails.push(details);

    title.addEventListener('click', () => {
      const isOpen = details.classList.contains('open');

    
      allDetails.forEach(d => {
        if (d.classList.contains('open')) {
          d.style.height = d.scrollHeight + 'px'; 
          requestAnimationFrame(() => {
            d.style.height = '0px';
            d.classList.remove('open');
            d.previousElementSibling.querySelector('.arrow').classList.remove('rotated');
          });
        }
      });

      
      if (!isOpen) {
        details.classList.add('open');
        arrow.classList.add('rotated');
        details.style.height = '0px'; 
        requestAnimationFrame(() => {
          details.style.height = details.scrollHeight + 'px';
        });
      }
    });

    container.appendChild(projectElement);
  });

 
  container.addEventListener('transitionend', event => {
    const el = event.target;
    if (el.classList.contains('project-details') && el.classList.contains('open')) {
      el.style.height = 'auto';
    }
  });
});