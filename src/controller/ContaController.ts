import { Conta } from "../Model/Conta";
import { ContaRepository } from "../repository/Conta.Repository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\n A Conta número: " + conta.numero + " Foi criada com sucesso!", colors.reset);
    }


    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        };
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }
}