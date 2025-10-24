
import { PartialType } from "@nestjs/mapped-types";
import { CreateProductServiceDto } from "./Createproductservice.dto";

export class UpdateproductServiceDto extends PartialType(CreateProductServiceDto){}