const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const greetee = core.getInput('greetee');
    core.info(`Hello ${greetee}!`);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
