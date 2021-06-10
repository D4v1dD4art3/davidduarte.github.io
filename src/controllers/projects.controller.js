const Project = require('../models/projects.js');

class ProjectsCtrl {
  constructor() {}
  static async getProjects(req, res) {
    const projects = await Project.find();
    res.json(projects);
  }
  static async getProject(req, res) {
    const project = await Project.findById(req.params.id);
    res.send(project);
  }
  static async updateProjects(req, res) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'project updated' });
  }
  static async deleteProjects(req, res) {
    await Project.findByIdAndRemove(req.params.id);
    res.json({ status: 'Project was deleted' });
  }
  static async createProjects(req, res) {
    const newProject = new Project(req.body);
    await newProject.save();
    res.send({ message: 'Project Created' });
  }
}

module.exports = ProjectsCtrl;
