module.exports ={
    home:(req, res)=>{
        res.render('home');
    },
    cadastros:(req, res)=>{
        res.render('cadastros');
    },
    caes:(req, res)=>{
        res.render('caes');
    },
    gatos:(req, res)=>{
        res.render('gatos');
    },
    carrinho:(req, res)=>{
        res.render('carrinho');
    },
    entrar:(req, res)=>{
        res.render('entrar');
    },
    passaros:(req, res)=>{
        res.render('passaros');
    },
    pedidos:(req, res)=>{
        res.render('pedidos');
    },
    
}