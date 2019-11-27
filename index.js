const core = require("@actions/core");
const github = require("@actions/github");
const dayjs = require("dayjs");

try {
  const time = dayjs().format("YYYYMMDD-HHmmss");
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
