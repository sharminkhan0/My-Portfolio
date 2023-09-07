window.onload = () => {
    
    const popUp = document.querySelector('.pop-up');
    const close = document.querySelector('.close');
    const menu = document.querySelector('.menu');
  
    // defining a dom shortcut function.
  function dcl(t = 'div') {
    if (!t) {
      t = 'div';
    }
    return document.createElement(t);
  }
  
    const projectsData = [
      {
        id: 'project1',
        title: 'Capstone',
        subtitle: 'CONFARANCE', 
        techStack: 'Front End Dev',
        year: 2023,
        src: './recsources/projects/Capstone-desktop.png',
        highlight: 'This project is based on an online website for a conference.',
        description: 'Capstone Project is designed to provide information and resources to students, faculty members, and university visitors, showcasing the academic programs and research opportunities available. Built with HTML, CSS, and JavaScript. The main objective of this project is to start practicing the professional way to work with CSS HTML and JavaScript in responsive design, using the basic structure, data query, flexbox and all following a template in Behance. Capstone Project',
        lang: ['html', 'css', 'javascript'],
        live: 'https://sharminkhan0.github.io/Capstone/',
        source: 'https://github.com/sharminkhan0/Capstone',
      },
      {
        id: 'project2',
        title: 'Multi Post Stories',
        subtitle: 'CANOPY',
        techStack: 'Back End Dev',
        year: 2015,
        src: './recsources/images/project2.png',
        highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        lang: ['html', 'css', 'javascript'],
        live: '#',
        source: '#',
      },
      {
        id: 'project3',
        title: 'Tonic',
        subtitle: 'CANOPY',
        techStack: 'Back End Dev',
        year: 2015,
        src: './recsources/images/project3.png',
        highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        lang: ['html', 'css', 'javascript'],
        live: '#',
        source: '#',
      },
      {
        id: 'project4',
        title: 'Multi Post Stories',
        subtitle: 'CANOPY',
        techStack: 'Back End Dev',
        year: 2015,
        src: './recsources/images/project4.png',
        highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        lang: ['html', 'css', 'javascript'],
        llive: '#',
        source: '#',
      },
    ];
  
    const projectCardString = projectsData.map((project) => `
      <div class="card">
        <div class="inner-card">
          <div class="card-img card-1">
            <img
              src="${project.src}"
              alt="Project Snapshoot"
            />
          </div>
          <div class="card-details">
            <h3>${project.title}</h3>
            <h4>${project.subtitle} <span>${project.techStack}</span> <span>${project.year}</span></h4>
            <p>${project.highlight}</p>
            <ul>
              ${project.lang.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            <button type="button" class="project-btn button">
              See Project
            </button>
          </div>
        </div>
      </div>
    `);
  
    const popupContainer = document.querySelector('.project-popup-container');
    const recentWork = document.querySelector('.recent-work');
    const parser = new DOMParser();
  
    projectCardString.forEach((projectString, index) => {
      const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;
  
      const mobilePopup = `
        <div class="project-popup-hidden ">
          <div class="project-background"></div>
            <div class="project-popup">
  
              <div class="project-header">
                <i class="fa-solid fa-xmark project-close"></i>
                <h2>${projectsData[index].title}</h2>
                <p>${projectsData[index].subtitle} <span>${projectsData[index].techStack}</span> <span>${projectsData[index].year}</span></p>
              </div>
    
              <div class="project-img" style="background-image: url(${projectsData[index].src})">
              </div>
    
              <div class="project-footer">
                <p class="project-desc">${projectsData[index].description}</p>
                <div>
                  <ul>
                    ${projectsData[index].lang.map((tech) => `<li>${tech}</li>`).join('')}
                  </ul>
                  <span></span>
                  <div class="project-links">
                    <a href="${projectsData[index].live}">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <a href="${projectsData[index].source}">See Source <i class="fa-brands fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      `;
  
      const mobilePopupElement = parser.parseFromString(mobilePopup, 'text/html').body.firstChild;
  
      const projectBtn = projectElement.querySelector('.project-btn');
      const closeBtn = mobilePopupElement.querySelector('.project-close');
  
      projectBtn.addEventListener('click', () => {
        mobilePopupElement.classList.toggle('project-popup-hidden');
      });
  
      closeBtn.addEventListener('click', () => {
        mobilePopupElement.classList.toggle('project-popup-hidden');
      });
  
      recentWork.append(projectElement);
      popupContainer.append(mobilePopupElement);
    });
  };