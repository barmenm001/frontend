var projectSelect = document.querySelector('input[value=project]');
var stageSelect = document.querySelector('input[value=stage]');
var submit = document.querySelector('input[type=submit]');

var project = document.getElementById('project');
var stage = document.getElementById('stage');

function hideAll() {
    stage.classList.add("hide");
    submit.classList.add("hide");
    project.classList.add("hide");
}

hideAll();

var showStage = function showStage() {
    project.classList.add("hide");
    submit.classList.remove("hide");
    stage.classList.remove("hide");
}

var showProject = function showProject() {
    stage.classList.add("hide");
    submit.classList.remove("hide");
    project.classList.remove("hide");
}

stageSelect.onclick = showStage;
projectSelect.onclick = showProject;
