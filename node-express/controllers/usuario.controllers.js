let usuario = [];

exports.listar = (req, res) => {
  res.json(usuario);
};

exports.criar = (req, res) => {

  const usuario = req.body;

  usuario.push(usuario);

  res.status(201).json(usuario);
};

exports.buscarPorId = (req, res) => {

  const id = req.params.id;

  const usuario = usuario.find(p => p.id == id);

  if (!usuario) {
    return res.status(404).json({ erro: "usuario não encontrado" });
  }

  res.json(usuario);
};

exports.remover = (req, res) => {

  const id = req.params.id;

  usuario = usuario.filter(p => p.id != id);

  res.json({ mensagem: "usuario removido" });
};