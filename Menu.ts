import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from  './src/Model/Conta';
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPupanca";
import { ContaController } from "./src/controller/ContaController";

export function main () {

    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupança'];

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 1500, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    
    while (true) {     

        console.log(colors.bg.black, colors.fg.yellow,
                    "**********************************************************");
        console.log("                                                          ");
        console.log("                  BANCO DO BRASIL COM Z                   ");
        console.log("                                                          ");
        console.log("**********************************************************");
        console.log("                                                          ");
        console.log("               1 - Criar Conta                            ");
        console.log("               2 - Listar todas as Contas                 ");
        console.log("               3 - Buscar conta por Numero                ");
        console.log("               4 - Atualizar Dados da Conta               ");
        console.log("               5 - Apagar Conta                           ");
        console.log("               6 - Sacar                                  ");
        console.log("               7 - Depositar                              ");
        console.log("               8 - Transferir valores entre Contas        ");
        console.log("               9 - Sair                                   ");
        console.log("                                                          ");
        console.log("**********************************************************");
        console.log("                                                          ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);
                console.log ("Digite o Número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o nome do titular da conta: ");
                titular = readlinesync.question("");
                 
                console.log("\nDigite o tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

                console.log("\nDigite o saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch(tipo) {
                    case 1:
                        console.log("Digite o limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do seu aniversário da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break; 
                }
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                keyPress()   
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma conta\n\n", colors.reset);
                keyPress()
                 break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);
                keyPress()
                 break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);
                keyPress()
                 break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);
                keyPress()
                 break;
            default:
                console.log(colors.fg.whitestrong,
                    "\n\nOpção Inválida!\n\n", colors.reset);

                break;
        }
    }
}
export function sobre(): void {
    console.log("\n*******************************************************");
    console.log("Projeto Desenvolvido por: Nathália");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*********************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main()