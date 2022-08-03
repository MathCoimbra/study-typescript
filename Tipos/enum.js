"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Astronauta"] = 1] = "Astronauta";
    Profissao[Profissao["Bombeiro"] = 2] = "Bombeiro";
})(Profissao || (Profissao = {}));
const pessoa = {
    nome: 'math',
    idade: 20,
    profissao: Profissao.Desenvolvedor
};
