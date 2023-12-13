import { Atributos } from "./atributos.model";
import { UsuarioDTO } from "./usuarioDTO.model";

export class PersonagemDTO {
  private id!: number;
	
	private nome!: string;
	
	private classe!: string;
	
	private usuario!: UsuarioDTO;
	
	private vida!: number;
	
	private stamina!: number;
	
	private mana!: number;
	
	private sanidade!: number;
	
	private atributos!: Atributos;
	
	private nivel!: number;
}