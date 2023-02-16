import { Module } from "@nestjs/common";
import { CompteService } from "./compte.service";
import { CompteController } from "./compte.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [CompteController],
  providers: [CompteService, PrismaService],
})
export class CompteModule {}
