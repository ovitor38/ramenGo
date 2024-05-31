import { CreateProteinDto } from "src/modules/proteins/dto/create-protein.dto";
import { UpdateProteinDto } from "src/modules/proteins/dto/update-protein.dto";
import { ICrudRepository } from "./crud.interface";
import { ProteinEntity } from "src/modules/proteins/entities/protein.entity";


export interface IProteinRepository extends ICrudRepository<ProteinEntity, CreateProteinDto, UpdateProteinDto> {}
