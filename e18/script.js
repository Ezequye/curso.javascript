class produto {

    constructor() {
        this.id=1;
        this.arrayProdutos = [];
        
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        }

        console.log(this.arrayProdutos);

    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados(){
        let produto = {}

        produto.id = this.id;
        produto.nomeproduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    validaCampos(produto){
        let msg = '';

        if(produto.nomeproduto == ''){
            msg += '- Informe o Nome do Produto \n';
        }

        if (produto.preco =='') {
            msg += '- Informe o Preço do Produto \n'
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true
    }

    cancelar(){


        
    }
}
var produtos = new produto();