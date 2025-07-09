
let jobs = []

const fetchJobs = () => {
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    jobs = data;
    displayJobs()
})
};

function displayJobs() {
  const jobsContainer = document.getElementById('jobs-container');
  jobsContainer.innerHTML = '';

  jobs.forEach(job => {
    const badges = [
      job.new ? '<span class="new">NEW!</span>': '', 
      job.featured ? '<span class="featured">FEATURED</span>': ''
    ].join('');

    const languagesHtml = job.languages.map(language => 
      `<span class="languages">${language}</span>`
    ).join('');

    jobsContainer.innerHTML += `
      <div class="job-list-card">
      <div class="details">
        <div class="company-img">
          <img src="${job.logo}" alt="" class="company-logo">
          </div>
          <div class="title-details">
          <p class="company-name">${job.company} 
              ${badges}
          </p>
          <p class="title">${job.position}</p>
          <p class="meta-details">${job.postedAt}<span class="dot">⦁</span> ${job.contract} <span class="dot">⦁</span> ${job.location}</p>
        </div>
      </div>
      <div class="tags">
        <span class="role">${job.role}</span>
        <span class="level">${job.level}</span>
        ${languagesHtml}
      </div>
    </div>
    `

  })

};

document.addEventListener('DOMContentLoaded', fetchJobs)
