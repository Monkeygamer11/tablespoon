const completionSpec: Fig.Spec = {
  name: "tablespoon",
  description: "Tablespoon is a generation tool used to generate semantic git messages based upon comments, helping to enforce best practices",
  subcommands: [{
    name: "help",
    description: "Help command for tablespoon.",
    subcommands: [{
      name: "commit",
      description: "Help for the commit command.",
    }, {
      name: "generate",
      description: "Help for the generate command.",
    }, {
      name: "config",
      description: "Help for the config command.",
    }],
  }, {
    name: "generate",
    description: "Generates a commit message.",
    options: [{
      name: ["--co-author", "-c"],
      description: "add co-author to commit",
    }, {
      name: ["--debug"],
      description: "enable debug messages",
    }, {
      name: ["--disable-update-checks"],
      description: "disables update checks",
    }, {
      name: ["--full", "-f"],
      description: "full length commit message",
    }, {
      name: ["--help", "-h"],
      description: "help for the commit command",
    }, {
      name: ["--no-comment", "-n"],
      description: "prompt user for short description",
    }, {
      name: ["--raw"],
      description: "print unstyled raw output (set it if output is written to a file)"
    }, {
      name: ["--select", "-s"],
      description: "choose file to showcase in short commit message",
    }, {
      name: ["--unstaged", "-u"],
      description: "generate message for all changed files"
    }],
  }, {
    name: "config",
    description: "Print out the config options that are applied.",
    options: [{
      name: ["--debug"],
      description: "enable debug messages",
    }, {
      name: ["--disable-update-checks"],
      description: "disables update checks",
    }, {
      name: ["--help", "-h"],
      description: "help for the commit command",
    }, {
      name: ["--raw"],
      description: "print unstyled raw output (set it if output is written to a file)"
    }],
  }, {
    name: "commit",
    description: "Generates a commit message & commits it.",
    options: [{
      name: ["--co-author", "-c"],
      description: "add co-author to commit",
    }, {
      name: ["--debug"],
      description: "enable debug messages",
    }, {
      name: ["--disable-update-checks"],
      description: "disables update checks",
    }, {
      name: ["--full", "-f"],
      description: "full length commit message",
    }, {
      name: ["--help", "-h"],
      description: "help for the commit command",
    }, {
      name: ["--no-comment", "-n"],
      description: "prompt user for short description",
    }, {
      name: ["--raw"],
      description: "print unstyled raw output (set it if output is written to a file)"
    }, {
      name: ["--select", "-s"],
      description: "choose file to showcase in short commit message",
    }, {
      name: ["--unstaged", "-u"],
      description: "generate message for all changed files"
    }],
  }],
  options: [{
    name: ["--debug"],
    description: "enable debug messages",
  }, {
    name: ["--disable-update-checks"],
    description: "disables update checks",
  }, {
    name: ["--help", "-h"],
    description: "help for the commit command",
  }, {
    name: ["--raw"],
    description: "print unstyled raw output (set it if output is written to a file)"
  }],
  // Only uncomment if tablespoon takes an argument
  // args: {}
};
export default completionSpec;