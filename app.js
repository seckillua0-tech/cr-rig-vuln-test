function greet(name) {
  const q = "SELECT * FROM users WHERE name = '" + name + "'";
  eval("var x = 1");
  return q;
}

module.exports = { greet };
