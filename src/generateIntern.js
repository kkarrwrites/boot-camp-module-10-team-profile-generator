function generateIntern(intern) {
  return `<article class="card">
    <div class="card-header">
      <h2>${intern.name}</h2>
      <h3>Intern</h3>
    </div>
    <div class="card-body">
      <p>ID: ${intern.id}</p>
      <p>Email: ${intern.email}</p>
      <p>School: ${intern.school}</p>
    </div>
  </article>`;
}

module.exports = generateIntern;
