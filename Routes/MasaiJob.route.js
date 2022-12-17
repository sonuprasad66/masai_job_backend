const express = require("express");
const jobRouter = express.Router();

const { jobModels } = require("../Models/MasaiJob.m0del");

jobRouter.post("/postjob", async (req, res) => {
  const { company, city, location, role, level, position, language, contract } =
    req.body;
  let myDate = new Date();
  const new_Job = new jobModels({
    company: company,
    city: city,
    location: location,
    role: role,
    level: level,
    position: position,
    language: language,
    contract: contract,
    postedAt: myDate,
  });
  await new_Job.save();
  res.send({ msg: "data added succesfully!" });
});

jobRouter.get("/getjob", async (req, res) => {
  const job = await jobModels.find();
  res.send({ job });
});

module.exports = {
  jobRouter,
};
