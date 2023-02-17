import { Injectable } from '@nestjs/common';
import { Admin, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';


@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService) {}
    
    async create(dto: CreateAdminDto): Promise<Admin> {
    const newAdmin = await this.prisma.admin.create({
      data: {...dto}
    });
    return newAdmin;
  }

  findAll() {
    return this.prisma.admin.findMany();
  }

  async findOne(id: number): Promise<Admin> {
    return this.prisma.admin.findFirst({
      where: {id_admin: id}
    });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    const data = {
      ...UpdateAdminDto
    }
    return this.prisma.admin.update({
      where: {id_admin: id},
      data: updateAdminDto,
    });
  }

  remove(id: number) {
    return this.prisma.admin.delete({
      where: {id_admin: id}
    });
  }
}
