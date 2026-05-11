const params = new URLSearchParams(window.location.search);
const moduleId = Number(params.get("id")) || 1;
const moduleData = modules.find((item) => item.id === moduleId) || modules[0];

const activityBox = document.getElementById("activityBox");

document.getElementById("moduleType").textContent = `Actividad: ${moduleData.activityType}`;
document.getElementById("moduleTitle").textContent = moduleData.title;
document.getElementById("moduleDescription").textContent = moduleData.description;
document.getElementById("moduleVideo").textContent = moduleData.videoText;
document.getElementById("moduleTopic").textContent = moduleData.topic;
document.getElementById("moduleActivityText").textContent = moduleData.activityText;

if (moduleData.activityType === "Cuestionario") {
  activityBox.innerHTML = `
    <p>Tipo de entrega: ${moduleData.deliverable}</p>
    <button class="button" type="button">Empezar cuestionario</button>
  `;
} else {
  activityBox.innerHTML = `
    <p>Tipo de entrega: ${moduleData.deliverable}</p>
    <div class="link-list">
      <a class="button" href="#">Abrir documento</a>
      <a class="button button--light" href="#">Subir actividad</a>
    </div>
  `;
}
