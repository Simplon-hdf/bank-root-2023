import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import { Account, Prisma } from '@prisma/client';

@Injectable()
export class CompteService {
  constructor(
    private readonly prisma: PrismaService){}

  async create(dto: CreateCompteDto): Promise<Account> {
    const newAccount =  await this.prisma.account.create({
      data:{ ...dto}
    }); 
    return newAccount;
  }
 
  findAll() {
    return this.prisma.account.findMany();
  }

  async findOne(id: number): Promise<Account> {
    return this.prisma.account.findFirst({
      where: {id_account: id}
    });
  }

  update(id: number, updateCompteDto: UpdateCompteDto) {
    const data = {
      ...UpdateCompteDto
    };
    return this.prisma.account.update({
      where: {id_account: id},
      data: updateCompteDto,
    });
  }

  remove(id: number) {
    return this.prisma.account.delete({
      where: {id_account: id}
    });
  }
}
