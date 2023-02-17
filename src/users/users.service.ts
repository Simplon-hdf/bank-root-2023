import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Client, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService) {}
  
  async create(dto: CreateUserDto): Promise<Client> {
    const newUser = await this.prisma.client.create({
      data:{ ...dto}
    });
    return newUser;
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  async findOne(id: number): Promise<Client> {
    return this.prisma.client.findFirst({
      where: {id_client: id}
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const data = {
      ...UpdateUserDto
    }
    return this.prisma.client.update({
      where: {id_client: id},
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.client.delete({
      where: {id_client: id}
    });
  }
}

