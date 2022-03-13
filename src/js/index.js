/*

Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem.

para isso vamos precisar trabalhar com dois elementos

1 - listagem 
2 - cartoes do pokemon

precisamos criar duas variaveis no JS para trabalhar com os elementos da tela.


 - Ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar

 - Remover a classe ativa que marca o pokemon selecionado (da listgem)

 - Adicionar a classe ativo no item da lista selecionado
*/

// Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuarios na listagem do pokemon
    pokemon.addEventListener('click', () => {
        //- remover a classe aberto, só do cartão que estiver aberto da listagem pegamos o id

        const cartaoPokemonAberto = document.querySelector('.aberto')

        cartaoPokemonAberto.classList.remove('aberto')
    
        //- Ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //- Remover a classe ativa que marca o pokemon selecionado (da listgem)

        const pokemonAtivoNaListagem = document.querySelector('.ativo')

        pokemonAtivoNaListagem.classList.remove('ativo')

        //Adicionar a classe ativo no item da lista selecionado

        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')
    } )
})















