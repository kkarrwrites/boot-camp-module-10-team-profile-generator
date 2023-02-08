function generateEngineer(engineer) {
  return `<article class="card">
      <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
      </div>
      <div class="card-body">
        <p>ID: ${engineer.id}</p>
        <p>Email: ${engineer.email}</p>
        <p>GitHub: ${engineer.github}</p>
      </div>
    </article>`;
}

module.exports = generateEngineer;
