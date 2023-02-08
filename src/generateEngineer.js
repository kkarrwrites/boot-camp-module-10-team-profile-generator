function generateEngineer(engineer) {
  return `<article class="card">
      <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
      </div>
      <div class="card-body">
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>GitHub: ${engineer.github}</p>
        <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</p>
      </div>
    </article>`;
}

module.exports = generateEngineer;
