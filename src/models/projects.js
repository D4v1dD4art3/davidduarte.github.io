const { Schema, model } = require('mongoose');

const ProjectsSchema = new Schema(
  {
    projectName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    imageUrl: { type: String, required: true },
    projectUrl: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Projects', ProjectsSchema);
