import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CompteService } from "./compte.service";
import { CreateCompteDto } from "./dto/create-compte.dto";
import { UpdateCompteDto } from "./dto/update-compte.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("compte")
@ApiTags("Compte")
export class CompteController {
  constructor(private readonly compteService: CompteService) {}

  @Post("create")
  @ApiOperation({ summary: "create compte" })
  create(@Body() createCompteDto: CreateCompteDto) {
    return this.compteService.create(createCompteDto);
  }

  @Get()
  @ApiOperation({ summary: "get all compte" })
  findAll() {
    return this.compteService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "get compte by id" })
  findOne(@Param("id") id: string) {
    return this.compteService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "update compte" })
  update(@Param("id") id: string, @Body() updateCompteDto: UpdateCompteDto) {
    return this.compteService.update(+id, updateCompteDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "delete compte" })
  remove(@Param("id") id: string) {
    return this.compteService.remove(+id);
  }
}
