import { ProdutoDTO } from "./produto.dto";

export interface CartItem {
    imageUrl: string;
    quantidade: number;
    produto: ProdutoDTO
}