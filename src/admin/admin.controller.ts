import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("admin")
@ApiTags("Admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("create-admin")
  @ApiOperation({ summary: "Create Admin" })
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  @ApiOperation({ summary: "Get All Admins" })
  findAll() {
    return this.adminService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get Admin by Id" })
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update Admin" })
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete Admin" })
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
