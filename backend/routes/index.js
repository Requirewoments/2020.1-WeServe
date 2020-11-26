var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  global.db.findAll((e, docs) => {
      if(e) { return console.log(e); }
      res.render('index', { title: 'Lista de servicos', docs: docs });
  })
})

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Novo Cadastro De Servico', doc: {"titulo":"","nome":"","servico":"","descricao":""}, action: '/new' });
});

router.post('/new', function(req, res) {
  var nome = req.body.nome;
  var servico = req.body.servico;
  global.db.insertOne({titulo, nome, servico, descricao}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/');
      })
})

router.post('/edit/:id', function(req, res) {
  var id = req.params.id;
  var nome = req.body.nome;
  var servico = req.body.idade;
  global.db.update(id, {titulo, nome, servico, descricao}, (e, result) => {
        if(e) { return console.log(e); }
        res.redirect('/');
    });
});

router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  global.db.deleteOne(id, (e, r) => {
        if(e) { return console.log(e); }
        res.redirect('/');
      });
});

router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.findOne(id, (e, docs) => {
      if(e) { return console.log(e); }
      res.render('new', { title: 'Edição de servico', doc: docs[0], action: '/edit/' + docs[0]._id });
    });
})

module.exports = router;