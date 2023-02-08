function generateManager(manager) {
  return `<article class="card">
      <div class="card-header">
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
      </div>
      <div class="card-body">
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>Office Number: ${manager.officeNumber}</p>
      </div>
    </article>`;
}

module.exports = generateManager;
